 // تغيير اللغة
        function changeLanguage(lang) {
            alert(`سيتم تغيير اللغة إلى ${lang === 'ar' ? 'العربية' : 'English'}`);
            // هنا سيتم إضافة كود تغيير اللغة الفعلي
        }

        // السلايدر لمجالات العمل
        let areaSlideIndex = 0;
        const areaImages = [
            'https://source.unsplash.com/random/600x400/?education,yemen',
            'https://source.unsplash.com/random/600x400/?charity,yemen',
            'https://source.unsplash.com/random/600x400/?help,yemen',
            'https://source.unsplash.com/random/600x400/?community,yemen'
        ];
        
        function showAreaSlide(index) {
            const slide = document.querySelector('.area-slide');
            slide.innerHTML = <img src="${areaImages[index]}" alt="مجال عمل الجمعية">;
        }
        
        function nextAreaSlide() {
            areaSlideIndex = (areaSlideIndex + 1) % areaImages.length;
            showAreaSlide(areaSlideIndex);
        }
        
        function prevAreaSlide() {
            areaSlideIndex = (areaSlideIndex - 1 + areaImages.length) % areaImages.length;
            showAreaSlide(areaSlideIndex);
        }
        
        // تغيير الصورة كل 5 ثواني
        setInterval(nextAreaSlide, 2000);

        // كود لإضافة تأثير التمرير السلس للروابط
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            })};
        });