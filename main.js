console.log("Hello, world!");

var exampleReq = {"type":"image","centerX":-100,"centerY":-100,"width":200,"height":200,"url":"tst.png"};

function PlaceCard(ctx, Req)
	{
	var img = new Image(); 
	img.src = Req.url;
	ctx.drawImage(img, 0, 0);
	ctx.stroke();
	}

var Line = function(ctx, x0, y0, x1, y1) {
	ctx.moveTo (x0, y0);
	ctx.lineTo (x1, y1);
	ctx.stroke();
	};

var c = document.getElementById ("Screen");
var ctx = c.getContext ("2d");
//Line (ctx, 0, 0, 100, 100);
PlaceCard (ctx, exampleReq);