export enum StorageKeys {
  token = "MY_APP_TOKEN",
  task = "$TASK",
}

const LocalStorageService = (dbKey: StorageKeys) => ({
  get: (key: string) => {
    JSON.parse(globalThis.localStorage.getItem(dbKey + key)!);
  },
  set: (key: string, value: any) => {
    globalThis.localStorage.setItem(dbKey + key, JSON.stringify(value));
  },
  clear: (key: string) => {
    globalThis.localStorage.removeItem(key);
  },
});

export default LocalStorageService;
