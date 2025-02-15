
//jquery for toggle dropdown menu
function initHeader(){
      //toggle sub-menu
      // 1. jQuery for dropdown menus (using event delegation)
      $(document).on('click', '.sub-btn', function () {
            $(this).next('.sub-menu').slideToggle();
      });

      //toggle more-menu
      $(document).on('click', '.more-btn', function () {
            $(this).next('.more-menu').slideToggle();
      });


      //javascript for the responsive navigation menu
      var menu = document.querySelector(".menu");
      var menuBtn = document.querySelector(".menu-btn");
      var closeBtn = document.querySelector(".close-btn");

      if (menuBtn && closeBtn && menu) {
            menuBtn.addEventListener("click", () => {
                  menu.classList.add("active");
            });

            closeBtn.addEventListener("click", () => {
                  menu.classList.remove("active")
            })
      } else {
            console.warn("menu elements were not found")
      };
}

fetch('/src/html/components/header.html', { cache: 'default' })
      .then(response => response.text())
      .then(html => {
            document.getElementById('header-container').innerHTML = html;
            initHeader();
      });