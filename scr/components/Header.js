// Import libraries for making component
import React from 'react';
import { Text, View } from 'react-native';

// Create a component
const Header = (props) => {
  const { textStyle, viewStyle } = style;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const style = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 5,
    position: 'relative'
  },
  textStyle: {
    fontSize: 25
  }
};

// Make the component available for other parts of app
export default Header;
