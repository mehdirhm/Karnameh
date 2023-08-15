// 'use client';
import * as React from "react";
import { Flex } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { PlusIcon } from "@/assets/icons/PlusIcon";
import { UserStatus } from "../UserStatus/UserStatus";
import { TopBar } from "@/Types/Types";
import { NewQuestion } from "../NewQuestion/NewQuestion";
export const Topbar = ({ title }: TopBar) => {
  return (
    <Flex className="w-[100%] mb-[32px] shadow-sm bg-[#FFF] flex justify-between h-[68px] px-[56px] py-[16px]">
      <div>
        <h1 className="text-[24px] leading-[36px] font-bold">{title}</h1>
      </div>
      <Flex className="flex items-center gap-12">
        <NewQuestion />
        <UserStatus
          id={1}
          name="الناز شاکردوست"
          avatar="https://bit.ly/dan-abramov"
        />
      </Flex>
    </Flex>
  );
};
