export type User = {
  id: number;
  name: string;
  avatar: string;
};

export type TopBar = {
  title: string;
};
export type QuestionBox = {
  id: number;
  title: string;
  description: {
    text: string;
    img: string;
  };
  time: string;
  date: string;
  answerCount: number;
  user: User;
  replies: Answer[];
};

export type Answer = {
  id: number;
  user: User;
  description: string;
  time: string;
  date: string;
  likeCount: number;
  dislikeCount: number;
};

export type Question = QuestionBox & {
  answers: Answer[];
};
