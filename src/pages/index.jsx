/* global tw */
import React from 'react';
import styled from 'react-emotion';
import 'typeface-cantata-one';
import 'typeface-open-sans';
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons';
import SEO from '../components/SEO';
import SVG from '../components/SVG';
import ProjectCard from '../components/ProjectCard';
import { rotate, UpDown, UpDownWide, waveAnimation } from '../styles/animations';
import { hidden } from '../styles/utils';
import { colors } from '../../tailwind';
import triangle from '../images/triangle.svg';
import '../styles/global';

const Divider = styled(ParallaxLayer)`
  ${tw('absolute w-full h-full')};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`;

const DividerMiddle = styled(Divider)`
  clip-path: polygon(0 15%, 100% 25%, 100% 85%, 0 75%);
`;

const Content = styled(ParallaxLayer)`
  ${tw('p-6 md:p-12 lg:p-24 justify-center items-center flex z-50')};
`;

const Hero = styled.div`
  ${tw('w-full xl:w-2/3')};
`;

const Inner = styled.div`
  ${tw('w-full xxl:w-2/3 text-center lg:text-left')};
`;

const ProcessHero = styled.div`
  ${tw('w-full xl:w-full')};
`;

const BigTitle = styled.h1`
  ${tw('text-5xl lg:text-6xl font-serif text-white mb-6 tracking-wide')};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`;

const ProcessNumber = styled.h1`
  ${tw('text-5xl lg:text-6xl font-serif text-white text-left mb-6 tracking-wide')};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`;

const Title = styled.h1`
  ${tw('text-4xl lg:text-4xl font-serif text-white mb-8 tracking-wide relative inline-block')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  &:before {
    content: '';
    width: 40px;
    height: 40px;
    background: url(${triangle});
    position: absolute;
    background-size: 40px;
    animation: ${rotate} 4s linear infinite;
    left: -60px;
    top: 5px;
  }
`;

const Subtitle = styled.p`
  ${tw('text-2xl lg:text-4xl font-sans text-white  mt-8 xxl:w-3/4')};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;

const ProjectsWrapper = styled.div`
  ${tw('flex flex-wrap justify-between mt-8')};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const WaveWrapper = styled.div`
  ${tw('absolute pin-b w-full')};
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const InnerWave = styled.div`
  ${tw('relative h-full')};
  svg {
    width: 100%;
    height: 40vh;
  }
`;

const ProcessContainer = styled.div`
  ${tw('inline-flex')};
`;
const ProcessSubContainerRed = styled.div`
  ${tw('flex-1 text-black text-left bg-red px-4 py-2 m-2')};
`;
const ProcessSubContainerYellow = styled.div`
  ${tw('flex-1 text-black text-left bg-yellow px-4 py-2 m-2')};
`;
const ProcessSubContainerOrange = styled.div`
  ${tw('flex-1 text-black text-left bg-orange px-4 py-2 m-2')};
`;

const ProcessTitle = styled.h2`
  ${tw('text-4xl lg:text-4xl font-serif text-white text-left mb-6 tracking-wide')};
`;

const ProcessDescription = styled.p`
  ${tw('text-black text-lg md:text-xl text-left lg:text-2xl font-sans pt-6 md:pt-12 text-justify')};
`;

const ContactForm = styled.form`
  ${tw('w-full max-w-md inline-flex')};
`;
const ContactContainer = styled.div`
  ${tw('md:flex-1 md:items-center m-4')};
`;
const ContactLabelContainer = styled.div`
  ${tw('md:w-full')};
`;
const ContactInputContainer = styled.div`
  ${tw('md:w-full')};
  height: 50%;
  margin-left: 25%;
  margin-top: 10%;
`;
const ContactSignupContainer = styled.div`
  ${tw('md:flex md:items-center my-1.5 mx-1')};
`;
const ContactLabel = styled.label`
  ${tw('block text-grey font-bold md:text-center mb-1 md:mb-0 pr-4')};
`;
const ContactInput = styled.input`
  ${tw('bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple')};
`;
const ContactButton = styled.button`
  ${tw('shadow bg-purple hover:bg-purple-light focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded')};
  margin-top: 20%;
  margin-left: 25%;
  width: 200%;
`;

const Footer = styled.footer`
  ${tw('text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg')};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

