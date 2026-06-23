//function wait(){ 
//     setTimeout(() =>{
//         console.log("timeout Executed");
//   },0);

// var id= setInterval(()=>{
//   console.log("2 sec passed");
// },2000);


// setTimeout(()=>{
//     clearInterval(id);
//     console.log("code stopped");
// },5000);
// }
// console.log("hello");
// wait();
// console.log("world");


// console.log("random tasks");
// for(let i = 0; i<10; i++){
//     console.log(i);
// //}

// let count = 0;
// const Intervalid = setInterval(()=>{
//     count++;
//     console.log("interval :", count);
//     if(count == 3){
//         clearInterval(Intervalid);
//     }
// },1000);

// setTimeout(()=>{
//     console.log("timeout");
// },2500)

for(var i = 1; i<4; i++){
    setTimeout(()=>{
        console.log(i);
    },i*1000)
}