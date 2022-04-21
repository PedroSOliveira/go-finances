import styled from 'styled-components';
import { Text, TouchableOpacity, View } from 'react-native';

import { Feather } from '@expo/vector-icons';

interface CategoryProps {
    isActive: boolean;
}

export const Container = styled(View)`  
    flex: 1;

    background: ${({ theme }) => theme.colors.background};
    

`;

export const Header = styled(View)`
    width: 100%;
    height: 15%;

    background: ${({ theme }) => theme.colors.primary};

    align-items: center;
    justify-content: center;

    padding-bottom: 19px;


`;

export const Title = styled(Text)`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.shape};
    font-size: 18px;
`;

export const Category = styled(TouchableOpacity)<CategoryProps>`
    width: 100%;
    padding: 15px;

    flex-direction: row;
    align-items: center;

    background: ${({ theme, isActive }) => isActive ? theme.colors.secondary_light : theme.colors.background};

`;

export const Icon = styled(Feather)`
    font-size: 20px;
    margin-right: 16px;
`;

export const Name = styled(Text)`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 18px;

    color: ${({ theme }) => theme.colors.text_dark};
`;

export const Separator = styled(View)`
    height: 1px;
    width: 100%;

    background: ${({ theme }) => theme.colors.text};
`;

export const Footer = styled(View)`
    width: 100%;
    padding: 24px;

`;

