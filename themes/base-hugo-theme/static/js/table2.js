(function($) {
    var jQuery = $.noConflict(false);
    var $ = jQuery;
    
    $(document).ready(function () {
      var SHEET_BASE =  'https://spreadsheets.google.com/feeds/list/1ovKReDiQ2Qz1UKbbdnCFyz8gIGdm5ik0m3leKcV38Ts/';
      var SHEET_END = '/public/values?alt=json';
  
        $('a.state').click(function () {
          $('#show-data').empty();
          var stateID = $(this).attr('id');
          var stateNum = stateID.substr(2, 1);
           getState(stateNum);
        });

        $('.submit-state').click(function () {
          $('#show-data').empty();
          var stateID = $( "#states" ).val();
          var stateNum = stateID.substr(2, 1);
           getState(stateNum);
        });
      
        function getState(SHEET_NUMBER){ // Loads state's data when triggered by clicking
          var SHEET_URL = SHEET_BASE + SHEET_NUMBER + SHEET_END;
          $.getJSON(SHEET_URL, function (data) {
            var resource = data.feed.entry
            for (var i = 0; i < resource.length; i++) {
              var icons = resource[i].gsx$icons.$t
              var la = icons.includes("la");
              var ea = icons.includes("ea");
              var ha = icons.includes("ha");
              var tr = icons.includes("tr");
              var icon1 = ''; var icon2 = ''; var icon3 = ''; var icon4 = '';
              var class1 = ''; var class2 = ''; var class3 = ''; var class4 = '';
              if (la === true) {
                class1 = 'la '
                var icon1 = "Legal Aid<br>"
              };
              if (ea === true) {
                class2 = 'ea '
                var icon2 = "Education & Advocacy<br>"
              };
              if (ha === true) {
                class3 = 'ha '
                var icon3 = "Housing Assistance<br>"
              };
              if (tr === true) {
                class4 = 'tr '
                var icon4 = "Tenant Rights"
              };
              var rname = resource[i].gsx$organization.$t
              var location = resource[i].gsx$city.$t
              var link = resource[i].gsx$website.$t
              var wrapLink = "<a target='_blank' href='" + link + "'>Website</a>";
              var content = '<div class="state-data col-12 col-md-4 col-xl-3 ' + class1 + class2 + class3 + class4 + '">' + rname + '<br>' + location + 
              '<br>' + wrapLink + '<br>' + icon1 + icon2 + icon3 + icon4 + '</div>';
              if (icon1 === 'Legal Aid') {
               console.log('check'); 
               $('div').addClass('la');
              };
              var showData = $('#show-data');
              showData.append(content);
              
            };   
         });
        };  


    });
    $("#filters :checkbox").click(function() {
      $("div.state-data").hide();
      $("#filters :checkbox:checked").each(function() {
          $("." + $(this).val()).show();
      });
   });
   
 

})(jQuery);
