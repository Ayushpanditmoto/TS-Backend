let listOfFruits: string[] = ['Apple', 'Banana', 'Orange'];
let listOfNumbers: number[] = [1, 2, 3];
let listOfBooleans: boolean[] = [true, false, true];
let listOfAny: any[] = [1, 'Apple', true];

// Tuples
let address: [string, number] = ['Superstreet', 99];

// Enums
enum Color {
    Gray, // 0
    Green = 100, // 100
    Blue = 2 // 2
}
// console.log(Color); // { '0': 'Gray', '1': 'Green', '2': 'Blue', Gray: 0, Green: 1, Blue: 2 }

let myColor: Color = Color.Green;
// console.log(myColor); // 100

let priceFruits: [string, number][] = [
    ['Apple', 1],
    ['Banana', 2],
    ['Orange', 3]
];
console.log(priceFruits);

let listOfFruits2: [number, string[]][] = [
    [1, ['Apple', 'Banana', 'Orange']],
    [2, ['Apple', 'Banana', 'Orange']],
    [3, ['Apple', 'Banana', 'Orange']]
];

//Union types
let fruits: string | number | boolean | string[] ;
fruits = 'Apple';
fruits = 1;
fruits = true;
fruits = ['Apple', 'Banana', 'Orange'];

//any type
let car: any = 'BMW';
car = { brand: 'BMW', series: 3 };

// Type assertions

type MyType = string | number;
let myType: MyType = 'Hello';
let myType2: MyType = 1;

//signature
type userData= string |number;
let myUserData: userData = 'Hello';
type myData={
    data:userData
}
let user2:myData
user2={
    data:1
}


type customType = number[];
let myCustomType: customType = [1, 2, 3];

//automatic type inference
let myHobbies=['Cooking','Sports',1,2,true]
myHobbies.push(true)

//functions
function returnMyName(x:string):string{
    return x;
}
console.log(returnMyName('Max'));

//function signature
let shopFood:(name:string,price:number)=>void;
shopFood=(name:string,price:number)=>{
    console.log(name,price)
}
shopFood('Apple',1)

//optional parameters
let shopFood2:(name:string,price?:number)=>void;
shopFood2=(name:string,price?:number)=>{
    console.log(name,price)
}
shopFood2('Apple')

//default parameters
let shopFood3:(name:string,price?:number)=>void;
shopFood3=(name:string,price:number=1)=>{
    console.log(name,price)
}
shopFood3('Apple')

//rest parameters
let shopFood4:(name:string,price?:number,...items:string[])=>void;
shopFood4=(name:string,price:number=1,...items:string[])=>{
    console.log(name,price,items)
}
shopFood4('Apple',1,'Banana','Orange')

//classes
class Person{
    name:string;
    private type:string;
    static age:number=27;
    constructor(name:string,type:string){
        this.name=name;
        this.type=type;
    }
    printAge(){
        console.log(this.name,this.type)
    }
}

const person=new Person('Max','Human')
console.log(person)
person.printAge()
console.log(Person.age)

//inheritance
class Max extends Person{
    constructor(name:string,type:string){
        super(name,type)
    }
}
const max=new Max('Max','Human')

//getters and setters
class Plant{
    private _species:string='Default';
    get species(){
        return this._species;
    }
    set species(value:string){
        if(value.length>3){
            this._species=value;
        }else{
            this._species='Default'
        }
    }
}
let plant=new Plant();
console.log(plant.species)
plant.species='Green Plant'
console.log(plant.species)

//static properties and methods
class Helpers{
    static PI:number=3.14;
    pie:number=3.14;
    static calcCircumference(diameter:number):number{
        return this.PI*diameter
    }
}

//accees pie
// In static method we can't access pie we can only access pie by creating an instance of the class
const helper=new Helpers()
console.log(helper.pie)

console.log(2*Helpers.PI)
console.log(Helpers.calcCircumference(8))

//abstract classes
abstract class Project{
    projectName:string='Default';
    budget:number=1000;
    abstract changeName(name:string):void;
    calcBudget(){
        return this.budget*2;
    }
}
class ITProject extends Project{
    changeName(name:string):void{
        this.projectName=name;
    }
}
let newProject=new ITProject();
console.log(newProject)
newProject.changeName('Super IT Project')
console.log(newProject)

//interfaces
interface NamedPerson{
    firstName:string;
    age?:number;
}
const person2:NamedPerson={
    firstName:'Max',
    age:27
}
console.log(person2)

//Generics
function echo<T>(data:T){
    return data;
}
console.log(echo('Max'))
console.log(echo(27))
console.log(echo({name:'Max',age:27}))

//built-in generics
const testResults: Array<number>=[1.94,2.33]
testResults.push(-2.99)
console.log(testResults)

//generic types
function myfunction<T>(x:T){
    return x;
}
function getData<T>(x:T[]):T[]{
    return new Array<T>();
}
function getMultipleData<T,U>(x:T,y:U){
    return [x,y];
}
let data=getData<string>(['Apple','Banana'])
let data2=getData<number>([1,2,3])
let data3=getMultipleData<string,number>('Apple',1)
console.log(data)
console.log(data2)  
console.log(data3)

 



