import { Text, View } from 'react-native';
import styled, { css } from 'styled-components';

import { Feather } from "@expo/vector-icons";

interface TransactionProps {
    type: "positive" | "negative";
}

export const Container = styled(View)`
    background: ${({ theme }) => theme.colors.shape};
    border-radius: 5px;

    padding: 17px 24px;

    margin-bottom: 12px;
   
`;

export const Title = styled(Text)`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 14px;  
`;

export const Amount = styled(Text) <TransactionProps>`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 20px;

    color: ${({ theme, type }) => type === 'positive' ? theme.colors.success : theme.colors.attention};

    margin-top: 2px;
`;

export const Footer = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: 19px;
`;

export const Category = styled(View)`
    flex-direction: row;

    align-items: center;
`;

export const Icon = styled(Feather)`
    font-size: 20px;
    color: ${({ theme }) => theme.colors.text};
`;

export const CategoryName = styled(Text)`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text};
    margin-left: 5px;
`;

export const Date = styled(Text)`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text};
`;

