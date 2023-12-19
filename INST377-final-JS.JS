async function getPassengers() {
  console.log('Fetching Passengers')
  var host = window.location.origin;

  var response = await fetch(`${host}/passengers`, {
    method: 'GET',
    headers: {
      "Content-type": "application/json"
    }
  })
    .then((res) => res)
    .then(async res => {
      console.log(res)

      const errorElement = document.getElementById('errorBox')
      if (errorElement) {
        errorElement.remove();
      }

      console.log('Status:', res.status)
      if (res.status === 200 || res.status === 304) {
        return res.json()
      }
      throw Error(JSON.stringify(await res.json()));
    })
    .then((res) => {
      console.log(res)
      const tableElement = document.getElementById("passengerInfo");
      if (tableElement) {
        tableElement.remove();
      }

      var table = document.createElement('table');
      table.setAttribute('id', 'passengerInfo')

      var tableRow = document.createElement('tr');

      var tableHeading1 = document.createElement('th');
      tableHeading1.innerHTML = "First Name";
      tableRow.appendChild(tableHeading1);

      var tableHeading2 = document.createElement('th');
      tableHeading2.innerHTML = "Last Name";
      tableRow.appendChild(tableHeading2);

      var tableHeading3 = document.createElement('th');
      tableHeading3.innerHTML = "Destination Date";
      tableRow.appendChild(tableHeading3);

      var tableHeading4 = document.createElement('th');
      tableHeading4.innerHTML = "Destination";
      tableRow.appendChild(tableHeading4);

      table.appendChild(tableRow);
      document.body.appendChild(table);

      for (var i = 0; i < res.length; i++) {
        var passengerRow = document.createElement('tr');
        var firstNameCell = document.createElement('td');
        var lastNameCell = document.createElement('td');
        var destinationDateCell = document.createElement('td');
        var destinationCell = document.createElement('td');

        firstNameCell.innerHTML = res[i].firstName;
        lastNameCell.innerHTML = res[i].lastName;
        destinationDateCell.innerHTML = res[i].destinationDate;
        destinationCell.innerHTML = res[i].destination;

        passengerRow.appendChild(firstNameCell);
        passengerRow.appendChild(lastNameCell);
        passengerRow.appendChild(destinationDateCell);
        passengerRow.appendChild(destinationCell);

        table.appendChild(passengerRow);
      }
    })
    .catch((error) => {
      console.log('Error:', JSON.parse(error.message))
      var errorDiv = document.createElement('div')
      errorDiv.setAttribute('class', 'errorBox');
      errorDiv.setAttribute('id', 'errorBox')

      var h1 = document.createElement('h1');
      h1.innerHTML = `Error Occurred:`

      var p = document.createElement('p');
      p.innerHTML = `${JSON.parse(error.message).message}`

      errorDiv.appendChild(h1);
      errorDiv.appendChild(p);
      document.body.appendChild(errorDiv)
    })
}


async function addPassenger() {
  console.log('Adding Passenger')
  var host = window.location.origin;

  await fetch(`${host}/passenger`, {
    method: 'POST',
    body: JSON.stringify({
      "firstName": document.getElementById('firstName').value,
      "lastName": document.getElementById('lastName').value,
      "destinationDate": document.getElementById('destinationDate').value,
      "destination": document.getElementById('destination').value
    }),
    headers: {
      "Content-type": "application/json"
    }
  });
  await getPassengers();
}

window.onload = getPassengers;
