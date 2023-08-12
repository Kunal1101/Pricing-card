jQuery(document).ready( function($){
  // Code for year month toggle
  $('#toggle-btn').click(function(id) {
    var toggle_btn = $('#toggle-btn');
    if($(toggle_btn).is(':checked')) {

        $(".price-duration").text("/year")
        $(".check-monthly").css("font-weight", "500");
        $(".check-yearly").css("font-weight", "600");
        const newAmounts = {
            'beginner-amount': '199',
            'advance-amount': '499',
            'ultimate-amount': '999'
        };
        // set new amounts using the same class
        for (const id in newAmounts) {
            $(`#${id}`).text(newAmounts[id]);
        }
    } else {
        const oldAmounts = {
            'beginner-amount': '19',
            'advance-amount': '99',
            'ultimate-amount': '199'
        };
        // set old amounts using the same class
        for (const id in oldAmounts) {
            $(`#${id}`).text(oldAmounts[id]);
        }
        $(".price-duration").text("/month")
        $(".check-monthly").css("font-weight", "600");
        $(".check-yearly").css("font-weight", "500");
    }
  })

  // View more/less functionality
  $(".pricing-card").each(function() {
    var view_more = $(this).find(".view-more");
    var more_features = $(this).find(".more-features")
    $(view_more).click(function() {
        $(more_features).slideToggle();
    if ($(view_more).text() == "View More") {
        $(view_more).addClass("rotate")
        $(more_features).css("display", "block");
        $(view_more).text("View Less");
    } else {
        $(view_more).removeClass("rotate")
        $(view_more).text("View More");
    }
    })
  })

  if ($(window).width() <= 991) {
    $(".pricing-slider").addClass("owl-carousel").addClass("owl-theme");
    $('.pricing-slider').owlCarousel({
        loop: false,
        nav: false,
        dots: false,
        autoHeight: false,
        autoplay: false,
        responsive: {
            0: {
                items: 1,
                margin: 10,
                stagePadding: 15,
            },
            576: {
                items: 1,
                margin: 10,
                stagePadding: 50,
            },
            768: {
                items: 1,
                margin: 0,
                stagePadding: 120,
            }
        }
    });
  }

});