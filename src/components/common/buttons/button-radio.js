import React, { PureComponent } from 'react';
import { StyleSheet, Image, TouchableOpacity, View, Text } from 'react-native';
import { Colors } from '../../../common/colors';
import { scale } from 'react-native-size-matters';

export default class ButtonRadio extends PureComponent {
  handlePress = () => {
    const { onSelect, key, value } = this.props;
    onSelect && onSelect(key, value);
  };

  render() {
    const {
      icon = require('@assets/icons/ic_radio.png'),
      size = 36,
      iconSize = 24,
      style,
      backgroundColor = Colors.HEADER,
      title,
      styleTitle
    } = this.props;
    const { value } = this.props;
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity
          onPress={this.handlePress}
          {...this.props}
          style={[
            styles.container,
            style,
            {
              backgroundColor,
              width: scale(size),
              height: scale(size),
              borderRadius: scale(size / 2)
            }
          ]}>
          {icon && value ? (
            <Image
              resizeMode="contain"
              source={icon}
              tintColor={Colors.PRIMARY}
              style={[
                styles.icon,
                { width: scale(iconSize), height: scale(iconSize) }
              ]}
            />
          ) : (
            <View />
          )}
        </TouchableOpacity>
        {title ? <Text style={[styles.title, styleTitle]}>{title}</Text> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.HEADER,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: 12,
    height: 12,
    tintColor: Colors.PRIMARY
  },
  title: {
    fontSize: 16,
    color: Colors.BLACK_LIGHT,
    marginHorizontal: 10
  }
});
