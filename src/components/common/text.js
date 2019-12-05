/* eslint-disable react/no-string-refs */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable global-require */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { StyleSheet, Dimensions, Text as TextRN } from 'react-native';

const { height, width } = Dimensions.get('window');
export default class Text extends PureComponent {
  render() {
    const { style } = this.props;
    return <TextRN style={[styles.text, style]} {...this.props} />;
  }
}
const styles = StyleSheet.create({
  text: {}
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fafdff'
  // }
});
