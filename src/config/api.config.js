import axios from 'axios';
import {AsyncStorage} from 'react-native';
import {REACT_APP_BACKEND_URL} from '../global/contain';
export const instanceAxios = async (url, method, data) => {
  const result = await axios({
    url: `${REACT_APP_BACKEND_URL}${url}`,
    method,
    data,
    // headers: {
    //   Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
    // },
  });
  return result;
};
