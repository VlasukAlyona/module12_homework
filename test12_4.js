function ElectroDevice(name, pow, mod) {
  this.name = name,
  this.GetPower = function(){
    console.log(`${name} потребляет ${pow} Ватт энергии`);
  }
  this.GetMode = function() {
    if (mod == 1) {
      console.log(`${name} включён в розетку`);
    } else {
      console.log(`${name} выключен из розетки`);
    }
  }
}

const fen = new ElectroDevice('Фен', 1500, 1);
fen.city = 'Китай';
fen.Age = function(age){
  console.log(`Год производительности фена ${age}лет, город ${fen.city}`);
}

const computer = new ElectroDevice('Компьютер', 220, 0);
computer.brand = 'MSI';
computer.Color = function(color){
  console.log(`Компьютер марки ${computer.brand} ${color} цвета`);
}


fen.GetPower()
computer.GetPower()

fen.Age(5)
fen.GetMode()
computer.GetMode()
computer.Color('белого')