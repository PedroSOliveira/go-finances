import styled from 'styled-components';
import { Text, TouchableOpacity } from 'react-native';


export const Container = styled(TouchableOpacity)`  
    width: 100%;

    background: ${({ theme }) => theme.colors.secondary};
    padding: 18px;

    align-items: center;

    border-radius: 5px;
  
`;

export const Title = styled(Text)`  
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: 14px;

`;
