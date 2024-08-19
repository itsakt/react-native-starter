/***
 * Custom type definitions for react navigation.
 * https://reactnavigation.org/docs/typescript/
 ***/
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  About: { text: string } | undefined;
};
export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type AboutScreenProps = NativeStackScreenProps<RootStackParamList, 'About'>;
