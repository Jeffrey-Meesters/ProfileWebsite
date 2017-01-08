$(document).ready(function(){
  $(".list-item").hover(function(event){
    $(this).css({"font-size": 25, "color": "#FFD700"})
  },
  function(){
    $(this).css({"font-size": "inherit", "color": "inherit"})
  })
});
