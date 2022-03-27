
//=========================================common js start============================================

    //Preloader start 
    $(window).load(function(){
        $(".preloader").delay(1000).fadeOut(500)
    })
    //Preloader end



    // bottom to top part start

    // bottom_to_top start
    $(".bottom_to_top i").click(function(){
        $('html,body').animate({
          scrollTop:0
        }, 500)
      })

    // bottom to top part end

    //==============================navbar part start===========================

    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 50){
          $(".header").addClass('header_show');
        }
        else{
          $(".header").removeClass('header_show');
        }
        if(scrolling > 50){
          $("#navbar").addClass('navbar_bg_ani');
        }
        else{
          $("#navbar").removeClass('navbar_bg_ani');
        }
        if(scrolling > 10){
          $(".bottom_to_top i").fadeIn(500)
        }
        else{
          $(".bottom_to_top i").fadeOut(500)
        }
      });

        //======== search======
        $(".search_btn").click(function(){
          $(".search_input").toggleClass("active").focus;
          $(this).toggleClass("animate");
          $(".search_input").val("");
        });

    // ================================navbar part end=========================
    
    
    
    // navbar toggle menu start
    var menu_hide_show =document.getElementById("menu_hide_show");
    function showMenu(){
        menu_hide_show.style.left = "0"
    }
    function hideMenu(){
        menu_hide_show.style.left = "-150px"
    }
    // navbar toggle menu end




$(function(){
    // banner Slide start

    $('.banner_main').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        dots: false,
        nextArrow: ".banner_next",
        prevArrow:".banner_previous",
    });
    // banner slide end

    // season slide start
    $('.season_collection_main').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        nextArrow: ".season_next",
        prevArrow:".season_previous",

    });
    // season slide end
});


  //====== modal_body_main_items_img start

  var main_img = document.getElementById('main_img');
  var small_img = document.getElementsByClassName('small_img');


  small_img[0].onclick = function(){
    main_img.src = small_img[0].src;
  }
  small_img[1].onclick = function(){
    main_img.src = small_img[1].src;
  }
  small_img[2].onclick = function(){
    main_img.src = small_img[2].src;
  }
  small_img[3].onclick = function(){
    main_img.src = small_img[3].src;
  }
  //====== modal_body_main_items_img end

//=========================================common js end============================================

// ================================== Home Page Start ===============================

    // load more Start

    $(".best_selling_load_more").click(function(){
      $('.best_selling_items_load_more').addClass('items_load_more_work');
    })

    // load more End

// ================================== Home Page End =================================



// ================================== Shops Page Start ===============================

    // load more Start

    $(".shops_top_load_more").click(function(){
      $('.shops_top_items_load_more').addClass('items_load_more_work');
    });
    $(".new_collection_load_more").click(function(){
      $('.new_collection_items_load_more').addClass('items_load_more_work');
    });


    // load more end
// ================================== Shops Page End =================================






// ================================== Fashion Page Start ===============================


    // load more Start

    $(".kids_fashion_load_more").click(function(){
        $('.kids_fashion_items_load_more').addClass('items_load_more_work');
    })
    $(".men_fashion_load_more").click(function(){
        $('.men_fashion_items_load_more').addClass('items_load_more_work');
    })
    $(".women_fashion_load_more").click(function(){
        $('.women_fashion_items_load_more').addClass('items_load_more_work');
    })

    // load more End


// ================================== Fashion Page End ===============================



// ================================ Policy Page Start ===========================

$(".read_more_btn").click(function(){
  $('.privacy_policy_more').addClass('privacy_policy_load_more_show');
});



// ================================ Policy Details Page end ===========================







// ================================== Pay now Page Start ===============================


// jQuery
$('form').card({
  ontainer: '.card-wrapper'
});

// Vanilla JavaScript
new Card({
  form: document.querySelector('form'),
  container: '.card-wrapper'
});

// ================================== Pay now Page End =================================






