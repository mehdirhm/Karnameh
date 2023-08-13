import * as React from "react";
import { Flex } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { PlusIcon } from "@/assets/icons/PlusIcon";
import { UserStatus } from "../UserStatus/UserStatus";
type Props = {
  title: string;
  
};
export const Topbar = ({ title }: Props) => {
  return (
    <Flex className="w-[100%] shadow-sm bg-[#FFF] flex justify-between h-[68px] px-[56px] py-[16px]">
      <div>
        <h1 className="text-[24px] leading-[36px] font-bold">{title}</h1>
      </div>
      <Flex className="flex items-center gap-12">
        <Button
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="126px"
          height="36px"
          borderRadius="6px"
          leftIcon={<PlusIcon />}
          lineHeight="20px"
          fontSize="12px"
          fontStyle="normal"
          bg="#27AE60"
          color="#ffffff"
        >
          سوال جدید
        </Button>
        <UserStatus name="الناز شاکردوست" avatar="https://bit.ly/dan-abramov" />
      </Flex>
    </Flex>
  );
};
