/*console.log("server is running");
var _=require('lodash');
//basic function
/*function add(a,b)
{
    return  a+b;
}
var result=add(3,3);
console.log(result);
*/
/*var add=function(a,b)
{
    return a+b;

}
var result=add(2,5);
console.log(result);

var add=(a,b)=>
{
    return a+b;
}
var result=add(3,4);
console.log(result);
var sub=(a,b)=>
{
    return a-b;
}
var total=sub(4,2);
console.log(total);
var mul=(a,b)=>
{
    return a*b;
}
var multi=mul(1,9);
console.log(multi);
var divid=(a,b)=>
{
    return a/b;
}
var ans=(4,2);
console.log(ans);
function add(a,b)
{
    return a+b;

}
total=add(45,5);
console.log(total);
var add=function(a,b)
{
    return a+b;
}
total=add(3,4);
console.log(total);
var a=2;
a=4;
console.log(a);
var add=(a,b)=>
{
    return a+b;
}
result=add(3,6);
console.log(result);
//4th way to write function
var add=(a,b)=>a+b;
var result=add(2,4);
console.log(result);
//5th way to write function
(function()
{
    console.log('Aniket is a backend developer');

})();

var add=function (a,b)
{
    var result=a+b;
    console.log(result);
}
add(45,1);
function add(a,b)
{
    console.log(a+b);
    return a+b;
}
add(2,2);
*/
//call back function
/*function callback()
{
    console.log("Hello ! Aniket is there");
}

*/
/*var add=function(a,b,callback)
{
    console.log(a+b);
    callback();
}



//var result=add(3,4,()=>{  console.log("completed")});
/*add(2,3,()=>{console.log("hey! Aniket is here")})
var data=['Aniket',4,4 ,'kk'];
// console.log(_.isString(true));
var filter=_.uniq(data)
console.log(filter);
*/
/*var fs=require('fs');
var os=require('os');

var user=os.userInfo();
console.log(user);
console.log(user.username);


fs.appendFile('greting.txt','Hi Aniket is here '+user.username,()=>{console.log("completed")});
*/
/*const notes=require('./notes.js');

var age=notes.age;
var result=notes.addnumber(age+18,24);

console.log(age);
console.log(result);

var tag=require('./target.js');

var resul=tag.add(2,6);
console.log(resul);

console.log(tag.name);
*/
/*const jsonString='{"name":"Aniket","age":22,"city":"new york"}';
const jsonObject=JSON.parse(jsonString);
console.log(jsonObject.name);
*/

//main server

const express = require('express')
const app = express()
const db=require('./db')

const bodyParser=require('body-parser');
app.use(bodyParser.json());//req.body








app.get('/', function (req, res) {
  res.send('Hello Sir,Welcome to My Hotel')
})




const personRoutes=require('./routes/personRoutes');



app.use('/person',personRoutes);
const menuRoutes=require('./routes/menuRoutes');
app.use('/menu',menuRoutes);

app.listen(3000,()=>{
    console.log("Server is runnng on port 3000")
})


