const hero=[
    {id:1, name:"Omar Sunny"},
    {id:2, name:"Manna"},
    {id:3, name:"Ferdous"},
    {id:4, name:"riyaz"},
    {id:5, name:"shakib khan"}
];
const heroName=[];
for(i=0;i<hero.length;i++){ //map with for loop
    var element=hero[i];
    const result=element.name;
    heroName.push(result);
    
}
console.log(heroName);

const Names=hero.map(function(element){ //map with function
    console.log(element.name);
})

console.log(hero.map(x=>x.name)); //map with arrow function
console.log(hero.filter(x=>x.id>3)); //filter with arrow function