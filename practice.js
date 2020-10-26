class Human{

  constructor(name,age,sports){
this.name = name
this.age = age
this.sports = sports
  }

  introduce(){
console.log(`私の名前は${this.name}です`);
console.log(`${this.age}歳です`);
console.log(`好きなスポーツは${this.sports}です`);
const practice = this.info();
console.log(`管理をしっかりして${practice}まで頑張ります。`)
}

 info(){
 return this.age * 1.3;
 }
}

const name1 = new Human("洋一",29,"サッカー");
name1.introduce();

class HumanNew extends Human{
  constructor(name,age,sports,bloodtype){
    super(name,age,sports);
    this.bloodtype　= bloodtype
  }

  introduce(){
console.log(`私の名前は${this.name}です`);
console.log(`${this.age}歳です`);
console.log(`好きなスポーツは${this.sports}です`);
const practice = this.info();
console.log(`管理をしっかりして${practice}まで頑張ります。`)
console.log(`血液型は${this.bloodtype}です`)
}
}

const name2 = new HumanNew("洋一2",29,"ランニング","B");
name2.introduce();

const name = (callback)=>{
  callback("洋一",29);
};

name((name,age)=>{
  console.log(`私の名前は${name}です。`);
  console.log(`${age}歳です。`);
});



// // const names = [
// //   {name:"洋一",age:29,breed:"B"},
// //   {name:"なつみ",age:28,breed:"O"},
// // {name:"宏子",age:67,breed:"AB"}
// // ];

// // const namae = names.filter((name)=>{return name.age > 29;});
// // console.log(namae);

// // const block = names.map((name)=>{return name.name + name.breed;});
// // console.log(block);
// class Food{
//   constructor(name,price,number){
//     this.name = name
//     this.price = price
//     this.number = number
//   }
//   introduce(){
//     console.log("いらっしゃいませ")
//     console.log(`ご注文は${this.name}となります`);
//     console.log(`一つ当たりの値段は${this.price}円となります`);
//     const total_price = this.hi();
//     console.log(`合計金額は${total_price}円です`);
//     }
//     // console.log(`合計の値段は${this.price　* this.number}となります`);
  
//   hi(){
//     return this.number * this.price;
//   }
// }
// const food1 = new Food("カレーライス",700,3);
// const food2 = new Food("ナポリタン",800,6);
// const food3 = new Food("パンケーキ",600,8);
// const food4 = new Food("ラザニア",400,3);
// const food5 = new Food("餃子定食",500,5);
// food1.introduce();
// food2.introduce();
// food3.introduce();
// food4.introduce();
// food5.introduce();

// for(let i = 1; i <=100;i++){
//   console.log(i);
// }

//10/20

// const yoichi = ()=>{
//   console.log("名前は洋一です");
// }

// const introduce = (callback)=>{
//   console.log("こんにちは");
//   callback("今日もファイト");
// }

// introduce((ganbaru)=>{
//   console.log(ganbaru);
// });

//push method
// foods = ["カレーライス","パスタ","ラーメン"];
// console.log(foods);
// foods.push("ほうとう")
// console.log(foods);
//forEach method
// foods = ["カレーライス","パスタ","ラーメン"];
// foods.forEach((food)=>{console.log(food)});


//Callback
// const introduce =(callback)=>{
// callback("洋一",29);
// };

// introduce((name,age)=>{
// console.log(`こんにちは${name}です`);
// console.log(`こんにちは${age * 3}です`);
// });

//callback2

// const name = ()=>{
//   console.log("洋一");
//   return 8 * 9;
// }

// const introduce = (callback)=>{
//   console.log("はじめまして");
//   callback("洋一",29,"福島","成功");

// }

// introduce(name);

// introduce((name,age,prefectures,succes)=>{
//   console.log(`名前は${name}です、${age}歳で${prefectures}出身です,将来は${succes}します`);
// })
