
//1. Q1 the output is: undefined889101

//2. Local scope defines accessibility/visibility within a given context (e.g. function). In essence, only the function can access it. However,  global scope defines accessibility/visibility outside a function in such a way that all scipts and functions can access it.

//3. a. false; b. true; c. false; d. true; e. true

//4. It outputs 81 in the first instance and then output 25 in the second instance

//5. It alerts 10 because var unline let is function scoped rather than block scoped

//6. count object with 2 methods
var count = (function (){
    var counter = 0
    return {
        increment: function() { return ++counter },
        reset: function() {return counter=0 }
    }
})();

//7. var counter is a free variable. A free variable is a variable referred to by a function without having it defined as a parameter or a local variable.

//8. make adder
var make_adder = function (val){
    var counter = 0
    return function (){
        return counter += val
    }
    
}; 

//9. Using modules which can be IIFE

//10. Revealing module pattern
let employee = ( function() {
    let name, age, salary

    function publicSetAge(newAge){
        return age = newAge;
    }
    function publicSetSalary(newSalary){
        return salary = newSalary;
    }
    function publicSetName(newName){
        return name = newName;
    }
    function getAge(){
        return age;
    }
    function getSalary(){
        return salary;
    }
    function getName(){
        return name;
    }
    function publicIncreaseSalary(percentage){
        return salary = getSalary + (getSalary * percentage);
    }
    function publicIncrementAge(){
        return getAge();
    }

    return {
        setAge: publicSetAge,
        setSalary: publicSetSalary,
        setName: publicSetName,
        increaseSalary: publicIncreaseSalary,
        incrementAge: publicIncrementAge,
    }
})();

//11. Revealing module pattern extension with address fields and methods
let employee = ( function() {
    let name, age, salary, address

    function publicSetAge(newAge){
        return age = newAge;
    }
    function publicSetSalary(newSalary){
        return salary = newSalary;
    }
    function publicSetName(newName){
        return name = newName;
    }
    function getAge(){
        return age;
    }
    function getSalary(){
        return salary;
    }
    function getName(){
        return name;
    }
    function publicIncreaseSalary(percentage){
        return salary = getSalary + (getSalary * percentage);
    }
    function publicIncrementAge(){
        return getAge();
    }

    //addition
    function publicSetAddress(newAddress){
        return address = newAddress;
    }
    function publicgetAddress(){
        return address;
    }

    return {
        setAge: publicSetAge,
        setSalary: publicSetSalary,
        setName: publicSetName,
        increaseSalary: publicIncreaseSalary,
        incrementAge: publicIncrementAge,
        getAddress: publicgetAddress,
        setAddress: publicSetAddress
    }
})();