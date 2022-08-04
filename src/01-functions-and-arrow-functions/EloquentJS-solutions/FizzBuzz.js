let counter = 1;
while(counter<=100){
  if(counter%3===0 && counter%5===0) console.log("FizzBuzz");
  if(counter%3===0) console.log("Fizz");
  if(counter%5===0) console.log("Buzz");
  console.log(counter);
  counter++;
}