import styled from '@emotion/styled';
import HomeList from '../components/home/Index';
import { Flex } from '@totejs/uikit';
import Bg from '../images/assets/ai.png';
import people from '../images/assets/people.png';
import GithubIcon from '../components/svgIcon/GithubIcon';
import { DocIcon, FullTeamIcon, LinkArrowIcon } from '@totejs/icons';
import DiscordIcon from '../components/svgIcon/DiscordIcon';
import BSCIcon from '../components/svgIcon/BSCIcon';
import './home.css';
import Brand from '../components/brand/Brand';
import Whatabc_market from '../components/whatABCMarket/WhatABCMarket';
import CTA from '../components/cta/CTA';
import logo from '../images/logo.png';
import HomeFooter from '../components/layout/HomeFooter';
const Home = () => {
  return (
    <section className="overflow-x-clip">
      <Container flexDirection={'column'} alignItems={'center'}>
        <BannerInfo className="overflow-x-clip abc_market__header section__padding">
          <div className="">
            <img
              src={Bg}
              alt=""
              className="object-contain translate-x-96 translate-y-10 "
              width={100}
              height={100}
            />
            <Info flexDirection={'column'} gap={26}>
              <Title className="gradient__text">
                AI Binance Cast<br></br> DATA MARKETPLACE
              </Title>
              <div className="text-3xl">
                Share our conversations. with AI spokespeople on various social.
              </div>
              <div className="abc_market__header-content__people">
                <img
                  src={people}
                  style={{ width: '181.79px', height: '38px' }}
                  className="object-contain -translate-x-32 "
                />
                <p className="translate-x-44">
                  1,600 people requested access a visit in last 24 hours
                </p>
              </div>
              <a href="https://ai-binance-cast.vercel.app/" target="_blank">
                <GithubCon
                  className="text-lg"
                  gap={12}
                  justifyContent={'flex-start'}
                  alignItems={'center'}
                >
                  <img
                    src={logo}
                    alt="abc_market_logo"
                    style={{ width: '50px', height: '50px' }}
                    className="object-contain -translate-x-48"
                  />
                  <div className="translate-x-14">
                    VISIT ABC Website & CREATE Chat Data
                    <LinkArrowIcon
                      w={18}
                      h={18}
                      className="arrow"
                    ></LinkArrowIcon>
                  </div>
                </GithubCon>
              </a>
            </Info>
          </div>
        </BannerInfo>
        <HomeList></HomeList>
        <Brand />
        <Whatabc_market />
        {/* <CTA /> */}
        {/* <Cards
        alignItems={'center'}
        justifyContent={'center'}
        flexDirection={'column'}
        gap={50}
      >
        <TitleCon flexDirection={'column'} alignItems={'center'} gap={20}>
          <CardTitle>Build You Own dApps with BNB Greenfield</CardTitle>
          <CardSubTitle>
            We’ve prepared all the toolings you need to get started with BNB
            Greenfield Now!
          </CardSubTitle>
        </TitleCon>
        <CardCon gap={18}>
          <a href="https://greenfield.bnbchain.org/en" target="_blank">
            <CardItem alignItems={'center'} gap={16} flexDirection={'column'}>
              <BSCIcon w={32} h={32} className="icon"></BSCIcon>
              <CardItemTitle className="title">
                BNB Greenfield<br></br>Website
              </CardItemTitle>
            </CardItem>
          </a>
          <a
            href="https://docs.bnbchain.org/greenfield-docs/docs/guide/home"
            target="_blank"
          >
            <CardItem alignItems={'center'} gap={16} flexDirection={'column'}>
              <DocIcon w={32} h={32} className="icon"></DocIcon>
              <CardItemTitle className="title">Documentations</CardItemTitle>
            </CardItem>
          </a>
          <a
            href="https://docs.bnbchain.org/greenfield-docs/docs/guide/home"
            target="_blank"
          >
            <CardItem alignItems={'center'} gap={16} flexDirection={'column'}>
              <GithubIcon w={26} h={26} className="icon"></GithubIcon>
              <CardItemTitle className="title">Github</CardItemTitle>
            </CardItem>
          </a>
          <a href="https://forum.bnbchain.org/" target="_blank">
            <CardItem alignItems={'center'} gap={16} flexDirection={'column'}>
              <FullTeamIcon w={32} h={32} className="icon"></FullTeamIcon>
              <CardItemTitle className="title">Forum</CardItemTitle>
            </CardItem>
          </a>
          <a href="https://discord.gg/bnbchain" target="_blank">
            <CardItem alignItems={'center'} gap={16} flexDirection={'column'}>
              <DiscordIcon w={32} h={32} className="icon"></DiscordIcon>
              <CardItemTitle className="title">Discord</CardItemTitle>
            </CardItem>
          </a>
        </CardCon>
      </Cards> */}
      </Container>
      <HomeFooter />
    </section>
  );
};

export default Home;

const Container = styled(Flex)`
  margin-top: -80px;
  width: 100%;
  background-color: #040c18;
`;

const BannerInfo = styled.div`
  position: relative;
  width: 100%;
  height: 564px;
  background-color: #040c18;
  img {
    position: absolute;
    min-width: 1440px;
    height: 564px;
    right: 0;
  }
`;

const Info = styled(Flex)`
  position: absolute;
  top: 228px;
  left: 148px;
`;

const Title = styled.div`
  font-size: 58px;
  font-weight: 400;
  line-height: 58px;
  font-family: 'Zen Dots';
`;

const GithubCon = styled(Flex)`
  cursor: pointer;
  color: #f0b90b;
  .githubIcon {
    color: #cc9d09;
  }
  .arrow {
    color: #cc9d09;
  }
  &:hover {
    color: #f8d12f;
    .githubIcon {
      color: #f0b90b;
    }
    .arrow {
      color: #f0b90b;
    }
  }
`;

const Cards = styled(Flex)`
  margin: 80px 0 114px;
  background-color: #042c54;
  width: 1200px;
  height: 426px;
  border-radius: 15px;
`;

const TitleCon = styled(Flex)``;

const CardTitle = styled.div`
  font-size: 34px;
  font-weight: 700;
  color: #ffffff;
`;

const CardSubTitle = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: #b9b9bb;
`;

const CardCon = styled(Flex)``;

const CardItem = styled(Flex)`
  text-align: center;
  width: 190px;
  height: 140px;
  border-radius: 8px;
  background-color: #81afdd;
  line-height: 28px;
  .icon {
    margin-top: 22.3px;
  }
  .title {
    color: #fff;
  }
  &:hover {
    background-color: #fff;

    .icon {
      margin-top: 22.3px;
      color: #aeafb0;
    }
    .title {
      color: #535458;
    }
  }
`;

const CardItemTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #fff;
`;
