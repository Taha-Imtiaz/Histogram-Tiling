

myInit()

function myInit()
{
    
    myDisplay()
}

function myDisplay()
{
    // alert('Inside myDisplay Function')
    var img1 = new Image();
    var img2 = new Image();   
    img1.onload = function(){ 
    for(var yIndex=0;yIndex < rows ;yIndex++)

    {
        for(var xIndex=0;xIndex<columns;xIndex++)
    
        {
            x= xIndex*tileWidth, y = yIndex * tileHeight;
            ctx.drawImage(img1,x,y,tileWidth,tileHeight);
        }
    }
   
    }
    // img1.onload = function(){
    //     xIndex =2, yIndex =2;
    //     x= xIndex*tileWidth, y = yIndex * tileHeight;
    //     ctx.drawImage(img1,x,y,tileWidth,tileHeight);

    //     xIndex =0, yIndex =0;
    //     x=xIndex * tileWidth, y= yIndex * tileHeight;
    //     ctx.drawImage(img2,x,y,tileWidth,tileHeight);
    // };
    img1.src = './images/red-parrot.jpg';
    img2.src = './images/download.jpg';

    // var rect={
    //     x:0,
    //     y:0,
    //     width:200,
    //     height:100
    // }

    
//     cvs.addEventListener('click',function(evt)
//     {
//     var mousePos=getMousePosition(cvs,evt)
//     if(isInside(mousePos,rect))
//     {
//         alert('clicked inside Rect')
//     }
//     else
//     {
//         alert('clicked outside rect')
//     }
//     },false)
  
// const path = new Path2D
// path.rect(0,0,200,100);
// path.rect(25,72,32,32);
// path.closePath();
       
    
// ctx.fillStyle="#FFFFFF"
// ctx.fillStyle="rgba(225,225,225,0.5)"
// ctx.fill(path)
// ctx.lineWidth=2
// ctx.strokeStyle="#000000"
// ctx.stroke(path)


// function isInside(mouse_pos,rect)
//     {
//     return mouse_pos.x > rect.x && mouse_pos.x <rect.x + rect.width && mouse_pos.y <rect.y +rect.height && mouse_pos.y > rect.y
//     }

//     function getMousePosition(canvas,event)
//     {   
//     var rect=canvas.getBoundingClientRect()
//     return{
//         x: event.clientX - rect.left,
//         y: event.clientY - rect.top
//     };
//     }
}
