var l;
function timer(){
    var d = new Date();
    var time_hour = d.getHours();
    var time_min = d.getMinutes();
    var time_sec = d.getSeconds();
    l = time_hour;
    document.querySelector("#hour").innerHTML = time_hour + ":";
    document.querySelector("#min").innerHTML = time_min + ":";
    document.querySelector("#sec").innerHTML = time_sec ;
    var t = setTimeout(function(){ timer() }, 500);
    }
function checking(){
    if ((l>=0)&&(l<=5)){
        document.querySelector("#myVideo").setAttribute("src","videos/5.mp4");
    }
    else if((l>=6)&&(l<=9)){
        document.querySelector("#myVideo").setAttribute("src","videos/1.mp4");
    }
    else if((l>=9)&&(l<=12)){
        document.querySelector("#myVideo").setAttribute("src","videos/2.mp4");
    }
    else if((l>=13)&&(l<=17)){
        document.querySelector("#myVideo").setAttribute("src","videos/3.mp4");
    }
    else if((l>=18)&&(l<=20)){
        document.querySelector("#myVideo").setAttribute("src","videos/4.mp4");
    }
  else if((l>=21)&&(l<=23)){
    document.querySelector("#myVideo").setAttribute("src","videos/5.mp4");
}
} 



