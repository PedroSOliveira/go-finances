import styled from 'styled-components';
import { TextInput } from 'react-native';

import { Feather } from "@expo/vector-icons";

export const Container = styled(TextInput)`  
    width: 100%;
    padding: 16px 18px;

    font-family: ${({ theme }) => theme.fonts.regular}
    font-size: 14px;
    background: ${({ theme }) => theme.colors.shape}

    color: ${({ theme }) => theme.colors.text_dark}

    border-radius: 5px;
    margin-bottom: 8px;
`;
