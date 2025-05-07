import CryptoJS from "crypto-js";

import { EncryptionKeys } from "../encryption";

export const generateTaskId = (userId: string): string => {
  const timestamp = new Date().toISOString();
  const dataToHash = `${timestamp}-${userId}`;
  const hash = CryptoJS.HmacSHA256(
    dataToHash,
    EncryptionKeys.taskId,
  ).toString();

  //  Use the timestamp, userId, and hash to create a unique ID
  return `${timestamp}-${userId}-${hash}`;
};
