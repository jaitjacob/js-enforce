//Function can be invoked before initialization due to hoisiting.
a();
b();

function a(){
  console.log("This is function a");
}

function b(){
  console.log("This is function b");
}

//Following code, defines a simple function that returns square of a number.
function square(number){
  return number*number;
}

console.log(square(16));

//Object passed to the function. Changes made by the function will be visible outside the function.
const person = {
  name: 'Bee',
  year: 1999,
  remark: "Bla bla"
}
function modifyObject(theObject){
  theObject.remark = "This is a proper remark.";
}

//Print object property before passing it to the function.
console.log(person.remark); //Will print "Bla bla"
modifyObject(person);
//Print object property after passing it to the function.
console.log(person.remark); //Will print "This is a proper remark."