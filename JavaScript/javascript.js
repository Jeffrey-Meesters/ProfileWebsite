$(document).ready(function(){

// index page
  $(".list-item").hover(function(event){
    $(this).css({"font-size": 25, "color": "#FFD700"})
  },
  function(){
    $(this).css({"font-size": "inherit", "color": "inherit"})
  });
// end index page

// contact page
  $(".dontShowEmail").prop('checked', true)

  $(".dontShowEmail").click(function(event) {
    $(".show-email").attr("checked", false),
    $("#email").css({"visibility": "hidden", "opacity": 0}),
    $(".shows").empty(),
    showEmail()
  }) // end contact page
// end of document ready
});

// index page
function contact() {
  location.href = "./contact";
};

function indexPage() {
  location.href = "./";
}
// end index page

// contact page
function showEmail(){
  $(".show-email").attr("checked", "checked")
  if($(".show-email").is(":checked")) {
    $("#email").append("<span id=appended>Type nummers 1 t/m 3 <input type=text id=show oninput=show() placeholder=nummers></input><br></span>"),
    $("#email").css({"visibility": "visible", "opacity": 1})
  } else {
    $("#email").empty()
  }
}

function show(event){
  var show1 = $("#show1").length // if 0 = false || if >1 = true
  var show2 = $("#show2").length
  var show3 = $("#show3").length


  if ( show1 === 0 ) {
    var numbers1 = $("input[type=text]").val()

    if (numbers1 === "1") {
      return $(".shows").append("<span id=show1 >jjeffrey</span>")
    }
  }

  if ( show2 === 0 ) {
      var numbers2 = $("input[type=text]").val()

    if (numbers2 === "12") {
      return $(".shows").append("<span id=show2 >meesters@</span>")
    }
  }

  if ( show3 === 0 ) {
      var numbers3 = $("input[type=text]").val()

    if (numbers3 === "123") {
      return $(".shows").append("<span id=show3 >gmail.com</span>"),
      $("input[type=text]").blur()
    }
  }

  if ($("input[type=text]").val() != "123"){
    $("#email").empty(),
    $(".shows").empty(),
    $("#email").css({"visibility": "hidden", "opacity": 0})

  }
  // Things that are seen, can't be unseen ;)
}
// end contact page
