/*
Template Name: Akabare Kitchen;
Template URI:http://akabarekitchen.com.np/
Author: Prem Prasad Khanal
Author URI: http://premkhanal.com.np/
Description: Akabare Kitchend: Food Delivery Service in Kathmandu and Pokhara. 
Version: 1.0.0
Primary use: Ecommerce
*/

(function ($) {
  'use strict'; // Start of use strict

  var winwidth = $(window).width();

  function preloader() {
    $(document).ready(function () {
      $('.preloader').fadeOut(15000);
    });
  }
  preloader();

  function customDropdown() {
    $('.custom-dropdown')
      .mouseover(function (e) {
        e.preventDefault();
        $(this).closest('.custom-dropdown').addClass('show-dropdown');
      })
      .mouseout(function () {
        $(this).closest('.custom-dropdown').removeClass('show-dropdown');
      });
  }
  customDropdown();

  function openModal() {
    $('.common-button').on('click', function (e) {
      e.preventDefault();
      var targetId = $(this).attr('popup-link');
      $('#' + targetId).addClass('open');
    });
  }
  openModal();

  function closeModal() {
    $('.popup-footer .common-button, .close-icon').on('click', function (e) {
      e.preventDefault();
      $(this).closest('.popup').removeClass('open');
    });
  }
  closeModal();

  function sidebar_open_modal() {
    $('.sidebar-modal-link').on('click', function (e) {
      e.preventDefault();
      var targetId = $(this).attr('modal-link');
      $('#' + targetId).addClass('is-open');
    });
  }
  sidebar_open_modal();

  function sidebar_close_modal() {
    $('.popup-footer .close-modal,.close-icon').on('click', function (e) {
      e.preventDefault();
      $(this).closest('.sidebar-modal').removeClass('is-open');
    });
  }
  sidebar_close_modal();

  function customTab() {
    $('.custom-tab ul.tab-list a').click(function (e) {
      e.preventDefault();
      var tab_id = $(this).attr('data-tab');

      $('.custom-tab ul.tab-list li a').removeClass('is-active');
      $('.custom-tab .custom-tab-content .tab-item').removeClass('is-active');

      $(this).addClass('is-active');
      $('#' + tab_id).addClass('is-active');
    });
  }
  customTab();

  $('.acc-list > .acc-header').on('click', function (e) {
    e.preventDefault();
    if ($(this).next('.acc-body').is(':visible')) {
      $(this).closest('.acc-list').removeClass('is-active');
      $(this).closest('.acc-list').next('.acc-body').slideUp();
    } else {
      $('.acc-list').removeClass('is-active');
      $(this).closest('.acc-list').addClass('is-active');
      $('.acc-list').next('acc-body').slideUp();
      $(this).closest('.acc-list').next('.acc-body').slideToggle();
    }
  });

  // akabare-select

  function akabareSelect() {
    $('.akabare-select').on('click', function (e) {
      $(this).toggleClass('show-select');
    });
    $('.akabare-select li').on('click', function (e) {
      $(this).removeClass('is-active');
      var value = $(this).attr('data-value');
      $(this)
        .closest('.akabare-select')
        .find('.selected-item')
        .addClass('is-active');
      $(this).closest('.akabare-select').find('.selected-item').html(value);
    });
  }
  akabareSelect();

  function searchDropdown() {
    $('.search-dropdown input').on('click', function (e) {
      e.preventDefault();
      $(this).closest('.search-dropdown').addClass('show-dropdown');
    });
  }
  searchDropdown();

  // Categories Slider
  $('.categories-slider').slick({
    slidesToScroll: 3,
    slidesToShow: 8,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2,
        },
      },
    ],
  });

  // Categories Slider
  $('.promo-slider').slick({
    slidesToShow: 3,
    arrows: true,
    dots: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
    ],
  });

  // Recommend Slider
  $('.recommend-slider2').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    centerMode: true,
    arrows: false,
    dots: true,
    autoplay: true,
  });

  function slickConfig() {
    $('.akabare-product-gallery').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.akabare-product-thumbnail',
    });
    $('.akabare-product-thumbnail').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.akabare-product-gallery',
      dots: false,
      arrows: true,
      centerMode: true,
      focusOnSelect: true,
      margin: 5,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
  }
  slickConfig();

  // function ratingStarProduct() {
  //   $('.rating-stars').each((index, value) => {
  //     var rate = $(value).attr('value');
  //     if ($(value).attr('value') === 0) {
  //       rate = '0';
  //     }
  //     $(value).barrating({
  //       theme: 'icofont-stars',
  //       initialRating: rate,
  //     });
  //   });
  // }
  // ratingStarProduct();

  // Trending Slider
  $('.trending-slider').slick({
    centerPadding: '30px',
    slidesToShow: 4,
    arrows: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
    ],
  });

  /*==================================
   Toggle Button
 ==================================*/
  $('.mobile-menu-button a').on('click', function (e) {
    e.preventDefault();
    $('body').addClass('Is-toggle');
  });

  function mobileMenuClose() {
    $('.bottom-header .close-icon').on('click', function (e) {
      e.preventDefault();
      $('body').removeClass('Is-toggle');
    });
  }
  mobileMenuClose();

  /*==================================
  Responsive menu
==================================*/
  function menuIcon() {
    $(
      '.main-navigation li.menu-item-has-children,.main-navigation li.page-item-has-children'
    ).prepend('<span class="icon"></span>');
  }
  menuIcon();

  if (winwidth <= 991) {
    $(
      '.main-navigation li.menu-item-has-children span.icon,.main-navigation li.page-item-has-children span.icon'
    ).on('click', function (e) {
      e.preventDefault();
      $(this)
        .siblings(
          '.main-navigation li.menu-item-has-children ul.sub-menu,.main-navigation li.page-item-has-children ul.sub-menu'
        )
        .slideToggle(300);
    });
  }

  function stickyMenu() {
    $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();

      if (scroll > 130) {
        $('.site-header').addClass('is-sticky');
      } else {
        $('.site-header').removeClass('is-sticky');
      }

      if (scroll > 130) {
        $('.scroll-top').show();
      } else {
        $('.scroll-top').hide();
      }
    });

    $('.scroll-top').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({ scrollTop: 0 }, 500);
    });
  }
  stickyMenu();

  // Dark Mode
  const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
  );
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
      toggleSwitch.checked = true;
    }
  }
  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }
  toggleSwitch.addEventListener('change', switchTheme, false);
})(jQuery); // End of use strict

// Quantity JS
jQuery(document).ready(function () {
  // This button will increment the value
  $('.cart-items-number .qtyplus').click(function (e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    fieldName = $(this).attr('field');
    // Get its current value
    var currentVal = parseInt($('input[name=' + fieldName + ']').val());
    // If is not undefined
    if (!isNaN(currentVal)) {
      // Increment
      $('input[name=' + fieldName + ']').val(currentVal + 1);
    } else {
      // Otherwise put a 0 there
      $('input[name=' + fieldName + ']').val(1);
    }
  });
  // This button will decrement the value till 0
  $('.cart-items-number .qtyminus').click(function (e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    fieldName = $(this).attr('field');
    // Get its current value
    var currentVal = parseInt($('input[name=' + fieldName + ']').val());
    // If it isn't undefined or its greater than 0
    if (!isNaN(currentVal) && currentVal > 1) {
      // Decrement one
      $('input[name=' + fieldName + ']').val(currentVal - 1);
    } else {
      // Otherwise put a 0 there
      $('input[name=' + fieldName + ']').val(1);
    }
  });
});
