import { iRegisterFormProps } from '../types';

export default function RegisterForm({
  userData,
  setUserData,
  fade,
  setFade,
  setQuestion,
  question,
}: iRegisterFormProps) {
  return (
    <form>
      {question === 1 && (
        <div className="flex flex-col items-center">
          <label htmlFor="name" className="text-2xl">
            Alright, Let's first get your name...
          </label>
          <input type="input" className="w-1/4 text-4xl text-center"></input>
        </div>
      )}
    </form>
  );
}
