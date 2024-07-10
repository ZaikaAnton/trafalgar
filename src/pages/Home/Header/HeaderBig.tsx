import styled from 'styled-components';
import SearchBar from './SearchBar/SearchBar';
import MenuBar from './MenuBar/MenuBar';
import { Button } from '../../../components/CustomButton/CustomButton';
import { ProfileButton } from './ProfileButton/ProfileButton';
import { HeaderWrapper, HeaderProfileSection, HeaderShoppingCart, HeaderTopBar } from './Components/ComponentsHeader';
import { forwardRef } from 'react';
import Location from './Components/Location';
import Logo from './Components/Logo';

const NavBar = styled.div`
  display: flex;
  padding: 24px 80px 24px 80px;
  gap: 24px;
  height: 96px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.White};
  @media (max-width: 1200px) {
    padding: 8px 40px 8px 40px;
  }
`;

const HeaderBig = forwardRef<HTMLDivElement>((props, ref) => (
  <HeaderWrapper ref={ref}>
    <HeaderTopBar>
      <Location location="Москва" />
      <HeaderProfileSection>
        <ProfileButton />
        <HeaderShoppingCart>
          <img src="/public/assets/Header/icons/shopping-cart.svg" alt="ShoppingCartIcon" />
          Корзина
          <img src="/public/assets/Header/icons/chevron-down.svg" alt="ArrowDownIcon" />
        </HeaderShoppingCart>
      </HeaderProfileSection>
    </HeaderTopBar>
    <NavBar>
      <Logo />
      <SearchBar />
      <Button onClick={() => alert('Button Clicked!')}>Поиск</Button>
    </NavBar>
    <MenuBar />
  </HeaderWrapper>
));

HeaderBig.displayName = 'HeaderBig';

export default HeaderBig;
