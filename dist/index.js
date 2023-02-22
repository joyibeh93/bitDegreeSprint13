"use strict";
//console.log("hello World")
// let count: number;
// let saying:string;
// let isOn: boolean;
// let names: string[] =[]
// names.push("Mary")
// names.push("Joy")
// names.push("Ugo")
// names.forEach(names=>names.length)
// count =3;
//INTERFACES
// interface Person{
//     firstName:string;
//     secondName:string;
//     age?:number  //accept any option
// }
// const person : Person ={
//     firstName:"Ada",
//     secondName:"Ibeh",
// };
// person.age =30
//ENUM
var suit;
(function (suit) {
    suit[suit["Hearts"] = 0] = "Hearts";
    suit[suit["Diamonds"] = 1] = "Diamonds";
    suit[suit["Clubs"] = 2] = "Clubs";
    suit[suit["Spades"] = 3] = "Spades";
})(suit || (suit = {}));
let trumps = suit.Clubs;
