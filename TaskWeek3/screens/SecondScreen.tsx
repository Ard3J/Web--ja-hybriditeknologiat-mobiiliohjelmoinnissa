import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types/navigation'

type Props = NativeStackScreenProps<RootStackParamList,'SecondScreen'>

export default function SecondScreen({navigation}: Props) {
  return (
    <View style = {styles.container}>
      <Text>Second Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
