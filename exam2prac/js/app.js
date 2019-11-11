// const person = {
//     name: "",
//     dob: new Date(),
//     age: 0,
//     getName: function(){
//         return this.name
//     },
//     setName: function(newName){
//         this.name = newName
//     }
// };

// //document.write(`Person name is ${person.name} and age is ${person.dob}`)

// const john = Object.create(person)
// john.setName('John')
// john.age = 25
// document.writeln(`Person name is ${john.name} and age is ${john.age}`)

// //inheritance
// const employee = Object.create(person)
// employee.salary = 0.0
// employee.hireDate = new Date()
// employee.doJob= function(jobTitle){
//     document.writeln(`${this.name} is a ${jobTitle} who earns ${this.salary}`)
// }

// const anna = Object.create(employee)
// anna.setName('Anna')
// anna.salary = 100000.0
// anna.doJob('software engineer')



// //.call bind and apply helper methods example
// let students = {
// 	fname: 'abdul',
// 	lname: 'rash',
// 	full: function(){
// 		console.log(this.fname + ' ' + this.lname)	
// }
// }

// let students2 = {
// 	fname: 'abdul2',
// 	lname: 'rash2',
// }

// students.full.call(students2) //this enables students2 to use students full method without implementing it

// //alternatively, we can externalize the method and call it in each object when needed. See below
// let students = {
// 	fname: 'abdul',
// 	lname: 'rash',
	
// }

// let students2 = {
// 	fname: 'abdul2',
// 	lname: 'rash2',
// }

// let full = function(origin){
//     console.log(this.fname + ' ' + this.lname + ' from ' + origin)	
// }

// //to call it, we do
// full.call(students, 'Nigeria')
// full.apply(students2, ['angola'])

// //bind creates a copy of the function
// let bindTest = full.bind(students, 'Ghana')
// bindTest()


let person = {
    name: "",
    dob: new Date(2019-11-09),
    age: 0,
    getName: function(){
        return this.name
    },
    setName: function(newName){
        return this.name = newName
    }
}

let john = Object.create(person)
john.name ='John'
john.dob = '1998-11-09'
john.age = 21

console.log(`${john.name} born on ${john.dob} is ${john.age} years`)

let employee = Object.create(person)
employee.salary = 0.0
employee.hireDate = new Date(2019-11-09)
employee.doJob = function(jobTitle){
    console.log(`${this.name} is a ${jobTitle} who earns ${this.salary}`)
}

let anna = Object.create(employee)
anna.name= "Anna"
anna.salary = 100000.0
anna.doJob('programmer')
console.log(anna)

function findOdds(numbers){
    return numbers.filter((o) => o%2 != 0)
}

console.log(findOdds([31,23,41,18,16]))
//function Account(){
    //this.accountNumber = ""
    //this.create = function(){} 
// }
const account = {
    accountNumber: "",
    accountType: "",
    balance: 0.0,
    status: "",
    create: function(accountNumber, accountType, balance, status){
        this.accountNumber = accountNumber
        this.accountType = accountType
        this.balance = balance
        this.status = status
        console.log (`New Account, ${this.accountNumber} created successfully`)
    },
    toString: function(){
        console.log( {
            accountNumber : this.accountNumber,
            accountType: this.accountType,
            balance : this.balance,
            status : this.status
        })
    }

}
//const rash = new Account()
//rash.prototype.check = function(){}
const rash = Object.create(account)
rash.accountNumber= "12333"
rash.accountType = "savings"
rash.balance =  50
rash.status = "active"
rash.create(rash.accountNumber, rash.accountType, rash.balance, rash.status)
rash.toString()
rash.payFees = function(fee){
    this.balance = this.balance-fee
}
rash.payFees(10)
console.log(rash)


