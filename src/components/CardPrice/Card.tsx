import React from 'react';
import styled from 'styled-components';
import Button from '../Button.tsx';

export const CardPrice = ({ title, description, oldPrice, newPrice, itemList }) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardText $variant="bodyL">{description}</CardText>
    </CardHeader>
    <Price>
      <PriceOld>{oldPrice}</PriceOld>
      <PriceNew>{newPrice}</PriceNew>
      <p>{newPrice} USD каждый месяц</p>
    </Price>
    <Button width="135px" height="56px" $primary="primary">
      Начать
    </Button>
    <ListContainer>
      {itemList &&
        itemList.map((item, index) => (
          <ListItem key={index}>
            <img src="/assets/check.svg" alt="check" />
            {item}
          </ListItem>
        ))}
    </ListContainer>
  </Card>
);
const Card = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  max-width: 410px;
  width: 100%;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.coolGray20};
  border-radius: 8px;
  padding: 48px 24px;
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const CardTitle = styled.div`
  ${({ theme }) => theme.typography.h3};
`;

const CardText = styled.div`
  ${({ theme }) => theme.typography.bodyL};
  @media (max-width: 360px) {
    ${({ theme }) => theme.typography.bodyM}
  }
`;

const Price = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  p {
    font-size: ${({ theme }) => theme.typography.bodyS};
  }
`;

const PriceOld = styled.div`
  text-decoration: line-through;
  color: ${({ theme }) => theme.colors.coolGray40};
  font-size: ${({ theme }) => theme.typography.h1};
`;

const PriceNew = styled.div`
  font-size: ${({ theme }) => theme.typography.h1};
`;

const ListContainer = styled.div`
  ${({ theme }) => theme.typography.bodyL};
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  @media (max-width: 1920px) {
    font-size: 20px;
  }
  @media (max-width: 1440px) {
    ${({ theme }) => theme.typography.bodyL}
  }
`;
