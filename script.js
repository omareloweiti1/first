//الصور
document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper-container", {
    loop: true, // التمرير اللانهائي
    pagination: {
      el: ".swiper-pagination", // النقاط
      clickable: true,
    },
    autoplay: {
      delay: 3000, // مدة عرض كل صورة
      disableOnInteraction: false,
    },
    slidesPerView: 1, // عرض صورة واحدة فقط في كل مرة
    spaceBetween: 0, // عدم وجود مسافة بين الشرائح
  });
});

