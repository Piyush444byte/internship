//  let bal = 5000;
// function Withdraw(amount){
//     return new Promise((resolve,reject)=>{
//         let sucess="sucess";
//         let failed = "failed";
//         if(amount<= bal){
//             resolve("sucess withdraw of "+amount);
//         }else{
//             reject("failed")
//         }
//     });
// }

// Withdraw(2000).then((sucess)=>{
//     console.log(sucess)
// }).catch((failed)=>{
//     console.log(failed)
// });






function orderPlaced() {
  return new Promise((resolve) => {
    console.log("order placed");
    resolve();
  });
}

function foodPrepared() {
  return new Promise((resolve) => {
    console.log("food prepared");
    resolve();
  });
}

function foodDelivered() {
  return new Promise((resolve) => {
    console.log("food delivered");
    resolve();
  });
}

orderPlaced()
  .then(() => foodPrepared())
  .then(() => foodDelivered())
  .then(() => console.log("enjoy"));


  