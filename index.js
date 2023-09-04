//检测是否为移动设备
var info = navigator.userAgent;
if(/mobile/i.test(info)){
    window.location.replace("https://kokomiserver.github.io/None")
};
//时间更新
setInterval(
    function(){
        var TextArea=document.getElementById('TA');
        TextArea.style.fontSize=Math.sqrt(window.innerHeight*0.25*window.innerHeight*0.35/150);
        var time=document.getElementById('time');
        var D=Date.now();
        var date = new Date();
        if(date.getDay()==0){time.innerHTML=date.getFullYear()+'年'+(date.getMonth()+1)+'月'+(date.getDate())+'日'+(date.getHours())+'时'+(date.getMinutes())+'分'+(date.getSeconds())+'秒 | 星期'+(date.getDay()+7);}
        else{time.innerHTML=date.getFullYear()+'年'+(date.getMonth()+1)+'月'+(date.getDate())+'日'+(date.getHours())+'时'+(date.getMinutes())+'分'+(date.getSeconds())+'秒   |   星期'+(date.getDay());};
        
},50);