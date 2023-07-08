//const p=new Promise((resolve,reject)=>{//resolve or rejected
//setTimeout(()=>{
//let randomNumber=Math.floor(Math.random()*10);
//console.log(randomNumber);
//if(randomNumber%2===0){
//    resolve("this is an even number")//the promise will be resolved at this point.
//}
//else{
//    reject("this is not an even number");
//}
//},5000)//after 5000 ms,this function will be called. this is not the port number 
//})
//setTimeout(()=>{
//   p.then((message)=>{
//console.log(message);
//    },4000)
//})
//p.then((message)=>{// .then is a method.asynchronous function. not a promise
//    setTimeout(()=>{
//        console.log("our message is :"+message);
    //this then will work independently with the other then
//    },2000);
//    return message;// return is a must thing
//})
//p.then((message)=>{
//    console.log(message);
//    return new Promise((resolve,reject)=>{
//        resolve("this is our second promise which is resolved");//work only when the number is even
//    })
//})
//p.then((message)=>{
//    console.log(message);
//    return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//        resolve("this is our second promise which is resolved after some time");//work only when the number is even
//        },3000)
//    })
//})
//.then((message)=>{
//    console.log(message);//this then will be shown only in case of even numbers.all then work independeltly
    //with each other
//    })
//.then((data)=>{
//console.log(data+"new message");//this then will be shown only in case of even numbers.all then work independeltly
//with each other
//})//for resolve
//.catch((message)=>{//this is for reject
//console.log(message);
//})
//first then catch the value of resolve. nest then catches the value of the previous then  and it
//works chain wise.
//you can not catch the value of reject by then, you have to use catch in that case.
//promise always contains two parts. resolve and reject. 
const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("this is message 1");
        },4000);
})
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("this is message 2");
        },3000);
})
const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
    resolve("this is message 3");
    },6000);//fired after 6 second or 6000 milisecond
})
//const p=Promise.all([p1,p2,p3]);//it will work only when all three promises will be resolved. then
//only it will return something
//p.then((messages)=>{
//    console.log(messages);//if any one is reject, it will not work at all.we have to use catch in
    //that case.
//})
const p=Promise.race([p1,p2,p3]);//this will return the first one
p.then((messages)=>{
    console.log(messages);
})