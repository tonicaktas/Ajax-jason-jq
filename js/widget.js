$(document).ready(function () {

  // Ajax med jq, varifrån hämtas data
  $.getJSON('../data/personal.json', function (data) {
    // skapar vart allt ska läggas in
    var statusHTML = '<ul class="bulleted">';
    // loop med jq
    $.each(data,function (index, personal) {
      if (personal.inoffice === true) {
        statusHTML +='<li class="in">';
      } else {
        statusHTML +='<li class="out">';
      }
      statusHTML += personal.name + '</li>';
    });
    statusHTML += '</ul>';
    $('#PersonalListan').html(statusHTML)
  }); // end getJSON
}); // end ready
