 
        // تغيير اللغة
        function changeLanguage(lang) {
            alert(`سيتم تغيير اللغة إلى ${lang === 'ar' ? 'العربية' : 'English'}`);
            // هنا سيتم إضافة كود تغيير اللغة الفعلي
        }

        // عرض اسم ملف صورة الخبر
        document.getElementById('newsImageInput').addEventListener('change', function(e) {
            const fileName = e.target.files[0]?.name || 'لم يتم اختيار ملف';
            document.getElementById('newsImageName').textContent = `الملف المختار: ${fileName}`;
        });

        // عرض اسم ملف صورة الإنجاز
        document.getElementById('achievementImageInput').addEventListener('change', function(e) {
            const fileName = e.target.files[0]?.name || 'لم يتم اختيار ملف';
            document.getElementById('achievementImageName').textContent = `الملف المختار: ${fileName}`;
        });

        // التحقق من صحة نموذج إضافة الخبر
        document.getElementById('newsForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const title = document.getElementById('newsTitle').value;
            const content = document.getElementById('newsContent').value;
            const image = document.getElementById('newsImageInput').files[0];
            
            if (!title || !content) {
                alert('يرجى ملء جميع الحقول المطلوبة');
                return;
            }
            
            // هنا سيتم إرسال البيانات إلى الخادم
            alert('تم إضافة الخبر بنجاح!');
            this.reset();
            document.getElementById('newsImageName').textContent = '';
        });

        // التحقق من صحة نموذج إضافة الإنجاز
        document.getElementById('achievementForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const title = document.getElementById('achievementTitle').value;
            const beneficiaries = document.getElementById('beneficiaries').value;
            const duration = document.getElementById('duration').value;
            const image = document.getElementById('achievementImageInput').files[0];
            
            if (!title || !beneficiaries || !duration) {
                alert('يرجى ملء جميع الحقول المطلوبة');
                return;
            }
            
            // هنا سيتم إرسال البيانات إلى الخادم
            alert('تم إضافة الإنجاز بنجاح!');
            this.reset();
            document.getElementById('achievementImageName').textContent = '';
        });

        // كود لإضافة تأثير التمرير السلس للروابط
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    