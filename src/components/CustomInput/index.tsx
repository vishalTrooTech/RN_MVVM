import React from 'react';
import {
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import colors from '../../utility/color';
import {styles} from './style';

export interface Props extends TextInputProps {
  testID?: string;
  style?: ViewStyle;
  error?: string;
  title?: string;
  txtTitleStyle?: TextStyle;
  mainStyle?: ViewStyle;
}

export const CustomInput: React.FC<Props> = ({
  mainStyle,
  txtTitleStyle,
  style,
  error,
  title,
  ...rest
}: Props) => {
  return (
    <View style={[styles.inputWrp, mainStyle]}>
      <Text style={[styles.txtDefaultStyle, txtTitleStyle]}>{title}</Text>
      <TextInput
        {...rest}
        placeholderTextColor={colors.graySearch}
        style={[
          styles.input,
          {color: colors.black, paddingLeft: 20},
          {...style},
        ]}
      />
    </View>
  );
};
