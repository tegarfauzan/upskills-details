var categoriesSwiper = new Swiper("#Categories", {
    slidesPerView: "auto",
    slidesOffsetBefore: 15,
    slidesOffsetAfter: 45,
});

const tabButton = document.querySelectorAll(".tab-button");
const article = document.querySelectorAll(".article");

tabButton.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        article.forEach((c) => c.classList.add("hidden"));
        article[index].classList.remove("hidden");
    });
});
