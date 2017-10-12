var resp;
var currentVerb;
var active;
var stext;
var persons = {
  '1sg' : 0,
  '2sg' : 1,
  '3sg' : 2,
  '1pl' : 3,
  '2pl' : 4,
  '3pl' : 5
}

var tams  = {
  'pres-ind' : 2,
  'fut-ind' : 3,
  'impf-ind' :  4,
  'pret-ind' : 5,
  'cond-ind' : 6,
  'pres-perf-ind' : 7,
  "fut-perf-ind" : 8,
  "plus-ind" : 9,
  "pret-ant-ind" : 10,
  "cond-perf-ind" : 11,
  "pres-subj" : 12,
  "imp-subj" : 13
}

var exceptions = new Set(['í', 'ú', 'é', 'ó', 'á', 'ñ', 'answer']);

function leaveField(event) {
  var element = $(event.target);
  var id = element.attr('id');
  $.when($(document).click(function(event) {
    var eventText = $(event.target).text();
    if (exceptions.has(eventText)) {
     }
    else {
      checkFinalAnswer(id);
    }
  })).then(function() {});
  $.when($(document).on('keyup', function(e) {
    if(e.keyCode == 9) {
      checkFinalAnswer(id);
    }
  })
  )
}

function checkFinalAnswer(_selector) {
  var spl = _selector.split('_');
  var tam = spl[0];
  var person = spl[1];
  _person = persons[person]
  _tam = tams[tam]
  var form = resp['conj'][_person][_tam]
  var selector = '#' + _selector;
  var cur_val = $(selector).val();
  if (cur_val != form) {
    $(selector).removeClass("correct");
    $(selector).addClass('wrong');
  }
  else {
    $(selector).removeClass("wrong");
    $(selector).addClass("correct");
  }
}

function showAnswer(event) {
  var element = $(event.target);
  var closestField = element.siblings()[1]
  var id = $(closestField).children().attr('id')
  var spl = id.split('_');
  var tam = spl[0];
  var person = spl[1];
  _person = persons[person]
  _tam = tams[tam]
  var form = resp['conj'][_person][_tam]
  var selector = '#' + id;
  $(selector).removeClass('wrong');
  $(selector).val(form);
  $(selector).addClass("correct");
}

function checkAnswers(event) {
  var element = $(event.target);
  var id = element.attr('id');
  var spl = id.split('_');
  var tam = spl[0];
  var person = spl[1];
  _person = persons[person]
  _tam = tams[tam]
  var form = resp['conj'][_person][_tam]
  var selector = '#' + id;
  cur_selector = selector
  $(selector).removeClass("wrong")
  $(selector).removeClass("correct")
  input = $(selector).val();
  if (input == form) {
    $(selector).removeClass("wrong");
    $(selector).addClass("correct");
  }
}

function writeChar(char) {
  selector = '#' + active;
  var form = resp['conj'][_person][_tam];
  var cur_val = $(selector).val();
  var ctl = document.getElementById(active);
  var startPos = ctl.selectionStart;
  var curArray = cur_val.split("");
  curArray.splice(startPos, 0, char);
  var new_val = curArray.join('');
  $(selector).focus();
  $(selector).val(new_val);
  ctl.selectionStart = startPos + 1;
  ctl.selectionEnd = startPos + 1;
  if (new_val == form) {
    $(selector).removeClass("wrong")
    $(selector).addClass("correct")
  }
  else {
    $(selector).removeClass("correct")
  }
}

function saveVerb(verb) {
  __url = '/event/' + verb
  var settings = {
    url: __url,
    dataType: 'json',
    type: 'GET',
    success: function displayData(data) {
      console.log('success')
      console.log(data.verbNumber)
      $('.added').show().delay(1000).fadeOut();
      var num = data.verbNumber + 1;
      num = '(' + num + ')';
      console.log(num);
      $('#number').html(num);
    },
    error: function badData(err) {
      console.log(err.status);
      if (err.status == '409') {
          $('.not-added').show().delay(1000).fadeOut();
      }
    }
  };
  $.ajax(settings);
}

$(document).ready(function () {
  function getData(verb) {
    __url = '/query/' + verb
    var settings = {
      url: __url,
      dataType: 'json',
      type: 'GET',
      success: function displayData(data) {
        $('.user-forms').find("input[type=text]").val("");
        $('.user-forms input').removeClass("correct")
        $(".main").addClass('main-down')
        $('.user-forms input').css('pointer-events', 'all');
        $('.verb').addClass('visible');
        $('.ready-message').show().delay(3000).fadeOut();
        resp = data;
        currentVerb = resp.base[0][0];
        $('.base').html(resp['base'][0][0]);
        $('.trans').html(resp['base'][0][1]);
      },
      error: function badData(err) {
        console.log(err);
      }
    };
    $.ajax(settings);
  }

  $('#verb-entry').on('submit', function(e) {
    e.preventDefault();
    var verb = $('#verb').val();
    getData(verb);
  })

  $('.random').on('click', function(e) {
    e.preventDefault();
    $(".user-forms input").prop('disabled', false);
    var random = Math.floor((Math.random() * allVerbs.length));
    getData(allVerbs[random]);
  })

  $("input").keydown(function() {
      $(this).removeClass('correct');
      $(this).removeClass('wrong');
      var id = $(this).attr('id');
      active = id;
  })

  $("input").mousedown(function() {
      $(this).removeClass('wrong');
      var id = $(this).attr('id');
      active = id;
  });
});
