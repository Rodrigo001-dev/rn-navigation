import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// na primeira posição do generic(<>) eu falo qual tipagem das minhas rotas
// na segunda posição eu falo qual é a inteface que eu estou agora
// type StackProps = NativeStackScreenProps<StackParamList, 'Home'>;

export function Home() {
  const navigation = useNavigation();
  
  function openScreen() {
    navigation.navigate('screenA', { name: 'Esse conteúdo veio da tela A' });
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center' }}>

      <Button 
        title="Ir para tela A"
        onPress={openScreen}
      />

    </View>
  );
}