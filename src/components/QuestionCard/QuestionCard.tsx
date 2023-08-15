// 'use client'
import * as React from "react";
import { Flex } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import Link from "next/link";

import { avatarAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";
import { Answer, QuestionBox } from "@/Types/Types";
import { ReplyIcon } from "@/assets/icons/ReplyIcon";
import { SmileIcon } from "@/assets/icons/SmileIcon";
import { SadSmileIcon } from "@/assets/icons/SadSmileIcon";
import { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(avatarAnatomy.keys);

const roundedSquare = definePartsStyle({
  badge: {
    bg: "gray.500",
    border: "2px solid",
  },
  container: {
    borderRadius: "xl",
  },
  excessLabel: {
    bg: "gray.800",
    color: "white",
    borderRadius: "xl",
    border: "2px solid",

    // let's also provide dark mode alternatives
    _dark: {
      bg: "gray.400",
      color: "gray.900",
    },
  },
});

export const avatarTheme = defineMultiStyleConfig({
  variants: { roundedSquare },
});

export const QuestionCard = ({
  type,
  isDeatailed,
  question,
  reply,
  resCount,
}: {
  type: "QType" | "AType";
  isDeatailed: boolean;
  question?: QuestionBox;
  reply?: Answer;
  resCount?: number;
}): JSX.Element => {
  const mutation = useMutation((newQuestion: QuestionBox) => {
    // console.log('s')
    return axios.patch(
      `http://localhost:3004/questions/${question?.id}`,
      newQuestion
    );
  });
  const [disLikeCount, setDisLikeCount] = useState(reply?.dislikeCount);
  const [likeCount, setLikeCount] = useState(reply?.likeCount);

  return type === "QType" ? (
    <Flex className="w-[93%] flex-col  rounded-md h-[155px] bg-[#F9F9F9] shadow-md">
      <Flex className="flex rounded-[8px] px-[16px] h-[48px] py-[8px] items-center bg-[#FFF]  w-[100%] ">
        <Flex className=" w-[100%] flex  gap-3  items-center  h-[48px]">
          <Avatar
            width="32px"
            height="32px"
            variant="roundedSquare"
            name="Dan Abrahmov"
          />
          <span className=" text-[#222] text-[16px] text-[700] leading-[24px] font-semibold not-italic">
            {question?.title}
          </span>
        </Flex>

        <Flex>
          <Flex className="gap-1 items-center justify-center border-l px-[10px]">
            <span className="text-[12px] font-normal leading-[24px] text-[#777]">
              ساعت:
            </span>

            <span className="text-[12px] font-bold leading-[24px]">
              {question?.time}
            </span>
          </Flex>
          <Flex className="gap-1 items-center justify-center border-l px-[10px]">
            <span className="text-[12px] font-normal leading-[24px] text-[#777]">
              تاریخ:
            </span>

            <span className="text-[12px] font-bold leading-[24px]">
              {question?.date}
            </span>
          </Flex>

          <Flex className="gap-1 items-center justify-center  px-[10px]">
            <span className="text-[12px] font-normal leading-[24px] text-[#777]">
              <ReplyIcon />
            </span>

            <span className="text-[12px] opacity-80 font-bold leading-[24px] text-[#777777]">
              {resCount}
            </span>
          </Flex>
        </Flex>
      </Flex>
      <Flex className="px-[16px] py-[18px]">
        <p className="text-[14px] font-normal leading-[20px]">
          {question?.description?.text}
        </p>
      </Flex>
      {!isDeatailed ? (
        <Flex className=" flex-row-reverse ml-6">
          <Button
            color="#27AE60"
            fontSize="12px"
            fontWeight="700"
            variant="outline"
            borderColor="#27AE60"
          >
            <Link href={`/questions/${question?.id}`} passHref>
              مشاهده جزییات
            </Link>
          </Button>
        </Flex>
      ) : null}
    </Flex>
  ) : (
    <Flex className="w-[93%] flex-col  rounded-md h-[155px] bg-[#F9F9F9] shadow-md">
      <Flex className="flex rounded-[8px] px-[16px] h-[48px] py-[8px] items-center bg-[#FFF]  w-[100%] ">
        <Flex className=" w-[100%] flex  gap-3  items-center  h-[48px]">
          <Avatar
            width="32px"
            height="32px"
            variant="roundedSquare"
            name="Dan Abrahmov"
          />
          <span className=" text-[#222] text-[16px] text-[700] leading-[24px] font-semibold not-italic">
            {reply?.user?.name}
          </span>
        </Flex>

        <Flex className=" gap-24">
          <Flex>
            <Flex className="gap-1 items-center justify-center border-l px-[10px]">
              <span className="text-[12px] font-normal leading-[24px] text-[#777]">
                ساعت:
              </span>

              <span className="text-[12px] font-bold leading-[24px]">
                {reply?.time}
              </span>
            </Flex>
            <Flex className="gap-1 items-center justify-center  px-[10px]">
              <span className="text-[12px] font-normal leading-[24px] text-[#777]">
                تاریخ:
              </span>

              <span className="text-[12px] font-bold leading-[24px]">
                {reply?.date}
              </span>
            </Flex>
          </Flex>

          <Flex>
            <Flex className="gap-1  items-center justify-center  px-[10px]">
              <span className="text-[12px] font-normal leading-[24px] text-[#777]">
                <SmileIcon />
              </span>

              <span className="text-[12px] opacity-80 font-bold leading-[24px] text-[#777777]">
                {likeCount}
              </span>
            </Flex>
            <Flex className="gap-1 items-center justify-center  px-[10px]">
              <span className="text-[12px] font-normal leading-[24px] text-[#777]">
                <SadSmileIcon />
              </span>

              <span className="text-[12px] opacity-80 font-bold leading-[24px] text-[#777777]">
                {disLikeCount}
              </span>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex className="px-[16px] py-[18px]">
        <p className="text-[14px] font-normal leading-[20px]">
          {reply?.description}
        </p>
      </Flex>
      <Flex className=" flex-row-reverse ml-6 gap-4">
        <Button
          onClick={() => {
            if (question?.replies !== undefined) {
              const updatedReplies = question.replies.map((rep) => {
                if (rep.id === reply?.id) {
                  return { ...rep, dislikeCount: disLikeCount! + 1 }; // Use disLikeCount or provide a default value
                } else {
                  return rep;
                }
              });
              console.log(updatedReplies);
              mutation.mutate({
                ...question,
                replies: updatedReplies,
              });
            }
            setDisLikeCount((prev) => {
              if (typeof prev !== "undefined") return prev + 1;
              return 0;
            });
          }}
          display="flex"
          gap="15px"
          color="#F16063"
          fontSize="12px"
          fontWeight="700"
          variant="outline"
        >
          <SadSmileIcon color="#F16063" />
          پاسخ خوب نبود
        </Button>
        <Button
          onClick={() => {
            if (question?.replies !== undefined) {
              const updatedReplies = question.replies.map((rep) => {
                if (rep.id === reply?.id) {
                  return { ...rep, likeCount: likeCount! + 1 }; // Use disLikeCount or provide a default value
                } else {
                  return rep;
                }
              });
              console.log(updatedReplies);
              mutation.mutate({
                ...question,
                replies: updatedReplies,
              });
            }
            setLikeCount((prev) => {
              if (typeof prev !== "undefined") return prev + 1;
              return 0;
            });
          }}
          display="flex"
          gap="15px"
          color="#66CB9F"
          fontSize="12px"
          fontWeight="700"
          variant="outline"
        >
          <SmileIcon />
          پاسخ خوب بود
        </Button>
      </Flex>
    </Flex>
  );
};
