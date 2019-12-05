import React, { PureComponent } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Colors } from '../../../common/colors';
import { ScaledSheet, verticalScale, scale } from 'react-native-size-matters';
import Text from '../text';

// const { width } = Dimensions.get('window');
export class ButtonPrimary extends PureComponent {
  render() {
    const {
      title,
      icon,
      iconColor,
      iconRight,
      iconRightColor,
      iconRightSize = 12,
      iconSize = 12,
      style,
      styleTitle,
      styleIcon,
      styleIconRight,
      backgroundColor = Colors.PRIMARY
    } = this.props;

    return (
      <TouchableOpacity
        {...this.props}
        style={[styles.container, style, { backgroundColor }]}>
        {icon ? (
          <Image
            source={icon}
            style={[
              styles.icon,
              {
                width: scale(iconSize),
                height: verticalScale(iconSize),
                tintColor: iconColor
              },
              iconColor ? { tintColor: iconColor } : {},
              styleIcon
            ]}
          />
        ) : null}
        {title ? <Text style={[styles.title, styleTitle]}>{title}</Text> : null}
        {iconRight ? (
          <Image
            source={iconRight}
            style={[
              styles.icon,
              {
                width: scale(iconRightSize),
                height: verticalScale(iconRightSize),
                tintColor: iconRightColor
              },
              iconRightColor ? { tintColor: iconRightColor } : {},
              styleIconRight
            ]}
          />
        ) : null}
      </TouchableOpacity>
    );
  }
}
const styles = ScaledSheet.create({
  container: {
    borderRadius: '25@s',
    backgroundColor: Colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: Colors.WHITE
  },
  icon: {
    width: '12@s',
    height: '12@vs',
    resizeMode: 'contain',
    margin: '5@s'
  }
});
