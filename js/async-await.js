// ASYNC AWAIT


function getdata(){
 return new Promise((resolve,reject)=>{
    resolve("promise resolved");
 });
}


// getdata().then((msg)=>{
//     console.log(msg);
// });

async function handleprom() {
   const val =  await getdata();
   console.log(val);
}

handleprom();