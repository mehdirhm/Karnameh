// 'use client'
import { Flex } from "@chakra-ui/react";
import { QuestionCard } from "../QuestionCard/QuestionCard";
import { Answer, QuestionBox } from "@/Types/Types";
export const ReplyList = ({id,data,question}:{id:string, data:Answer[], question:QuestionBox}) => {
  
    return (
        <div className=" mt-5">
            <h1 className=" mr-[58px] mb-7 text-[#222222] text-[24px] leading-[36px] font-extrabold">پاسخ ها</h1>
            <Flex className='flex flex-col w-[100%] gap-9 justify-center items-center'>
            {data?.map((reply: Answer ) => <QuestionCard  question={question} reply={reply} isDeatailed={false} type='AType'/> )}
            
            
        </Flex>

        </div>
        
    );
};