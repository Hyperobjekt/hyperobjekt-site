(function($) {
    var jQuery = $.noConflict(false);
    var $ = jQuery;
    
    $(document).ready(function () {
      var SHEET_BASE =  'https://spreadsheets.google.com/feeds/list/1cRbxIHtRrGw4iZMb4m07a54_1l3wFl6ovWEPVfoPYjg/';
      var SHEET_END = '/public/values?alt=json';
      var sheetNum = 1;
      getStates(sheetNum);
      /*  //Dropdown menu selection of states
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
        }); */
        function getStates(SHEET_NUMBER){ // Loads state's data from Google Sheet when triggered by clicking
          // Use SHEET_NUMBER to identify the relevant sheet tab for each state, e.g. Alaska = 1
          var SHEET_URL = SHEET_BASE + SHEET_NUMBER + SHEET_END; 
          // Get the Google Sheets JSON feed for this state
          $.getJSON(SHEET_URL, function (data) {
            var resource = data.feed.entry; var totalCount = resource.length
            console.log(totalCount);
            var res = {};
            resource.forEach(function(v) {
              res[v.gsx$state.$t] = (res[v.gsx$state.$t] || 0) + 1;
            })
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
              var class5 =  resource[i].gsx$state.$t
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
              var content = '<div class="state-data col-12 col-md-4 col-xl-3 ' + class1 + class2 + class3 + class4 + class5 + '">' + rname + '<br>' + location + 
              '<br>' + wrapLink + '<br>' + icon1 + icon2 + icon3 + icon4 + '</div>';
              // Append rendered data to a div
              var showData = $('#show-data');
              $(showData).hide();  
              $(showData).append(content);
            }; // for loop
            $('svg g').click(function () {
              /*.css({"opacity":"0"})
              .stop(true,false)
              .animate({ 
              opacity: "1"
              }, 2400); */
              var stateID = $(this).attr('id');
              var stateCode = stateID.substr(0,2);
              var stateCodeUpper = stateCode.toUpperCase();
              var stateCount = res[stateCodeUpper]
              console.log(stateCount + ' resources');
              // Clear out filter checkboxes
              $(".services-filter").prop("checked", false);  
              $('#show-data').show();
              $('div.state-data').each(function() {
                $('div.state-data').hide();
                var stateDiv = ".state-data." + stateCodeUpper;
                $(stateDiv).show();
              });
            }); // svg click function
          }); //getJson
        };  // getstate
    }); //document ready
    // Set up filtering functionality on front end
    $("#filters :checkbox").click(function() {
      $("div.state-data").hide();
      $("#filters :checkbox:checked").each(function() {
          $("." + $(this).val()).show();
      });
   });
   //Map-based selection of states
   
   
// CLP ----------------------------------------------------------------
  $(document).ready(function () {
   /* $('.submit-census').click(function () {
     // $('#show-crosswalk').empty()
      var censusID1 = $( "#census1" ).val();
      var censusID2 = $( "#census2" ).val();
       getCrosswalk(censusID1,censusID2);
    }); */
  });

    $("select").change(function(){
      var censusID1 = $( "#census1" ).val();
      var censusID2 = $( "#census2" ).val();
      if (censusID2 <= censusID1) {
        console.log('Invalid range');
        censusID2 = Number(censusID1) + 10
        $("select#census2").val(censusID2);
      };
        $('select#census2').find('option').each(function() {
            if (Number(this.value) <= censusID1) {
                $(this).attr('disabled', 'disabled');
            } else {
                $(this).removeAttr('disabled');
            }
        });
      getCrosswalk(censusID1,censusID2);
    });

  function getCrosswalk(censusID1,censusID2) {
    console.log(censusID1,censusID2);
    var crosswalkFile = "'#crosswalk" + censusID1 + censusID2 + "'"
    console.log(crosswalkFile);

    $('.years').removeClass("show");
    $('#crosswalk' + censusID1 + censusID2).addClass("show");
  }

})(jQuery);
