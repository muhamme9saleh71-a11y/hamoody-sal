// Form validation for login and signup pages

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            const username = loginForm.elements['username'].value;
            const password = loginForm.elements['password'].value;

            if (username.trim() === '' || password.trim() === '') {
                alert('الرجاء تعبئة جميع الحقول في نموذج تسجيل الدخول.');
                event.preventDefault(); // Prevent form submission
            }
            // Add more complex validation logic here if needed
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            const fullname = signupForm.elements['fullname'].value;
            const email = signupForm.elements['email'].value;
            const password = signupForm.elements['password'].value;
            const confirmPassword = signupForm.elements['confirm-password'].value;

            if (fullname.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
                alert('الرجاء تعبئة جميع الحقول في نموذج إنشاء الحساب.');
                event.preventDefault();
            } else if (password !== confirmPassword) {
                alert('كلمة المرور وتأكيد كلمة المرور غير متطابقين.');
                event.preventDefault();
            } else if (password.length < 6) {
                alert('يجب أن تكون كلمة المرور 6 أحرف على الأقل.');
                event.preventDefault();
            }
            // Add more complex validation logic for email format, etc.
        });
    }
});

