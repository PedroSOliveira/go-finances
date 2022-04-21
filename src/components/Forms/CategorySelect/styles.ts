import styled from 'styled-components';
import { Text, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

export const Container = styled(TouchableOpacity).attrs({
    activeOpacity: 0.7
})`  
    margin-top: 16px;

    width: 100%;

    background: ${({ theme }) => theme.colors.shape};
    padding: 18px 16px;
    
    flex-direction: row;
    justify-content: space-between;
    align-items: center;


    border-radius: 5px;
  
`;

export const Category = styled(Text)`  
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: 14px;

`;

export const Icon = styled(Feather)`  
    color: ${({ theme }) => theme.colors.text};
    font-size: 20px;

`;
