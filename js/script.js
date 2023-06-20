



let myButton =document.getElementById("myBtn");
window.onscroll =function(){
    scrollFunction();
}

function scrollFunction(){
    if (document.body.scrollTop >20 ||document.documentElement.scrollTop > 20) {
        myButton.style.display="block";

    }
    else{
        myButton.style.display="none"
    }
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop=0;
}

// <----------------------------------j-quey--------------------------------------------> 
$(document).ready(()=>{
    $('.font1,.dig-p,.allServicesImg').fadeOut()
$(window).scroll(()=>{
    $('.font1,.dig-p,.allServicesImg').fadeIn(2000);
   

})

$('#container3').scroll(()=>{
$(".client-Img").fadeIn(4000);

})

})
