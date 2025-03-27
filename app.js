const apikey="1ce9d6ee43e0269780a7d4d0dd2059be";
let input=document.querySelector("input");
let btn=document.querySelector("button");
let pic=document.querySelector("#pic")
let tem=document.querySelector("#temp");
let des=document.querySelector("#description");
let cday=document.querySelector("#cday");
let d=document.querySelector("#d");
let month=document.querySelector("#month");
let year=document.querySelector("#year");
let day=document.querySelector("#day");
let t1=document.querySelector("#t1");
let t2=document.querySelector("#t2");
let se=document.querySelector("#se");
let wind=document.querySelector("#wind");
let hum=document.querySelector("#humidity");
let feel=document.querySelector("#feel");
let city=document.querySelector("#city");

let max=document.querySelector("#max");
let min=document.querySelector("#min");
let press=document.querySelector("#wpress");
let gujranwala="gujranwala";
let ground=document.querySelector("#gr");
let latt;
let lonn;
let wm1=document.querySelector("#wm1");
let wm2=document.querySelector("#wm2");
let wm3=document.querySelector("#wm3");
let wm4=document.querySelector("#wm4");
let wm5=document.querySelector("#wm5");
let wd1=document.querySelector("#wd1");
let wd2=document.querySelector("#wd2");
let wd3=document.querySelector("#wd3");
let wd4=document.querySelector("#wd4");
let wd5=document.querySelector("#wd5");

let stmax1=document.querySelector("#stmax1");
let stmax2=document.querySelector("#stmax2");
let stmax3=document.querySelector("#stmax3");
let stmax4=document.querySelector("#stmax4");
let stmax5=document.querySelector("#stmax5");
let stmax6=document.querySelector("#stmax6");
let stmax7=document.querySelector("#stmax7");
let stmin1=document.querySelector("#stmin1");
let stmin2=document.querySelector("#stmin2");
let stmin3=document.querySelector("#stmin3");
let stmin4=document.querySelector("#stmin4");
let stmin5=document.querySelector("#stmin5");
let stmin6=document.querySelector("#stmin6");
let stmin7=document.querySelector("#stmin7");
let e1=document.querySelector(".s11");
let e2=document.querySelector(".s12");
let e3=document.querySelector(".s13");
let e4=document.querySelector(".s14");
let e5=document.querySelector(".s15");
function getpngweather1(jpg, element) {
    if (jpg == "clear sky") {
        element.innerHTML = `<img src="/sunny.png" class="png" alt="Weather-icon" >`;
    } else if (jpg == "few clouds") {
        element.innerHTML = `<img src="/few-clouds.png" class="png" alt="Weather-icon" >`;
    } else if (jpg == "scattered clouds") {
        element.innerHTML = `<img src="/scarted-clouds.png" class="png" alt="Weather-icon" >`;
    } else if (jpg == "broken clouds") {
        element.innerHTML = `<img src="/broken-clouds.png" class="png" alt="Weather-icon" >`;
    } else if (jpg == "shower rain") {
        element.innerHTML = `<img src="/shower-rain.png" class="png" alt="Weather-icon" >`;
    } else if (jpg == "rain") {
        element.innerHTML = `<img src="/rain.png" class="png" alt="Weather-icon" >`;
    } else if (jpg == "thunderstorm") {
        element.innerHTML = `<img src="/thunderstrom.png" class="png" alt="Weather-icon" >`;
    } else if (jpg == "snow") {
        element.innerHTML = `<img src="/snow.png" class="png" alt="Weather-icon" >`;
    } else if (jpg == "haze") {
        element.innerHTML = `<img src="/mist.png" class="png" alt="Weather-icon" >`;
    } else if (jpg == "smoke") {
        element.innerHTML = `<img src="/mist.png" class="png" alt="Weather-icon" >`;
    } else if (jpg == "light snow") {
        element.innerHTML = `<img src="/snow.png" class="png" alt="Weather-icon" >`;
    } else {
        element.innerHTML = `<img src="/broken-clouds.png" class="png" alt="Weather-icon" >`;
    }
}


function splitdate(data,wm,wd){
    
// Split the date and time parts
const [datePart, timePart] = data.split(" ");

// Split the date part into year, month, and day
const [y, m ,daya] = datePart.split("-");

// Split the time part into hours, minutes, and seconds
const [hours, minutes, seconds] = timePart.split(":");
wd.innerHTML=daya;
wm.innerHTML=m;
}
function gettemp(w1,w2,t1,t2)
{
    t1.innerHTML=`${w1} <sup>o</sup>`;
    t2.innerHTML=`${w2} <sup>o</sup>`;
}

