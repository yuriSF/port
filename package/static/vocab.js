var correctVerb;
var correctTranslation;

$(document).ready(function() {
  var timer;
  $("#questions").on('change', "input[name='quiz']", function() {
      console.log('input fired')
      var userTranslation = $('input[name=quiz]:checked').val();
      console.log('userTranslation', userTranslation);
      console.log('correctTranslation', correctTranslation);
      console.log(userTranslation == correctTranslation)

      var selectedLabel = $("input:radio:checked").siblings()[0]
      if (userTranslation == correctTranslation) {
          $(selectedLabel).addClass("correct-answer");
          timer = setTimeout(function(){
            loadQuestion()
          }, 5000);
      }
      else {
        $(selectedLabel).addClass("wrong-answer");
      }
  })

  $('#next-button').on('click', function() {
    clearTimeout(timer);
    loadQuestion();
  })
})

function loadQuestion() {
  __url = '/random'
  var settings = {
    url: __url,
    dataType: 'json',
    type: 'GET',
    success: function displayData(quiz) {
      correctVerb = quiz.correctVerb;
      correctTranslation = quiz.correctTranslation;
      var translations = quiz.translations;
      var html = `What does <em>${correctVerb}</em> mean? <br>`
      for (var i=0; i<quiz.translations.length; i++ ) {
          var trans = quiz.translations[i];
          line = `<div>
                    <input class='quiz-button' type="radio" name="quiz"
                    value="${trans}">
                    <label class='answer-choice'>${trans}</label>
                </div>`
          html = html + line;
      }
      $('#questions').html(html);
      console.log('quiz questions');
    },
    error: function badData(err) {
      console.log(err);
    }
  };
  $.ajax(settings);
}
