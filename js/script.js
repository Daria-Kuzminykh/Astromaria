(() => {
  document.addEventListener('DOMContentLoaded', () => {

    if (window.innerWidth < 768) {
      document.querySelectorAll('.animate-none').forEach((el) => {
        el.classList.remove('revealator-slideup');
      });
    };

    const rewievButton = document.querySelector('.rewiev__btn');
    rewievButton.addEventListener('click', () => {
      document.querySelectorAll('.none').forEach((el) => {
        el.classList.toggle('rewiev-active');       
      });
      if (rewievButton.textContent === 'Посмотреть все отзывы') {
        rewievButton.textContent = 'скрыть отзывы';
      }
      else {
        rewievButton.textContent = 'Посмотреть все отзывы';
      };
    });

    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    for (let smoothLink of smoothLinks) {
      smoothLink.addEventListener('click', function (e) {
          e.preventDefault();
          const id = smoothLink.getAttribute('href');
  
          document.querySelector(id).scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      });
    };

    document.querySelectorAll('.tab-btn').forEach((tabButton) => {
      tabButton.addEventListener('click', (event) => {
        const path = event.currentTarget.dataset.path;

        document.querySelectorAll('.tab-btn').forEach((el) => {
          el.classList.remove('tab-btn-active');
        });
        tabButton.classList.add('tab-btn-active');
        document.querySelectorAll('.tab-content').forEach(function(tabContent) {
          tabContent.classList.remove('tab-content-active');
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');
      });
    });

    const burgerButton = document.querySelector('.burger-btn');
    const burgerMenu = document.querySelector('.burger');
    const closeButton = document.querySelector('.btn-close');
    const telButton = document.querySelector('.btn-call');
    const tel = document.querySelector('.header__tel');
    const logo = document.querySelector('.logo');
    burgerButton.addEventListener('click', () => {
      burgerMenu.classList.add('burger-active');
    });
    closeButton.addEventListener('click', () => {
      burgerMenu.classList.remove('burger-active');
    });
    document.querySelectorAll('.nav__link').forEach((el) => {
      el.addEventListener('click', () => {
        burgerMenu.classList.remove('burger-active');
      });
    });
    telButton.addEventListener('click', () => {
      tel.classList.toggle('burger-active');
      telButton.classList.toggle('burger-active');
      logo.classList.toggle('logo-hidden');
    });

    new JustValidate('.form', {
      rules: {
        name: {
          required: true,
          minLength: 2,
          maxLength: 10
        },
        tel: {
          required: true,
          minLength: 11,
          maxLength: 11
        },
        mail: {
          required: true, 
          email: true
        }, 
      },
      messages: {
        name: {
          required: 'Это поле обязательно для заполнения',
          minLength: 'Имя должно иметь длину не меньше двух символов',
          maxLength: 'Имя должно иметь длину не более 10 символов'
        },
        tel: {
          required: 'Это поле обязательно для заполнения',
          minLength: 'Введите корректный номер телефона',
          maxLength: 'Введите корректный номер телефона'
        },
        mail: {
          required: 'Это поле обязательно для заполнения',
          email: 'Введи корректный адрес'
        }
      }   
    });

    const form = document.querySelector('.form');
    form.addEventListener('submit', () => {
      document.querySelectorAll('input').forEach((el) => {
        el.value = '';
      });
    });

    const slider = document.querySelector('.swiper-container');
    let swiperMobile;
    function mobileSlider() { 
      if (window.innerWidth > 767) {
        document.querySelector('.services__list').classList.remove('swiper-wrapper');
      };
      if (window.innerWidth <= 767 && slider.dataset.mobile === 'false') {
        document.querySelector('.services__list').classList.add('swiper-wrapper');
        swiperMobile = new Swiper(slider, {
          slideClass: 'services__item',
  
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: 'true',
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          spaceBetween: 30,
        });
        slider.dataset.mobile = 'true';
      };
    
      if (window.innerWidth > 767) {
        slider.dataset.mobile = 'false';
  
        if (slider.classList.contains('swiper-container-initialized')) {
          swiperMobile.destroy();
        };
      };
    };
  
    mobileSlider();
    
    window.addEventListener('resize', () => {
      mobileSlider();
    });
  });
})();