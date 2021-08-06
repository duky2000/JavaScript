class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    setName(name) {
        this.name = name;
    }

    setWeight(weight) {
        this.weight = weight;
    }

    getName() {
        return this.name;
    }

    getWeight() {
        return this.weight;
    }

    ToString() {
        return 'name :' + this.name + ' weight: ' + this.weight;
    }
}

let objAnimal1 = new Animal();
objAnimal1.setName('Elephant')
objAnimal1.setWeight(45.6)
alert(objAnimal1.ToString());
let objAnimal2 = new Animal("cat", 1.5);
objAnimal2.setName("Mouse")
objAnimal2.setWeight(2)
alert(objAnimal2.ToString())

