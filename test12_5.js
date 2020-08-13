class ElectroDevice {
 constructor(name, pow, mod) {
 this.name = name;
 this.pow = pow;
 this.mod = mod;
 }
 GetPower(){
  console.log(`${name} потребляет ${pow} Ватт энергии`);
}
 GetMode(){
  if (mod == 1) {
      console.log(`${name} включён в розетку`);
 } else {
      console.log(`${name} выключен из розетки`);
 }
}
}
const fen = new ElectroDevice('Фен', 1500, 1)
fen.GetPower()