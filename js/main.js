function slideHover() {


    let allSlides = group('#mini-slides div');

    function changeHover() {
        let index = this.getAttribute('data-nr');
        allSlides.forEach(function (val) {
            val.style.background = 'rgba(255, 255, 255, 0.5)';
        });
        this.style.background = 'transparent';

    };

    allSpans.forEach(function (val, index) {
        val.setAttribute('data-nr', index);
        val.addEventListener('click', changeHover)
    });

};

slideHover();