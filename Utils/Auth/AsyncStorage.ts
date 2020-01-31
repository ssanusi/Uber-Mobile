import AsyncStorage from '@react-native-community/async-storage';

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    return token;
  } catch (error) {}
};

export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('token');
  } catch (error) {}
};

export const setToken = async (token: string) => {
  try {
    await AsyncStorage.setItem('token', token);
  } catch (error) {}
};
