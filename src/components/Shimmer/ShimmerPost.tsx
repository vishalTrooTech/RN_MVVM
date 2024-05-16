import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {DeviceWidth} from '../../utility/utils';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

export const ShimmerPost = () => {
  return (
    <View style={styles.container}>
      <ShimmerPlaceholder style={styles.imgPost} />
      <ShimmerPlaceholder style={styles.txtText} />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    width: DeviceWidth * 0.5,
    height: 140,
    marginStart: 16,
    marginVertical: 8,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  imgPost: {
    width: DeviceWidth * 0.5,
    height: 100,
  },
  txtText: {
    marginTop: 8,
    marginHorizontal: 4,
    width: '95%',
    height: 20,
  },
});
