import React from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';

const App = () => {
  return (
    <View>
      <TouchableOpacity onPress={onGoogleButtonPress}>
        <View>
          <Image source={images.googleIcon} />
        </View>
        <Text>Continue with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;