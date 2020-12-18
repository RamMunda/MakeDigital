var i=1;
console.log(i);
if(document.getElementById("side_icons")){
    document.querySelector("#side_icons").addEventListener('click',function(){
        i++;
        if(i%2===0){
            document.querySelector(".slider-menu").style.width = "calc(100% - 58px)";
            document.querySelector(".menu-nav").style.backgroundColor = "white";
            document.querySelector(".menu-nav .hamberger-icon svg").style.fill = "black";
            document.querySelector(".side-menu-icon").style.opacity = "1";
            document.querySelector(".side-menu-icon").style.transform= "translateX(100px)";
            document.querySelector("#work").style.opacity = "1";
            document.querySelector("#work").style.transform = "translateX(0px)";
            document.querySelector("#services").style.opacity = "1";
            document.querySelector("#services").style.transform = "translateX(0px)";
            document.querySelector("#about").style.opacity = "1";
            document.querySelector("#about").style.transform = "translateX(0px)";
            document.querySelector("#stories").style.opacity = "1";
            document.querySelector("#stories").style.transform = "translateX(0px)";
        }
        else{
            document.querySelector(".slider-menu").style.width = "0";
            document.querySelector(".menu-nav").style.backgroundColor = "black";
            document.querySelector(".menu-nav .hamberger-icon svg").style.fill = "white";
            document.querySelector(".side-menu-icon").style.opacity = "0";
            document.querySelector(".side-menu-icon").style.transform = "translateX(-100px)";
            document.querySelector("#work").style.opacity = "0";
            document.querySelector("#work").style.transform = "translateX(-100px)";
            document.querySelector("#services").style.opacity = "0";
            document.querySelector("#services").style.transform = "translateX(-100px)";
            document.querySelector("#about").style.opacity = "0";
            document.querySelector("#about").style.transform = "translateX(-100px)";
            document.querySelector("#stories").style.opacity = "0";
            document.querySelector("#stories").style.transform = "translateX(-100px)";
        }
    })
}
function myFunction() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
  
    var n = weekday[d.getDay()];
    document.getElementById("demo").innerHTML = n;
  }
  myFunction();



