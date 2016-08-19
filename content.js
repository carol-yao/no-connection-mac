$(function() {
  var imgURL = chrome.extension.getURL("unable.png");
  $('body').html("<img src=" + "'" + imgURL + "'" + ">");
  $('img').css('width', '100%')
})
