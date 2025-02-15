window.onload = function() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    // Text
    let grad=ctx.createLinearGradient(0,0,250,0);
    grad.addColorStop(0, "lightblue");
    grad.addColorStop(1, "darkviolet");

    ctx.font = "24px Arial";
    ctx.fillStyle = grad;
    ctx.fillText("Inclass Exercise - Creative Coding: Interactive Multimedia",10,80);

    // shape 1
    ctx.beginPath();
    ctx.lineWidth = "12";
    ctx.strokeStyle = "red";
    ctx.rect(5,10 + 100,170,140);
    ctx.fillStyle = "rgd(0 255 / 50%)";

    ctx.lineWidth = "9";
    ctx.fillStyle = "rgb(0 175 175 / 50%)";
    ctx.fillRect(5,10 + 100, 100,100);
    ctx.stroke()

    ctx.strokeStyle = "rgb(0 80 30 / 50%)";
    ctx.lineWidth = "21";
    ctx.strokeRect(5,10 + 170, 100,100);
    ctx.stroke()

    // shape 2
    ctx.beginPath();
    ctx.lineWidth = "6";
    ctx.moveTo(100-60,200 + 100);
    ctx.lineTo(140-60, 180 + 100);
    ctx.lineTo(180-60, 200 + 100);
    ctx.lineTo(200-60, 220 + 100);
    ctx.lineTo(180-60, 240 + 100);
    ctx.lineTo(140-60,260 + 100);
    ctx.lineTo(100-60, 240 + 100);
    ctx.lineTo(60-60,220 + 100);
    ctx.lineTo(100-60,200 + 100);
    grad=ctx.createRadialGradient(160,210,30,180,80 + 100,180);
    grad.addColorStop(0,"cyan");
    grad.addColorStop(0.3,"purple");
    grad.addColorStop(1,"darkblue");
    ctx.fillStyle = grad;
    ctx.strokeStyle = grad;
    ctx.fill();
    ctx.stroke();

    // shape 3
    ctx.beginPath();
    ctx.moveTo(210, 110);
    ctx.bezierCurveTo(300, 510, 400, 100, 500, 140);
    grad=ctx.createRadialGradient(160,210,30,180,80 + 100,180);
    grad.addColorStop(0,"cyan");
    grad.addColorStop(0.3,"purple");
    grad.addColorStop(1,"rgb(0 0 255 / 50%)");
    ctx.fillStyle = grad;
    ctx.strokeStyle = grad;
    ctx.fill();
    ctx.shadowColor = "violet";
    ctx.shadowBlur = 11;
    ctx.shadowOffsetX = 8;
    ctx.shadowOffsetY = 8;
    ctx.stroke();
    ctx.clearRect(250,250, 50,50);
    ctx.clearRect(300,150, 50,50);


    //shape 4

    ctx.beginPath();
    ctx.arc(560, 250, 150, 1.5 * Math.PI, 0.75 * Math.PI, true);
    grad=ctx.createRadialGradient(600,330,30,180,80 + 100,180);
    grad.addColorStop(0,"pink");
    grad.addColorStop(0.3,"turquoise");
    grad.addColorStop(1,"darkblue");
    ctx.fillStyle = grad;
    ctx.strokeStyle = grad;
    ctx.fill();
    ctx.stroke();

    // shap3 5

    ctx.globalCompositeOperation = "lighten";
    ctx.fillStyle = "blue";
    ctx.moveTo(600-50,100);
    ctx.lineTo(700-50,300);
    ctx.lineTo(800-50,100);
    ctx.lineTo(700-50,100)
    ctx.fillStyle = "purple";
    ctx.fill();

    ctx.moveTo(600-50,300);
    ctx.lineTo(700-50,100);
    ctx.lineTo(800-50,300);
    ctx.lineTo(700-50,300)
    ctx.fillStyle = "yellow";
    ctx.fill();
}