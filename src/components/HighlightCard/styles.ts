import { Text, View } from 'react-native';
import styled, { css } from 'styled-components';

import { Feather } from "@expo/vector-icons";

interface TypeProps {
    type: "up" | "down" | "total";
}

export const Container = styled(View) <TypeProps>`
    background:  ${({ theme, type }) =>
        type === 'total' ? theme.colors.secondary : theme.colors.shape};

    width: 290px;
    height: 170px;

    border-radius: 5px;

    padding: 19px 23px;
    padding-bottom: 42px;

    margin-right: 32px;
`;

export const Header = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`;

export const Title = styled(Text) <TypeProps>`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 14px;

    color: ${({ theme, type }) =>
        type === 'total' ? theme.colors.shape : theme.colors.text_dark};

`;

export const Icon = styled(Feather) <TypeProps>` 
    font-size: 40px;

    ${({ type }) => type === 'up' && css`
     color: ${({ theme }) => theme.colors.success};
    `};

    ${({ type }) => type === 'down' && css`
     color: ${({ theme }) => theme.colors.attention};
    `};

    ${({ type }) => type === 'total' && css`
     color: ${({ theme }) => theme.colors.shape};
    `};
`;

export const Footer = styled(View)` `;

export const Amount = styled(Text)<TypeProps>`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: 32px;

    color: ${({ theme, type }) => type === 'total' ? theme.colors.shape : theme.colors.text_dark};
    margin-top: 38px;

`;

export const LastTransaction = styled(Text)<TypeProps>`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 12px;

    color: ${({ theme, type }) => type === 'total' ? theme.colors.shape : theme.colors.text}
`;
