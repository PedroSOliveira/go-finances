import React from "react";
import { StatusBar } from "react-native";
import { HighlightCard } from "../../components/HighlightCard";
import {
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionCard";

import {
  Container,
  Header,
  HighlightCards,
  Icon,
  LogoutButton,
  Photo,
  Title,
  Transactions,
  TransactionsList,
  User,
  UserGreeting,
  UserInfo,
  UserName,
  UserWrapper,
} from "./styles";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export const Dashboard = () => {
  const dataTransaction: DataListProps[] = [
    {
      id: "1",
      type: "positive",
      title: "Desenvolvimento de site",
      amount: "R$ 5.000,00",
      category: { name: "Vendas", icon: "dollar-sign" },
      date: "10/03/1999",
    },
    {
      id: "2",
      type: "negative",
      title: "Pizza",
      amount: "R$ 50,00",
      category: { name: "Vendas", icon: "coffee" },
      date: "10/03/1999",
    },
    {
      id: "3",
      type: "negative",
      title: "Aluguel",
      amount: "R$ 5.000,00",
      category: { name: "Vendas", icon: "home" },
      date: "10/03/1999",
    },
  ];

  return (
    <Container>
      <StatusBar backgroundColor="#5636D3" barStyle="light-content" />
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/37816505?v=4",
              }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Pedro</UserName>
            </User>
          </UserInfo>

          <LogoutButton onPress={() => alert("Logout")}>
            <Icon name="power" />
          </LogoutButton>
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 5.000,00"
          lastTransaction="Último dia 10 de Março"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 1.000,00"
          lastTransaction="Último dia 10 de Março"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 4.000,00"
          lastTransaction="Último dia 10 de Março"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionsList
          data={dataTransaction}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
};
