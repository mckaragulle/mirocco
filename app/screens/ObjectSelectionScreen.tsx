import { router } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const objects = ['❤️', '🌸', '🌈', '🍬', '🐱', '🐰', '🦄', '☁️'];

export default function ObjectSelectionScreen({ route, navigation }) {
  const { selectedColor } = route.params;
  const [randomObject, setRandomObject] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomObject(objects[Math.floor(Math.random() * objects.length)]);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const checkMatch = () => {
    if (selectedColor === randomObject) {
      setScore(score + 1);
    }
    // Move to next round or player
    router.navigate('/screens/ColorSelectionScreen')
  };

  return (
    <View>
      <Text>Dönen Nesne: {randomObject}</Text>
      <Button title="Eşleştir" onPress={checkMatch} />
      <Text>Puan: {score}</Text>
    </View>
  );
}
