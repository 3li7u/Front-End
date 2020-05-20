//////////////////owl//////////////////

$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 20,
    responsive: {
        0: {
            items: 1
        },
        500: {
            items: 2
        },
        900: {
            items: 3
        },
        1200:{
            items: 4
        }
    }
});

//////////////////// change photo ////////////////////

function playHover(element) {
    element.setAttribute('src', 'img/play-store-green.png');
}
  
  function playUnhover(element) {
    element.setAttribute('src', 'img/play-store.png');
}

  function appHover(element) {
    element.setAttribute('src', 'img/app-store-green.png');
}
  
  function appUnhover(element) {
    element.setAttribute('src', 'img/app-store.png');
}


  ///////////////////////// change bg color nav on scroll/////////////////////////

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 500) {
          $(".navbar").css("background" , "#f5f5f5");
        }
  
        else{
            $(".navbar").css("background" , "none");  	
        }
    })
});