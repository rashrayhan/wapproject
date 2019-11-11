//2.2 Javascript object Car relatinship using Constructor Function
console.log('\nJavascript object Car relatinship using Constructor Function')
function Car() {
    this.make = 'default'
    this.model = 'default'
    this.color = 'default'

    this.drive = function(speed){
        console.log(`The ${this.color} ${this.make} ${this.model} is driving at ${speed} mph`)
    }
    this.stop = function(){
        console.log(`The ${this.color} ${this.make} ${this.model} is stopping`)
    }
}

const redHondaAccord = new Car()
redHondaAccord.make = 'Honda'
redHondaAccord.model = 'Accord'
redHondaAccord.color = 'red'
redHondaAccord.drive(300)

