/* ==========================================================================
   Hanse Begleitservice — Main JavaScript
   يحتوي على: قائمة الجوال، سلايدر الهيدر، وتأثيرات الظهور عند التمرير
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ----------------------------------------------------------------------
       1) Mobile Menu Toggle
       ---------------------------------------------------------------------- */
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const menuIcon = document.getElementById('mobile-menu-icon');
    const mobileMenu = document.getElementById('mobile-menu');

    function closeMobileMenu() {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
        menuIcon.textContent = 'menu';
        menuToggle.setAttribute('aria-expanded', 'false');
    }

    function openMobileMenu() {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('flex');
        menuIcon.textContent = 'close';
        menuToggle.setAttribute('aria-expanded', 'true');
    }

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = !mobileMenu.classList.contains('hidden');
            isOpen ? closeMobileMenu() : openMobileMenu();
        });

        // إغلاق القائمة عند الضغط على أي رابط بداخلها
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        // إغلاق القائمة عند الضغط خارجها
        document.addEventListener('click', (e) => {
            if (!mobileMenu.classList.contains('hidden') &&
                !mobileMenu.contains(e.target) &&
                !menuToggle.contains(e.target)) {
                closeMobileMenu();
            }
        });

        // إغلاق القائمة بزر Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeMobileMenu();
        });

        // إغلاق تلقائي عند تكبير الشاشة لحجم سطح المكتب
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) closeMobileMenu();
        });
    }

    /* ----------------------------------------------------------------------
       2) Hero Slider (Cross-fade / Ken Burns Effect)
       ---------------------------------------------------------------------- */
    const slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;

    if (slides.length > 1) {
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 6000);
    }

    /* ----------------------------------------------------------------------
       3) Scroll Reveal Animations (Intersection Observer)
       ---------------------------------------------------------------------- */
    const revealElements = document.querySelectorAll('.reveal-up');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // يظهر مرة واحدة فقط
            }
        });
    }, {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    /* ----------------------------------------------------------------------
       4) Kontaktseite: Karte erst nach Klick laden (Datenschutz)
       ---------------------------------------------------------------------- */
    const mapLoadButton = document.getElementById('map-load-button');
    const mapContainer = document.getElementById('map-container');

    if (mapLoadButton && mapContainer) {
        mapLoadButton.addEventListener('click', () => {
            const address = encodeURIComponent('Eutiner Straße 47A, 23554 Lübeck, Deutschland');
            const iframe = document.createElement('iframe');
            iframe.src = `https://www.google.com/maps?q=${address}&output=embed`;
            iframe.className = 'absolute inset-0 w-full h-full border-0';
            iframe.loading = 'lazy';
            iframe.referrerPolicy = 'no-referrer-when-downgrade';
            iframe.title = 'Standort Hanse Begleitservice';
            mapContainer.innerHTML = '';
            mapContainer.appendChild(iframe);
        });
    }

    /* ----------------------------------------------------------------------
       5) Website teilen (Web Share API mit Fallback: Link kopieren)
       ---------------------------------------------------------------------- */
    const shareButton = document.getElementById('share-button');

    if (shareButton) {
        shareButton.addEventListener('click', async () => {
            const shareData = {
                title: 'Hanse Begleitservice',
                text: 'BF3 Schwertransport-Begleitung – Hanse Begleitservice',
                url: 'https://hanse-begleitservice.de/'
            };

            if (navigator.share) {
                try {
                    await navigator.share(shareData);
                } catch (err) {
                    // Nutzer hat den Teilen-Dialog abgebrochen – kein Fehlerhinweis nötig
                }
            } else if (navigator.clipboard) {
                try {
                    await navigator.clipboard.writeText(shareData.url);
                    const icon = shareButton.querySelector('.material-symbols-outlined');
                    const originalIcon = icon.textContent;
                    icon.textContent = 'check';
                    setTimeout(() => { icon.textContent = originalIcon; }, 2000);
                } catch (err) {
                    console.error('Link konnte nicht kopiert werden:', err);
                }
            }
        });
    }

});