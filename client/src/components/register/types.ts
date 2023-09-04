import { Dispatch, SetStateAction } from "react";

interface iUserData {
  username: string;
  name: string;
  email: string;
  phone: string;
  password: string;
}

export interface iRegisterProps {
  fade: boolean;
  setFade: Dispatch<SetStateAction<boolean>>;
  setShowReg?: Dispatch<SetStateAction<boolean>>;
  setQuestion: Dispatch<SetStateAction<number>>;
  userData?: iUserData;
  setUserData?: Dispatch<SetStateAction<iUserData>>;
}