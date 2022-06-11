import React from 'react';
import {Text, View} from 'react-native';

export default function HelloWorld() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{textAlign: 'center'}}>{`Welcome to\nLumine`}</Text>
    </View>
  );
}
