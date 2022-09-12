var time=document.getElementById("time");




updateTime()

function updateTime(){
    year=new Date().getFullYear()+1
     now= new Date().getTime()
     target=new Date("Jan 1,"+year + " 00:00:00").getTime()
    distance=target-now

     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
     document.getElementById("days").textContent=days+" "
     document.getElementById("hours").textContent=hours+" "
     document.getElementById("min").textContent=minutes+ " "
     document.getElementById("seconds").textContent=seconds+ " "
     
     window.setInterval(updateTime,1000)
}