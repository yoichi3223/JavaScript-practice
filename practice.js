// class Yoichi{
//   constructor(name,age){
//     this.name = name
//     this.age = age
//   }
//   info(){
//     console.log("こんにちは")
//     console.log(chalk.yellow(`名前は${this.name}といいます`));
//     return this.age * 8
//   }
//   hi(){
//     console.log("あああ")
//   }

// }
// const yoichi = new Yoichi("洋一",8);
// const yoichiage = yoichi.info();
// console.log(yoichiage);

const foods = [
{name:"カレー",price:700}, //0
{name:"ナポリタン",price:500}, //1
{name:"ラザニア",price:900}, //2 
{name:"すきやき",price:800} //3
];

const finalFood =  foods.filter((food)=>{
return food.price >= 700 || food.name === "ナポリタン";
});
console.log(finalFood);

// console.log(foods[1].name);
//for文

for(let i = 0;i < foods.length;i++){
  const food = foods[i];
  // console.log(food.name);
  // console.log(food.price);
  if(food.price >600 || food.name === "ナポリタン"){
    console.log(food.name);
    console.log(food.price);
  }
}

const humans = ["太郎","花子"];

humans.forEach((human)=>{
console.log(`${human}です`);
});

humans.push("二郎");
console.log(humans);

const numbers = [1,2,3,4,5,6,7,8,9,10];
const finalNumber = numbers.map((number)=>{
  return number * 3 * 3 * 3.14;
});
console.log(finalNumber);
