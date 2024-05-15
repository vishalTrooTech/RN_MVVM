import {StyleSheet} from 'react-native';
import colors from '../../utility/color';

export const styles = StyleSheet.create({
  inputWrp: {
    width: '100%',
    marginBottom: -5,
  },
  txtDefaultStyle: {
    color: colors.black,
    fontSize: 12,
    marginVertical: 10,
  },
  input: {
    borderRadius: 5,
    height: 50,
    backgroundColor: colors.gray5,
  },
});
