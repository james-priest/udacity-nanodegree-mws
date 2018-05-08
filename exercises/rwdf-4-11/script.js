window.onload = function () {
    var menu = this.document.querySelector('#menu');
    var drawer = document.querySelector('#drawer');
    var main = document.querySelector('main');

    menu.addEventListener('click', function(e) {
        drawer.classList.toggle('open');
        e.stopPropagation();
    });
    main.addEventListener('click', function() {
        drawer.classList.remove('open');
    });
};