import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typewriter from 'typewriter-effect';
import svgRect from '@src/static/home_rect.svg';

import { HeroCard } from './HeroCard';
import { HomeWrapper, Intro } from './Home.style';

import IconLink from '@common/IconLink';
import PageHeader from '@common/PageHeader';
import Flex from '@common/Flex';
import Button from '@common/Button';

import { Card, CardIcon, CardText, CardTitle } from '@common/Card';

const ThingsILove = () => (
  <Flex justify="space-between" align="center">
    <Card>
      <CardIcon>
        <FontAwesomeIcon icon={['fab', 'python']} />
      </CardIcon>
      <CardTitle>Creative Coding</CardTitle>
      <CardText>
      Python allows me to easily convert my ideas with just a few lines of code, and that has saved me more than once
      </CardText>
    </Card>

    <Card>
      <CardIcon>
        <FontAwesomeIcon icon='robot' />
      </CardIcon>
      <CardTitle>Machine Learning</CardTitle>
      <CardText>
       +2 years of experience in training models for various usecases
      </CardText>
    </Card>

    <Card>
      <CardIcon>
        <FontAwesomeIcon icon='rocket' />
      </CardIcon>
      <CardTitle>DevOps</CardTitle>
      <CardText>
      I solve your data science and software development problems with scalable and robust solutions
      </CardText>
    </Card>
  </Flex>
);

const Home = () => {
  return (
    <HomeWrapper id="home">
      <img className="svg-rect" src={svgRect} alt=""></img>

      <Intro>
        {/* <Parallax y={[50, -50]} className="home__text"> */}
        <div className="home__text">
          <p>Hello, I’m</p>
          <h1>Cristhian Wiki</h1>

        
          <p className="adjust"> 
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Machine Learning Engineer')
                  .callFunction(() => {
                  })
                  .pauseFor(3500)
                  .deleteAll()
                  .typeString("Pytorch lover ❤")
                  .pauseFor(4500)
                  .deleteAll()
                  .typeString("Machine Learning Engineer")
                  .start();
              }}
            />
          </p>

          <div className="home__CTA">
            <Button className="cta" as="a" href="https://drive.google.com/uc?export=download&id=1TeDAOJI9E3R_jIHo5t8MiVpzmnM9VQM3">
              Download Resume
            </Button>

            <div className="home__social">
              <IconLink
                label="github"
                icon={['fab', 'github']}
                href="//github.com/HiroForYou"
              />
              <IconLink
                label="twitter"
                icon={['fab', 'twitter']}
                href="//twitter.com/HiroCharlie"
              />
              <IconLink
                label="facebook"
                icon={['fab', 'facebook']}
                href="//facebook.com/26HSZK16isTime/"
              />
              <IconLink
                label="linkedin"
                icon={['fab', 'linkedin']}
                href="//linkedin.com/in/cristhian-wiki/"
              />
            </div>
          </div>
        </div>
        {/* </Parallax> */}
        <HeroCard />
      </Intro>
      <br/>
      {/* Things I LOVE */}
      <PageHeader style={{ marginBottom: 30 }}>
        Things I love <i className="fas fa-heart" />
      </PageHeader>
      <ThingsILove />
    </HomeWrapper>
  );
};

export default Home;
