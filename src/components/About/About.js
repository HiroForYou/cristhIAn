import React from 'react';

import SkewBg from '@common/SkewBg';
import PageHeader from '@common/PageHeader';
import Flex from '@common/Flex';

import Quote from './Quote';
import Avatar from './Avatar';

import { AboutWrapper, AboutInfo } from './About.style';

const About = () => {
  return (
    <AboutWrapper id="about">
      <PageHeader>About Me</PageHeader>
      <SkewBg />
      <AboutInfo>
        <div>
          <Avatar src="hfest_avatar_2.jpg" />
        </div>
        <p>
        Hi, I'm Cristhian Wiki, a passionate machine learning engineer and self-taught researcher from Peru. I am a pytorch lover, very interested in the creation of novel neural network architectures (SOA), as well as their rapid implementation and accessibility (using MLOps tools).
       <br/>
       <br/>  
        My goal as a human being is to be able to change the world and make it a better place (using deep learning and lots of creativity).
        </p>
      </AboutInfo>

      <Flex justify="space-between" className="quotes__wrapper">
        <Quote>
          <p>“Any fool can write code that a computer understands. Good programmers write code that humans can understand.”</p>
          <br />
          <i>- Martin Fowler</i>
        </Quote>
        <Quote>          
          <p>“Nothing interferes with my concentration. You could put on an orgy in my office and I wouldn't look up. Well, maybe once.”</p>
          <br />
          <i>- Isaac Asimov</i>
        </Quote>
        <Quote>          
          <p>“Somewhere, something incredible is waiting to be known.”</p>
          <br />
          <i>- Carl Sagan</i>
        </Quote>
      </Flex>
    </AboutWrapper>
  );
};

export default About;