document.addEventListener('DOMContentLoaded', function() {
    getweather(gujranwala);  
  });
  input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let cityname = input.value;
        getweather(cityname);
        
    }
});
btn.addEventListener("click",function(){
    let cityname=input.value;
    getweather(cityname);
    
})
async function getweekweather(latt,lonn) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latt}&lon=${lonn}&appid=${apikey}&units=metric`);
        if (!response.ok) {
            console.error("Network response was not ok");
            return; // Exit the function to prevent further errors
        }
        const weekdata = await response.json();
        console.log(weekdata);
        // You can now process the weekdata to display the forecast.
        // weekdata.list contains an array of forecast entries.
        // each entry contains weather data and a dt_txt field that shows the date and time of the forecast.
        
        let png1 = weekdata.list[2].weather[0].description;
        let png2 = weekdata.list[9].weather[0].description;
        let png3 = weekdata.list[17].weather[0].description;
        let png4 = weekdata.list[25].weather[0].description;
        let png5 = weekdata.list[33].weather[0].description;
        getpngweather1(png1, e1);
        getpngweather1(png2, e2);
        getpngweather1(png3, e3);
        getpngweather1(png4, e4);
        getpngweather1(png5, e5);
        let wday1=weekdata.list[2].dt_txt;
        let wday2=weekdata.list[9].dt_txt;
        let wday3=weekdata.list[17].dt_txt;
        let wday4=weekdata.list[25].dt_txt;
        let wday5=weekdata.list[33].dt_txt;
        splitdate(wday1,wm1,wd1);
        splitdate(wday2,wm2,wd2);
        splitdate(wday3,wm3,wd3);
        splitdate(wday4,wm4,wd4);
        splitdate(wday5,wm5,wd5);
        
        let wtempmax1=Math.floor(weekdata.list[2].main.temp_max);
        let wtempmax2=Math.floor(weekdata.list[9].main.temp_max);
        let wtempmax3=Math.floor(weekdata.list[17].main.temp_max);
        let wtempmax4=Math.floor(weekdata.list[25].main.temp_max);
        let wtempmax5=Math.floor(weekdata.list[33].main.temp_max);
        
        let wtempmin1=Math.floor(weekdata.list[2].main.temp_min);
        let wtempmin2=Math.floor(weekdata.list[9].main.temp_min);
        let wtempmin3=Math.floor(weekdata.list[17].main.temp_min);
        let wtempmin4=Math.floor(weekdata.list[25].main.temp_min);
        let wtempmin5=Math.floor(weekdata.list[33].main.temp_min);
        gettemp(wtempmax1,wtempmin1,stmax1,stmin1);
        gettemp(wtempmax2,wtempmin2,stmax2,stmin2);
        gettemp(wtempmax3,wtempmin3,stmax3,stmin3);
        gettemp(wtempmax4,wtempmin4,stmax4,stmin4);
        gettemp(wtempmax5,wtempmin5,stmax5,stmin5);
    } catch (error) {
        console.error("Error fetching week weather:", error);
    }
}
async function getweather(cityname){
    try{
        const response =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}&units=metric`)
        if(!response.ok)
        {
            throw new console.error("Network respanse was not ok");
        }
        
        const data =await response.json()
        console.log(data); 
        latt=data.coord.lat;
        lonn=data.coord.lon;
        getweekweather(latt,lonn);
        console.log(latt);
        console.log(lonn);
        let icon=data.weather[0].icon;
        let desci=data.weather[0].description;
        des.innerHTML=desci;
        let tempreature=Math.floor(data.main.temp);
        let cname=data.name;
        city.innerHTML=cname;       
        tem.innerHTML=`${tempreature} <sup>o</sup>C`;
        // document.querySelector(".pic").innerHTML=`<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather-icon" >`;
        let date=new Date();
