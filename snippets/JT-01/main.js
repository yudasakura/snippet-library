// Cycle thru embed youtube videos and stop them.
$('.youtube-video-iframe').each(function(){
  var iframe_src = $(this).attr('src');
  $(this).attr('src','').attr('src',iframe_src);
});