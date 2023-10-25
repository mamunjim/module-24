// without map to make array numbers double
let numbers=[3,6,2,0,1,4,8,7];
for(i=0;i<numbers.length;i++){
    var element=numbers[i];
    const result=element*element;
    console.log(result);
}

// use function to make array double
let number=[3,6,7,3,2,7,0,1];
const result= number.map(function(element){
    console.log(element*element);
})

// use arrow function to make numbers double
let arrayNumbers=[31,16,27,13,12,17,10,11];
const square=arrayNumbers.map(element=>element*element);
console.log(square);

// filter with function
let filterNumbers=[1,3,4,5,6,7,8,9];
const bigger=filterNumbers.filter(function(element){
    return element>5;
})
console.log(bigger);

// get even numbers with arrow function using filter
const biggerNumber=filterNumbers.filter(x=> x%2==0);
console.log(biggerNumber);