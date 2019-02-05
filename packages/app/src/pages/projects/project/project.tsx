import React from "react";
import { Project as Model, Project } from "../models/project";
import styled from "styled-components";
import {
  Flex,
  JustifyContent,
  AlignItems,
  Box,
  FlexDirection
} from "@macrop/flexbox";
import { IconButton } from "@material-ui/core";
import { User } from "../../../models/user";

import AccountPlus from "mdi-react/AccountPlusIcon";
import DeleteIcon from "mdi-react/DeleteIcon";

const Container = styled(Flex)<{ selected?: boolean }>`
  border: ${props =>
    props.selected ? `2px solid ${props.theme.palette.primary}` : null};
`;

const Content = styled(Flex)``;

const Header = styled(Flex)`
  color: white;
  background-color: ${props => props.theme.palette.primary};
  border: 1px solid ${props => props.theme.palette.primary};
`;

const Body = styled(Flex)`
  border: 1px solid #777;
`;

interface Props {
  project: Model;
  selected?: boolean | null;
  onClick?: (project: Project) => void;
  onRemove?: (project: Project) => void;
  onPeopleAdd?: (project: Project) => void;
}

export const ProjectCard = (props: Props) => {
  const { project, selected, onClick, onPeopleAdd, onRemove } = props;
  if (!project) {
    return null;
  }

  const me: User = JSON.parse(localStorage.getItem("me") || "");

  return (
    <Container
      selected={selected}
      width="100%"
      justify={JustifyContent.CENTER}
      align={AlignItems.CENTER}
      onClick={handleClick}
    >
      <Content direction={FlexDirection.COLUMN} width="100%" padding={3}>
        <Header paddingX={1} width="100%" height={40} align={AlignItems.CENTER}>
          <Box width="100%">{project.name}</Box>
          {project.owner.id === me.id && (
            <Flex justify={JustifyContent.FLEX_END} width="100%">
              <IconButton style={{ color: "white" }} onClick={addPeople}>
                <AccountPlus />
              </IconButton>
              <IconButton style={{ color: "white" }} onClick={removeProject}>
                <DeleteIcon />
              </IconButton>
            </Flex>
          )}
        </Header>
        <Body height={100} padding={1} width="100%">
          {project.description}
        </Body>
      </Content>
    </Container>
  );

  function handleClick() {
    if (onClick) {
      onClick(project);
    }
  }

  function removeProject() {
    if (onRemove) {
      onRemove(project);
    }
  }

  function addPeople() {
    if (onPeopleAdd) {
      onPeopleAdd(project);
    }
  }
};
