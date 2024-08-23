//will wait until page ready
$(document).ready(function() {
    /*when table header is clicked , removes selection class from all other table rows and
      adds the selection class to this table headers row only*/
    $("th").click(function(){
     	$("tr").children().removeClass("selection");
        $(this).siblings().addClass("selection");
    });
});

// First         $("div").first()
// Last          $("div").last()
// Siblings      $("div").siblinkgs()
// Filter        $("div").filter(".intro")   /// intro class in the div

var panelColor = $(this).css("background-color");
console.log(panelColot);
$(".resetButton").css("background-color", panelColor);