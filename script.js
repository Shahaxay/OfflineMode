function changeImage(){
    var im=document.getElementById("image");
    var cur_img=document.getElementById("image").getAttribute('src');
    if(im.getAttribute('src')=="Image/i2.jpg"){
        im.setAttribute('src','Image/i1.png');
    }else{
        im.setAttribute('src','Image/i2.jpg');
    }
}