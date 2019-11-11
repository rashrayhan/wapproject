
//1. Q1 the output is: undefined889101

//2. Local scope defines accessibility/visibility within a given context (e.g. function). In essence, only the function can access it. However,  global scope defines accessibility/visibility outside a function in such a way that all scripts and functions can access it.

//3. a. false; b. true; c. false; d. true; e. true

//4. It outputs 81 in the first instance and then output 25 in the second instance

//5. It alerts 10 because var unlike let is function scoped rather than block scoped

//6. count object with 2 methods with IIFE
const count = (function (){
    let counter = 0
    return {
        increment: function() { return ++counter },
        reset: function() {return counter=0 }
    }
})();

//7. var counter is a free variable. A free variable is a variable referred to by a function without having it defined as a parameter or a local variable.

//8. make adder
let make_adder = function (val){
    let counter = 0
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

//11. Extension with address fields and methods
const employee2 = Object.create(employee)

employee2.address;
employee2.getAddress = function(){
    return this.address;
}
employee2.setAddress = function(address){
    return this.address = address;
}





















