// scrlo
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollToTopBtn.style.display = "flex";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// استدعاء زر القائمة والقائمة الرئيسية
const toggleMenu = document.querySelector(".toggle-menu");
const navMenu = document.querySelector("header nav ul");

// إضافة حدث النقر لعرض القائمة وإخفائها (القائمة الرئيسية)
toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// التعامل مع القوائم الفرعية
document.querySelectorAll("header nav ul li").forEach((menuItem) => {
  const dropdownMenu = menuItem.querySelector(".dropdown-menu");

  if (dropdownMenu) {
    // إضافة حدث النقر على العنصر الأب
    menuItem.addEventListener("click", (e) => {
      e.stopPropagation(); // منع التداخل
      dropdownMenu.classList.toggle("show-dropdown"); // إضافة فئة لإظهار القائمة الفرعية
    });
  }
});

// إغلاق جميع القوائم الفرعية عند النقر في أي مكان آخر
document.addEventListener("click", () => {
  document.querySelectorAll(".dropdown-menu").forEach((menu) => {
    menu.classList.remove("show-dropdown");
  });
});
