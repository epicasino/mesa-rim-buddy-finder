import { useEffect } from 'react';
import { iRegisterFormProps } from '../types';
import RegisterQuestions from './RegisterQuestions';

export default function RegisterForm({
  userData,
  setUserData,
  fade,
  setFade,
  setQuestion,
  question,
}: iRegisterFormProps) {
  useEffect(() => {
    console.log(question);
  }, [question]);

  const nextQuestion = (
    e:
      | React.KeyboardEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setFade(true);
    setTimeout(() => {
      setQuestion(question + 1);
      setFade(false);
      console.log(userData);
    }, 500);
  };

  const lastQuestion = () => {
    setFade(true);
    setTimeout(() => {
      setQuestion(question - 1);
      setFade(false);
    }, 500);
  };

  return (
    <form>
      <div
        className={`flex flex-col items-center gap-2 ${
          fade ? 'transition opacity-0 duration-500' : ''
        }`}
      >
        {/* Question: Name */}
        {question === 1 && (
          <RegisterQuestions
            title={`Alright, Let's first get your name...`}
            description={`(First and last initial, please!)`}
            placeholder={'Your Name'}
            userData={userData}
            userDataObject={userData.name}
            setUserData={setUserData}
            question={question}
            nextQuestion={nextQuestion}
            lastQuestion={lastQuestion}
            minLength={3}
          />
        )}

        {/* Question: Username */}
        {question === 2 && (
          <RegisterQuestions
            title={`Love your name! Next, create a username...`}
            description={`(Must be unique, and must be at least 4 characters!)`}
            placeholder={'Username'}
            userData={userData}
            userDataObject={userData.username}
            setUserData={setUserData}
            question={question}
            nextQuestion={nextQuestion}
            lastQuestion={lastQuestion}
            minLength={4}
          />
        )}

        {/* Question: Password */}
        {question === 3 && (
          <RegisterQuestions
            title={`Alright, now make a password...`}
            description={`Must be at least 8 characters, with it containing at least a number.`}
            placeholder={'Password'}
            userData={userData}
            userDataObject={userData.password}
            setUserData={setUserData}
            question={question}
            nextQuestion={nextQuestion}
            lastQuestion={lastQuestion}
            minLength={8}
          />
        )}
      </div>
    </form>
  );
}
