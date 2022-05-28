import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  fab,
  faHtml5,
  faJs,
  faCss3,
  faPython,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

import PageHeader from '@common/PageHeader';
import IFrame from '@common/IFrame';
import Button, { IconButton } from '@common/Button';

import SmallProjects from './SmallProjects';
import JsProjects from './JsProjects';

import ProjectTemplate from './ProjectTemplate';
import { ProjectLinks, ProjectPreview, Tags } from './ProjectTemplate.style';

library.add(fab, faJs, faCss3, faPython, faGithub, faHtml5);

const ProjectsWrapper = styled.section`
  ${props => props.theme.spacing.sectionBottom};
`;
const Projects = () => {
  const projects = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { fields: { posttype: { eq: "case-studies" } } }
          sort: { fields: fields___fileIndex, order: ASC }
        ) {
          edges {
            node {
              id
              frontmatter {
                demo
                excerpt
                iframe
                src
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  );

  return (
    <ProjectsWrapper id="projects" style={{ marginBottom: 100 }}>
      <PageHeader>Side Projects</PageHeader>

      {projects.allMarkdownRemark.edges.map(({ node }) => (
        <ProjectTemplate
          key={node.id}
          title={node.frontmatter.title}
          desc={node.frontmatter.excerpt}
          links={
            <ProjectLinks>
              <Button as={Link} to={node.fields.slug}>
                Case Study
              </Button>
              <Button target="__blank" as="a" href={node.frontmatter.demo}>
                Live Demo
              </Button>
              <IconButton
                label="github"
                icon={['fab', 'github']}
                href={node.frontmatter.src}
              />
            </ProjectLinks>
          }
          preview={
            <ProjectPreview>
              <IFrame
                livedemo={!!node.frontmatter.iframe.match('codepen')}
                src={node.frontmatter.iframe}
              />
              <Tags>
                <FontAwesomeIcon icon={['fab', 'python']} />
                <FontAwesomeIcon icon={['fab', 'js']} />
              </Tags>
            </ProjectPreview>
          }
        />
      ))}

      <SmallProjects />
      <JsProjects />
    </ProjectsWrapper>
  );
};

export default Projects;
