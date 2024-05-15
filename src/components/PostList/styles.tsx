import {StyleSheet} from 'react-native';
import {DeviceWidth} from '../../utility/utils';

export const styles = StyleSheet.create({
  container: {
    width: DeviceWidth * 0.5,
    height: 120,
    marginStart: 16,
    backgroundColor: 'white',
    marginVertical: 8,
    borderRadius: 10,
    padding: 8,
  },
  txtPost: {
    marginStart: 16,
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
    marginBottom: 8,
  },
  txtTitle: {
    fontSize: 16,
    color: 'black',
    fontWeight: '800',
    marginBottom: 4,
  },
  txtTitleData: {
    fontSize: 16,
    fontWeight: '400',
  },
});
