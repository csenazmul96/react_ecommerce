import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

// $("#dropdownMenuButton").click(function (){
$(document).on( 'click', '#dropdownMenuButton', function () {

})
$(document).ready(function(){
    $(".product_filter > ul > li").hover(function() {
        $(this).find('.filter_megamenu').css({
            'opacity' : 1,
            'visibility' : 'visible'
        });
    }, function() {
        $(this).find('.filter_megamenu').css({
            'opacity' : 0,
            'visibility' : 'hidden'
        });
    });
    $('.product_fliter_btn button').click(function() {
        $('.filter_megamenu').css({
            'opacity' : 0,
            'visibility' : 'hidden'
        });
    })


    function topMargin() {
        var headerHeight = $('.header_area').outerHeight();
        $('.banner_area , .product_area , .product_single_area , .cart_area , .common_margin').css({
            'margin-top' : `${headerHeight}px`
        })
    }

    topMargin();
    $(window).resize(function() {
        topMargin();
    });

    $('.toggler').click(function() {
        $('html').toggleClass('left_menu_open');
    });

    $('.toggler').click(function() {
        $('#wrap').toggleClass('open_nav');
        $('.mobile_menu').toggleClass('menu_open');
        $('.mobile_overlay').toggleClass('mobile_overlay_open');
        return false;
    });
    $('.mobile_overlay').click(function() {
        $('.mobile_menu').removeClass('menu_open');
        $('.mobile_overlay').removeClass('mobile_overlay_open');
        $('#wrap').removeClass('menu_open');
    });
    $('.header_search_icon').click(function() {
        $('.header_search').slideToggle();
    });
    $(window).on('scroll', function() {

    });
    $('.profile_ic').click(function(){
        $('.right_cart_menu').addClass('cart_open');
        $('.full_screen_overlay').addClass('overlay_open');
        return false;
    });

    $('.close_ic , .full_screen_overlay').click(function(){
        $('.right_cart_menu').removeClass('cart_open');
        $('.full_screen_overlay').removeClass('overlay_open');
    });


    $(document).on('click', '[data-toggle="collapse_slide"]', function(e) {
        e.preventDefault();
        var list = $(this);
        var id = $(this).data('target');
        var hideCount = 0;
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            var elementId = $(element).data('target');
            if (id === elementId) {
                if ($(id).is(":visible")) {
                    $(id).slideUp();
                    hideCount++;
                } else {
                    $(id).slideDown();
                }
            } else {
                $(elementId).slideUp();
                hideCount++;
            }
        }
    });

    $('.product_filter_mobile > ul > li').click(function() {
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
    });

    $('.p_f_c_inner > ul > li').click(function(e) {
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
        // e.preventDefault;
    });

    $('.filter_color_wrap > ul > li').click(function(e) {
        $(this).toggleClass('active');
        // e.preventDefault;
    });

    $(document).mouseup(function(e) {
        $('.product_filter_content').each(function() {
            var dropdown = $(this);
            if (!dropdown.is(e.target) && dropdown.has(e.target).length === 0) {
                dropdown.slideUp();
            }
        });
    });

    $('.pwr_mobile').click(function() {
        $('body').addClass('open_left_cat');
    });

    $('.left_cat_mobile .product_wrap_title').click(function() {
        $('body').removeClass('open_left_cat');
    });

    $('.color_variation').each(function() {
        var allLi = $(this).find('li')
        $(allLi).click(function() {
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        });
        if (allLi.length > 4 ) {
            $(this).addClass('multi_color');
            $(this).append( "<div class='arrow'>+ 2</div>");
            $('.arrow').click(function() {
                $(this).parent().toggleClass('open')
            });
            $( `.color_variation li:nth-child(5)` ).after( "<div class='break'></div>");
        }
    });


    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })

    $(".info_form .form-group input").each(function(){
        // console.log(e);
        if( $(this).val() ) {
            $(this).parent().addClass('hasvalue');
        } else {
            $(this).parent().removeClass('hasvalue');
        }
    });

    $( '.info_form .form-group input' ).keyup(function() {
        if( $(this).val() ) {
            $(this).parent().addClass('hasvalue');
        } else {
            $(this).parent().removeClass('hasvalue');
        }
    });

    $(".info_form .form-group select").on("change",function(){
        if ( $(this).find('option:selected').val()) {
            $(this).parent().addClass('hasvalue');
        }else {
            $(this).parent().removeClass('hasvalue');
        }
    });


    $(document).on('click','.checkout_table_mobile .card-header button', function() {
        var hasCollapsed = $('.checkout_table_mobile .card-header button').hasClass('collapsed');
        if(hasCollapsed){
            $('#toggle_text').html(`Show order summary <i class="lni lni-chevron-down"></i>`);
        } else{
            $('#toggle_text').html(`hide order summary <i class="lni lni-chevron-up"></i>`);
        }
    })

    $('.shipping_list >  li > .inner label').click(function() {
        $(this).parents('.shipping_list > li').toggleClass('selected').siblings().removeClass('selected');
    });

})
