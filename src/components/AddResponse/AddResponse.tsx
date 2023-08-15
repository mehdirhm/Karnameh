"use client";
import { Answer, QuestionBox } from "@/Types/Types";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import axios from "axios";

import { generateRandomNumberId } from "@/utils/generateRandomNumberId";

export const AddResponse = ({
  question,
  addFn,
  replies,
  id,
}: {
  question: QuestionBox;
  addFn: any;
  replies: Answer[];
  id: string;
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const mutation = useMutation((newData: QuestionBox) =>
    axios.patch(`http://localhost:3004/questions/${id}`, newData)
  );

  return (
    <div className="w-[92.8%] mt-6">
      <h1 className="text-[24px] font-extrabold leading-[36px]">
        پاسخ خود را ثبت کنید
      </h1>
      <FormControl className=" mt-4">
        <FormLabel>پاسخ خود را بنویسید</FormLabel>
        <Textarea {...register("text")} height="164px" resize="none" />
        <p className="mt-4 text-[#F16063] text-[10px] font-normal">
          محل قرارگیری خطا
        </p>

        <Button
          onClick={() => {
            addFn((prev: Answer[]) => {
              mutation.mutate({
                ...question,
                replies: [
                  ...replies,
                  {
                    id: generateRandomNumberId(),
                    user: {
                      id: 1,
                      name: "الناز شاکردوست",
                      avatar: "https://bit.ly/dan-abramov",
                    },
                    description: watch("text"),
                    time: "۱۶:۴۸",
                    date: "۱۴۰۰/۰۴/۲۵",
                    likeCount: 0,
                    dislikeCount: 0,
                  },
                ],
              });
              return [
                ...prev,
                {
                  id: generateRandomNumberId(),
                  user: {
                    id: 1,
                    name: "الناز شاکردوست",
                    avatar: "https://bit.ly/dan-abramov",
                  },
                  description: watch("text"),
                  time: "۱۶:۴۸",
                  date: "۱۴۰۰/۰۴/۲۵",
                  likeCount: 0,
                  dislikeCount: 0,
                },
              ];
            });
            // console.log(replies)
            // mutation.mutate({...question, replies:})
          }}
          color="#FFF"
          fontSize="12px"
          fontWeight="700"
          backgroundColor="#27AE60"
          className="flex mb-4 mt-6 w-[200px] h-[36px]"
        >
          ارسال پاسخ
        </Button>
      </FormControl>
    </div>
  );
};
