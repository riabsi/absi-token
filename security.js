const AbsiSecurity = {
    settings: {
        getUserPin: function() {
            return localStorage.getItem('absi_user_pin');
        }
    },
    verifyProcess: function() {
        let storedPin = this.settings.getUserPin();

        // 1. إذا كان المستخدم جديداً ولم يحدد رقماً بعد
        if (!storedPin) {
            let newPin = prompt("🆕 تعيين أمان ABSI NEXUS:\nيرجى كتابة رقم سري خاص بك لمرة واحدة:");
            if (newPin && newPin.length >= 4) {
                localStorage.setItem('absi_user_pin', newPin);
                alert("✅ تم حفظ رقمك السري! استعمله في كل مرة تتداول فيها.");
                return true;
            }
            alert("❌ يجب إدخال 4 أرقام على الأقل.");
            return false;
        }

        // 2. إذا كان لديه رقم مخزن مسبقاً
        let input = prompt("🔒 أدخل رقمك السري لتأكيد الصفقة:");
        if (input === storedPin) {
            return true;
        } else {
            alert("❌ الرقم السري خطأ!");
            return false;
        }
    }
};
