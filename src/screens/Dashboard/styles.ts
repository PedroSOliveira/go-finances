import styled from 'styled-components';
import { View, Text, Image, ScrollView, FlatList } from 'react-native';

import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

export const Container = styled(View)`  
    flex: 1;
    background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled(View)`
    width: 100%;
    height: 35%;
    background: ${({ theme }) => theme.colors.primary};

    padding-top: 30px;

    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
`
export const UserWrapper = styled(View)`
    width: 100%;

    padding: 0 24px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const UserInfo = styled(View)`
    flex-direction: row;
    align-items: center;
`
export const Photo = styled(Image)`
    width: 48px;
    height: 48px;

    border-radius: 10px;
`
export const User = styled(View)`
    margin-left: 17px;
`
export const UserGreeting = styled(Text)`
    color: ${({ theme }) => theme.colors.shape};

    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.regular};
`
export const UserName = styled(Text)`
    color: ${({ theme }) => theme.colors.shape};

    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.bold};

`;

export const LogoutButton = styled(BorderlessButton)`
    color: ${({ theme }) => theme.colors.secondary};

    font-size: 32px;
`;

export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.secondary};

    font-size: 32px;
`;

export const HighlightCards = styled(ScrollView).attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { paddingHorizontal: 24 }
})`
    width: 100%;
    position: absolute;
    margin-top: 100px;
`;

export const Transactions = styled(View)`
    flex: 1%;
    padding: 0 24px;

    margin-top: 80px;
`;
export const Title = styled(Text)`
    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.regular};

    margin-bottom: 10px;

`;

export const TransactionsList = styled(FlatList).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: 20
    }
})`` as React.ComponentType as new <DataListProps>() => FlatList<DataListProps>;

