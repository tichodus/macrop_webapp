import React from "react";
import { Project as Model, Project } from "../models/project";
import styled, { css } from "styled-components";
import {
  Flex,
  JustifyContent,
  AlignItems,
  Box,
  FlexDirection,
  FlexWrap
} from "@macrop/flexbox";
import { IconButton, Avatar } from "@material-ui/core";
import { User, UserDTO } from "../../../models/user";

import AccountPlus from "mdi-react/AccountPlusIcon";
import DeleteIcon from "mdi-react/DeleteIcon";

const Container = styled(Flex)``;

const Content = styled(Flex)``;

const Header = styled(Flex)`
  color: white;
  background-color: ${props => props.theme.palette.primary};
  border: 1px solid ${props => props.theme.palette.primary};
`;

const Body = styled(Flex)<{ selected?: boolean }>`
  border: 1px solid #777;
  ${props =>
    props.selected && css`border 2px solid ${props.theme.palette.primary}`}
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
      width="100%"
      justify={JustifyContent.CENTER}
      align={AlignItems.CENTER}
      onClick={handleClick}
    >
      <Content direction={FlexDirection.COLUMN} width="100%" padding={3}>
        <Header paddingX={1} width="100%" height={40} align={AlignItems.CENTER}>
          <Box width="100%">{project.name}</Box>
          {project.user_id === me.id && (
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
        <Body
          direction={FlexDirection.COLUMN}
          height={100}
          padding={1}
          width="100%"
          selected={selected}
        >
          <Box paddingY={2}>{project.description}</Box>
          <Flex width={700} wrap={FlexWrap.WRAP}>
            {project.people.map(user => (
              <Avatar
                src={user.image}
                title={`${user.first_name} ${user.last_name}`}
              >
                {getLetters(user)}
              </Avatar>
            ))}
          </Flex>
        </Body>
      </Content>
    </Container>
  );

  function getLetters(user: UserDTO) {
    return `${user.first_name} ${user.last_name}`
      .split(" ")
      .map(word => (word[0] ? word[0] : ""))
      .join("");
  }

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
