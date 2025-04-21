document.addEventListener('DOMContentLoaded', function () {
    // Xử lý video header
    const video = document.getElementById('headerVideo');
    if (video) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                video.style.display = 'none';
                const fallback = document.createElement('div');
                fallback.className = 'video-fallback';
                fallback.style.backgroundImage = 'url(../images/Banner.png)';
                fallback.style.backgroundSize = 'cover';
                document.querySelector('.video-header').prepend(fallback);
            });
        }
    }

    // Xử lý menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const menuCardsOverlay = document.getElementById('menuCardsOverlay');

    if (menuToggle && menuCardsOverlay) {
        menuToggle.addEventListener('click', function (e) {
            e.stopPropagation();
            menuCardsOverlay.style.display = menuCardsOverlay.style.display === 'block' ? 'none' : 'block';
        });

        // Đóng menu khi click bên ngoài
        document.addEventListener('click', function (e) {
            if (!menuCardsOverlay.contains(e.target) && e.target !== menuToggle) {
                menuCardsOverlay.style.display = 'none';
            }
        });
    }

    // Xử lý click vào các card
    const menuCards = document.querySelectorAll('.menu-card');
    menuCards.forEach(card => {
        card.addEventListener('click', function () {
            switch (this.id) {
                case 'merchandiseCard':
                    window.location.href = 'merchandise.html';
                    break;
                case 'menuCard':
                    const menuSection = document.querySelector('#menu');
                    if (menuSection) {
                        menuSection.scrollIntoView({ behavior: 'smooth' });
                    }
                    menuCardsOverlay.style.display = 'none';
                    break;
                case 'campaignCard':
                    window.location.href = 'campaign.html';
                    break;
                case 'specialCard':
                    window.location.href = 'specials.html';
                    break;
            }
        });
    });

    // Smooth scroll cho CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});
// Thêm script này vào file JS của bạn
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        question.classList.toggle('active');
        answer.classList.toggle('active');
    });
});