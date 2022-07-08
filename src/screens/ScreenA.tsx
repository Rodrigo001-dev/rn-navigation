import React from 'react';
import { useRoute } from '@react-navigation/native';
import { View, Text } from 'react-native';

type ParamsProps = {
  name: string;
};

export function ScreenA() {
  const route = useRoute();
  const { name } = route.params as ParamsProps;

  return (
    <View style={{ flex: 1, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, color: '#FFF' }}>
        {name}
      </Text>
    </View>
  );
}