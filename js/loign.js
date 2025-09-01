
        // تغيير اللغة
        function changeLanguage(lang) {
            alert(`سيتم تغيير اللغة إلى ${lang === 'ar' ? 'العربية' : 'English'}`);
            // هنا سيتم إضافة كود تغيير اللغة الفعلي
        }

        // التحقق من صحة نموذج تسجيل الدخول
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            if (!email || !password) {
                alert('يرجى ملء جميع الحقول');
                return;
            }
            
            // هنا سيتم إرسال البيانات إلى الخادم للتحقق
            alert('تم إرسال بيانات تسجيل الدخول بنجاح!');
            // يمكن توجيه المستخدم إلى الصفحة الرئيسية أو لوحة التحكم
            // window.location.href = 'dashboard.html';
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
    