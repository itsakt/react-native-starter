import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { HomeScreenProps } from '../App.Types';

export function HomeScreen({ navigation }: HomeScreenProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Button
        title="About"
        onPress={() => {
          navigation.navigate('About');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
