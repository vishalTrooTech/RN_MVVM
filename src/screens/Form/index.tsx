import React, {useState} from 'react';
import {Button, View} from 'react-native';
import {styles} from './styles';
import {CustomInput} from '../../components/CustomInput';
import {useFormController} from './useFormController';

export const Form: React.FC = () => {
  const {onChangeName, onChangeEmail, name, email, onSubmitClick} =
    useFormController();

  return (
    <View style={styles.container}>
      <CustomInput
        title="Name"
        value={name}
        onChangeText={onChangeName}
        mainStyle={styles.input}
      />
      <CustomInput
        title="Email"
        value={email}
        onChangeText={onChangeEmail}
        mainStyle={[styles.input, styles.inputEmail]}
      />

      <Button onPress={onSubmitClick} title="Submit" />
    </View>
  );
};
