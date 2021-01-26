function accordionID() {
  if (window.location.hash) {
    var hash = window.location.hash;
    $("a[href='" + hash + "']").next('.p-accordion__content').slideToggle(250);
    $("a[href='" + hash + "']").parent().toggleClass('open');
    $('html, body').animate({
      scrollTop: $("a[href='" + hash + "']").offset().top - 250
    }, 500);
  }
}