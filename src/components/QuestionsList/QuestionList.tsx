'use client';
import * as React from 'react';
import { QuestionBox } from "@/Types/Types";
import { QuestionCard } from "@/components/QuestionCard/QuestionCard";
import { Flex } from "@chakra-ui/react";

type QuestionList = {
    questions: QuestionBox[]

    
};
export const QuestionList = () => {
    return (
        <Flex className='flex w-[100%] justify-center'>
           <QuestionCard isDeatailed={false} type='QType' />
            
 
            
        </Flex>
    );
};