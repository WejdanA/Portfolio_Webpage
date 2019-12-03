
  var nav_sighn = document.querySelector('#nav_sighn');
  var main = document.querySelector('main');
  var drawer = document.querySelector('.nav');

  nav_sighn.addEventListener('click', function(e) {
    drawer.classList.toggle('open');
    e.stopPropagation();
  });
   main.addEventListener('click', function() {
     drawer.classList.remove('open');
  });




  var d = new Date();
  document.getElementById("date").innerHTML = d;
