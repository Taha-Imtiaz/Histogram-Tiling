// alert('hello')
var cvs;
var ctx;
var columns,rows;
var tileWidth,tileHeight;
var redMax,greenMax,blueMax
cvs=document.querySelector("#mycanvas");
ctx=cvs.getContext("2d");

var xstart,ystart,imageAspectRatio,canvasAspectRatio, renderableHeight,renderableWidth;
columns = 3, rows= 3
var tileWidth=Math.round(cvs.width/ columns),
tileHeight=Math.round(cvs.height/ rows);