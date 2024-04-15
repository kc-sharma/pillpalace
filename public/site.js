const Logo = document.querySelector('#logo');
console.log(Logo);

Logo.addEventListener("click", function () {
  location.reload();
});

SearchForm = document.querySelector('.search-form');

const SearchBooks = () => {
  let filter = document.getElementById('#search-box2').value.toUpperCase();

  let ul = document.getElementById('#myUL');

  let li = ul.getElementsByTagName('li');

  for(var i=0; i<BookNames.length; i++){
    let a = li[i].getElementsByTagName('a')[0];

    let textvalue = a.textContent || a.innerHTML ;

    if(textvalue.toUpperCase().indexOf(filter) > -1){
      li[i].style.display = "";
    }
    else{
      li[i].style.display = "none";
    }
  }
}


document.querySelector('#search-btn').onclick = () => {
  SearchForm.classList.toggle('active');
}

let LoginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () => {
  LoginForm.classList.toggle('active');
}

document.querySelector('#class-login-btn').onclick = () => {
  LoginForm.classList.remove('active');
}

let SignupForm = document.querySelector('.signup-form-container');

document.querySelector('#create-btn').onclick = () => {
  LoginForm.classList.remove('active');
  SignupForm.classList.toggle('active');
}
document.querySelector('#close-btn').onclick = () => {
  SignupForm.classList.remove('active');
}
document.querySelector('#btn2').onclick = () => {
  SignupForm.classList.remove('active');
  LoginForm.classList.toggle('active');
}

document.querySelector('#close-read-btn1').onclick = () => {
  ReadOnly1.classList.remove('active');
}
document.querySelector('#close-read-btn2').onclick = () => {
  ReadOnly2.classList.remove('active');
}
document.querySelector('#close-read-btn3').onclick = () => {
  ReadOnly3.classList.remove('active');
}
document.querySelector('#close-read-btn4').onclick = () => {
  ReadOnly4.classList.remove('active');
}
document.querySelector('#close-read-btn5').onclick = () => {
  ReadOnly5.classList.remove('active');
}
document.querySelector('#close-read-btn6').onclick = () => {
  ReadOnly6.classList.remove('active');
}
document.querySelector('#close-read-btn7').onclick = () => {
  ReadOnly7.classList.remove('active');
}
document.querySelector('#close-read-btn8').onclick = () => {
  ReadOnly8.classList.remove('active');
}
document.querySelector('#close-read-btn9').onclick = () => {
  ReadOnly9.classList.remove('active');
}
document.querySelector('#close-read-btn10').onclick = () => {
  ReadOnly10.classList.remove('active');
}

document.querySelector('#eye1').onclick = () => {
  ReadOnly1.classList.toggle('active');
}
document.querySelector('#eye2').onclick = () => {
  ReadOnly2.classList.toggle('active');
}
document.querySelector('#eye3').onclick = () => {
  ReadOnly3.classList.toggle('active');
}
document.querySelector('#eye4').onclick = () => {
  ReadOnly4.classList.toggle('active');
}
document.querySelector('#eye5').onclick = () => {
  ReadOnly5.classList.toggle('active');
}
document.querySelector('#eye6').onclick = () => {
  ReadOnly6.classList.toggle('active');
}
document.querySelector('#eye7').onclick = () => {
  ReadOnly7.classList.toggle('active');
}
document.querySelector('#eye8').onclick = () => {
  ReadOnly8.classList.toggle('active');
}
document.querySelector('#eye9').onclick = () => {
  ReadOnly9.classList.toggle('active');
}
document.querySelector('#eye10').onclick = () => {
  ReadOnly10.classList.toggle('active');
}

let ReadOnly1 = document.querySelector('.Read-only-books1');
let ReadOnly2 = document.querySelector('.Read-only-books2');
let ReadOnly3 = document.querySelector('.Read-only-books3');
let ReadOnly4 = document.querySelector('.Read-only-books4');
let ReadOnly5 = document.querySelector('.Read-only-books5');
let ReadOnly6 = document.querySelector('.Read-only-books6');
let ReadOnly7 = document.querySelector('.Read-only-books7');
let ReadOnly8 = document.querySelector('.Read-only-books8');
let ReadOnly9 = document.querySelector('.Read-only-books9');
let ReadOnly10 = document.querySelector('.Read-only-books10');

let ClickBook = document.querySelector('.home');

document.querySelector('#book-1').onclick = () => {
  ReadOnly1.classList.toggle('active');
}
document.querySelector('#book-2').onclick = () => {
  ReadOnly2.classList.toggle('active');
}
document.querySelector('#book-3').onclick = () => {
  ReadOnly3.classList.toggle('active');
}
document.querySelector('#book-4').onclick = () => {
  ReadOnly4.classList.toggle('active');
}
document.querySelector('#book-5').onclick = () => {
  ReadOnly5.classList.toggle('active');
}
document.querySelector('#book-6').onclick = () => {
  ReadOnly6.classList.toggle('active');
}
document.querySelector('#book-7').onclick = () => {
  ReadOnly7.classList.toggle('active');
}
document.querySelector('#book-8').onclick = () => {
  ReadOnly8.classList.toggle('active');
}
document.querySelector('#book-9').onclick = () => {
  ReadOnly9.classList.toggle('active');
}
document.querySelector('#book-10').onclick = () => {
  ReadOnly10.classList.toggle('active');
}





window.onscroll = () => {

  SearchForm.classList.remove('active');

  if (window.scrollY > 80) {
    document.querySelector('.header .header-2').classList.add('active');
  }
  else {
    document.querySelector('.header .header-2').classList.remove('active');
  }
}

window.onload = () => {
  if (window.scrollY > 80) {
    document.querySelector('.header .header-2').classList.add('active');
  }
  else {
    document.querySelector('.header .header-2').classList.remove('active');
  }

  fadeOut();
}

function loader() {
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut() {
  setTimeout(loader, 4000)
}

var swiper = new Swiper(".books-slider", {
  loop: true,
  centreSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop: true,
  centreSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".arrivals-slider", {
  spaceBetween: 10,
  loop: true,
  centreSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  centreSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  centreSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});