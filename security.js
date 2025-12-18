const AbsiSecurity = {
    settings: {
        // فحص مباشر للذاكرة
        getUserPin: function() {
            return localStorage.getItem('absi_user_pin');
        },
        maxAttempts: 3,
        currentAttempts: 0
    },

    verifyProcess: function() {
        let storedPin = this.settings.getUserPin();

        // إذا لم يجد رقم سري مخزن (أول مرة)
        if (!storedPin) {
            let newPin = prompt("🆕 أهلاً بك في ABSI NEXUS\nيرجى تعيين رقم سري جديد لعملياتك:");
            if (newPin && newPin.length >= 4) {
                localStorage.setItem('absi_user_pin', newPin);
                alert("✅ تم حفظ رقمك السري بنجاح!");
                return true;
            }
            alert("❌ يجب إدخال 4 أرقام على الأقل");
            return false;
        }

        // إذا كان هناك رقم مخزن سابقاً
        let input = prompt("🔒 يرجى إدخال رقمك السري لتأكيد العملية:");
        if (input === storedPin) {
            return true;
        } else {
            alert("❌ رقم سري خاطئ!");
            return false;
        }
    }
};
