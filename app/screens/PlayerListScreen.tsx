import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

export default function PlayerListScreen() {
  const [players, setPlayers] = useState([]);
  const [name, setName] = useState('');

  const addPlayer = () => {
    setPlayers([...players, name]);
    setName('');
  };

  const startGame = () => {
    // router.navigate('..')
  };

  return (
    <View>
      <TextInput
        placeholder="Oyuncu Adı"
        value={name}
        onChangeText={setName}
      />
      <Button title="Oyuncu Ekle" onPress={addPlayer} />
      <Button title="Başla" onPress={startGame} />
      {players.length > 0 && <Text>Oyuncular: {players.join(', ')}</Text>}
    </View>
  );
}
