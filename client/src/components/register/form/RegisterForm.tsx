import { iRegisterFormProps } from '../types';
import RegisterConfirm from './RegisterConfirm';
import RegisterQuestions from './RegisterQuestions';
import { REGISTER_USER, ADD_INFO } from '../../../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../../../utils/auth';

export default function RegisterForm({
  userData,
  setUserData,
  fade,
  setFade,
  setQuestion,
  question,
}: iRegisterFormProps) {
  const [registerUser, { error }] = useMutation(REGISTER_USER);

  if (error) {
    console.error(error);
  }

  const submitForm = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(userData);
    try {
      const { data } = await registerUser({
        variables: {
          username: userData.username,
          name: userData.name,
          password: userData.password,
        },
      });
      console.log(data);
      Auth.login(data.register.token);
    } catch (error) {
      console.log(error);
    }
  };

  const nextQuestion = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setFade(true);
    setTimeout(() => {
      setQuestion(question + 1);
      setFade(false);
      // console.log(userData);
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

        {/* Question: Phone */}
        {question === 4 && (
          <RegisterQuestions
            title={`Now, a phone number...`}
            description={`Just so your fellow climbers can contact you :)`}
            placeholder={`###`}
            userData={userData}
            userDataObject={userData.phone}
            setUserData={setUserData}
            question={question}
            nextQuestion={nextQuestion}
            lastQuestion={lastQuestion}
            minLength={10}
          />
        )}

        {/* Question: Email */}
        {question === 5 && (
          <RegisterQuestions
            title={`OPTIONAL: Add an email`}
            description={`If you prefer people to contact you via email.`}
            placeholder={`email`}
            userData={userData}
            userDataObject={userData.email}
            setUserData={setUserData}
            question={question}
            nextQuestion={nextQuestion}
            lastQuestion={lastQuestion}
            minLength={0}
          />
        )}

        {/* Confirm Prompt */}
        {question === 6 && (
          <RegisterConfirm
            setUserData={setUserData}
            lastQuestion={lastQuestion}
            userData={userData}
            submitForm={submitForm}
          />
        )}
      </div>
    </form>
  );
}
