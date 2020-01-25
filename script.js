function menuActiveItem() {
   const menuItems = document.querySelectorAll(".items"); 
   menuItems.forEach(item => item.addEventListener("click", activeItem));
}

function activeItem() {
   let menuItem = event.target;
   document.querySelector(".active").classList.remove("active");
   menuItem.classList.add("active");
   document.querySelector(".navbar-collapse").classList.remove("show");
}

function scrollMenu() {
   //const anchors = document.querySelectorAll('a[href*="#"]:not([href="#"]');
   const anchors = document.querySelectorAll('.items');
   let animationTime = 300;
   let framesCount = 20;
   anchors.forEach(item => {
      item.addEventListener('click', function (e) {
         e.preventDefault();
         let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
         // запускаем интервал, в котором
         let scroller = setInterval(function () {
            // считаем на сколько скроллить за 1 такт
            let scrollBy = coordY / framesCount;
            // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
            // и дно страницы не достигнуто
            if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
               // то скроллим на к-во пикселей, которое соответствует одному такту
               window.scrollBy(0, scrollBy);
            } else {
               // иначе добираемся до элемента и выходим из интервала
               window.scrollTo(0, coordY); coordY = 0;
               clearInterval(scroller);
            }
            // время интервала равняется частному от времени анимации и к-ва кадров
         }, animationTime / framesCount);
      });
   });
}

// go to top
let scrollButton = document.querySelector(".scroll_top");

function goToTop() {
   window.addEventListener("scroll", showScroll);
   scrollButton.addEventListener("click", goUp);
}

function showScroll() {
   let scrolled = window.scrollY + 200;
   let y = document.documentElement.clientHeight;

   if (scrolled > y) {
      scrollButton.classList.add("show");
   } else {
      scrollButton.classList.remove("show");
   }
}

function goUp() {
   var x = window.pageYOffset;
   moveUp();

   function moveUp(){ 
      
      if (x > 0) {
         window.scroll(0, x - 80); x = x - 80; console.log(x);
         setTimeout(moveUp, 0);
      };
   }
  
   document.querySelector(".active").classList.remove("active"); 
   document.querySelector('a[href="#home"]').classList.add("active"); 
}

function formSubmit() {
   document.querySelector("#form-submit").addEventListener("click", function () {
      event.preventDefault();
      document.querySelector("form").reset();
   })
}


formSubmit()
menuActiveItem()
//scrollMenu()
goToTop()