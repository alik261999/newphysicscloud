function timmer(){
let dt = new Date(new Date().setTime(0));
let ctime = dt.getTime();
let seconds = Math.floor((ctime % (1000 * 60))/ 1000);
let minutes = Math.floor((ctime % (1000 * 60 * 60))/( 1000 * 60));
//console.log(seconds, minutes);
let time = 0;
let mytime = setInterval(function(){
        time++;

        if(time==60){
            calculate();
            window.close();
            //location.href="end.html";
            window.open("end.html","_blank");
            clearInterval(mytime);
        }
        
        
        if(seconds < 59) {
            seconds++;
        } else {
            seconds = 0;
            minutes++;
        }
        let formatted_sec = seconds < 10 ? `0${seconds}`: `${seconds}`;
        let formatted_min = minutes < 10 ? `0${minutes}`: `${minutes}`;
        document.getElementById("timer").innerHTML = `${formatted_min} : ${formatted_sec}`;
    }, 1000);
}


function calculate(){
    var total=0;
    for(let i=0;i<arr.length;i++){
      total+=arr[i];
    }
    window.sessionStorage.setItem("points", total);
}