let hrs=date.getHours();
let mints=date.getMinutes();
let Day=date.getDay();
let yr=date.getFullYear();
let dat=date.getDate();
let m=date.getMonth();
        if(hrs>18)
        {
            if (desci=="clear sky") {
                    document.querySelector(".pic").innerHTML=`<img src="https://drive.google.com/file/d/19sito2CoJgdKpbQO10kyOzqNssgCDnA-/view?usp=drive_link" alt="Weather-icon" >`;   
                
            } else if(desci=="few clouds"){
                
                    document.querySelector(".pic").innerHTML=`<img src="https://drive.google.com/file/d/13S2k4o08lwPEO9Y0DhlGciMR0Hs9Zv8T/view?usp=drive_link" alt="Weather-icon" >`;
                
            } else if(desci=="scattered clouds"){
                document.querySelector(".pic").innerHTML=`<img src="https://drive.google.com/file/d/1EL0aeWFFNmqn_848STixwwS4djw1OeZI/view?usp=drive_link" alt="Weather-icon" >`;
            } else if(desci=="broken clouds"){
    
                    document.querySelector(".pic").innerHTML=`<img src="/broken-clouds-moon.png" alt="Weather-icon" >`;
                
            }  else if(desci=="	shower rain"){
                document.querySelector(".pic").innerHTML=`<img src="/shower-rain.png" alt="Weather-icon" >`;
            }  else if(desci=="rain"){
             
                    document.querySelector(".pic").innerHTML=`<img src="/rain-moon.png" alt="Weather-icon" >`;
                
            }  else if(desci=="	thunderstorm"){
                document.querySelector(".pic").innerHTML=`<img src="/thunderstrom.png" alt="Weather-icon" >`;
            }  else if(desci=="snow"){
                document.querySelector(".pic").innerHTML=`<img src="/snow.png" alt="Weather-icon" >`;
            }  else if(desci=="haze"){
                    document.querySelector(".pic").innerHTML=`<img src="/mist-moon.png" alt="Weather-icon" >` ;
                
            }
            else if(desci=="smoke")
            {
                document.querySelector(".pic").innerHTML=`<img src="/mist-moon.png" alt="Weather-icon" >`;
            }
            else if(desci=="light snow")
            {
                document.querySelector(".pic").innerHTML=`<img src="/snow.png" alt="Weather-icon" >`;
            }
            else{
                document.querySelector(".pic").innerHTML=`<img src="/broken-clouds.png" alt="Weather-icon" >`;
            }
        }
        else{
            if (desci=="clear sky") {
                    document.querySelector(".pic").innerHTML=`<img src="/papa.jpg" alt="Weather-icon" >`;
                
            } else if(desci=="few clouds"){
                    document.querySelector(".pic").innerHTML=`<img src="/few-clouds.png" alt="Weather-icon" >`;
            } else if(desci=="scattered clouds"){
                document.querySelector(".pic").innerHTML=`<img src="/scarted-clouds.png" alt="Weather-icon" >`;
            } else if(desci=="broken clouds"){
                    document.querySelector(".pic").innerHTML=`<img src="/broken-clouds.png" alt="Weather-icon" >`;
                
            }  else if(desci=="	shower rain"){
                document.querySelector(".pic").innerHTML=`<img src="/shower-rain.png" alt="Weather-icon" >`;
            }  else if(desci=="rain"){
                    document.querySelector(".pic").innerHTML=`<img src="/rain.png" alt="Weather-icon" >`;
                
            }  else if(desci=="	thunderstorm"){
                document.querySelector(".pic").innerHTML=`<img src="/thunderstrom.png" alt="Weather-icon" >`;
            }  else if(desci=="snow"){
                document.querySelector(".pic").innerHTML=`<img src="/snow.png" alt="Weather-icon" >`;
            }  else if(desci=="haze"){
                    document.querySelector(".pic").innerHTML=`<img src="/mist.png" alt="Weather-icon" >`;
                
            }
            else if(desci=="light snow")
            {
                document.querySelector(".pic").innerHTML=`<img src="/snow.png" alt="Weather-icon" >`;
            }
            else if(desci=="smoke")
            {
                document.querySelector(".pic").innerHTML=`<img src="/mist.png" alt="Weather-icon" >`;
            }
            else{
                document.querySelector(".pic").innerHTML=`<img src="/broken-clouds.png" alt="Weather-icon" >`;
            }
        }
        
        
        
        if(Day=="0")
        {
            cday.innerHTML="Monday";    
        }else if(Day=="1"){
            cday.innerHTML="Tuesday";    
        }else if(Day=="2"){
            cday.innerHTML="Wednesday";    
        }else if(Day=="3"){
            cday.innerHTML="Thursday";    
        }else if(Day=="4"){
            cday.innerHTML="Friday";    
        }else if(Day=="5"){
            cday.innerHTML="Saturday";    
        }else{
            cday.innerHTML="Sunady";    
        }
        if (m=="0") {
            month.innerHTML="January";
        } else if(m=="1") {
            month.innerHTML="Febuaray";
        }else if(m=="2") {
            month.innerHTML="March";
        }else if(m=="3") {
            month.innerHTML="April";
        }else if(m=="4") {
            month.innerHTML="May";
        }else if(m=="5") {
            month.innerHTML="June";
        }else if(m=="6") {
            month.innerHTML="July";
        }else if(m=="7") {
            month.innerHTML="August";
        }else if(m=="8") {
            month.innerHTML="September";
        }else if(m=="9") {
            month.innerHTML="October";
        }else if(m=="10") {
            month.innerHTML="Novermer";
        }else {
            month.innerHTML="December";
        }
        if(hrs>=12)
        {
            hrs=hrs-12;
        }
        if(hrs>12)
        {
            se.innerHTML="PM";
        }else{
            se.innerHTML="AM";
        }
              
        
        year.innerHTML=yr;
        t1.innerHTML=hrs;
        t2.innerHTML=mints;
        let w=Math.floor(data.wind.speed);
        wind.innerHTML=`${w} Km/h`;
        let h=data.main.humidity;
        hum.innerHTML=`${h} %`;
        let f=Math.floor(data.main.feels_like);
        feel.innerHTML=`${f} <sup>o</sup>`;
        let pp=data.main.pressure;
        press.innerHTML=`${pp} mb`;
        let maxt=Math.floor(data.main.temp_max);
        let mint=Math.floor(data.main.temp_min);
        max.innerHTML=maxt;
        min.innerHTML=mint;
setTimeout(() => {
    input.value="";
}, 1000);
        
    } catch(error)
    {
        console.error("Error fetching weather:", error);
    }
}
