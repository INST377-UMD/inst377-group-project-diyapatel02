const express = require('express')
var bodyParser = require('body-parser')
const supabaseClient = require('@supabase/supabase-js')
const app = express()
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(__dirname + '/public'));

const supabaseUrl = 'https://kcenvhjdtujjxtafmcvx.supabase.co/'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjZW52aGpkdHVqanh0YWZtY3Z4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI5MjIwNTgsImV4cCI6MjAxODQ5ODA1OH0.Kd41DVi2abxwuWXJrAXTkHAdAB90Uz1vdpuTbOJnJds'
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey);

app.get('/', (req, res) => {
    res.sendFile('public/about.html', { root: __dirname })
})

app.get('/passengers', async (req, res) => { //api
    console.log(`Getting Passengers`)

    const {data, error} = await supabase
        .from('Passenger') 
        .select();

    if(error) {
        console.log(error)
    } else if(data) {
        res.send(data)
    }
})

app.post('/passenger', async (req, res) => { //api

    console.log("Here")
    
    var firstName = req.body.name;
    var feedback = req.body.feedback;

     
    console.log(req.body.name)
    console.log(req.body.feedback)

    const {data, error} = await supabase
        .from('passenger')
        .insert([
            {
                'firstName': firstName, 
                'feedback': feedback, 
                // 'destinationDate': destinationDate,
                // 'destination': destination
            }
        ]);

        if (error) {
            console.log(error)
            res.status(500).send(error)
        } else {
            console.log(data)
            res.header('Content-type', 'application/json')
            res.send(data)
        }
    })
    
    app.listen(port, () => {
        console.log('APP IS ALIVEEEEEE')
    })
