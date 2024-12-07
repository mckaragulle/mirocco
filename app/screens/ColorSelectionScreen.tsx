import { router } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { View, Button, Text } from 'react-native';

const colors = ['#FF6347', '#FFD700', '#EE82EE', '#00BFFF', '#98FB98'];

export default function ColorSelectionScreen({ navigation }) {
  const [randomColor, setRandomColor] = useState('#FFFFFF');
  const [selectedColor, setSelectedColor] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomColor(colors[Math.floor(Math.random() * colors.length)]);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const selectColor = (color) => {
    setSelectedColor(color);
    router.navigate('/screens/ObjectSelectionScreen/', { selectedColor: color });
    //, { selectedColor: color }
  };

  return (
    <View>
      <Text>Renk Seçin</Text>
      <Text style={{ backgroundColor: randomColor, padding: 20 }}>Dönen Renk</Text>
      {colors.map((color) => (
        <Button key={color} title={color} color={color} onPress={() => selectColor(color)} />
      ))}
    </View>
  );
}
