const AbsiSecurity = {
    settings: {
        // جلب الرقم السري المحفوظ في ذاكرة المتصفح، إذا لم يوجد يكون فارغاً
        userPin: localStorage.getItem('absi_user_pin') || null,
        maxAttempts: 3,
        currentAttempts: 0
    },

    verifyProcess: function() {
        // الحالة الأولى: إذا كان المستخدم لم يحدد رقم سري بعد
        if (!this.settings.userPin) {
            let newPin = prompt("🆕 أهلاً بك! يرجى تعيين رقم سري جديد لعملياتك (6 أرقام):");
            if (newPin && newPin.length >= 4) {
                localStorage.setItem('absi_user_pin', newPin);
                this.settings.userPin = newPin;
                alert("✅ تم تعيين رقمك السري بنجاح. يمكنك التداول الآن.");
                return true;
            } else {
                alert("❌ يجب إدخال رقم سري صالح.");
                return false;
            }
        }

        // الحالة الثانية: طلب الرقم السري المحفوظ
        let input = prompt("🔒 يرجى إدخال رقمك السري لتأكيد العملية:");
        if (input === this.settings.userPin) {
            this.settings.currentAttempts = 0;
            return true;
        } else {
            this.settings.currentAttempts++;
            alert(`❌ رقم سري خاطئ! محاولة ${this.settings.currentAttempts} من ${this.settings.maxAttempts}`);
            return false;
        }
    }
};
