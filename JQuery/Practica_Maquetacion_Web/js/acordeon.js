$(document).ready(function(){
    $('.acordeon h2').click(function(){
      $(this).next('p').slideToggle();
    });
  });