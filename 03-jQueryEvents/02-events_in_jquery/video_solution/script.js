$(document).ready(function() {
    $("#stream1_btn").click(function() {   // click method = on click
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
   });
   $("#stream2_btn").mouseenter(function() {  // mouseenter = hover
        $(".stream1").removeClass('highlight_stream');  // mouseleave 
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });
}); 


$(document).ready(function() {
     $("#stream1_btn").on("click", function() {
         $(".stream1").removeClass('highlight_stream');
         $(".stream2").removeClass('highlight_stream');
         $(".stream3").removeClass('highlight_stream');
         $(".stream1").addClass('highlight_stream');
    });
    $("#stream2_btn").on("click", function() {
         $(".stream1").removeClass('highlight_stream');
         $(".stream2").removeClass('highlight_stream');
         $(".stream3").removeClass('highlight_stream');
         $(".stream2").addClass('highlight_stream');
    });
    $("#stream3_btn").on("click", function() {
         $(".stream1").removeClass('highlight_stream');
         $(".stream2").removeClass('highlight_stream');
         $(".stream3").removeClass('highlight_stream');
         $(".stream3").addClass('highlight_stream');
    });
 }); 