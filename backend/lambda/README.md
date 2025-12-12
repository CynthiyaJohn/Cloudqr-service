CloudQR Lambda
--------------

This directory contains the Lambda function that generates QR codes and uploads them to S3.

Before deploy:
- Set environment variables:
  - BUCKET_NAME : your S3 bucket name
  - AWS_REGION  : e.g. us-east-1

Install dependencies locally for packaging:
  cd backend/lambda
  npm install --production

For manual zip deploy:
  zip -r function.zip node_modules index.js package.json
  aws lambda update-function-code --function-name <name> --zip-file fileb://function.zip

Prefer using SAM, CloudFormation, or the AWS Console for deployment.
