import { Link, Redirect } from 'expo-router';
import { Pressable, Text } from 'react-native';

export default function Route() {
  return (
    <>
      <Link href="/home" asChild>
        <Pressable>
          <Text>Home</Text>
        </Pressable>
      </Link>
      <Link href="/diger" asChild>
        <Pressable>
          <Text>Diğer</Text>
        </Pressable>
      </Link>
    </>
  );
}
