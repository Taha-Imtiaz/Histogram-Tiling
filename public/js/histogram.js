var xstart,ystart, renderableHeight,renderableWidth;

//var crop;

document.getElementById('imageFile').addEventListener('change',handleFiles)

// Function for handling files
function handleFiles() {
    var theGoods = document.getElementById('imageFile').files[0];
    var img = new Image();
    var reader = new FileReader();
    img.crossOrigin="Anonymous"
    //console.log(img);
    //console.log(reader);
    reader.addEventListener("load", function() { img.src = reader.result; });
   
   
    // let cv = document.getElementById("mycanvas");
    // let ctx = cv.getContext("2d");
   
    img.onload = function() { fitImageOn(img) }
    if (theGoods) { reader.readAsDataURL(theGoods); }
  }

  //Function for setting aspect ratio

  var fitImageOn = function(imageObj) {
     imageAspectRatio = imageObj.width / imageObj.height;
     canvasAspectRatio = cvs.width / cvs.height;
     
   // renderableHeight, renderableWidth, xStart, yStart;

    // If image's aspect ratio is less than canvas's we fit on height
    // and place the image centrally along width
    if(imageAspectRatio < canvasAspectRatio) {
        renderableHeight = cvs.height;
        renderableWidth = imageObj.width * (renderableHeight / imageObj.height);
        xStart = (cvs.width - renderableWidth) / 2;
        yStart = 0;
    }


    // If image's aspect ratio is greater than canvas's we fit on width
    // and place the image centrally along height
    else if(imageAspectRatio > canvasAspectRatio) {
        renderableWidth = cvs.width
        renderableHeight = imageObj.height * (renderableWidth / imageObj.width);
        xStart = 0;
        yStart = (cvs.height - renderableHeight) / 2;
    }

    // Happy path - keep aspect ratio
    else {
        renderableHeight = cvs.height;
        renderableWidth = cvs.width;
        xStart = 0;
        yStart = 0;
    }
    calcAndGraph(imageObj)
    // context.drawImage(imageObj, xStart, yStart, renderableWidth, renderableHeight);
};

//function to render or display an image on browser

  function calcAndGraph(IMAGE) {    //get image data and return rgb data

    let rD=[], gD=[], bD=[];
    // let cv = document.getElementById("mycanvas");
    // let ctx = cv.getContext("2d");
    ctx.clearRect(0,0,cvs.width,cvs.height);

    // cv.width =    IMAGE.width;
    // cv.height =   IMAGE.height;
    ctx.drawImage(IMAGE, xStart, yStart, renderableWidth, renderableHeight);
    const iD=ctx.getImageData( xStart, yStart, renderableWidth, renderableHeight).data;
    
    // console.log(iD)
    for (var i=0; i<256; i++) { 
      rD[i]=0; gD[i]=0; bD[i]=0;
     
    } 
    console.log("RED: "+rD)
    console.log("GREEN: "+gD)
    console.log("BLUE: "+bD)
    for (var i=0; i<iD.length; i+=4) {
      rD[iD[i]]++;
      gD[iD[i+1]]++;
      bD[iD[i+2]]++;
    //  console.log( rD[iD[i]])
    //  console.log( gD[iD[i+1]])
    //  console.log( bD[iD[i+2]])
    }
    console.log("R: "+rD[0])
    console.log("G: "+gD[0])
    console.log("B: "+bD[0])
    console.log({rD,gD,bD})
     histogram({rD, gD,bD}); 
    
  }
  function findMax(arr){
    var length=arr.length;
    var maxColor=arr[0];
    for (var i = 1; i < arr.length; i++) {
      var v=arr[i];
     if(v>maxColor){
       maxColor=v;
     }
    } 
    return maxColor
  }

  var  drawAxes = function ()  //draw x and uy axis 
{
  ctx.lineWidth = 5;
  ctx.strokeStyle = "purple";
  ctx.beginPath();
  ctx.moveTo(xStart , yStart+renderableHeight);
  ctx.lineTo(xStart+renderableWidth , yStart+renderableHeight);
  ctx.closePath();
  ctx.stroke();

  
  ctx.beginPath();
  ctx.moveTo(xStart , yStart+renderableHeight);
  ctx.lineTo(xStart , yStart);
  ctx.closePath();
  ctx.stroke();
  ctx.closePath()
}

  function histogram(data){

  drawAxes()
    
    data.rD[0]=0;
    data.gD[0]=0;
    data.bD[0]=0;

    //find the maximam color

    redMax=findMax(data.rD);
    greenMax=findMax(data.gD);
    blueMax=findMax(data.bD);
    console.log(redMax,greenMax,blueMax)

    var v=findMax([redMax,greenMax,blueMax]);
    console.log(v)
    var lineWidth=renderableWidth/256;

    //draw histogram finally

    ctx.beginPath();
    console.log(data.rD[1])
    for(var i=1;i<256;i++){
     var high=(data.rD[i]/v)*renderableHeight
     var high1=(data.gD[i]/v)*renderableHeight
     var high2=(data.bD[i]/v)*renderableHeight

     // console.log(high)

     //for red

     ctx.beginPath();
     ctx.rect(xStart+lineWidth*i ,yStart+renderableHeight,lineWidth,-high);
     ctx.strokeStyle="maroon"
     ctx.stroke();
     ctx.closePath();

     //for green

     ctx.beginPath();
     ctx.rect(xStart+lineWidth*i ,yStart+renderableHeight,lineWidth,-high1);
     ctx.strokeStyle="darkgreen"
     ctx.stroke();
     ctx.closePath();

     //for blue

     ctx.beginPath();
     ctx.rect(xStart+lineWidth*i ,yStart+renderableHeight,lineWidth,-high1);
     ctx.strokeStyle="darkblue"
     ctx.stroke();
     ctx.closePath();

    }

ctx.closePath
  }
  