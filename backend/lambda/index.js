import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import QRCode from "qrcode";

const s3 = new S3Client({ region: "us-east-1" });
const BUCKET_NAME = "cloudqr-generator-bucket";   


export const handler = async (event) => {
  const { text } = JSON.parse(event.body);
  const qrDataUrl = await QRCode.toDataURL(text);

  const base64 = qrDataUrl.split(";base64,").pop();
  const fileName = `qr-${Date.now()}.png`;

  await s3.send(
    new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: fileName,
      Body: Buffer.from(base64, "base64"),
      ContentType: "image/png",
    })
  );

  return {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify({
      qrUrl: `https://${BUCKET_NAME}.s3.amazonaws.com/${fileName}`,
    }),
  };
};
