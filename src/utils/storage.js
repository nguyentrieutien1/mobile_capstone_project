import useAsyncStorage from '@react-native-async-storage/async-storage';
export const storage = {
  get: async key => {
    const value = await useAsyncStorage.getItem(key);
    return JSON.parse(value);
  },
  set: async (key, value) => {
    await useAsyncStorage.setItem(key, JSON.stringify(value));
  },
};
