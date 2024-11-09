$(document).ready(function () {
    $("#maincoursesModal").hide();
    $("#sidesModal").hide();
    $("#desertsModal").hide();
    $("#beveragesModal").hide();

    $("#Appetizers-modal-open").click(function(){
        $("#maincoursesModal").hide();
        $("#sidesModal").hide();
        $("#desertsModal").hide();
        $("#beveragesModal").hide();
        $("#appetizersModal").show();
    });

    $("#MainCourses-modal-open").click(function(){
        $("#maincoursesModal").show();
        
        $("#sidesModal").hide();
        $("#desertsModal").hide();
        $("#beveragesModal").hide();
        $("#appetizersModal").hide();
    });

    $("#Sides-modal-open").click(function(){
        $("#maincoursesModal").hide();
        $("#sidesModal").show();
        $("#desertsModal").hide();
        $("#beveragesModal").hide();
        $("#appetizersModal").hide();
    });

    $("#Deserts-modal-open").click(function(){
        $("#maincoursesModal").hide();
        $("#sidesModal").hide();
        $("#desertsModal").show();
        $("#beveragesModal").hide();
        $("#appetizersModal").hide();
    });

    $("#Beverages-modal-open").click(function(){
        $("#maincoursesModal").hide();
        $("#sidesModal").hide();
        $("#desertsModal").hide();
        $("#beveragesModal").show();
        $("#appetizersModal").hide();
    });

});