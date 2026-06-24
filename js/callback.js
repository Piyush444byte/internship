
//  function letfood(cb){
//     console.log("maggie lene gye");
//     setTimeout(()=>{
//         console.log("magggi aagyi");
//         cb(eatfood);
//      },2000);
//  }

//  function cookfood(cb){
//     console.log("Maggie bnana start ");
//     setTimeout(()=>{
//         console.log("Maggie ban gyi");
//         cb();
//     },2000)
//  }

//  function eatfood(){
//     console.log("Maggie khana start");
//     setTimeout(()=>{
//         console.log("bartan Manjo");
//     },2000)
//  }

//  letfood(cookfood);


// function download(ul,cb){
//     console.log("download start at url",url);
//     setTimeout(()=>{
//         let profileimg =url.split("/")[4];
//         console.log("Downloaded img", profileimg);

//         cb(profileimg,upload);
//     },2000);
// }

//     function compress(profileimg,cb){
//         console.log("start copress",profileimg);
//         setTimeout(()=>{
//             let copresimg = profileimg.split(".")[0]+"webp";
//             console.log("End compression:",copresimg);

//             cb(copresimg);
//         },2000);

//     }

//     function upload(copresimg){
//       console.log("start uploaading :", copresimg);
//       setTimeout(()=>{
//         let newurl = "https://newweb.com/"+copresimg;
//         console.log("uploaded, new url",newurl);
//       },2000)
//     }

//     let url = "https://piyush.com/imaage/profile.jpg";
//     download(url,compress)


 function orderplaced(cb){
    setTimeout(()=> {
    console.log("order placed")
    cb();
    },2000);
 }

 
 function foodprepared(cb){
    setTimeout(()=> {
    console.log("food prepared")
    cb();
    },2000);
 }

 
 function fooddeliverd(cb){
    setTimeout(()=> {
    console.log("food delivered")
    cb();
    },2000);
 }

orderplaced(()=>{
    foodprepared(()=>{
        fooddeliverd(()=>{
            console.log("enjoy");
        })
    })
});
//  foodprepared();
//  fooddeliverd();