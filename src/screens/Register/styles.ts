import styled from 'styled-components';
import { View, Text } from 'react-native';

export const Container = styled(View)`  
    flex: 1;
    background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled(View)`
    background: ${({ theme }) => theme.colors.primary}

    width: 100%;
    height: 113px;

    align-items: center;
    justify-content: center;
`;

export const Title = styled(Text)`
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 20px;
`;

export const Form = styled(View)`
    flex: 1;
    width: 100%;

    padding: 24px;

    justify-content: space-between;
`;

export const Fields = styled(View)`
 
`;

export const TransactionsTypes = styled(View)`  
    width: 100%;

    margin-top: 8px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  
`;

