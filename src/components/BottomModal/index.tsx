import React, {ReactNode} from 'react';
import {Pressable, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import Modal from 'react-native-modal';
import colors from '../../utility/color';

type Props = {
  closeModel?(): void;
  visible: boolean;
  children: ReactNode;
  childStyle?: StyleProp<ViewStyle>;
  customModelStyle?: ViewStyle;
};

export const BottomModal = (props: Props) => {
  return (
    <Modal
      statusBarTranslucent={false}
      avoidKeyboard
      useNativeDriver
      hideModalContentWhileAnimating
      onBackdropPress={() => props?.closeModel && props?.closeModel()}
      animationInTiming={500}
      animationOutTiming={500}
      animationOut="slideOutDown"
      isVisible={props?.visible}
      style={[styles.modelStyle, props?.customModelStyle]}>
      <View style={styles.rootView}>
        <Pressable
          onPress={() => props?.closeModel && props?.closeModel()}
          style={{flex: 1}}></Pressable>
        <View style={[styles.childView, props?.childStyle]}>
          {props.children}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modelStyle: {
    margin: 0,
    justifyContent: 'flex-end',
    marginTop: 50,
  },
  rootView: {
    flex: 1,
  },
  childView: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});
