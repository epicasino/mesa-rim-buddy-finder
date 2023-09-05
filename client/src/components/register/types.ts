import { Dispatch, SetStateAction } from "react";

interface iUserData {
  username: string;
  name: string;
  email: string;
  phone: string;
  password: string;
}

export interface iRegisterHeaderProps {
  fade: boolean;
  setFade: Dispatch<SetStateAction<boolean>>;
  setShowReg: Dispatch<SetStateAction<boolean>>;
  setQuestion: Dispatch<SetStateAction<number>>;
}

export interface iRegisterFormProps {
  fade: boolean;
  setFade: Dispatch<SetStateAction<boolean>>;
  setShowReg: Dispatch<SetStateAction<boolean>>;
  question: number;
  setQuestion: Dispatch<SetStateAction<number>>;
  userData: iUserData;
  setUserData: Dispatch<SetStateAction<iUserData>>;
}

export interface iRegisterQuestionProps {
  title: string;
  description: string;
  placeholder: string;
  question: number;
  userData: iUserData;
  userDataObject: string;
  setUserData: Dispatch<SetStateAction<iUserData>>;
  nextQuestion: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  lastQuestion: () => void;
  minLength: number;
}

export interface iRegisterConfirmProps {
  userData: iUserData;
  setUserData: Dispatch<SetStateAction<iUserData>>;
  lastQuestion: () => void;
  submitForm: (e: React.FormEvent<HTMLButtonElement>) => void;
}