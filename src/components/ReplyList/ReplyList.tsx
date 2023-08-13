'use client'
import { Flex } from "@chakra-ui/react";
import { QuestionCard } from "../QuestionCard/QuestionCard";
export const ReplyList = () => {
    return (
        <div className=" mt-5">
            <h1 className=" mr-[58px] mb-7 text-[#222222] text-[24px] leading-[36px] font-extrabold">پاسخ ها</h1>
            <Flex className='flex flex-col w-[100%] justify-center items-center'>
            
            <QuestionCard isDeatailed={false} type='AType' />
            
        </Flex>

        </div>
        
    );
};