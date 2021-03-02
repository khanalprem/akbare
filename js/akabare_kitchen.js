/*
Template Name: Akabare Kitchen;
Template URI:http://akabarekitchen.com/
Author: Prem Prasad Khanal
Author URI: http://premkhanal.com.np/
Description: Akabare Kitchend: Food Delivery Service in Kathmandu and Pokhara. 
Version: 1.0.0
Primary use: Ecommerce
*/

(function ($) {
  'use strict'; // Start of use strict

  // $('body').on('contextmenu', function (e) {
  //   return false;
  // });
  // $(document).keydown(function (e) {
  //   if (
  //     e.ctrlKey &&
  //     (e.keyCode === 67 ||
  //       e.keyCode === 86 ||
  //       e.keyCode === 85 ||
  //       e.keyCode === 117)
  //   ) {
  //     return false;
  //   }
  //   if (e.which === 123) {
  //     return false;
  //   }
  //   if (e.metaKey) {
  //     return false;
  //   }
  //   //document.onkeydown = function(e) {
  //   // "I" key
  //   if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
  //     return false;
  //   }
  //   // "J" key
  //   if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
  //     return false;
  //   }
  //   // "S" key + macOS
  //   if (
  //     e.keyCode == 83 &&
  //     (navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey)
  //   ) {
  //     return false;
  //   }
  //   if (
  //     e.keyCode == 224 &&
  //     (navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey)
  //   ) {
  //     return false;
  //   }
  //   // "U" key
  //   if (e.ctrlKey && e.keyCode == 85) {
  //     return false;
  //   }
  //   // "F12" key
  //   if (event.keyCode == 123) {
  //     return false;
  //   }
  // });

  function customDropdown() {
    $('.custom-dropdown a')
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
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
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

  // Recommend Slider
  $('.recommend-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
    dots: true,
    autoplay: true,
  });

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
  $('a.open-button').on('click', function (e) {
    e.preventDefault();
    $('.main-navigation').show(300);
  });

  function mainnavButton() {
    $('.open-button').clone().appendTo('.main-navigation .mobile-menu-toggle');
    $('.main-navigation .open-button').addClass('active');
    $('.active').on('click', function () {
      $('.main-navigation').hide(300);
    });
  }
  mainnavButton();

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

  // Sidebar
  var $main_nav = $('#main-nav');
  var $toggle = $('.toggle');

  var defaultOptions = {
    disableAt: false,
    customToggle: $toggle,
    levelSpacing: 40,
    navTitle: 'Akabare Kitchen',
    levelTitles: true,
    levelTitleAsBack: true,
    pushContent: '#container',
    insertClose: 2,
  };

  // call our plugin
  var Nav = $main_nav.hcOffcanvasNav(defaultOptions);

  // Dark Mode
  const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
  );
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    document.documentElement.setAttribute('class', currentTheme);

    if (currentTheme === 'dark') {
      toggleSwitch.checked = true;
    }
  }
  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('class', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('class', 'light');
      localStorage.setItem('theme', 'light');
    }
  }
  toggleSwitch.addEventListener('change', switchTheme, false);
})(jQuery); // End of use strict

// Quantity JS
jQuery(document).ready(function () {
  // This button will increment the value
  $('.qtyplus').click(function (e) {
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
  $('.qtyminus').click(function (e) {
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
