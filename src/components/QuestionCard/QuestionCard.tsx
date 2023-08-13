'use client'
import * as React from 'react';
import { Flex } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'

import { extendTheme } from '@chakra-ui/react'
import { avatarAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'
import { QuestionBox } from "@/Types/Types";
import { ReplyIcon } from '@/assets/icons/ReplyIcon';
import { SmileIcon } from '@/assets/icons/SmileIcon';
import { SadSmileIcon } from '@/assets/icons/SadSmileIcon';
const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(avatarAnatomy.keys)

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
      color: "gray.900"
    }
  }
})


  

 
  
export const avatarTheme = defineMultiStyleConfig({
  variants: { roundedSquare },
    
})



export const QuestionCard = ({type, isDeatailed}: {type: 'QType'| 'AType', isDeatailed: boolean }): JSX.Element => {
    return type === 'QType' ? (
        (
            <Flex className='w-[93%] flex-col  rounded-md h-[155px] bg-[#F9F9F9] shadow-md'>


                <Flex className='flex rounded-[8px] px-[16px] h-[48px] py-[8px] items-center bg-[#FFF]  w-[100%] '>




                    <Flex className=' w-[100%] flex  gap-3  items-center  h-[48px]'>
                        <Avatar width='32px' height='32px' variant="roundedSquare" name="Dan Abrahmov" />
                        <span className=' text-[#222] text-[16px] text-[700] leading-[24px] font-semibold not-italic'>مشکل در Auth در React</span>

                    </Flex>

                    <Flex>
                        <Flex className='gap-1 items-center justify-center border-l px-[10px]'>
                            <span className='text-[12px] font-normal leading-[24px] text-[#777]'>
                                ساعت:

                            </span>

                            <span className='text-[12px] font-bold leading-[24px]'>
                                ۱۶:۴۸
                            </span>
                        </Flex>
                        <Flex className='gap-1 items-center justify-center border-l px-[10px]'>
                            <span className='text-[12px] font-normal leading-[24px] text-[#777]'>
                                تاریخ:

                            </span>

                            <span className='text-[12px] font-bold leading-[24px]'>
                                ۱۴۰۰/۰۴/۲۵
                            </span>
                        </Flex>

                        <Flex className='gap-1 items-center justify-center  px-[10px]'>
                            <span className='text-[12px] font-normal leading-[24px] text-[#777]'>
                                <ReplyIcon />


                            </span>

                            <span className='text-[12px] opacity-80 font-bold leading-[24px] text-[#777777]'>
                                20
                            </span>
                        </Flex>
                        
                    </Flex>



                </Flex>
                <Flex className='px-[16px] py-[18px]'>
                    <p className='text-[14px] font-normal leading-[20px]'>
                        سلام من میخوام یه authentication ساده توی React بسازم اما این error رو بهم میده. نمیدونم مشکل از کجاست. عکس خروجی کنسول رو هم گذاشتم که ببینید دقیقا چه مشکلی وجود داره
                    </p>

                </Flex>
                {!isDeatailed ? (
                    <Flex className=' flex-row-reverse ml-6'>
                    <Button color='#27AE60' fontSize='12px' fontWeight='700' variant='outline' borderColor='#27AE60'>
                        مشاهده جزئیات
                    </Button>
                </Flex>
                ): null}
                

            </Flex>

        )
    ) : (
        (
            <Flex className='w-[93%] flex-col  rounded-md h-[155px] bg-[#F9F9F9] shadow-md'>


                <Flex className='flex rounded-[8px] px-[16px] h-[48px] py-[8px] items-center bg-[#FFF]  w-[100%] '>




                    <Flex className=' w-[100%] flex  gap-3  items-center  h-[48px]'>
                        <Avatar width='32px' height='32px' variant="roundedSquare" name="Dan Abrahmov" />
                        <span className=' text-[#222] text-[16px] text-[700] leading-[24px] font-semibold not-italic'>مشکل در Auth در React</span>

                    </Flex>

                    <Flex className=' gap-24'>
                        <Flex>

                        <Flex className='gap-1 items-center justify-center border-l px-[10px]'>
                            <span className='text-[12px] font-normal leading-[24px] text-[#777]'>
                                ساعت:

                            </span>

                            <span className='text-[12px] font-bold leading-[24px]'>
                                ۱۶:۴۸
                            </span>
                        </Flex>
                        <Flex className='gap-1 items-center justify-center  px-[10px]'>
                            <span className='text-[12px] font-normal leading-[24px] text-[#777]'>
                                تاریخ:

                            </span>

                            <span className='text-[12px] font-bold leading-[24px]'>
                                ۱۴۰۰/۰۴/۲۵
                            </span>
                        </Flex>
                        </Flex>
                       
                    <Flex>

                    <Flex className='gap-1  items-center justify-center  px-[10px]'>
                            <span className='text-[12px] font-normal leading-[24px] text-[#777]'>
                                <SmileIcon />


                            </span>

                            <span className='text-[12px] opacity-80 font-bold leading-[24px] text-[#777777]'>
                                20
                            </span>
                        </Flex>
                        <Flex className='gap-1 items-center justify-center  px-[10px]'>
                            <span className='text-[12px] font-normal leading-[24px] text-[#777]'>
                                <SadSmileIcon  />


                            </span>

                            <span className='text-[12px] opacity-80 font-bold leading-[24px] text-[#777777]'>
                                20
                            </span>
                        </Flex>
                    </Flex>

                    </Flex>
                        



                </Flex>
                <Flex className='px-[16px] py-[18px]'>
                    <p className='text-[14px] font-normal leading-[20px]'>
                        سلام من میخوام یه authentication ساده توی React بسازم اما این error رو بهم میده. نمیدونم مشکل از کجاست. عکس خروجی کنسول رو هم گذاشتم که ببینید دقیقا چه مشکلی وجود داره
                    </p>

                </Flex>
                <Flex className=' flex-row-reverse ml-6 gap-4'>
                    <Button display='flex' gap='15px' color='#F16063' fontSize='12px' fontWeight='700' variant='outline'>
                        <SadSmileIcon color='#F16063' />
                        پاسخ خوب نبود
                    </Button>
                    <Button display='flex' gap='15px' color='#66CB9F' fontSize='12px' fontWeight='700' variant='outline' >
                    <SmileIcon/> 
                    پاسخ خوب بود                   
                    </Button>
                </Flex>

            </Flex>

        )
    );
        
};