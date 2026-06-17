const allBtn = document.getElementById("allBtn");

const gamingBtn = document.getElementById("gamingBtn");

const cards = document.querySelectorAll(".card");

const footballBtn = document.getElementById("footballBtn");

const shortFormBtn = document.getElementById("shortFormBtn");

const longFormBtn = document.getElementById("longFormBtn");

const animeBtn = document.getElementById("animeBtn");

const eCommerceBtn = document.getElementById("eCommerceBtn");

const documentaryBtn = document.getElementById("documentaryBtn");

const colorGradingBtn = document.getElementById("colorGradingBtn");

const buttons = document.querySelectorAll(".filter-buttons button");

const videoModal = document.getElementById("videoModal");

const videoFrame = document.getElementById("videoFrame");

const closeBtn = document.querySelector(".close");

const footerText = document.getElementById("footerText");

const currentYear = new Date().getFullYear();

function filterCards(category) {

    cards.forEach((card) => {

        if(category === "all" || card.dataset.category === category) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });
    
}

cards.forEach((card) => {

    card.addEventListener("click", () => {

        videoModal.style.display = "block";

        videoFrame.src = card.dataset.video;

    });

});

closeBtn.addEventListener("click", () => {

    videoModal.style.display = "none";

    videoFrame.src = "";

});

videoModal.addEventListener("click", (e) => {

    if(e.target === videoModal) {

        videoModal.style.display = "none";

        videoFrame.src = "";
    }
});

function setActiveButton(clickedButton) {

    buttons.forEach((button) => {

        button.classList.remove("active-btn");

    });

    clickedButton.classList.add("active-btn");

}

gamingBtn.addEventListener("click", () => {

    filterCards("gaming");

    setActiveButton(gamingBtn);

});

allBtn.addEventListener("click", () => {

    filterCards("all");

    setActiveButton(allBtn);

});

footballBtn.addEventListener("click", () => {

    filterCards("football");

    setActiveButton(footballBtn);

});

shortFormBtn.addEventListener("click", () => {

    filterCards("short-form");

    setActiveButton(shortFormBtn);

});

longFormBtn.addEventListener("click", () => {

    filterCards("long-form");

    setActiveButton(longFormBtn);

});

animeBtn.addEventListener("click", () => {

    filterCards("anime");

    setActiveButton(animeBtn);

});

eCommerceBtn.addEventListener("click", () => {

    filterCards("eCommerce");

    setActiveButton(eCommerceBtn);

});

documentaryBtn.addEventListener("click", () => {

    filterCards("documentary");

    setActiveButton(documentaryBtn);

});

colorGradingBtn.addEventListener("click", () => {

    filterCards("color-grading");

    setActiveButton(colorGradingBtn);

});

footerText.textContent = `© ${currentYear} EditKaro.in | Social Media Marketing & Video Editing Agency`;