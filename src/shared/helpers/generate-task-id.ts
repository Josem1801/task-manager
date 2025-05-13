import CryptoJS from "crypto-js";

import { EncryptionKeys } from "./encryption";

export const generateTaskId = (userId: string): string => {
  const timestamp = new Date().toISOString();
  // create a random short hash
  const hash = Math.random().toString(36).substring(2, 15);
  const dataToHash = `${timestamp}-${userId}-${hash}`;

  // Encrypt the ID
  const encryptedId = CryptoJS.AES.encrypt(dataToHash, EncryptionKeys.taskId, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  }).toString();

  return encryptedId;
};
