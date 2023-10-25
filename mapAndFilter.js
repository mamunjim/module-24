let numbers=[32,63,21,73,12,62,98,35];
for (i=0;i<numbers.length;i++){ //make square without map
    var element=numbers[i];
    var result=element*element;
    console.log(result);
}

const square=numbers.map(function(element){ //make square with map function
    console.log(element*element);
})

const double=numbers.map(element=>element*element); //make square with map arrow function
console.log(double);

//filter

const evenNumber=numbers.filter(function(element){ //find with even numbers with arrow function
    return element%2==0;
})
console.log(evenNumber);

console.log(numbers.filter(x=> x%2!=0)); //find odd numbers with arrow function

