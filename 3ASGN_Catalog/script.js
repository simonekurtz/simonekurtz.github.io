// var delay=1000 //set delay in miliseconds
// var curindex=0

	
	var randomimages = ["IMG_2998.JPG", "IMG_3003.jpg", "IMG_3008.jpg", "IMG_3018.jpg", "IMG_3043.jpg"];


function randselect() {
    var slideshow = "url(images/images/" + randomimages[Math.floor(Math.random()*randomimages.length)] + ")";
    
$("body").css("background-image",slideshow);

}

$(window).load(function() {
    $(".element").height(($(window.height)-200) + "px");
});

$(window).resize(function() {
    $(".element").height(($(window.height)-200) + "px");
});

setInterval("randselect()",3000);

//setTimeout("randselect()",);




// var preload=new Array()

// for (n=0;n<randomimages.length;n++)
// {
// 	preload[n]=new Image()
// 	preload[n].src=randomimages[n]
// }

// document.write('<img name="defaultimage" src="images/'+randomimages[Math.floor(Math.random()*(randomimages.length))]+'">')

// function rotateimage()
// {

// if (curindex==(tempindex=Math.floor(Math.random()*(randomimages.length)))){
// curindex=curindex==0? 1 : curindex-1
// }
// else
// curindex=tempindex

// 	document.images.defaultimage.src=randomimages[curindex]
// }

// setInterval("rotateimage()",delay)
