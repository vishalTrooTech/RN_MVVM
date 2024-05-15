import {StyleSheet} from 'react-native';
import {DeviceWidth} from '../../utility/utils';

export const styles = StyleSheet.create({
  rootView: {
    marginTop: 8,
  },
  container: {
    width: DeviceWidth * 0.5,
    height: 120,
    marginStart: 16,
    backgroundColor: 'white',
    marginVertical: 8,
    borderRadius: 10,
  },
  txtPhoto: {
    marginStart: 16,
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
    marginBottom: 8,
  },
  imgStyle: {
    width: DeviceWidth * 0.5,
    height: 120,
    borderRadius: 10,
  },
});
