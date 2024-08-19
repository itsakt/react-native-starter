import React from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Colors } from '../Colors';
import { AboutScreenProps } from '../App.Types';

export function AboutScreen({
  navigation,
  route,
}: AboutScreenProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
          ...styles.container,
        }}>
        <Text style={styles.title}>{route.params?.text}</Text>

        <Button
          title="Home"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 50,
  },
  title: {
    fontSize: 24,
    padding: 5,
    fontWeight: '600',
  },
});
