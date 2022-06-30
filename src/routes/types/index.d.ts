import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
type RootStackParamsList = {
  Login: undefined;
  Register: undefined;
  Dashboard: undefined;
  CategorySelect: undefined;
};

export type ScreenProps = BottomTabScreenProps<RootStackParamsList>;
