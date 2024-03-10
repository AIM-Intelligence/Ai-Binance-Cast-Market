import styled from '@emotion/styled';
import { NavBar } from '../NavBar';
import { useCallback } from 'react';
import { Box } from '@totejs/uikit';
import { useNavigate, useSearchParams } from 'react-router-dom';
import AllList from './All';
import TrendingList from './Trending';

enum Type {
  All = 'all',
  Trending = 'trending',
}
const navItems = [
  {
    name: 'All',
    key: Type.All,
  },
];

const HomeList = () => {
  const [p] = useSearchParams();
  const tab = p.getAll('tab')[0];

  const navigator = useNavigate();
  const currentTab = tab ? tab : Type.Trending;
  const handleTabChange = useCallback((tab: any) => {
    navigator(`/?tab=${tab}`);
  }, []);
  return (
    <Container>
      <NavBar active={currentTab} onChange={handleTabChange} items={navItems} />
      <Box h={20} />
     
      <AllList></AllList>

      {/* {currentTab === Type.All ? (
        <AllList></AllList>
      ) : (
        <TrendingList></TrendingList>
      )} */}
    </Container>
  );
};

export default HomeList;

const Container = styled.div`
  margin-top: 100px;
  width: 1123px;
`;
