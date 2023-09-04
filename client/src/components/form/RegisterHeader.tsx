// Types
import { Dispatch, SetStateAction } from 'react';

type Props = {
  fade: boolean;
  setFade: Dispatch<SetStateAction<boolean>>;
  setShowReg: Dispatch<SetStateAction<boolean>>;
  setQuestion: Dispatch<SetStateAction<number>>;
};

export default function RegisterHeader({
  fade,
  setFade,
  setShowReg,
  setQuestion,
}: Props) {
  return (
    <header
      className={`flex flex-col gap-5 items-center ${
        fade ? 'transition opacity-0 duration-1000' : ''
      }`}
    >
      <h1 className="text-6xl">Hello!</h1>
      <h5>Want to find a Climbing Partner? Let's get you started!</h5>
      <button
        onClick={() => {
          setFade(true);
          setTimeout(() => {
            setShowReg(true);
            setQuestion(1);
          }, 1000);
        }}
        className={`text-2xl bg-blue-600 hover:bg-blue-500
            focus:bg-blue-600 p-2 text-white rounded-lg w-1/2  ${
              fade ? 'transiton opacity-0 duration-1000' : ''
            }`}
      >
        Get Started
      </button>
    </header>
  );
}
