
        // تغيير اللغة
        function changeLanguage(lang) {
            alert(`سيتم تغيير اللغة إلى ${lang === 'ar' ? 'العربية' : 'English'}`);
            // هنا سيتم إضافة كود تغيير اللغة الفعلي
        }

        // السلايدر
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        
        function showSlide(n) {
            slides.forEach(slide => slide.classList.remove('active'));
            currentSlide = (n + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
        }
        
        function nextSlide() {
            showSlide(currentSlide + 1);
        }
        
        // تغيير السلايد كل 5 ثواني
        setInterval(nextSlide, 3000);

        // كود لإضافة تأثير التمرير السلس للروابط
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
   