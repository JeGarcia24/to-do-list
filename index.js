$(document).ready(function(){

    //To Do List
      $("#inputArea").on("keyup", function(e){
        
        var item = $("#inputArea").val();
        var task = $("<div id='taskArea'></div>").text(item); // use <div id='taskArea'></div> instead of just $("#taskArea") so that text will be written after enter key only
        
        if(e.which == 13 && item != ""){  // in jquery e.which does the job of e.keycode
  
          var done = $('<i class="fa fa-check-square" aria-hidden="true"></i>').click(function(){ //  <span class="glyphicon glyphicon-check"></span>
            var p = $(this).parent();
            p.fadeOut(function(){
              $("#compList").append(p);
              p.fadeIn();
            });
            $(this).remove();
          });
  
          var del = $('<i class="fa fa-trash" aria-hidden="true"></i>').click(function(){ // <span class="glyphicon glyphicon-trash"></span>
            var p = $(this).parent();
            p.fadeOut(function(){
              p.remove();
            });
          });
  
          task.append(del, done);
          $("#incompList").append(task);
          $("#inputArea").val(""); // var item to clear the text area after enter
        }
      });
  
    //Date and Time

      //The getDay() method returns the day of the week (from 0 to 6) for the specified date. Note: Sunday is 0, Monday is 1, and so on.
      var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
      $("#day").html(day[new Date().getDay()] + ",");

      /*The getMonth() method returns the month (from 0 to 11) for the specified date, according to local time. 
      Note: January is 0, February is 1, and so on.*/
      var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      $("#date").html(month[new Date().getMonth()] + " " + new Date().getDate() + "," + " " + new Date().getFullYear()) ;
      
      function myClock(){
        var today = new Date(); 
        var min = today.getMinutes();
        var h = today.getHours();
        var sec = today.getSeconds(); 
        
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;
        h = h < 10 ? "0" + h : h;
  
        return h + ":" + min + ":" + sec
      }
  
      setInterval(() => {
        $("#time").html(myClock()) 
      }, 1000);
  
    //quote generator
  
      var data = [
        ["Don't compare yourself with anyone in this world. If you do so, you are insulting yourself.", "Bill Gates"],
        ["No one can make you feel inferior without your consent.", "Eleanor Roosevelt"],
        ["The way to get started is to quit talking and begin doing.", "Walt Disney"],
        ["There are no limits to what you can accomplish, except the limits you place on your own thinking.", "Brian Tracy"],
        ["Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.", "Albert Einstein"],
        ["If you cannot do great things, do small things in a great way.", "Napoleon Hill"],
        ["It does not matter how slowly you go as long as you do not stop.", "Confucius"],
        ["The secret of getting ahead is getting started.", "Mark Twain"],
        ["Happiness is not something you postpone for the future; it is something you design for the present.", "Jim Rohn"],
        ["There is nothing impossible to him who will try.", "Alexander the Great"],
        ["No act of kindness, no matter how small, is ever wasted", "Aesop"],
        ["The best preparation for tomorrow is doing your best today.", "H. Jackson Brown, Jr."],
        ["Shoot for the moon and if you miss you will still be among the stars.", "Les Brown"],
        ["It is in your moments of decision that your destiny is shaped.", "Tony Robbins"],
        ["Most of us have far more courage than we ever dreamed we possessed.", "Dale Carnegie"],
    ];
  
  function shuffleQuotes(){
      var shuffle = Math.floor(Math.random() * data.length);
      $("#quote").html('<p> <i class="fa fa-quote-left" aria-hidden="true"></i> ' + data[shuffle][0] + ' <i class="fa fa-quote-right" aria-hidden="true"></i></p>');
      $("#author").html("<p>- " + data[shuffle][1] + "</p>");
  };
  
  setInterval(() => {
    $("#quoteGenerator").html(shuffleQuotes())
  }, 30000); // 30sec change
  
})
    




