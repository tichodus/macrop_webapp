import React from "react";
import { User } from "../../models/user";
import { Flex, Box, AlignItems } from "../flexbox";
import { Avatar } from "@material-ui/core";

type UserAvatarProps = { user: User } & React.HTMLAttributes<HTMLDivElement>;

const UserAvatar = (props: UserAvatarProps) => {
  const { firstName, lastName, image } = props.user;
  const fullName = `${firstName} ${lastName}`;

  return (
    <Flex align={AlignItems.CENTER}>
      <Avatar alt={fullName} src={image} />
      <Box paddingX={2}>{fullName}</Box>
    </Flex>
  );
};

export default UserAvatar;
