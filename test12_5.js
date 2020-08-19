class ElectroDevice {
	constructor(name, pow, mod) {
		this.name = name;
		this.pow = pow;
		this.mod = mod;
	}
	plugIn() {
	  this.mod = 1;
	}
	unplug() {
	  this.mod = 0;
	}
	getPower(){
		console.log(`${this.name} потребляет ${this.pow} Ватт энергии`);
	}
	getMode(){
		if (this.mod == 1) {
		  console.log(`${this.name} включён в розетку`);
		} else {
		  console.log(`${this.name} выключен из розетки`);
		}
	}
}

// Класс Fen, наследует от ElectroDevice
class Fen extends ElectroDevice {
	constructor(name, pow, mod, city, age) {
		super(name, pow, mod);
		this.city = city;
		this.age = age;
	}

  getAge() {
    console.log(`Год производительности фена ${this.age} лет, город ${this.city}`);
  }
}

// Класс Computer, наследует от ElectroDevice
class Computer extends ElectroDevice {
	constructor(name, pow, mod, brand, color) {
		super(name, pow, mod);
		this.brand = brand;
		this.color = color;
	}

  getColor() {
    console.log(`Компьютер марки ${this.brand} ${this.color} цвета`);
  }
}

// Создаем экземпляры классов Fen и Computer
const fen = new Fen('Фен', 1500, 1, 'Китай', 5);
const computer = new Computer('Компьютер', 220, 0, 'MSI', 'белого');

fen.getMode();
fen.unplug();
fen.getMode();

fen.getPower();
computer.getPower();

fen.getAge();
computer.getColor();

// Здесь ошибки аналогичные предыдущему заданию. Исправила в коде выше.