import React, { PureComponent } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Colors } from '../../../common/colors';
import { scale, ScaledSheet } from 'react-native-size-matters';
import Text from '../text';

export class ButtonRadioRN extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isSelect: false
    };
  }

  componentWillMount() {
    const { isSelect = false } = this.props;
    this.setState({ isSelect });
  }

  componentWillReceiveProps(nextProps) {
    const { isSelect } = nextProps;
    this.setState({ isSelect });
  }

  handlePress = () => {
    const { onPress } = this.props;
    const { isSelect } = this.state;
    this.setState(
      {
        isSelect: !isSelect
      },
      () => {
        // eslint-disable-next-line react/destructuring-assignment
        onPress && onPress(this.state.isSelect);
      }
    );
  };

  render() {
    const {
      icon = require('@assets/icons/ic_radio.png'),
      size = 36,
      iconSize = 24,
      style,
      styleRadio,
      styleTitle,
      title,
      activeColor = Colors.PRIMARY,
      inactiveColor = Colors.WHITE,
      backgroundColor = Colors.WHITE
    } = this.props;
    const { isSelect } = this.state;
    return (
      <TouchableOpacity
        onPress={this.handlePress}
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          ...style
        }}>
        <TouchableOpacity
          {...this.props}
          onPress={this.handlePress}
          style={[
            styles.container,
            { backgroundColor },
            {
              width: scale(size),
              height: scale(size),
              borderRadius: scale(size / 2)
            },
            styleRadio
          ]}>
          {icon && (
            <Image
              source={icon}
              style={[
                styles.icon,
                { width: scale(iconSize), height: scale(iconSize) },
                { tintColor: isSelect ? activeColor : inactiveColor }
              ]}
            />
          )}
        </TouchableOpacity>
        <Text numberOfLines={2} style={[styles.textButton, styleTitle]}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = ScaledSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: '#F4F6F9',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton: {
    fontSize: '13@ms0.3',
    flex: 1,
    margin: 6,
    color: Colors.BLACK_LIGHT
  },
  icon: {
    width: 12,
    height: 12,
    resizeMode: 'contain'
  }
});
