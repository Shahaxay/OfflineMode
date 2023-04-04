function changeImage(){
    var im=document.getElementById("image");
    var cur_img=document.getElementById("image").getAttribute('src');
    if(im.getAttribute('src')=="Image/gitpp.jpg"){
        im.setAttribute('src','Image/circle_profile_from_online.png');
    }else{
        im.setAttribute('src','Image/gitpp.jpg');
    }
}