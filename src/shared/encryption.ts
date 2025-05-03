import CryptoJS from "crypto-js";

const generateDynamicKey = () => {
  const timestamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 15);
  return `${timestamp}-${randomString}`;
};

export const encryptToken = (
  token: string,
): { encryptedToken: string; key: string } => {
  const dynamicKey = generateDynamicKey();
  const encryptedToken = CryptoJS.AES.encrypt(token, dynamicKey).toString();
  return { encryptedToken, key: dynamicKey };
};

export const decryptToken = (encryptedToken: string, key: string): string => {
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
