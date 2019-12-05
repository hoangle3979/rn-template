import React, { PureComponent } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Colors } from '../../../common/colors';
import { scale, ScaledSheet } from 'react-native-size-matters';

// const { width } = Dimensions.get('window');
export class ButtonCircle extends PureComponent {
  render() {
    const {
      icon,
      size = 36,
      iconSize = 24,
      style,
      iconColor,
      backgroundColor = Colors.PRIMARY
    } = this.props;

    return (
      <TouchableOpacity
        {...this.props}
        style={[
          styles.container,
          style,
          { backgroundColor },
          {
            width: scale(size),
            height: scale(size),
            borderRadius: scale(size / 2)
          }
        ]}>
        {icon && (
          <Image
            source={icon}
            style={[
              styles.icon,
              { width: scale(iconSize), height: scale(iconSize) },
              iconColor ? { tintColor: iconColor } : {}
            ]}
          />
        )}
      </TouchableOpacity>
    );
  }
}
const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.ORANGE,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: '12@s',
    height: '12@s',
    resizeMode: 'contain'
  }
});
