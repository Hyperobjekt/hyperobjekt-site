(function($) {
    var jQuery = $.noConflict(false);
    var $ = jQuery;

    
   /* console.log("Hello world!"); 

        var spreadsheetId = "1ZWf7zFLkcRwSVYhleN_7eFHZ8vxnnjykTwLFMyH9s-k",
        url = "https://spreadsheets.google.com/feeds/list/1ZWf7zFLkcRwSVYhleN_7eFHZ8vxnnjykTwLFMyH9s-k/od6/public/basic?alt=json";

    $.getJSON({
        url: url,
        success: function(response) {
            console.log(response);
                
        }
        
        });
    var obj = JSON.parse(entry);
    document.getElementById("demo").innerHTML =
    obj.resource[1].title;   */
        
    $(document).ready(function () {
      var SHEET_BASE =  'https://spreadsheets.google.com/feeds/list/1ZWf7zFLkcRwSVYhleN_7eFHZ8vxnnjykTwLFMyH9s-k/';
      var SHEET_END = '/public/values?alt=json';
      const SHEET_1_URL = SHEET_BASE + '1' + SHEET_END;
    // const SHEET_2_URL = SHEET_BASE + '2' + SHEET_END;
        
        
        $('#ak').click(function () {
          SHEET_NUMBER = 1
          $('#show-data').empty();
           getState();
        });
        $('#al').click(function () {
          SHEET_NUMBER = 2
            $('#show-data').empty();
            getState();
         });

        function getState(){
          var SHEET_URL = SHEET_BASE + SHEET_NUMBER + SHEET_END;
          $.getJSON(SHEET_URL, function (data) {
            var resource = data.feed.entry
            for (var i = 0; i < resource.length; i++) {
              var rname = resource[i].gsx$resourcename.$t
              var location = resource[i].gsx$location.$t
              var link = resource[i].gsx$link.$t
              var content = '<div class="col-12 col-md-4 col-xl-3">' + rname + '<br>' + location + '<br>' + link + '</div>'
              var showData = $('#show-data');
              showData.append(content);
            };   
         });
        };  
    });

 

})(jQuery);
