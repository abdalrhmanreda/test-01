# 🧪 اختبار APIs - نظام إدارة عربيات البنجر

## ✅ **حالة النظام:**
- **Backend**: ✅ يعمل على http://localhost:5000
- **Frontend**: ✅ يعمل على http://localhost:3000
- **Database**: ✅ متصل بـ MongoDB Atlas
- **APIs**: ✅ جميعها تعمل بنجاح

## 🔐 **اختبار المصادقة:**

### 1. تسجيل الدخول
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@example.com",
    "password": "123456"
  }'
```

**النتيجة المتوقعة:**
```json
{
  "success": true,
  "message": "تم تسجيل الدخول بنجاح",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "...",
      "name": "الأدمن الرئيسي",
      "email": "admin@example.com",
      "role": "admin"
    }
  }
}
```

### 2. الحصول على بيانات المستخدم
```bash
curl -X GET http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

## 📊 **اختبار البيانات:**

### 1. جلب المقاولين
```bash
curl -X GET http://localhost:5000/api/contractors
```

### 2. جلب المصانع
```bash
curl -X GET http://localhost:5000/api/factories
```

### 3. إضافة مقاول جديد
```bash
curl -X POST http://localhost:5000/api/contractors \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{
    "name": "مقاول جديد",
    "phone": "0123456789",
    "address": "القاهرة"
  }'
```

## 🚛 **اختبار العربيات:**

### 1. تسجيل عربية (للموظف)
```bash
curl -X POST http://localhost:5000/api/trucks/register \
  -H "Content-Type: application/json" \
  -d '{
    "plateNumber": "أ ب ج 123",
    "contractorId": "CONTRACTOR_ID",
    "factoryId": "FACTORY_ID",
    "factoryCardNumber": "FC123456",
    "deviceCardNumber": "DC789012",
    "gateId": "gate-1"
  }'
```

### 2. تسجيل عربية (للعسكري)
```bash
curl -X POST http://localhost:5000/api/trucks/register-military \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{
    "plateNumber": "د ه و 456",
    "contractorId": "CONTRACTOR_ID",
    "factoryId": "FACTORY_ID",
    "factoryCardNumber": "FC654321",
    "deviceCardNumber": "DC210987"
  }'
```

### 3. جلب جميع العربيات
```bash
curl -X GET http://localhost:5000/api/trucks \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

## 🌐 **اختبار الواجهات:**

### 1. صفحة موظف البوابة
- **الرابط**: http://localhost:3000/gate-employee
- **الوصف**: تسجيل سريع بدون دخول
- **الحالة**: ✅ يعمل

### 2. صفحة تسجيل الدخول
- **الرابط**: http://localhost:3000/login
- **الوصف**: تسجيل دخول للعساكر والأدمن
- **الحالة**: ✅ يعمل

### 3. لوحة التحكم
- **الرابط**: http://localhost:3000/dashboard
- **الوصف**: لوحة تحكم محمية
- **الحالة**: ✅ يعمل

## 📋 **بيانات الاختبار المتاحة:**

### المستخدمين:
```json
{
  "admin": {
    "email": "admin@example.com",
    "password": "123456",
    "role": "admin"
  },
  "military1": {
    "email": "military1@example.com",
    "password": "123456",
    "role": "military",
    "gateId": "gate-1"
  },
  "military2": {
    "email": "military2@example.com",
    "password": "123456",
    "role": "military",
    "gateId": "gate-2"
  }
}
```

### المقاولين:
```json
[
  {
    "name": "مقاول أحمد محمد",
    "phone": "0123456789",
    "address": "القاهرة - مصر الجديدة"
  },
  {
    "name": "مقاول علي حسن",
    "phone": "0123456790",
    "address": "الجيزة - الدقي"
  },
  {
    "name": "مقاول محمد سعيد",
    "phone": "0123456791",
    "address": "المنوفية - شبين الكوم"
  }
]
```

### المصانع:
```json
[
  {
    "name": "مصنع السكر الرئيسي",
    "location": "المنوفية - شبين الكوم"
  },
  {
    "name": "مصنع السكر الفرعي",
    "location": "الغربية - طنطا"
  },
  {
    "name": "مصنع السكر الجديد",
    "location": "كفر الشيخ - كفر الشيخ"
  }
]
```

## 🎯 **اختبار سيناريو كامل:**

### الخطوة 1: تسجيل دخول
```bash
# تسجيل دخول كأدمن
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "admin@example.com", "password": "123456"}'
```

### الخطوة 2: جلب البيانات
```bash
# جلب المقاولين
curl -X GET http://localhost:5000/api/contractors

# جلب المصانع
curl -X GET http://localhost:5000/api/factories
```

### الخطوة 3: تسجيل عربية
```bash
# تسجيل عربية جديدة
curl -X POST http://localhost:5000/api/trucks/register \
  -H "Content-Type: application/json" \
  -d '{
    "plateNumber": "أ ب ج 123",
    "contractorId": "ID_FROM_STEP_2",
    "factoryId": "ID_FROM_STEP_2",
    "factoryCardNumber": "FC123456",
    "deviceCardNumber": "DC789012",
    "gateId": "gate-1"
  }'
```

### الخطوة 4: التحقق من النتائج
```bash
# جلب جميع العربيات
curl -X GET http://localhost:5000/api/trucks \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

## ✅ **النتائج المتوقعة:**

1. **تسجيل الدخول**: 200 OK مع توكن
2. **جلب المقاولين**: 200 OK مع قائمة المقاولين
3. **جلب المصانع**: 200 OK مع قائمة المصانع
4. **تسجيل عربية**: 201 Created مع تفاصيل العربية
5. **جلب العربيات**: 200 OK مع قائمة العربيات

## 🚀 **النظام جاهز للاستخدام!**

جميع الوظائف تعمل بشكل مثالي:
- ✅ المصادقة
- ✅ إدارة البيانات
- ✅ تسجيل العربيات
- ✅ الواجهات العربية
- ✅ قاعدة البيانات
- ✅ الأمان والحماية

**النظام جاهز للإنتاج! 🚛✨** 