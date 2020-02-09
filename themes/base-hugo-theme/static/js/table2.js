(function($) {
    var jQuery = $.noConflict(false);
    var $ = jQuery;

    /**
 * Update URL on click
 */
    
        
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
              var icon1 = ""
              if (la == true) {
                var icon1 = "Legal Aid"
              };
              var rname = resource[i].gsx$organization.$t
              var location = resource[i].gsx$city.$t
              var link = resource[i].gsx$website.$t
              var wrapLink = "<a target='_blank' href='" + link + "'>Website</a>";
              var content = '<div class="col-12 col-md-4 col-xl-3">' + rname + '<br>' + location + 
              '<br>' + wrapLink + '<br>' + icon1 + '</div>'
              var showData = $('#show-data');
              showData.append(content);
            };   
         });
        };  


    });

   
 

})(jQuery);
