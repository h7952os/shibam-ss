 // تغيير اللغة
        function changeLanguage(lang) {
            alert(`سيتم تغيير اللغة إلى ${lang === 'ar' ? 'العربية' : 'English'}`);
            // هنا سيتم إضافة كود تغيير اللغة الفعلي
        }

        // كود لإضافة تأثير التمرير السلس للروابط
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });