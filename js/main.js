//document.write("Hello World2");
console.log("Hello world!");

var personName = "Morteza";
var personJob = "Designer";
var personAge = 29;
var personB = false;

console.log(personName);
console.log(personJob);
console.log(personAge);
console.log(personB);

console.log("Name : " + personName + " " + "Age: " + personAge );

var age1 = 29;
var age2 = 10;
var sum;

 sum = (age1 + age2) * 10;
 sum *= 2;
 console.log(sum);

 var name = "morteza";
 var age = 29;

 if(age > 29 ){
     console.log(name + " is old");
 }else if(age == 30){
    console.log(name + " has 30 years old");
 }else{
     console.log(name + " is young");
 }

 function sum1(num1,num2){
     var res;
     res = num1 + num2;
     return res;
 }

 var output = sum1(2,3);
     console.log(output);

// function send(){
//     var income,outgo;
//     income = document.getElementById("income").value;
//     outgo = document.getElementById("outgo").value;
//     if(Number(income) > Number(outgo)){
//         console.log("income > outgo");
//     }else if(Number(income) < Number(outgo)){
//         console.log("income < outgo");
//     }else{
//         console.log("income = outgo");
//     }
// }

var array = ["morteza","seyedi",29,true];
//array[3]= 20;
//array.push("web"); به آخر آرایه اضافه می کند
//array.unshift("design");به اول آرایه اضافه می کند
//array.pop();ار آخر آرایه حذف می کند
//array.shift();از اول حذف می کند
console.log(array);
var show = array.indexOf("seyedi");
console.log(show);

var obj = {
    name: "morteza",
    family: "seyedi",
    age: 29,
    email: "seyedi@yahoo.com"
}
console.log(obj);
obj.name="Ali";
console.log(obj["name"]);
var Obj = {
    name: "morteza",
    family: "seyedi",
    age: 30,
    email: "seyedi@yahoo.com",
    skills:["web","design","php"],
    age : function(years){
        return 2018 -years; 
    }
}
console.log(Obj);
console.log(Obj.skills);
console.log(Obj.age(1988));

var i;
var skill = ["Html","Css","php","Js"];
for(i = 0; i < 4;i++){
    console.log(skill[i]);
   // if(i===2){
    //    break;
   // }
}
var i = 0;
var skillz = ["Html","Css","php","Js"];
while(i < skillz.length){
    console.log(skillz[i]);
    i++;
}
function res(){
    var i,j,ent;
    ent = document.getElementById("enter").value;
    for(i = 0; i < ent; i++){
        document.write("<br>");
        for(j = 0; j < i; j++){
            document.write("*");
        }
    }
}
// var test1,test2,test3,test4;
// test1 = document.getElementById("app");
// test2 = document.getElementsByClassName("box");
// test3 = document.getElementsByTagName("div");
// console.log(test1);
// console.log(test2);
// console.log(test3[0]);
// test4 = document.getElementById("app").innerHTML = "123";
// console.log(test4);

function change(){
    document.getElementsByTagName("p")[1].innerHTML = "new paragraph";
}
function changes(){
    var main;
    main = document.getElementById("main");
    main.getElementsByTagName("p")[0].innerHTML = "Changed This Content";
    main.getElementsByTagName("a")[0].href= "https://reactjs.org";
    main.getElementsByTagName("a")[1].setAttribute("href","https://artinmehr.com");
    main.getElementsByTagName("p")[1].style.fontSize = "24px";
    main.getElementsByTagName("p")[1].style.color = "red";
}
var pTag,text,divTag,newp;
pTag = document.createElement("p");
text = document.createTextNode("This is creat!");
pTag.appendChild(text);

divTag = document.getElementById("show");

divTag.appendChild(pTag);

//divTag.removeChild(pTag);
newp = document.createTextNode("tis is new Content");

divTag.replaceChild(newp,pTag);

var p1,p2;
p1 = document.getElementById("p1");
p1.addEventListener("click",changeColor);
function changeColor(){
    p1.style.color = "red";
}
p2 = document.getElementById("p2");
p2.addEventListener("click",displayDtae);
function displayDtae(){
    p2.innerHTML = Date();
}
// var pList,i;
// pList = document.querySelectorAll("p");// تمام تگ های p رو سلکت
// for(i = 0; i < pList.length; i++){
//     pList[i].style.color = "red";
// }

function submit(){
    var data;
    data = document.getElementById("input").value;
    if(data == ""){
        alert("Please enter task!");
    }else{

       document.getElementById("input").value = "";
       var pTag = document.createElement("p");

       var taskTag = document.createElement("span");

       var task = document.createTextNode(data);

       taskTag.appendChild(task);

       pTag.appendChild(taskTag);

       var result = document.getElementById("result");

       result.appendChild(pTag);

       var remoTag = document.createElement("span");

       var remoText = document.createTextNode(" x");

       remoTag.appendChild(remoText);
       
       pTag.appendChild(remoTag);

        taskTag.addEventListener("click",change);

        function change(){
            taskTag.style.textDecoration = "line-through";
            taskTag.style.color = "blue";
        }

        var remove = document.createAttribute("onclick");

        remove.value = "this.parentNode.remove()";

        remoTag.setAttributeNode(remove);
    }
}
// BOM = Browser Object Model
    //alert("this is alert");
    //window.alert("this is window alert");
    //confirm("this is confirm");
//     if(confirm("ok!")){
//         console.log("clicked!");
//     }else{
//         console.log("canceled");
//     }
//    var user = prompt("Enter Name");
//    console.log(user);

   var width = screen.width;
   console.log(width);
   var heigt = screen.height;
   console.log(heigt);
  var nav = navigator.userAgent;
   console.log(nav);
  var online = navigator.onLine;
   console.log(online);