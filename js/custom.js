
function displayCanvas(){
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    let radiusClock = canvas.width/2-10;
    let xCenterClock = canvas.width/2;
    let yCenterClock = canvas.width/2;
// Clear display
    ctx.fillStyle = '#fff';
    
    ctx.fillRect(0,0, canvas.width, canvas.height);

    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;


    // saatin dairesi
    ctx.beginPath();
ctx.arc(xCenterClock,yCenterClock,radiusClock, 0, 2*Math.PI, true );
ctx.moveTo(xCenterClock,yCenterClock);
ctx.strokeStyle = 'black';

ctx.fillStyle = '#ecf0f1';
ctx.fill();
ctx.lineWidth = 7;
    ctx.stroke();
    ctx.closePath();

// ----------------------------------

// saatin dairesinin qiraqlarindaki deqiqeler
    let radiusNum = radiusClock-10;
    let radiusPoint;
    for(let tm=0; tm<60; tm++){
        ctx.beginPath();
        if(tm % 5 == 0){
            radiusPoint = 5;
        }
        else{
            radiusPoint = 2;
        }

        let xPointM = xCenterClock + radiusNum * Math.cos(-6*tm*(Math.PI/180) + Math.PI/2);
        let yPointM = xCenterClock - radiusNum * Math.sin(-6*tm*(Math.PI/180) + Math.PI/2);
        ctx.arc(xPointM,yPointM,radiusPoint, 0, 2*Math.PI, true );
     ctx.lineWidth = 3;
     ctx.fillStyle = '#fbc531';
     ctx.fill();
        ctx.stroke();
    ctx.closePath();
    }
    // ===========================================

    // saat gostericileri 
for(let th = 1; th<=12; th++){
    ctx.beginPath();
ctx.font = 'bold 25px sans-serif';
ctx.strokeStyle = '#192a56';
ctx.lineWidth = 2;
let xText = xCenterClock + (radiusNum - 30) * Math.cos(-30*th*(Math.PI/180) + Math.PI/2);
let yText = yCenterClock - (radiusNum - 30) * Math.sin(-30*th*(Math.PI/180) + Math.PI/2);
if(th <=9){
    ctx.strokeText(th, xText-5, yText+10);
}
else{
    ctx.strokeText(th, xText-15, yText+10);
}


    ctx.stroke();
    ctx.closePath();
}
// =========================================
// saatin eqrebleri
let lengthSeconds = radiusNum - 10;
let lengthMinutes = radiusNum - 25;
let lengthHours = lengthMinutes / 1.5;
let d = new Date();
let t_sec = 6*(d.getSeconds());
let t_min = 6*(d.getMinutes() + (1/60)*d.getSeconds()); 
let t_hours = 30*(d.getHours() + (1/60)*d.getMinutes());

// saniye eqrebi
ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.lineWidth = 3;
ctx.lineCap = 'round'
ctx.moveTo(xCenterClock,yCenterClock);
ctx.lineTo(xCenterClock + lengthSeconds*Math.cos(Math.PI/2-t_sec*(Math.PI/180)),
         yCenterClock - lengthSeconds*Math.sin(Math.PI/2-t_sec*(Math.PI/180)));


ctx.stroke();
ctx.closePath();

// deqiqe eqrebi
ctx.beginPath();
ctx.strokeStyle = '#000';
ctx.lineWidth = 6;
ctx.moveTo(xCenterClock,yCenterClock);
ctx.lineTo(xCenterClock + lengthMinutes*Math.cos(Math.PI/2 - t_min*(Math.PI/180)),
         yCenterClock - lengthMinutes*Math.sin(Math.PI/2 - t_min*(Math.PI/180)));


ctx.stroke();
ctx.closePath();

// saat eqrebi
ctx.beginPath();
ctx.strokeStyle = '#000';
ctx.lineWidth = 14;
ctx.moveTo(xCenterClock,yCenterClock);
ctx.lineTo(xCenterClock + lengthHours*Math.cos(Math.PI/2 - t_hours*(Math.PI/180)),
         yCenterClock - lengthHours*Math.sin(Math.PI/2 - t_hours*(Math.PI/180)));


ctx.stroke();
ctx.closePath();
// ==========================================
// saatin logosu
ctx.beginPath();

let img = new Image();
  img.src = 'https://seeklogo.com/images/E/Emporio_Armani-logo-97EAF719B0-seeklogo.com.png';
  
  ctx.drawImage(img, 165, 130, 150,100);

ctx.closePath();

}

// =====================


window.onload = function (){
    window.setInterval(
        function(){
let d = new Date();
document.getElementById('clock').innerHTML = d.toLocaleTimeString();
displayCanvas();  },1000
    );
   
}