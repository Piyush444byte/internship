#!/usr/bin/env node

function check(){
    console.log(color);
}

var color ="bulu"
check();

let obj = {id:1,name:"piyush", color: "duudh jesa", subject :"DSA"};
let { id , name } = obj;
console.log(name);


let arr1= ["apple",2];
let arr2= [...arr1,3,4];
console.log(arr2);

let car = {make:"mercedes", model:"AMG G63"};

console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));