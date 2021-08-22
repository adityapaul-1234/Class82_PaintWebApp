canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

colour = "black";
line_width = 2;
mouseEvent = "";

canvas.addEventListener("mousedown", fun_mousedown);
function fun_mousedown(e) {
    mouseEvent = "mouseDown";

    colour = document.getElementById("colour").value;
    line_width = document.getElementById("line-width").value;
}

canvas.addEventListener("mouseleave", fun_mouseleave);
function fun_mouseleave(e) {
    mouseEvent = "mouseLeave";
}

canvas.addEventListener("mouseup", fun_mouseup);
function fun_mouseup(e) {
    mouseEvent = "mouseUp";
}

var last_x;
var last_y;
canvas.addEventListener("mousemove", fun_mousemove);
function fun_mousemove(e) {
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = line_width;

        ctx.moveTo(last_x, last_y);

        ctx.lineTo(current_x, current_y);

        ctx.stroke();
    }

    last_x = current_x;
    last_y = current_y;
}

function remove(){
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
}