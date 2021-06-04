const express = require('express');
const app = express();

const app = express()

app.use(express.json());

const courses = [
    { id: 1, name: 'course1'},
    { id: 2, name: 'course2'},
    { id: 3, name: 'course3'}
];


app.get('/' , (req , res) => {
    res.send('Home Page')
});



app.get('/api/courses' , (req , res) =>{
    res.send(courses);

});



app.get('/api/courses/:id' , (req , res) =>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) {
    res.status(404).send('the course with given id was not found ')
    } 
    else
    res.send(course);
});

app.post('/api/courses' ,(req , res) =>{
    const course = {
        id:courses.length +1 ,
        name: req.body.name
       
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id' , (req,res) => {
    //look up the course 
    // if not exist return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) {
    res.status(404).send('the course with given id was not found ')
    }   

    //update the course 
    const schema = {
        name: joi.string().min(3).required()
    };

    const result = Joi.validate(req.body, schema);
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }
    course.name = req.body.name;
    res.send(course);
})

app.all('*' , (req , res) =>{
    res.status(404).send('<h1> Resource not found</h1>')
})



app.listen(3000, () =>{
   console.log('listening on port 3000....');
})