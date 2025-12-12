CloudQR Service — System Design

Components:
- Frontend (React/Vite) hosted on Vercel (or static hosting).
- API Gateway (HTTPS) -> Lambda (Node.js) -> S3 (object storage).
- IAM roles: Lambda execution role with S3 PutObject permission.
- Monitoring: CloudWatch for Lambda logs and metrics.

Flow:
1. User sends text via frontend to API Gateway.
2. API Gateway forwards POST request to Lambda.
3. Lambda generates QR (qrcode lib) and uploads PNG to S3.
4. Lambda returns S3 object URL to user; frontend displays image.

Security & Cost:
- Keep S3 private; use presigned URLs for secure access in production.
- Use API Gateway usage plan or API key for rate-limiting.
- Lambda and API Gateway cost scales with usage; using serverless reduces idle costs.
