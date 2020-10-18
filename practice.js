class Yoichi{
  constructor(name,age){
    this.name = name
    this.age = age
  }
  info(){
    console.log("こんにちは")
    console.log(chalk.yellow(`名前は${this.name}といいます`));
    return this.age * 8
  }
  hi(){
    console.log("あああ")
  }

}
const yoichi = new Yoichi("洋一",8);
const yoichiage = yoichi.info();
console.log(yoichiage);
