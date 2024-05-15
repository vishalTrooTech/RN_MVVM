import React from 'react';
import {ActivityIndicator, Modal, StyleSheet, View} from 'react-native';
import colors from '../../utility/color';

type Props = {
  loading: boolean;
  color?: string;
};

export const Loader: React.FC<Props> = props => {
  const {color = colors.black40} = props;

  return (
    <Modal
      supportedOrientations={[
        'portrait',
        'landscape',
        'landscape-left',
        'landscape-right',
        'portrait-upside-down',
      ]}
      transparent={true}
      animationType={'none'}
      visible={props.loading}
      onRequestClose={() => {}}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            animating={props?.loading}
            size="large"
            color={color}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: colors.black40,
  },
  activityIndicatorWrapper: {
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default Loader;
