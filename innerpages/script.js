
// --------------------Sport bussiness entertain
$(document).ready(function () {
    $('input[name="filter"]').on('change', function () {
        var filterValue = $(this).val();

        if (filterValue === 'all') {
            $('.scard').show();
        } else {
            $('.scard').hide();
            $('.' + filterValue).show();
        }
    });
});

// ------------------------------latestnew gallery

const showPopupBtn = document.querySelector(".bell-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");

showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

// Hide login popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());



