

function currTime(){
    var time=new Date();
    var hour=time.getHours();
    console.log(hour);
    var minute=time.getMinutes();
    var sec=time.getSeconds();
    var m="PM"
    if(hour<12){
        m="AM"
    }else if(hour==12){
        
        m="PM"
    }else if(hour==24){
        m='AM'
    }else if(hour>12){
        hour=hour-12
        m="PM"
    }
    if(hour==0){
        hour=hour+12

    }
    if(sec<10){
        sec="0"+sec
    }
    if(minute<10){
        minute="0"+minute
    }
document.getElementById("clock").innerText=`${hour}:${minute}:${sec}  ${m}`


// if(z=="11:39:07  PM"){
//     alert("alerm")
// }
return hour
}

setInterval(()=>{
    currTime()
},1000)

let jack=document.getElementById('jack')
let icon=document.getElementById('icon')
let back=document.getElementById('last')
var alarm=document.getElementById("alaGiven")
alarm.addEventListener("keypress",function(err){
   
   
    if(err.key=="Enter"){
      let  take=err.target.value
         err.target.value=""
         jack.innerText=`New Alarm:${take}`
         icon.style.display="block";
        back.style.backgroundColor="black"
         
         function currTime(){
            var time=new Date();
            var hour=time.getHours();
            console.log(hour);
            var minute=time.getMinutes();
            var sec=time.getSeconds();
            var m="PM"
            if(hour<12){
                m="AM"
            }else if(hour==12){
                
                m="PM"
            }else if(hour==24){
                m='AM'
            }else if(hour>12){
                hour=hour-12
                m="PM"
            }
            if(hour==0){
                hour=hour+12
        
            }
            if(sec<10){
                sec="0"+sec
            }
            if(minute<10){
                minute="0"+minute
            }
       var tax= document.getElementById("clock").innerText=`${hour}:${minute}:${sec} ${m}`
        console.log(tax);
        console.log(take);
      icon.addEventListener("click",function (x){
          take=""
          
      })
        
       if(take==tax){
           jack.innerText=''
           icon.style.display='none'
           back.style.backgroundColor=''
           var audio=new Audio('https://www.tones7.com/media/extreme_clock_alarm.mp3')
           audio.play();
           setTimeout(()=>{
               audio.pause()
           },10000)
       }
        }
        
        setInterval(()=>{
            currTime()
        },1000)
        
       }

       
})


function get(){
    jack.innerText=''
    icon.style.display='none'
    back.style.backgroundColor=''
   
   

}

//CLASS FUNCTION



