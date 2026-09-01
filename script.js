/* =========================================
   COOKIES
========================================= */

const cookieScreen = document.getElementById("cookieScreen");
const acceptCookies = document.getElementById("acceptCookies");
const rejectCookies = document.getElementById("rejectCookies");


function closeCookies() {

    cookieScreen.style.display = "none";

    localStorage.setItem(
        "barbeariaXV_cookies",
        "accepted"
    );
}


function showCookies() {

    cookieScreen.style.display = "flex";
}


/* Verifica se o visitante já escolheu */

if (
    localStorage.getItem("barbeariaXV_cookies")
) {

    cookieScreen.style.display = "none";

} else {

    cookieScreen.style.display = "flex";

}


/* ACEITAR */

acceptCookies.addEventListener(
    "click",
    closeCookies
);


/* RECUSAR */

rejectCookies.addEventListener(
    "click",
    closeCookies
);


/* =========================================
   POLÍTICA DE PRIVACIDADE
========================================= */

const privacyModal =
    document.getElementById("privacyModal");

const privacyButton =
    document.getElementById("privacyButton");

const cookiePrivacy =
    document.getElementById("cookiePrivacy");

const closePrivacy =
    document.getElementById("closePrivacy");


function openPrivacy(event) {

    event.preventDefault();

    privacyModal.style.display = "flex";
}


function closePrivacyModal() {

    privacyModal.style.display = "none";
}


privacyButton.addEventListener(
    "click",
    openPrivacy
);


cookiePrivacy.addEventListener(
    "click",
    openPrivacy
);


closePrivacy.addEventListener(
    "click",
    closePrivacyModal
);


/* Fecha clicando fora */

privacyModal.addEventListener(
    "click",
    function(event) {

        if (event.target === privacyModal) {

            closePrivacyModal();

        }

    }
);


/* =========================================
   HEADER AO ROLAR
========================================= */

window.addEventListener(
    "scroll",
    function() {

        const header =
            document.querySelector(".header");

        if (window.scrollY > 50) {

            header.style.background =
                "rgba(8,7,6,.98)";

        } else {

            header.style.background =
                "rgba(8,7,6,.94)";

        }

    }
);