import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { PlusIcon } from "@/assets/icons/PlusIcon";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import axios from "axios";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { QuestionBox } from "@/Types/Types";
import { useQuestion } from "@/contexts/QuestionContext";
import { generateRandomNumberId } from "@/utils/generateRandomNumberId";
export const NewQuestion = () => {
  const { questions, modifyQuestion } = useQuestion();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const mutation = useMutation((newQuestion: QuestionBox) => {
    modifyQuestion(newQuestion);
    return axios.post("http://localhost:3004/questions", newQuestion);
  });

  return (
    <>
      <Button
        onClick={onOpen}
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
      <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="#F9F9F9">
          <ModalHeader
            className=" shadow-sm mb-4"
            bg="#ffffff"
            borderRadius="10px"
            fontSize="16px"
            fontWeight="800"
            lineHeight="24px"
          >
            ایجاد سوال جدید
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel fontSize="12px" fontWeight="700" lineHeight="24px">
                موضوع
              </FormLabel>
              <Input {...register("title")} type="text" className=" mb-4" />
              <FormLabel fontSize="12px" fontWeight="700" lineHeight="24px">
                متن سوال
              </FormLabel>
              <Textarea {...register("text")} height="164px" resize="none" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              color="#27AE60"
              fontSize="12px"
              lineHeight="20px"
              variant="outline"
              borderColor="#27AE60"
              mr={3}
              onClick={onClose}
            >
              انصراف
            </Button>

            <Button
              onClick={() => {
                mutation.mutate({
                  id: generateRandomNumberId(),
                  title: watch("title"),
                  description: {
                    text: watch("text"),
                    img: "",
                  },
                  time: "۱۹:۴۸",
                  date: "۱۴۰۰/۰۵/۲۵",
                  answerCount: 0,
                  user: {
                    id: 1,
                    name: "الناز شاکردوست",
                    avatar: "https://bit.ly/dan-abramov",
                  },
                  replies: [],
                });
                onClose();
              }}
              fontSize="12px"
              lineHeight="20px"
              color="#ffffff"
              bg="#27AE60"
              variant="ghost"
            >
              ایجاد سوال
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
