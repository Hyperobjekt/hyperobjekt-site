(function($) {
    var jQuery = $.noConflict(false);
    var $ = jQuery;
    
    $(document).ready(function () {
      var SHEET_BASE =  'https://spreadsheets.google.com/feeds/list/1ovKReDiQ2Qz1UKbbdnCFyz8gIGdm5ik0m3leKcV38Ts/';
      var SHEET_END = '/public/values?alt=json';

        //Map-based selection of states
        $('svg g').click(function () {
          $('#show-data').empty()
          .css({"opacity":"0"})
          .stop(true,false)
          .animate({ 
          opacity: "1"
          }, 2400); 
          var stateID = $(this).attr('id');
          var stateNum = stateID.substr(2);
           getState(stateNum);
        });

        //Dropdown menu selection of states
        $('.submit-state').click(function () {
          $('#show-data').empty()
          .css({"opacity":"0","left":"100%"})
          .stop(true,false)
          .animate({
          left:"0",  
          opacity: "1"
          }, 1700);
          var stateID = $( "#states" ).val();
          var stateNum = stateID.substr(2);
           getState(stateNum);
        });
      
        function getState(SHEET_NUMBER){ // Loads state's data from Google Sheet when triggered by clicking
          // Use SHEET_NUMBER to identify the relevant sheet tab for each state, e.g. Alaska = 1
          var SHEET_URL = SHEET_BASE + SHEET_NUMBER + SHEET_END; 
          // Get the Google Sheets JSON feed for this state
          $.getJSON(SHEET_URL, function (data) {
              var resource = data.feed.entry
              for (var i = 0; i < resource.length; i++) {
              // Set variable for value in Icons column  
              var icons = resource[i].gsx$icons.$t
              // Set icon variables to empty string
              var icon1 = ''
              var icon2 = ''
              var icon3 = ''
              var icon4 = ''
              // Set icons classes to empty strings
              var class1 = '' 
              var class2 = ''
              var class3 = '' 
              var class4 = '' 
              // If icons column cell contains "la" ...
              var la = icons.includes("la");
              if (la === true) {
                // give it a class we can use for filtering on front end ...
                class1 = 'la '
                // ... and declare it "Legal Aid" on front end
                var icon1 = "Legal Aid<br>"
              };
              var ea = icons.includes("ea");
              if (ea === true) {
                class2 = 'ea '
                var icon2 = "Education & Advocacy<br>"
              };
              var ha = icons.includes("ha");
              if (ha === true) {
                class3 = 'ha '
                var icon3 = "Housing Assistance<br>"
              };
              var tr = icons.includes("tr");
              if (tr === true) {
                class4 = 'tr '
                var icon4 = "Tenant Rights"
              };
              // Assign variables for other column headers
              var rname = resource[i].gsx$organization.$t
              var location = resource[i].gsx$city.$t
              var link = resource[i].gsx$website.$t
              // Set up rendering of data on front end
              var wrapLink = "<a target='_blank' href='" + link + "'>Website</a>";
              var content = '<div class="state-data col-12 col-md-4 col-xl-3 ' + class1 + class2 + class3 + class4 + '">' + rname + '<br>' + location + 
              '<br>' + wrapLink + '<br>' + icon1 + icon2 + icon3 + icon4 + '</div>';
              // Append rendered data to a div
              var showData = $('#show-data');
              showData.append(content); 
              // Clear out filter checkboxes
              $(".services-filter").prop("checked", false);      
            };   
          });
        };  
    });
    // Set up filtering functionality on front end
    $("#filters :checkbox").click(function() {
      $("div.state-data").hide();
      $("#filters :checkbox:checked").each(function() {
          $("." + $(this).val()).show();
      });
   });
   
 

})(jQuery);
