// const p = new Promise((res, rej)=>{
//     let data = "data received";
//     let sucess = false ;
//     if(sucess){
//         res(data);
//     }
//     else{
//         rej();
//     }
// });

// p.then((data)=>{
//     console.log(data);
// }).catch(()=>{
//     console.log("data not found");
// });


// function checkEven(num){}
// checkEven(4)

// const p = new Promise((res, rej)=>{
//     let data = "data received";
//     let sucess = false ;
//     if(sucess){
//         res(data);
//     }
//     else{
//         rej();
//     }
// });

// p.then((data)=>{
//     console.log(data);
// }).catch(()=>{
//     console.log("odd");
// });









// function checkEven(num){
//     return new Promise((resolve,reject)=>{
//         if(num%2==0){
//             resolve("number is even");
//         }else{
//             reject("number is odd")
//         }
//     });
// }

// checkEven(6).then((data)=>{
//     console.log(data);
// })
// .catch((data)=>{
//     console.log(data);
// });






function download(url) {
  return new Promise((resolve) => {
    console.log("Downloading...");
    resolve("profile.jpg");
  });
}

function compress(img) {
  return new Promise((resolve) => {
    console.log("Compressing...");
    resolve("profile.webp");
  });
}

function upload(img) {
  return new Promise((resolve) => {
    console.log("Uploading...");
    resolve("https://newweb.com/" + img);
  });
}

download("https://piyush.com/image/profile.jpg")
  .then(compress)
  .then(upload)
  .then((url) => console.log("Final URL:", url));