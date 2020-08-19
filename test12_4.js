function ElectroDevice(name, pow, mod) {
  this.name = name;
  this.pow = pow;
  this.mod = mod;
  this.getPower = function(){
    console.log(`${this.name} потребляет ${this.pow} Ватт энергии`);
  }
  this.getMode = function() {
    if (this.mod == 1) {
      console.log(`${this.name} включён в розетку`);
    } else {
      console.log(`${this.name} выключен из розетки`);
    }
  }
}

// метод, который включает прибор в розетку
ElectroDevice.prototype.plugIn = function () {
  this.mod = 1;
};

// метод, который выключает прибор из розетки
ElectroDevice.prototype.unplug = function () {
  this.mod = 0;
};

// Конструктор Fen
function Fen(name, pow, mod, city, age) {
  this.name = name;
  this.pow = pow;
  this.mod = mod;
  this.city = city;
  this.age = age;
  this.getAge = function() {
    console.log(`Год производительности фена ${this.age} лет, город ${this.city}`);
  }
}

// Создаем делегирующую связь между Fen и ElectroDevice
Fen.prototype = new ElectroDevice();

// Конструктор Computer
function Computer(name, pow, mod, brand, color) {
  this.name = name;
  this.pow = pow;
  this.mod = mod;
  this.brand = brand;
  this.color = color;
  this.getColor = function() {
    console.log(`Компьютер марки ${this.brand} ${this.color} цвета`);
  }
}

// Создаем делегирующую связь между Computer и ElectroDevice
Computer.prototype = new ElectroDevice();

// Создаем экземпляры функций Fen и Computer
const fen = new Fen('Фен', 1500, 1, 'Китай', 5);
const computer = new Computer('Компьютер', 220, 0, 'MSI', 'белого');

fen.getMode();
fen.unplug();
fen.getMode();

fen.getPower();
computer.getPower();

fen.getAge();
computer.getColor();

// Задание выполнено не совсем верно, есть несколько ошибок:
// 1. По заданию нужно было создать делегирующую связь между родительской функцией-конструкторами (ElectroDevice) и дочерними. У вас не определены дочерние конструкторы, приборы фен и компьютер являются экземплярами родительской функции, что не соответствует заданию.
// 2. По заданию у родительской функции (ElectroDevice) должны быть определены методы, которые включают и выключают прибор из розетки, т.е. меняют свойство mod.
// 2. В функциях-конструкторах нужно записывать переданные свойства в объект, иначе конструктор не имеет смысла. Т.е. для каждого свойства нужно прописывать this.name = name и так далее. Иначе объект не получает эти свойства и потом не будет возможности к ним обратиться
// 3. Небольшое замечание по стилю кода: с большой буквы пишутся только названия функций конструкторов, обычные методы и свойства пишутся стилем camelCase.