// check if browser is mobile and if true do the folowing
    var isMobile = navigator.userAgent.search(/(mobile)/ig);
    if (isMobile > -1) {
        $(".test1").attr("src", images[0]);
    }

// check jquery version
    console.log(jQuery().jquery);

// if another library that uses "$" is present then use the following to avoid conflict
    $.noConflict();
    jQuery( document ).ready(function( $ ) {
    // Code that uses jQuery's $ can follow here.
    });
    // Code that uses other library's $ can follow here.

// get utc current timestamp
    var d1 = new Date();
    d1.toUTCString();

// clone object
    // Shallow copy
    var newObject = jQuery.extend({}, oldObject);
    // Deep copy
    var newObject = jQuery.extend(true, {}, oldObject);

// replacement for JQuery "ready" method
    window.onload = function() {};

// get events
    console.dir( $('.test1').data('events') );

// jquery event data object, needs a node as first argument
    $._data($(".test1"+index)[0], "events" );

// set a cookie that will expire in 30m (60s*30m will give total seconds used below)
    var now = new Date();
    now.setTime(now.getTime() + 1 * 1800 * 1000);
    document.cookie = "tooSoon=banana; expires=" + now.toUTCString() + "; path=/";
// when deleting a previously set cookie the process is exactly like setting a new cookie only the value needs to match the path and domain of the original cookie you're trying to delete, the difference is that we set the expiry date in the past and by doing so it will be deleted.
    var now = new Date();
    now.setTime(now.getTime() + 1 * 1800 * 1000);
    document.cookie = "tooSoon=banana; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";

// get the current calculated style of the object/element,
    var nav = document.querySelector(".test1"),
        navHeight = nav.offsetHeight,
        navStyle = nav.currentStyle || window.getComputedStyle(nav),
        navMarginBottom = parseInt(navStyle.marginBottom);

// prevent default on all selected elements and then return default behaviour if the element has been clicked two times in a row
    $("a").addClass('prevented');
    $("a").click(function (e){
        if($(this).hasClass('prevented')){
            e.preventDefault();
            $("a").addClass('prevented');
            $(this).removeClass('prevented');
        }
    });

// prevent default and propagation
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    // preventDefault: Cancels the event if it is cancelable, without stopping further propagation of the event.
    // stopPropagation: Prevents further propagation of the current event.
    // stopImmediatePropagation: Prevents other listeners of the same event from being called.

// overide scroll to top
    $(document).ready(function() {
        $('.test1').unbind();
        $(".test1").click(function(e){
            e.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, 500);
        }); 
    });

// fix for clones on owl carousel
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
                margin:30,
                loop:true,
                nav:true,
                dots:false,
                autoplay:true,
                autoplayTimeout:3000,
                autoplaySpeed:500,
                autoplayHoverPause:true,
                responsive:{
                    0:{items:3},
                    750:{items:5}
                }
        });
    // fix modal hotspots that are not triggered on cloned items by finding the original and triggering the click event on those.
        $('.owl-stage').on('click tap', '.owl-item', function (e) {
            var current = $(this).find("a")[0];
            var currentItemId = $(current).attr("data-test1");
            var currentReal = $($(".owl-item").not(".cloned").find("a[data-test1^='"+currentItemId+"']")[0]);
            currentReal.triggerHandler('click');
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
        });
    // /JS
    });

