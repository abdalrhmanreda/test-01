# 🚀 دليل التشغيل السريع

## 📋 المتطلبات
- Node.js (v14 أو أحدث)
- MongoDB (محلي أو Atlas)
- npm أو yarn

## ⚡ التشغيل السريع

### 1. تثبيت التبعيات
```bash
# تثبيت جميع التبعيات
npm run install-all
```

### 2. إعداد قاعدة البيانات
```bash
# تأكد من تشغيل MongoDB
# أو استخدم MongoDB Atlas
```

### 3. تشغيل التطبيق
```bash
# تشغيل الباك إند والفرونت إند معاً
npm run dev
```

### 4. الوصول للتطبيق
- **الفرونت إند**: http://localhost:3000
- **الباك إند**: http://localhost:5000

## 🎯 الواجهات المتاحة

### 1. صفحة موظف البوابة
- **الرابط**: http://localhost:3000/gate-employee
- **الوصف**: تسجيل سريع بدون دخول
- **المستخدم**: موظف البوابة

### 2. صفحة تسجيل الدخول
- **الرابط**: http://localhost:3000/login
- **الوصف**: تسجيل دخول للعساكر والأدمن
- **المستخدم**: العساكر والأدمن

### 3. لوحة التحكم
- **الرابط**: http://localhost:3000/dashboard
- **الوصف**: لوحة تحكم محمية
- **المستخدم**: العساكر والأدمن

## 🔧 الإعدادات المطلوبة

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/beet-truck-management
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NODE_ENV=development
```

### Frontend (.env)
```env
REACT_APP_API_URL=http://localhost:5000/api
```

## 🧪 اختبار النظام

### 1. اختبار موظف البوابة
1. اذهب إلى http://localhost:3000/gate-employee
2. املأ النموذج
3. اضغط "تسجيل العربية"
4. تحقق من الإحصائيات

### 2. اختبار تسجيل الدخول
1. اذهب إلى http://localhost:3000/login
2. سجل دخول كأدمن أو عسكري
3. تحقق من الوصول للوحة التحكم

## 📊 إضافة بيانات تجريبية

### إضافة مقاولين
```bash
# POST /api/contractors
{
  "name": "مقاول أحمد",
  "phone": "0123456789",
  "address": "القاهرة"
}
```

### إضافة مصانع
```bash
# POST /api/factories
{
  "name": "مصنع السكر",
  "location": "المنوفية"
}
```

### إضافة مستخدمين
```bash
# POST /api/users
{
  "email": "admin@example.com",
  "password": "123456",
  "name": "الأدمن",
  "role": "admin"
}
```

## 🔍 استكشاف الأخطاء

### مشاكل شائعة
1. **خطأ في الاتصال بقاعدة البيانات**
   - تأكد من تشغيل MongoDB
   - تحقق من رابط الاتصال

2. **خطأ في CORS**
   - تأكد من إعدادات CORS في الباك إند

3. **خطأ في التوكن**
   - تحقق من JWT_SECRET
   - تأكد من صحة التوكن

### سجلات الأخطاء
- **Backend**: console.log في Terminal
- **Frontend**: Developer Tools > Console

## 📞 الدعم
لأي مشاكل أو استفسارات، راجع ملف README.md الرئيسي.

---

**نظام إدارة عربيات تحميل البنجر - دليل التشغيل السريع** 