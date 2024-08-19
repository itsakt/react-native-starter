import 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { fireEvent, render, screen } from '@testing-library/react-native';
import { RootNavigator } from '../src/App';

test('shows about screen when About button is pressed', () => {
  render(
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>,
  );

  fireEvent.press(screen.getByText('About'));
  expect(screen.getByText('Hello')).toBeOnTheScreen();
});
