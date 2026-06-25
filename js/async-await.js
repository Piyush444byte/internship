// ASYNC AWAIT


// function getdata(){
//  return new Promise((resolve,reject)=>{
//     resolve("promise resolved");
//  });
// }


// getdata().then((msg)=>{
//     console.log(msg);
// });

// async function handleprom() {
//    const val =  await getdata();
//    console.log(val);
// }
 
// handleprom();




// function getdata(){
//  return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
      
//     resolve("promise resolved");
   
//     },3000);
//  });
// }

// async function handle() {
//     console.log("hello");
//     const val=await getdata();
//     console.log(val);
//     console.log("world");

//     const val2 = await getdata();
//     console.log(val2);
//     console.log("world2");
// };


// handle();




function getdata(){
 return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      
    resolve("promise resolved");
   
    },3000);
 });
}

async function handle() {
    console.log("hello");
    const val=await getdata();
    console.log(val);
    console.log("world");

    const val2 = await getdata();
    console.log(val2);
    console.log("world2");
};


handle();




