// store/transforms/encryptCompressTransform.ts
import CryptoJS from "crypto-js";
import LZString from "lz-string";
import { createTransform } from "redux-persist";

const SECRET_KEY = process.env.NEXT_PUBLIC_ENCRYPTION_KEY || "SECRET-KEY";

export const encryptCompressTransform = createTransform(
  // transform state on its way to being serialized and persisted
  (inboundState) => {
    const json = JSON.stringify(inboundState);
    const compressed = LZString.compressToUTF16(json);
    const encrypted = CryptoJS.AES.encrypt(compressed, SECRET_KEY).toString();

    return encrypted;
  },
  // transform state being rehydrated
  (outboundState) => {
    try {
      const bytes = CryptoJS.AES.decrypt(outboundState, SECRET_KEY);
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
      const decompressed = LZString.decompressFromUTF16(decrypted);

      return JSON.parse(decompressed || "{}");
    } catch (error) {
      console.error("Failed to decrypt or decompress persisted state:", error);

      return {};
    }
  },
);
