window.onload = () => {
    let resDivExist = false;

    $('.openResBtn').on('click', function () {
        if (!resDivExist) {
            $(this).after('<div class=resDiv></div>');
            $('.resDiv').addClass('mt-3 mb-3 d-flex');
            resDivExist = true;

            $('.resDiv').append(
                '<div><img src="./img/img1.png"></img></div>',
                '<div><img src="./img/img2.png"></img></div>',
                '<div><img src="./img/img3.png"></img></div>',
                '<div><img src="./img/img4.png"></img></div>',
                '<div><img src="./img/img5.png"></img></div>',
                '<div><img src="./img/img6.png"></img></div>',
                '<div><img src="./img/img7.png"></img></div>',
                '<div><img src="./img/img8.png"></img></div>',
                '<div><img src="./img/img9.png"></img></div>');


            $('.resDiv div img').addClass('w-100 p-3');

            $('.resDiv').slick({
                centerMode: true,
                centerPadding: '60px',
                autoplay: true,
                autoplaySpeed: 2000,
                pauseOnFocus: true,
                arrows: false,
                slidesToShow: 5,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '40px',
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '40px',
                            slidesToShow: 1
                        }
                    }
                ]
            });
        }
        else {
            $('.resDiv').remove();
            resDivExist = false;
        };
    })






}