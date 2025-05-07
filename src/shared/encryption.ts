import CryptoJS from "crypto-js";

export enum EncryptionKeys {
  token = "encryption-key-token",
  taskId = "encryption-key-task-id",
}

export const encryptToken = (token: string, key: EncryptionKeys) => {
  const encryptedToken = CryptoJS.AES.encrypt(token, key).toString();
  return encryptedToken;
};

export const decryptToken = (
  encryptedToken: string,
  key: EncryptionKeys,
): string => {
  const bytes = CryptoJS.AES.decrypt(encryptedToken, key);
  return bytes.toString(CryptoJS.enc.Utf8);
};

export const simulateLatency = async (
  min: number = 500,
  max: number = 2000,
) => {
  const delay = Math.floor(Math.random() * (max - min + 1)) + min;
  await new Promise((resolve) => setTimeout(resolve, delay));
};
