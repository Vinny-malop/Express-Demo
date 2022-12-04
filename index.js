const config=require('config');
const { application } = require('express');
const Joi=require('joi');
const express=require('express');
const app=express();
const func = require('joi/lib/types/func');
const courses = require('./routes/courses');
const home = require('./routes/home');

app.use(express.json());
app.use('/', home)
app.use('/api/courses', courses);

console.log('Application name is'+ config.get('name'));
console.log('Mail server name is'+ config.get('mail.host'));



const port=process.env.PORT || 3000;
app.listen(port, ()=>console.log(`listening on port ${port}...`));

