import {Dimensions} from 'react-native';
import Toast from 'react-native-toast-message';

export const DeviceWidth = Dimensions.get('window').width;

export enum ToastType {
  success = 'success',
  error = 'error',
  info = 'info',
}

export const showMessage = (type: ToastType, msg1: string, msg2?: string) => {
  Toast.show({
    type: type,
    text1: msg1,
    text2: msg2,
    position: 'bottom',
    text1Style: {color: 'black', fontSize: 14},
    text2Style: {color: 'black', fontSize: 12},
    visibilityTime: 2000,
  });
};

export const isValidEmail = (email: string) => {
  let regexEmail =
    /^[\d\w]+[-._+]{0,1}([\d\w]+|[-._+]{0,1})?[\d\w+]+([^\W-._+]+)@([\w\d]+)((\.){0,1}[A-Z|a-z|0-9]){2}\.[A-Z|a-z]{2,3}$/;
  if (regexEmail.test(email)) {
    return true;
  } else {
    return false;
  }
};