// smooth scroll
    $('#link').on('click tap', function(e){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

// split string at n character
    var str = 'abcdefghijkl';
    console.log(str.match(/.{1,3}/g));

// pause cycle 
    $('.cycle-slideshow').cycle('pause');

// changing difficult css via js - last resort
    var element = document.querySelector(".test1");
    element.style.setProperty( 'color', 'rgb(255, 0, 0)', 'important' );

// polyfill for IE11 href triggers
    ((window.location.href.indexOf("product") >= 0 && sessionStorage.scrollToReview === "yes") || (location.href.includes("product") && sessionStorage.scrollToReview === "yes"))

//  easy move items
    $(".test1").insertAfter(".test2");

// see all event handlers of an item, must use html node as argument not jquery object
    $._data($("#test1")[0], "events" );
    jQuery._data( elem, "events" );

// interval function that run's every 50ms until 5000s have elapsed then will stop
    var time = 50;
    function count() {
        console.log(time+" ms");
        time += 50;
    }
    var counter = setInterval(count,50);
    var willStopListener = function() {
        clearInterval(counter);
    };
    setTimeout(willStopListener, 5000);

// referrer, back hystory
    document.referrer;
    if ((document.referrer === "http://www.test1.co.uk/" && window.location.hash === "#test2") || (document.referrer === "http://test3.shop.local/" && window.location.hash === "#test4")) {
        $("#test5").click();
    }

// custom link tooltip with svg
    $("#test1").prepend('<a helptext="Your total savings (before discounts from a promotional code) for this order." helptitle="Delivery Charge" class="help"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><path d="M500,10C229.8,10,10,229.8,10,500s219.8,490,490,490c270.2,0,490-219.8,490-490C990,229.8,770.2,10,500,10z M540.9,813.6c-12.9,11.5-27.8,17.2-44.8,17.2c-17.5,0-32.8-5.7-45.8-17s-19.6-27.2-19.6-47.6c0-18.1,6.3-33.3,18.9-45.6c12.6-12.3,28.1-18.5,46.5-18.5c18.1,0,33.3,6.2,45.6,18.5c12.3,12.3,18.5,27.5,18.5,45.6C560.3,786.3,553.8,802.1,540.9,813.6z M701.7,415c-9.9,18.4-21.7,34.2-35.3,47.6c-13.6,13.3-38.1,35.8-73.4,67.4c-9.8,8.9-17.6,16.7-23.5,23.5c-5.9,6.7-10.3,12.9-13.1,18.5c-2.9,5.6-5.1,11.2-6.7,16.8c-1.6,5.6-3.9,15.4-7.1,29.5c-5.5,29.8-22.5,44.8-51.2,44.8c-14.9,0-27.5-4.9-37.7-14.6c-10.2-9.8-15.3-24.3-15.3-43.5c0-24.1,3.7-45,11.2-62.6c7.5-17.6,17.4-33.1,29.7-46.5c12.3-13.3,29-29.2,49.9-47.6c18.4-16.1,31.6-28.2,39.8-36.4s15.1-17.3,20.7-27.3c5.6-10,8.4-20.9,8.4-32.7c0-23-8.5-42.3-25.6-58.1c-17.1-15.8-39.1-23.7-66.1-23.7c-31.6,0-54.8,8-69.7,23.9c-14.9,15.9-27.5,39.4-37.9,70.4c-9.8,32.4-28.3,48.6-55.5,48.6c-16.1,0-29.6-5.7-40.7-17c-11-11.3-16.6-23.6-16.6-36.8c0-27.3,8.8-54.9,26.3-82.9c17.5-28,43-51.2,76.6-69.5c33.6-18.4,72.7-27.5,117.5-27.5c41.6,0,78.3,7.7,110.2,23c31.9,15.4,56.5,36.2,73.8,62.6c17.4,26.4,26,55.1,26,86.1C716.5,375.2,711.6,396.6,701.7,415z"></path></g></svg></a>');

// create help hover dialogs - original code can be found by searching the source
    $(document).ready(function() {
        $(".help, .helpNoImage").livequery(function() {

            $(this).hover(function() {
                if ($(this).attr('helpText')) {

                    var target = 'body';
                    var offLeft = 430;
                    var offTop = 25;

                    if ($(this).attr('target')) {
                        target = $(this).attr('target');
                    }

                    if ($(this).attr('offLeft')) {
                        offLeft = $(this).attr('offLeft');
                    }

                    $('#helpDiv').remove();
                    $(target).append('<div id="helpDiv" style="z-index: 15000;"><div class="helpDivInner">' +
                        ($(this).attr('helpTitle') && $('#helpDiv .title').size() == 0 ? '<div class="title">' +
                            $(this).attr('helpTitle') + '</div>' : '') + $(this).attr('helpText') + ' </div></div>');

                    var offLeft = ($(this).offset().left - offLeft);

                    if ($(this).attr('textAbove') && target == 'body') {
                        $('#helpDiv')
                            .animate({
                                opacity: 0,
                                marginLeft: 0,
                                top: $(this).offset().top - ($('#helpDiv').height()) - (offTop - 18),
                                left: $(this).offset().left
                            }, 1)
                            .animate({
                                opacity: 1
                            });
                    } else if (target == 'body') {
                        $('#helpDiv')
                            .animate({
                                opacity: 0,
                                marginLeft: ($('#helpDiv').width() / 2) + 'px',
                                top: $(this).offset().top + offTop,
                                left: offLeft
                            }, 1)
                            .animate({
                                opacity: 1
                            });
                    } else {
                        $('#helpDiv')
                            .animate({
                                opacity: 0,
                                marginLeft: ($('#helpDiv').width() / 2) + 'px',
                                top: $(this).offset().top - ($('#helpDiv').height()) - (offTop - 18),
                                left: offLeft
                            }, 1)
                            .animate({
                                opacity: 1
                            });
                    }

                }
            }, function() {
                if ($(this).attr('helpText')) {
                    $('#helpDiv').each(function() {
                        $(this).remove();
                    });
                }
            });
        }, function() {
            $(this).unbind('mouseover').unbind('mouseout');
        });
    });

// don't use monetate stuff in forms

// disable links
    $(document).ready(function() {
        $("#test1").attr("href","javascript:void(0);");
    });

// using sessionStorage to move simple data across pages - grabs data
    $(document).ready(function() {
        // will get the "stock availability" message and store it in a key in session storage so we can use that data on another page
        function getAvailability() {
            var messageContainer = $("div[data-test1='productDetailsMessages']"),
                proNumber = $("#test2").text(),
                message;
            if (messageContainer.children().length === 0) {
                message = messageContainer.text();
                sessionStorage.setItem('item-' + proNumber, message);
            } else {
                message = $(messageContainer.children()[0]).text();
                sessionStorage.setItem('item-' + proNumber, message);
            }
        }
        $("#trigger").click(getAvailability);
        //  /JS
    });
    // use stored data
    $(document).ready(function() {
        // for testing, delete stored-data container on each function call
        $(".stored-data").remove();
        // create container for injecting data 
        $("#injection").prepend('<div class="stored-data"></div>');
        // retrieve that correct data from the session storage by looping all key-value pairs and see if they match the search criteria
        var resultsKey = [],
            resultsValue = [];
        for (i = 0; i < window.sessionStorage.length; i++) {
            key = window.sessionStorage.key(i);
        if (key.slice(0, 5) === "item-") {
            resultsValue.push(window.sessionStorage.getItem(key));
            resultsKey.push(key);
            }
        }
        resultsKey.forEach(function(key, index) {
            $(".stored-data").append('<p>' + key + '-' + resultsValue[index]);
        });
        // /JS
    });

    // save chrome extensiosn as JSON format
    var a = document.querySelectorAll(".extension-list-item-wrapper .extension-details .extension-title"),
        b = [],
        bJson;

    function getThem(el) {
        b.push(el.innerHTML);
    }
    a.forEach(getThem);
    bJson = JSON.stringify(b);

// Owl carousel 2: When the Loop, URLhashlistener and Autoplay features are enabled they can cause a rendering issue on Iphone Safari. The below code will add a custom autoplay feature so we can disable the native Loop and Autoplay.
    var intervalID = null,
        timeOutID = null,
        isMobile = navigator.userAgent.search(/(mobile)/ig);
    // depending on the flag it will start or clear an interval stack set with the same function
    function intervalManager(flag) {
        if (flag)
            intervalID = setInterval(function() {
                if ($(".owl-item:first-child").hasClass("active")) {
                    $(".owl-carousel").trigger('next.owl.carousel');
                } else {
                    $(".owl-carousel").trigger('prev.owl.carousel');
                }
            }, 4000);
        else clearInterval(intervalID);
    }
    // depending on the flag it will start or clear a timeout stack set with the same function
    function timeOutManager(condition) {
        if (condition)
            timeOutID = setTimeout(function() {
                intervalManager(true);
             }, 8000);
        else clearTimeout(timeOutID);
    }
    // hover in that has custom functionality for mobile
    function hoverIn() {
        if (isMobile > -1) {
            timeOutManager(false);
            timeOutManager(true);
        }
        intervalManager(false);
    }

    function hoverOut() {
        intervalManager(true);
    }
    intervalManager(true);
    $(".owl-stage-outer").hover(hoverIn, hoverOut);
    $(".ff-product").on("click tap", hoverIn);
    $(".owl-next, .owl-prev").on("click tap", hoverIn);
    $('.owl-carousel').on('drag.owl.carousel', hoverIn);

// proper way to destroy the Owl Carousel 2
    $('.size-owl-carousel').data('owlCarousel').destroy();

// the JQuery .scroll() method has a bug that can cause flicker if used to create sticky elements with position fixed and compensating padding; vanilla JS alternative for this works well
    var nav = document.querySelector("#slot4"),
        topOfNav = nav.offsetTop;

    function stickElementss() {
        if (window.scrollY <= topOfNav) {
            $('#refineControl, .customSortBy').removeClass('sticky-element');  
            $("body").css("paddingTop","0");
        } else if (window.scrollY > topOfNav) {
            $('#refineControl, .customSortBy').addClass('sticky-element'); 
            $("body").css("paddingTop","40px");
        }
    }
    window.addEventListener('scroll', stickElementss);

// correct assignment of 'window.onload'

    window.onload = someFunction;
    // Simply set the "onload" variable to be equals to the "someFunction" function ; when the page finishes loading, this function is called.

    window.onload = someFunction();
    // Sets the "onload" variable to be the result of calling someFunction. Unless "someFunction" itself returns a function, this is probably not what you want to do.

    //By default, the onload function is called with a single "event" argument. If you want to pass arguments, you might be able to do something like this :
    window.onload = function (event) {
      someFunction(someArg, someOtherArg);
    };