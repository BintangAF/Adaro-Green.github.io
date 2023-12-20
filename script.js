// Menu Dropdown
const toggleBtn = document.querySelector('.toggle-menu-btn');
const toggleBtnIcon = document.querySelector('.toggle-menu-btn i');
const dropDownMenu = document.querySelector('.dropdown-menu');
const menuItems = document.querySelectorAll('.dropdown-menu a');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
};

menuItems.forEach(function (menuItem) {
    menuItem.addEventListener('click', function () {
        // Tutup dropdown saat item menu diklik
        dropDownMenu.classList.remove('open');
        toggleBtnIcon.classList = 'fa-solid fa-bars';
    });
});

// Swiper
var swiper = new Swiper(".swiper", {
    effect: 'coverflow',    
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    spaceBetween: 25,
    
    centeredSlides: true,
    grabCursor: true,
    fade: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows:true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// Reveal Animasi
let barAnimated = false;
let countAnimated = false;
window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal')

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active')            

            if (!countAnimated) {
            animateCount('.hitung1 span', 500, 3000);
            animateCount('.hitung2 span', 21.33, 3000);
            animateCount('.hitung3 span', 40, 3000);
            animateCount('.hitung4 span', 144, 3000);
            animateCount('.hitung5 span', 50, 3000);    

            countAnimated = true;
            }            
            if(!barAnimated) {
                animateBars();                
                barAnimated = true;
            }
        } 
        else {
            reveals[i].classList.remove('active')
        }        
    }
}

// Animasi Bar
function animateBars() {
    const bar1 = document.querySelector('.ctn2-grafik-bar1');
    const bar2 = document.querySelector('.ctn2-grafik-bar2');

    bar1.classList.add('animasi-grafik-bar1')
    bar2.classList.add('animasi-grafik-bar2')
}

// Animasi Hitung
    function animateCount(element, targetNumber, duration) {
        const countElement = document.querySelector(element);
        const framesPerSecond = 30;
        const increment = targetNumber / (duration / 1000 * framesPerSecond);

        let currentNumber = 0;

        function updateCount() {
            countElement.textContent = Math.round(currentNumber);
            currentNumber += increment;

            if (currentNumber <= targetNumber) {
                requestAnimationFrame(updateCount);
            } else {
                countElement.textContent = targetNumber;
            }
        }

        updateCount();
    }

// Ambil elemen tombol panah
var arrowBtn = document.querySelector('.arrow-display');

// Tambahkan event listener untuk mendeteksi perubahan scroll
window.addEventListener('scroll', function() {
    // Ambil posisi scroll vertikal
    var scrollPosition = window.scrollY;

    // Tentukan posisi elemen target (misalnya, elemen navigasi)
    var targetElement = document.querySelector('.ctn1-item-deskripsi');
    var targetElementPosition = targetElement.offsetTop;

    // Jika posisi scroll melebihi atau sama dengan posisi elemen target, munculkan tombol panah
    if (scrollPosition >= targetElementPosition) {
        arrowBtn.style.display = 'block';
        arrowBtn.classList.add('BounceIn')
        
    } else {
        // Jika tidak, sembunyikan tombol panah
        arrowBtn.style.display = 'none';
        arrowBtn.classList.remove('BounceIn')
    }
});

function animateArrow() {
    let arrowBtn = document.querySelector('.arrow-display')
    arrowBtn.classList.add('arrow-animation')

}
    
