//Callback 

// function product(){
//     console.log("product is selected")
// }

// function payment(callback){
//     setTimeout(()=>{
//         console.log("payment is done")
//         callback()
//     },3000)
// }

// function shipping(callback){
//     setTimeout(()=>{
//         console.log("product is shipped")
//         callback()
//     },5000)
// }

// function checking(){
//     console.log("product is checked")
// }
// // product();
// // payment();
// // shipping();

// product();

// payment(function(){
//     shipping(function(){
//         checking()
//     })
// })


//Promise
//resolved, reject, pending

function product(){
    console.log("product is selected")
}

function payment(){

    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log("payment is done")
            resolve()
        },3000)
    })
}

function shipping(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject("shipping is failed because customer is not there");
            console.log("product is shipped")
            
        },5000)
    })
}

function checking(){
    console.log("product is checked")
}

product();
payment().then(()=>{
    shipping().catch((err)=>{
        console.log(err)
    })
});




