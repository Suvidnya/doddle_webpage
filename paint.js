var canvas = document.getElementById("paint");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle="yellow";
ctx.lineWidth="5";

function paint(){
    $("#paint").mousedown(function(event){
    ctx.beginPath();
    $("#paint").mousemove(function(event){
        ctx.lineTo(event.pageX,event.pageY);
        console.log(event.pageX,event.pageY);
        ctx.stroke();
    })
        $("#paint").mouseup(function(event){
            $("#paint").unbind("mousemove");
        })


})
}