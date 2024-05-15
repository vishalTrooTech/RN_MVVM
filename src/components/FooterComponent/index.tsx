import {ActivityIndicator, View} from 'react-native';
import {styles} from './styles';
import colors from '../../utility/color';

type Props = {
  loading: boolean;
};

export const FooterComponent: React.FC<Props> = props => {
  return props?.loading ? (
    <View style={styles.container}>
      <ActivityIndicator
        animating={props?.loading}
        size="large"
        color={colors.black}
      />
    </View>
  ) : null;
};
