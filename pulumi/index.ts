import pulumi from "@pulumi/pulumi";
import gcp from "@pulumi/gcp";

// Create a GCP resource (Storage Bucket)
const bucket = new gcp.storage.Bucket("weenie-dog", {
  cors: [
    {
      methods: ["POST"],
      origins: ["*"],
      responseHeaders: ["*"],
    },
  ],
  forceDestroy: true,
});

// Export the DNS name of the bucket
export const bucketName = bucket.url;
