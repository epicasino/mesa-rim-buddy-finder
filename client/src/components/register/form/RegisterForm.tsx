import { iRegisterFormProps } from '../types';
import RegisterConfirm from './RegisterConfirm';
import RegisterQuestions from './RegisterQuestions';
import { REGISTER_USER, ADD_INFO } from '../../../utils/mutations';
import { QUERY_USER } from '../../../utils/queries';
import { useMutation, useLazyQuery } from '@apollo/client';
import Auth from '../../../utils/auth';
import { useState } from 'react';

export default function RegisterForm({
  userData,
  setUserData,
  fade,
  setFade,
  setQuestion,
  question,
}: iRegisterFormProps) {
  const [registerUser] = useMutation(REGISTER_USER);
  const [addInfo] = useMutation(ADD_INFO);
  const [getUser] = useLazyQuery(QUERY_USER);

  const [confirmError, setConfirmError] = useState<{ message: string | null }>({
    message: null,
  });

  const submitForm = async (
    e: React.FormEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLDivElement>
  ) => {
    e.preventDefault();
    // console.log(userData);

    try {
      const checkUser = await getUser({
        variables: { username: userData.username },
      });

      const checkPhone = await getUser({
        variables: { username: '', phone: userData.phone },
      });
      if (checkUser.data?.user && checkPhone.data?.user) {
        setConfirmError({ message: 'Username and Phone Taken!' });
        throw { message: 'Username and Phone Taken!' };
      } else if (checkPhone.data?.user) {
        setConfirmError({ message: 'Phone Taken!' });
        throw { message: 'Phone Taken!' };
      } else if (checkUser.data?.user) {
        setConfirmError({ message: 'Username Taken!' });
        throw { message: 'Username Taken!' };
      }

      const { data } = await registerUser({
        variables: {
          username: userData.username,
          name: userData.name,
          password: userData.password,
        },
      });
      // console.log(data);

      const addedInfo = await addInfo({
        variables: {
          userInfo: {
            userId: data?.register?.user._id,
            email: userData?.email,
            phone: userData?.phone,
          },
        },
      });

      // console.log(addedInfo);

      if (data && addedInfo) {
        Auth.login(data.register.token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const nextQuestion = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    setFade(true);
    setTimeout(() => {
      setQuestion(question + 1);
      setFade(false);
      // console.log(userData);
    }, 200);
  };

  const lastQuestion = () => {
    setFade(true);
    setTimeout(() => {
      setQuestion(question - 1);
      setFade(false);
    }, 200);
  };

  return (
    <form>
      <div
        className={`flex flex-col items-center gap-2 ${
          fade ? 'transition opacity-0 duration-200' : ''
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
            placeholder={`Email`}
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
            confirmError={confirmError}
          />
        )}
      </div>
    </form>
  );
}