const Index = () => (
  <React.Fragment>
    <SEO />
    <Parallax pages={5}>
      <Divider speed={0.2} offset={0}>
        <UpDown>
          <SVG icon="triangle" className={hidden} width={48} stroke={colors.orange} left="10%" top="20%" />
          <SVG icon="hexa" width={48} stroke={colors.red} left="60%" top="70%" />
          <SVG icon="box" width={6} fill={colors['grey-darker']} left="60%" top="15%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="arrowUp" className={hidden} width={16} fill={colors['blue-dark']} left="80%" top="10%" />
          <SVG icon="triangle" width={12} stroke={colors.white} left="90%" top="50%" />
          <SVG icon="circle" width={16} fill={colors['grey-darker']} left="70%" top="90%" />
          <SVG icon="triangle" width={16} stroke={colors['grey-darkest']} left="30%" top="65%" />
          <SVG icon="circle" width={6} fill={colors['grey-darkest']} left="75%" top="10%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" className={hidden} width={24} fill={colors['grey-darker']} left="5%" top="70%" />
        <SVG icon="circle" width={6} fill={colors['grey-darkest']} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="50%" top="60%" />
        <SVG icon="upDown" width={8} fill={colors['grey-darkest']} left="95%" top="90%" />
        <SVG icon="upDown" className={hidden} width={24} fill={colors['grey-darker']} left="40%" top="80%" />
        <SVG icon="triangle" width={8} stroke={colors['grey-darker']} left="25%" top="5%" />
        <SVG icon="circle" width={64} fill={colors.green} left="95%" top="5%" />
        <SVG icon="box" className={hidden} width={64} fill={colors.purple} left="5%" top="90%" />
        <SVG icon="box" width={6} fill={colors['grey-darkest']} left="10%" top="10%" />
        <SVG icon="box" width={12} fill={colors['grey-darkest']} left="40%" top="30%" />
        <SVG icon="hexa" width={16} stroke={colors['grey-darker']} left="10%" top="50%" />
        <SVG icon="hexa" width={8} stroke={colors['grey-darker']} left="80%" top="70%" />
      </Divider>
      <Content speed={0.4} offset={0}>
        <Hero>
        <BigTitle>
            Durian <br /> Social Media
          </BigTitle>
          <Subtitle>
            Helping you reach your potential customers by building a powerful
            brand legacy on Social media.
          </Subtitle>
          </Hero>
      </Content>
      <DividerMiddle
        bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
        speed={-0.2}
        offset={1.1}
        factor={2}
      />
      <Content speed={0.4} offset={1.2} factor={2}>
        <Inner>
          <Title>Services</Title>
          <ProjectsWrapper>
          <ProjectCard
              title="Website Design"
              link="https://www.behance.net/gallery/58937147/Freiheit"
              bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
            >
              We build custom websites from scratch that wow visitors and drive
              conversions. We like working with small to mid-sized businesses
              who want a website that builds your brands image, looks
              incredible, and generates real, measurable results.
            </ProjectCard>
            <ProjectCard
              title="Social Media Management"
              link="https://www.behance.net/gallery/52915793/Harry-Potter"
              bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
            >
              We offer full-service social media management services. We can
              create and maintain your marketing campaigns - bringing your
              business in front of thousands or even tens of thousands of
              potential new customers
            </ProjectCard>
            <ProjectCard
              title="Search Engine Optimization"
              link="https://www.behance.net/gallery/43907099/Tomb-Raider"
              bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
            >
              Get found on Google & Bing for relevant searches with our SEO
              services. Through careful keyword research and white-hat
              practices, we can help you achieve high rankings in the major
              search engines.
            </ProjectCard>
            <ProjectCard
              title="Facebook Advertising"
              link="https://www.behance.net/gallery/38068151/Eagle"
              bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
            >
              Facebook is the largest and most powerful social media advertising
              platform in the world. At Durian, we realize how to put the
              correct sorts of ads in the correct places on Facebook and make
              incredible outcomes for your business.
            </ProjectCard>
          </ProjectsWrapper>
        </Inner>
      </Content>
      <Divider speed={0.1} offset={1} factor={2}>
        <UpDown>
          <SVG icon="box" width={6} fill={colors.white} left="85%" top="75%" />
          <SVG icon="upDown" width={8} fill={colors.teal} left="70%" top="20%" />
          <SVG icon="triangle" width={8} stroke={colors.orange} left="25%" top="5%" />
          <SVG icon="circle" className={hidden} width={24} fill={colors.white} left="17%" top="60%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="arrowUp" className={hidden} width={16} fill={colors.green} left="20%" top="90%" />
          <SVG icon="triangle" width={12} stroke={colors.white} left="90%" top="30%" />
          <SVG icon="circle" width={16} fill={colors.yellow} left="70%" top="90%" />
          <SVG icon="triangle" className={hidden} width={16} stroke={colors.teal} left="18%" top="75%" />
          <SVG icon="circle" width={6} fill={colors.white} left="75%" top="10%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors.green} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill={colors.pink} left="80%" top="60%" />
        <SVG icon="box" width={6} fill={colors.orange} left="10%" top="10%" />
        <SVG icon="box" width={12} fill={colors.yellow} left="29%" top="26%" />
        <SVG icon="hexa" width={16} stroke={colors.red} left="75%" top="30%" />
        <SVG icon="hexa" width={8} stroke={colors.yellow} left="80%" top="70%" />
      </Divider>
      <Divider bg="#23262b" clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2} offset={3} />
      <Divider speed={0.1} offset={3}>
        <UpDown>
          <SVG icon="box" className={hidden} width={6} fill={colors.blue} left="50%" top="75%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="70%" top="20%" />
          <SVG icon="triangle" width={8} stroke={colors['grey-darkest']} left="25%" top="5%" />
          <SVG icon="upDown" className={hidden} width={24} fill={colors.orange} left="80%" top="80%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="arrowUp" className={hidden} width={16} fill={colors.purple} left="5%" top="80%" />
          <SVG icon="triangle" width={12} stroke={colors.white} left="95%" top="50%" />
          <SVG icon="circle" width={6} fill={colors.white} left="85%" top="15%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="70%" top="60%" />
        <SVG icon="box" width={6} fill={colors.orange} left="10%" top="10%" />
        <SVG icon="box" width={12} fill={colors['grey-darkest']} left="20%" top="30%" />
        <SVG icon="hexa" width={8} stroke={colors['grey-darkest']} left="80%" top="70%" />
      </Divider>
      <Content speed={0.4} offset={3}>
        <ProcessHero>
          <Title>Our proven process that produces results</Title>
          <ProcessContainer>
            <ProcessSubContainerYellow>
              <ProcessNumber>01.</ProcessNumber>
              <ProcessTitle>ANALYZE</ProcessTitle>
              <ProcessDescription>We will analyze your current setup and your biggest marketing problems.</ProcessDescription>
            </ProcessSubContainerYellow>
            <ProcessSubContainerOrange>
              <ProcessNumber>02.</ProcessNumber>
              <ProcessTitle>IMPLEMENT</ProcessTitle>
              <ProcessDescription>Next we will handle implementation from start to finish, including configuration and third party integration.</ProcessDescription>
            </ProcessSubContainerOrange>
            <ProcessSubContainerRed>
              <ProcessNumber>03.</ProcessNumber>
              <ProcessTitle>IMPROVE</ProcessTitle>
              <ProcessDescription>We continue to improve your setup incrementally, maximizing your inside sales effort and your online media spend on attracting interested consumers.</ProcessDescription>
            </ProcessSubContainerRed>
          </ProcessContainer>
        </ProcessHero>
      </Content>
      <Divider fill="#23262b" speed={0.2} offset={4}>
        <WaveWrapper>
          <InnerWave>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 338.05" preserveAspectRatio="none">
              <path className={waveAnimation}>
                <animate
                  attributeName="d"
                  values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                  repeatCount="indefinite"
                  dur="30s"
                />
              </path>
            </svg>
          </InnerWave>
        </WaveWrapper>
      </Divider>
      <Content speed={0.4} offset={4}>
        <Inner>
          <Title>Schedule a free consultation today</Title>
          <ContactForm>
            <ContactContainer>
              <ContactLabelContainer>
                <ContactLabel for="inline-full-name">Name</ContactLabel>
              </ContactLabelContainer>
              <ContactInputContainer>
                <ContactInput id="inline-full-name" type="text" placeholder="Jane Doe" />
              </ContactInputContainer>
            </ContactContainer>
            <ContactContainer>
              <ContactLabelContainer>
                <ContactLabel for="inline-full-name">Email </ContactLabel>
              </ContactLabelContainer>
              <ContactInputContainer>
                <ContactInput id="inline-full-name" type="text" placeholder="janedoe@gmail.com" />
              </ContactInputContainer>
            </ContactContainer>
            <ContactContainer>
              <ContactLabelContainer>
                <ContactLabel for="inline-full-name">Phone </ContactLabel>
              </ContactLabelContainer>
              <ContactInputContainer>
                <ContactInput id="inline-full-name" type="text" placeholder="xxx-xxx-xxxx" />
              </ContactInputContainer>
            </ContactContainer>
            <ContactSignupContainer>
              <ContactInputContainer>
                <ContactButton type="button">
                  Get Started Now
                </ContactButton>
                </ContactInputContainer>
            </ContactSignupContainer>
          </ContactForm>
        </Inner>
        <Footer>
          &copy; 2018 by Durian Social Media.
        </Footer>
      </Content>
      <Divider speed={0.1} offset={4}>
        <UpDown>
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="70%" top="20%" />
          <SVG icon="triangle" width={8} stroke={colors['grey-darkest']} left="25%" top="5%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="triangle" width={12} stroke={colors.white} left="95%" top="50%" />
          <SVG icon="circle" width={6} fill={colors.white} left="85%" top="15%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="70%" top="60%" />
        <SVG icon="box" width={12} fill={colors['grey-darkest']} left="20%" top="30%" />
        <SVG icon="hexa" width={8} stroke={colors['grey-darkest']} left="80%" top="70%" />
      </Divider>
    </Parallax>
  </React.Fragment>
);

export default Index;
