//first we have to create an object
const xhr=new XMLHttpRequest();//for preventing refresh. it also send ajax request
xhr.onload=function(){//if the request is successful, what will happen?
let ul=document.getElementsById("catfacts");//this is always to target 
let jsonData=this.response;//this will store all data
//console.log(jsonData);
let catFacts=JSON.parse(jsonData);//json data is converted into object
console.log(catFacts);//it will give an array with indexing. which index we want?
//suppose we want text data from all index.
//DOM concept will come here
for(let fact of catFacts){
let li=document.createElement("li");
li.appendChild(document.createTextNode(fact.text));
ul.append(li);
}
}
xhr.onerror=function(){
    //if the data fetching is unsuccessful, what will happen in that case
    console.log("some error");
}
xhr.open("get","https://cat-fact.herokuapp.com/facts")//1st argument is which kind of request, get or post and second is from where. we can
//find some open apis.search open API in google. to fetch data. from other server created by others.
//free api is also available.
//one link is below-
//https://github.com/public-apis/public-apis
//search for api documentation
//endpoint means we have to add it after the whole url
//this will fetch the data
let btn=document.getElementsByTagName("button");
//console.log(btn); this is all for checking different steps
btn[0].addEventListener("click",(e)=>{
    xhr.send();//it will send the data
    //console.log("click");//to check whether the event is working or not
})
//openweathermap.org. see API call