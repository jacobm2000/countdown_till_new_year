var time=document.getElementById("time");
var year
var now
var target
var days
var hours
var minutes
var seconds


updateTime()
const interval=window.setInterval(updateTime,1000)

function updateTime(){

     year=new Date().getFullYear()+1
     now= new Date().getTime()
     target=new Date("Jan 1,"+year + " 00:00:00").getTime()
    distance=target-now

     days = Math.floor(distance / (1000 * 60 * 60 * 24));
     hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     seconds = Math.floor((distance % (1000 * 60)) / 1000);
     document.getElementById("days").textContent=days+" "
     document.getElementById("hours").textContent=hours+" "
     document.getElementById("min").textContent=minutes+ " "
     document.getElementById("seconds").textContent=seconds+ " "
     
     
}


