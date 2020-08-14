class ElectroDevice {
 constructor(name, pow, mod) {
 this.name = name;
 this.pow = pow;
 this.mod = mod;
 }
 GetPower(){
  console.log(`${this.name} потребляет ${this.pow} Ватт энергии`);
}
 GetMode(){
  if (this.mod == 1) {
      console.log(`${this.name} включён в розетку`);
 } else {
      console.log(`${this.name} выключен из розетки`);
 }
}
}
const fen = new ElectroDevice('Фен', 1500, 1)
fen.city = 'Китай';
fen.Age = function(age){
  console.log(`Год производительности фена ${age}лет, город ${fen.city}`);
}

fen.Age(5)
fen.GetPower()
fen.GetMode()

const computer = new ElectroDevice('Компьютер', 220, 0);
computer.brand = 'MSI';
computer.Color = function(color){
  console.log(`Компьютер марки ${computer.brand} ${color} цвета`);
}
computer.GetPower()
computer.GetMode()
computer.Color('белого')
