/* =========================================
   COOKIES
========================================= */

const cookieScreen =
    document.getElementById("cookieScreen");

const acceptCookies =
    document.getElementById("acceptCookies");

const rejectCookies =
    document.getElementById("rejectCookies");


const COOKIE_KEY =
    "barbeariaXV_cookies";


function closeCookies() {

    if (cookieScreen) {

        cookieScreen.style.display = "none";

    }

    localStorage.setItem(
        COOKIE_KEY,
        "accepted"
    );

}


function showCookies() {

    if (cookieScreen) {

        cookieScreen.style.display = "flex";

    }

}


/* Verifica se o visitante já escolheu */

if (
    localStorage.getItem(COOKIE_KEY)
) {

    closeCookies();

} else {

    showCookies();

}


/* =========================================
   ACEITAR COOKIES
========================================= */

acceptCookies?.addEventListener(
    "click",
    function () {

        closeCookies();

    }
);


/* =========================================
   RECUSAR COOKIES
========================================= */

rejectCookies?.addEventListener(
    "click",
    function () {

        closeCookies();

    }
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

    if (privacyModal) {

        privacyModal.style.display = "flex";

        document.body.style.overflow = "hidden";

    }

}


function closePrivacyModal() {

    if (privacyModal) {

        privacyModal.style.display = "none";

        document.body.style.overflow = "";

    }

}


privacyButton?.addEventListener(
    "click",
    openPrivacy
);


cookiePrivacy?.addEventListener(
    "click",
    openPrivacy
);


closePrivacy?.addEventListener(
    "click",
    closePrivacyModal
);


/* Fecha clicando fora */

privacyModal?.addEventListener(
    "click",
    function (event) {

        if (
            event.target === privacyModal
        ) {

            closePrivacyModal();

        }

    }
);


/* Fecha com ESC */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closePrivacyModal();

        }

    }
);


/* =========================================
   HEADER AO ROLAR
========================================= */

const header =
    document.querySelector(".header");


window.addEventListener(
    "scroll",
    function () {

        if (!header) return;


        if (window.scrollY > 50) {

            header.style.background =
                "rgba(8,7,6,.98)";

            header.style.boxShadow =
                "0 8px 30px rgba(0,0,0,.25)";

        } else {

            header.style.background =
                "rgba(8,7,6,.94)";

            header.style.boxShadow =
                "none";

        }

    }
    const cookieScreen = document.getElementById("cookieScreen");
const acceptCookies = document.getElementById("acceptCookies");
const rejectCookies = document.getElementById("rejectCookies");


// MOSTRA O AVISO
if (cookieScreen) {
    cookieScreen.style.display = "flex";
}


// ACEITAR
if (acceptCookies) {

    acceptCookies.addEventListener("click", function () {

        cookieScreen.style.display = "none";

        localStorage.setItem(
            "barbeariaXV_cookies",
            "accepted"
        );

    });

}


// RECUSAR
if (rejectCookies) {

    rejectCookies.addEventListener("click", function () {

        cookieScreen.style.display = "none";

        localStorage.setItem(
            "barbeariaXV_cookies",
            "rejected"
        );

    });

}
);