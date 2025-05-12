import CryptoJS from "crypto-js";

import { EncryptionKeys } from "./encryption";

export const generateTaskId = (userId: string): string => {
  const timestamp = new Date().toISOString();
  const dataToHash = `${timestamp}-${userId}`;
  const hash = CryptoJS.HmacSHA256(
    dataToHash,
    EncryptionKeys.taskId,
  ).toString();

  //  Use the timestamp, userId, and hash to create a unique ID
  const id = `${timestamp}-${userId}-${hash}`;

  // Encrypt the ID
  const encryptedId = CryptoJS.AES.encrypt(
    id,
    EncryptionKeys.taskId,
  ).toString();

  return encryptedId;
};
