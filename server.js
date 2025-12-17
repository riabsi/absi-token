const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// محاكاة قاعدة بيانات للمستخدمين (في الواقع سنستخدم MongoDB)
let users = {
    "user@example.com": {
        password: "password123",
        balance_usdt: 1500.00,
        balance_absi: 0.0
    }
};

// مسار تسجيل الدخول
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    
    if (users[email] && users[email].password === password) {
        res.json({ 
            success: true, 
            message: "تم تسجيل الدخول بنجاح",
            userData: users[email]
        });
    } else {
        res.status(401).json({ success: false, message: "بيانات الدخول خاطئة" });
    }
});

app.listen(3000, () => console.log('الخادم يعمل على المنفذ 3000'));
