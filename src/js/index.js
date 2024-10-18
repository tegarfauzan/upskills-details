var categoriesSwiper = new Swiper("#Categories", {
    slidesPerView: "auto",
    spaceBetween: 20,
    slidesOffsetAfter: 20,
    slidesOffsetBefore: 20,
});
var startYourSwiper = new Swiper("#PopularKosSlider", {
    slidesPerView: "auto",
    spaceBetween: 20,
    slidesOffsetAfter: 20,
    slidesOffsetBefore: 20,
});

const tabButton = document.querySelectorAll(".tab-button");
const article = document.querySelectorAll(".article");

tabButton.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        article.forEach((c) => c.classList.add("hidden"));
        article[index].classList.remove("hidden");
    });
});
