# 🌩️ CloudQR Service

**CloudQR** is a modern **serverless QR code generation service** built using AWS cloud primitives and a lightweight React frontend.

It converts any text or URL into a QR code, generates it using AWS Lambda, stores it securely in Amazon S3, and serves it via an API Gateway endpoint to a responsive React UI.

This project demonstrates a **clean serverless architecture**, practical AWS integration, and real-world deployment workflow.

---

## ✨ Features

* 🔗 Generate QR codes from text or URLs
* ☁️ Fully serverless backend using AWS Lambda
* 🪣 Secure QR image storage in Amazon S3
* 🌐 API Gateway–based HTTP access
* ⚛️ Lightweight React + Vite frontend
* 📊 CloudWatch logging for observability
* 🔐 IAM-based least-privilege access control

---

## 🖼️ Screenshots & Documentation

The repository includes visual references for:

* User Interface – Home Screen
* Generated QR Code Output
* S3 Bucket Structure
* Lambda Function Configuration
* AWS Architecture Diagram
* CloudWatch Logs
* IAM Role & Permissions

*All screenshots and diagrams are stored in the `screenshots/` and `architecture/` directories.*

---

## 🏗️ Project Structure

```
cloudqr-service/
│
├── backend/
│   └── lambda/
│       ├── index.js
│       ├── package.json
│       └── README.md
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── api.js
│       ├── App.js
│       └── styles.css
│
├── architecture/
│   └── documents/
│
└── screenshots/
```

---

## 🚀 Frontend – Local Development

```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend` directory:

```env
VITE_API_URL=<YOUR_API_GATEWAY_URL>
```

Start the development server:

```bash
npm run dev
```

---

## ⚙️ Backend – AWS Lambda Deployment

```bash
cd backend/lambda
npm install --production
zip -r function.zip index.js node_modules package.json
```

Deploy the function:

```bash
aws lambda update-function-code \
  --function-name <LAMBDA_NAME> \
  --zip-file fileb://function.zip
```

---

## 🔧 Required AWS Configuration

### Lambda IAM Role Permissions

* `s3:PutObject`
* `s3:GetObject`
* `logs:*`

### API Gateway

* Integrated with Lambda
* CORS enabled (open for demo purposes)

### S3 Bucket

* Public access **or** signed URLs for QR image retrieval

---

## 📌 Tech Stack

* **AWS Lambda** (Node.js)
* **Amazon S3**
* **API Gateway**
* **React + Vite**
* **CloudWatch**
* **IAM**

---

## 🎯 Purpose & Learning Outcomes

This project is designed to demonstrate:

* Practical serverless application design
* End-to-end AWS service integration
* Clean separation of frontend and backend
* Real deployment and logging workflows

It is suitable for **portfolio showcase, internships, and cloud fundamentals interviews**.

---

## 📄 License

This project is licensed under the **MIT License**.

---
