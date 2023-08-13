import * as React from "react";

import {Flex, Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { ArrowIcon } from "@/assets/icons/ArrowIcon";
type User = {
  name: string;
  avatar: string;
};
export const UserStatus = ({name, avatar}: User) => {
  return <Flex className=" h-[44px] flex items-center gap-[9px]">
    <Avatar name={name} src={avatar} />
    <span className="text-[14px] text-[#454545] font-bold leading-[24px] not-italic">{name}</span>
    <ArrowIcon />


  </Flex>;
};
