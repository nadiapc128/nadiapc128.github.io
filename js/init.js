(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

    $('.pushpin-demo-nav').each(function() {
      var $this = $(this);
      var $target = $('#' + $(this).attr('data-target'));
      $this.pushpin({
          top: $target.offset().top,
          bottom: $target.offset().top + $target.outerHeight() - $this.height()
      });
    });

      $('.materialboxed').materialbox();

  }); // end of document ready
})(jQuery); // end of jQuery name space
