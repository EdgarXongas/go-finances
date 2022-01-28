import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({theme})=>theme.colors.background};
`;

export const Title = styled.Text`
  font-family: ${({theme})=>theme.fonts.regular};
  font-size: 24px;
  font-weight: bold;
  color: ${({theme})=>theme.colors.title};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  background-color: ${({theme})=>theme.colors.primary};
  flex-direction: row;
`;

export const UserContainer = styled.View`
  width: 100%;
  height: ${RFValue(48)}px;
  padding: 0 24px;
  margin-top: 50px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const UserInfo = styled.View`
  flex-direction: row;
`;

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px; 
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const UserGreeting = styled.Text`
  font-family: ${({theme})=>theme.fonts.regular};
  color: ${({theme})=>theme.colors.shape};
  font-size: ${RFValue(18)}px;
  line-height: 24px;
`;

export const UserName = styled.Text`
  font-family: ${({theme})=>theme.fonts.bold};
  color: ${({theme})=>theme.colors.shape};
  font-size: ${RFValue(18)}px;
  line-height: 24px;
`;

export const Icon = styled(Feather)`
  color: ${({theme})=>theme.colors.secondary};
  font-size: ${RFValue(24)}px;
`;

export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { 
    paddingHorizontal: 24
   }
})`
  width: 100%;
  
  position: absolute;
  margin-top: ${RFPercentage(42)}px;
`;