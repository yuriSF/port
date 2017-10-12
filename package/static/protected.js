var popupWindow=null;

function popup()
{
    popupWindow = window.open('/verb_list','name','width=200,height=600');
    popupWindow.moveTo(1500, 100);
    popupWindow.focus();
}

function showHelp() {
  $(".message").show();
  $(".top, .extra, .user-forms").addClass('opaq');
  $(".user-forms input").prop('disabled', true);
  $(".extra button").prop('disabled', true);
  $(".top").children().prop('disabled', true)
  $(".top").children().css('pointer-events', 'none');
}

function closeHelp() {
  $(".message").hide();
  $(".top, .extra, .user-forms").removeClass('opaq');
  $(".user-forms input").prop('disabled', false);
  $(".extra button").prop('disabled', false);
  $(".top").children().prop('disabled', false)
  $(".top").children().css('pointer-events', 'all');
}
