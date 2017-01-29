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

// HTML5 Speech Recognition API
function startDictation() {

  if (!('webkitSpeechRecognition' in window)) {
    upgrade();
  } else {
    var recognition = new webkitSpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = function(e) {
      var value1 = $('#transcript').value
                               = e.results[0][0].transcript;

    recognition.stop();
      if (value1 === "1 2 3") {
        $('#transcript').attr(value1),
        $(".shows").append("<span id=show1 >jjeffreymeesters@gmail.com</span>")
      }
    };

    recognition.onerror = function(e) {
      recognition.stop();
    }
  }
}

// contact page
function showEmail(){
  $(".show-email").attr("checked", "checked")
  if($(".show-email").is(":checked")) {
    $("#email").append("Type 123 of klik op de microfoon en spreek de getallen uit:<br><div id=appended><input type=text name=q id=transcript oninput=show() placeholder=nummers><img onclick=startDictation() id=microphone-img src=../Images/microphone.png /></input></div>"),
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
    $(".shows").empty(),
    $("#email").css({"visibility": "hidden", "opacity": 0})

  }
  // Things that are seen, can't be unseen ;)
}
// end contact page
