// script.js
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    console.log("Saka_Devs Digital Presence Initialized.");

    const contentCard = document.querySelector('.content-card');
    if (contentCard) {
        contentCard.addEventListener('mousemove', function(e) {
            const rect = contentCard.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            contentCard.style.setProperty('--mouse-x', `${x}px`);
            contentCard.style.setProperty('--mouse-y', `${y}px`);
        });

        contentCard.addEventListener('mouseleave', () => {
            // マウスがカードから離れたときに輝きの位置をリセットするか、デフォルトに戻す
            contentCard.style.setProperty('--mouse-x', `50%`);
            contentCard.style.setProperty('--mouse-y', `50%`);
            // または、完全にプロパティを削除する場合
            // contentCard.style.removeProperty('--mouse-x');
            // contentCard.style.removeProperty('--mouse-y');
        });
    }

    // Jika Anda menggunakan Feather Icons atau library ikon JS lainnya, inisialisasikan di sini
    // if (typeof feather !== 'undefined') {
    //     feather.replace();
    // }
});