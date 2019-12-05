import React, { PureComponent } from 'react';
import { Switch as SwitchRN } from 'react-native';
import { Colors } from '../../../common/colors';

export default class Switch extends PureComponent {
  render() {
    const { size = 1, style } = this.props;
    return (
      <SwitchRN
        style={[{ transform: [{ scaleX: size }, { scaleY: size }] }, style]}
        // tintColor={Colors.PRIMARY}
        trackColor={{ false: Colors.HEADER, true: Colors.PRIMARY }}
        {...this.props}
      />
    );
  }
}
