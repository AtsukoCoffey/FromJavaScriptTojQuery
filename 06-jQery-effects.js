/**
 * 06-jQuery Effects 
 * Animation - Fadein - Fadeout - slide sown- slide up
 */

$(document).ready(function () {

    $("#stream1_btn").on(function () {  // Show method   eg. div, img
        $(".stream1").show('1000');     // 1000 miliseconds , 1 second
        $(".stream2").show('slow');     // Speed slow
        $(".stream3").show('medium');   // Speed medium
        $(".stream1").show('fast');     // Speed fast
        $(".stream1").hide('medium');  // Oposit of show "Hide" and same speed control
        $(".stream1").hide('fast'); 
        $(".stream1").hide('1000'); 
    });
    $("#stream1_btn").on(function () {  // Toggle function   eg. button clickable thing
        $(".stream1").toggle('highlight_stream');
        $(".stream2").toggle('1000');
    });
    $("#stream2_btn").on(function () {  // Slide down 
        $(".stream1").slideDown();
        $(".stream1").slideDown(1000);
        $(".stream2").slideUp();        // Slide up
        $(".stream3").slideUp(1000);
    });
    $("#stream3_btn").on(function () {  // Slide Toggle
        $(".stream1").slideToggle();
        $(".stream2").slideToggle(1000);
    });
    $("#stream3_btn").on(function () {  // Fade In
        $(".stream1").fadeIn();
        $(".stream2").fadeIn(1000);
    });
    $("#stream3_btn").on(function () {  // Fade Out
        $(".stream1").fadeOut();
        $(".stream2").fadeOut(1000);
    });
    $("#stream3_btn").on(function () {  // Fade Toggle
        $(".stream1").fadeToggle();
        $(".stream2").fadeToggle(1000);
    });
    $("#stream3_btn").on(function () {  // Fade Toggle
        $(".stream1").fadeTo(1000, 0.5);  //<-- 0 is fully transparent (hidden) and 1 is fully opaque 
       
    });



});

// Animation
// The ability to fade elements in and out of visibility or to slide elements 
// can be done with a simple line of code.
// All the effects can be implemented over a specified time, resulting in animation.
// The duration of the effect may specify the milliseconds, or use one of three preset timings: fast, medium, or slow.
// So let's look at some 