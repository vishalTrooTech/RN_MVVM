import {StyleSheet} from 'react-native';
import {DeviceWidth} from '../../utility/utils';

export const styles = StyleSheet.create({
  rootView: {
    marginTop: 8,
  },
  container: {
    width: DeviceWidth * 0.5,
    height: 140,
    marginStart: 16,
    backgroundColor: 'white',
    marginVertical: 8,
    borderRadius: 10,
    overflow: 'hidden',
  },
  imgPost: {
    width: DeviceWidth * 0.5,
    height: 100,
  },
  txtPost: {
    marginStart: 16,
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
    marginBottom: 8,
    marginHorizontal: 4,
  },
  txtText: {
    marginTop: 2,
    marginHorizontal: 4,
    fontSize: 13,
    color: 'black',
  },
});
