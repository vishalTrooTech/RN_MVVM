import {useState} from 'react';
import {ToastType, isValidEmail, showMessage} from '../../utility/utils';
import {useFormViewModel} from './useFormViewModel';

export const useFormController = () => {
  const {} = useFormViewModel();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const onChangeName = (text: string) => {
    setName(text);
  };
  const onChangeEmail = (text: string) => {
    setEmail(text);
  };

  const validate = () => {
    if (name == '') {
      showMessage(ToastType.info, 'Pleae enter name.');
      return false;
    } else if (email == '') {
      showMessage(ToastType.info, 'Pleae enter email address.');
      return false;
    } else if (isValidEmail(email)) {
      showMessage(ToastType.info, 'Pleae enter valid email address.');
      return false;
    }

    return true;
  };

  const onSubmitClick = () => {
    if (validate()) {
      showMessage(ToastType.info, 'Done');
      setEmail('');
      setName('');
    }
  };

  return {onChangeName, onChangeEmail, name, email, onSubmitClick};
};
