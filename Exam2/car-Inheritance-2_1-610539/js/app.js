//2.1 Javascript object Car relatinship 
console.log('Javascript object Car relatinship')
let Car = {
    make: 'default',
    model: 'default',
    color: 'default',

    drive: function(speed){
        console.log(`The ${this.color} ${this.make} ${this.model} is driving at ${speed} mph`)
    },
    stop: function(){
        console.log(`The ${this.color} ${this.make} ${this.model} is stopping`)
    }
}

//derived object
let redHondaAccord = Object.create(Car)
redHondaAccord.make = 'Honda'
redHondaAccord.model = 'Accord'
redHondaAccord.color = 'red'
redHondaAccord.drive(200)
//redHondaAccord.stop()