'use client';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Textarea,
    Button,
  } from '@chakra-ui/react'
export const AddResponse = () => {
    return (
        <div className='w-[92.8%] mt-6'>
            <h1 className='text-[24px] font-extrabold leading-[36px]'>پاسخ خود را ثبت کنید</h1>
            <FormControl className=' mt-4'>
            <FormLabel>پاسخ خود را بنویسید</FormLabel>
            <Textarea   height='164px' resize='none' />
            <p className='mt-4 text-[#F16063] text-[10px] font-normal' >محل قرارگیری خطا</p>
            
            <Button color='#FFF' fontSize='12px' fontWeight='700' backgroundColor='#27AE60' className='flex mb-4 mt-6 w-[200px] h-[36px]'>
                ارسال پاسخ
            </Button>
            
            
            </FormControl>
            
            
        </div>
    );
};