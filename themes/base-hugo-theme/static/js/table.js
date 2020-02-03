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
       // $('#get-data').click(function () {
          var showData = $('#show-data');
      
          $.getJSON('/json/example.json', function (data) {
            console.log(data);
      
            const items = data.items.map(function (item) {
              //item.phone = "665-8613"; 
              if (item.service == 'ea') { 
                 item.service = 'Education & Advocacy'; 
                } 
              if (item.service == 'la') { 
                item.service = 'Legal Aid'; 
                }   
              return '<div>' + item.name + '<br>' + item.location + '<br>' + item.site
              + '<br>' + item.service + '<br>' + item.phone + '</div>';
               
                }); 
            
        
            
        
            showData.empty();

           

      
            if (items.length) {
              var wrapper = '<div class="col-12 col-md-4 col-xl-3">'  
              var content = wrapper + items.join('</div>' + wrapper) + '</div>';
              //var list = $('<ul />').html(content);
              showData.append(content);
            }
          });
      
          showData.text('Loading the JSON file.');
      //  });
      });

 

})(jQuery);
