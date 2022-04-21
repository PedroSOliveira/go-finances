import styled from 'styled-components';
import { View, Text } from 'react-native';

export const Container = styled(View)`  
    width: 100%;
`;

export const Error = styled(Text)`  
    color: ${({ theme }) => theme.colors.attention};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 14px;
    margin: 5px 0;
`;
