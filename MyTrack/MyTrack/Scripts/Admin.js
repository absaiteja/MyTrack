$(document).ready(function () {
    $('#tabs').tabs();
    
    $(".chosen").chosen({ no_results_text: "Oops, nothing found!" });
    $(".chosen").chosen({ max_selected_options: 5 });
});