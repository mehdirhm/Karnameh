// 'use client';
import * as React from 'react';
import { QuestionBox } from "@/Types/Types";
import { QuestionCard } from "@/components/QuestionCard/QuestionCard";
import { Flex } from "@chakra-ui/react";

type QuestionList = {
    questions: QuestionBox[]

    
};
export const QuestionList = ({questions}:QuestionList) => {
    return (
        <Flex className='flex w-[100%] flex-col items-center gap-8'>
            {questions?.map((question) => <QuestionCard question={question} isDeatailed={false} type='QType'/> )}
          
            
 
            
        </Flex>
    );
};