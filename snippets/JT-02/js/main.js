// Find all the external links
// Make them open in new tabs
// Append a span to hold the SVG
// load the SVG inline so it can be affected by ::visibility
$('.l-content a[href*="//"]')
  .not('a[href*=geothermal]')
  .attr('target', '_blank')
  .append('<span class="is-external"></span>')
  .ready(function() {
    $('.is-external').load("/themes/geothermal/img/icons/external-link-alt.svg");
});