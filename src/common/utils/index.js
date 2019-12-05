import {Platform, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const isIphoneX = () =>
  Platform.select({
    ios: !!(Platform.OS === 'ios' && (height >= 812 || width >= 812)),
    android: false
  });
