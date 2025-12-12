🌩️ CloudQR Service

A Serverless QR Code Generator using AWS Lambda, S3, API Gateway & React

CloudQR is a modern cloud-powered service that converts any text or URL into a QR code.
The QR is generated in AWS Lambda, securely stored in Amazon S3, and displayed through a lightweight React UI.

🖼️ User Interface
Home Screen

QR Code Output

☁️ AWS Architecture Documentation
S3 Bucket

Lambda Architecture Diagram

Lambda Function List

CloudWatch Logs

IAM Permissions

🏗️ Project Structure
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
│
└── documents/
    └── screenshots/


🚀 Frontend (Local Development)

cd frontend
npm install


Create .env file:

VITE_API_URL=<YOUR_API_GATEWAY_URL>


Start development server:

npm run dev

⚙️ Backend Deployment (AWS Lambda)
cd backend/lambda
npm install --production
zip -r function.zip index.js node_modules package.json


Deploy to AWS:

aws lambda update-function-code \
  --function-name <LAMBDA_NAME> \
  --zip-file fileb://function.zip

🔧 Required AWS Permissions
Lambda IAM Role must allow:

s3:PutObject

s3:GetObject

logs:*

API Gateway Requirements:

Must integrate with Lambda

CORS enabled (* allowed for demo)

S3 Bucket:

Public access or signed URLs for image retrieval

📌 Tech Stack

AWS Lambda (Node.js)

Amazon S3

API Gateway

React + Vite

CloudWatch

IAM

📄 License

MIT License.