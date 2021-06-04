var canvas = document.getElementById("annotate");
var context = canvas.getContext("2d");


var thickness = document.getElementById("thickness");
var color = document.getElementById("color");
var shape = document.getElementById("shape");

//Line thickness
thickness.addEventListener("change", function(){
    context.lineWidth = thickness.value
});
;

//Line Color
context.strokeStyle = color.value;
color.addEventListener("change", function(){
    context.strokeStyle = color.value;
});

var startX, startY;
canvas.addEventListener("mousedown", function(e){
    context.lineWidth = thickness.value;
    context.strokeStyle = color.value;

    startX = e.offsetX;
    startY = e.offsetY;
});

canvas.addEventListener("mouseup", function(e){
    //Draw a Line
    context.beginPath();
    if(shape.value == "line"){
        context.moveTo(startX,startY);
        context.lineTo(e.offsetX,e.offsetY);
        context.stroke();
    } else if(shape.value == "rectangle"){
        
        context.strokeRect(startX,startY, e.offsetX - startX,e.offsetY - startY);
        
    } else if(shape.value == "circle"){
        var radius = Math.hypot( e.offsetX - startX, e.offsetY - startY )
        
        context.arc(startX,startY, Math.abs(radius), 0, 2*Math.PI);
        context.stroke();
    }
  

    context.closePath();           
});