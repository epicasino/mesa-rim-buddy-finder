import { useState } from 'react';
import { iRegisterQuestionProps } from '../types';
import { QUERY_USER } from '../../../utils/queries';
import { useLazyQuery } from '@apollo/client';
import { hasBannedWords } from 'banned-words-spotter';

export default function RegisterQuestions({
  title,
  description,
  userData,
  placeholder,
  userDataObject,
  setUserData,
  question,
  nextQuestion,
  lastQuestion,
  minLength,
}: iRegisterQuestionProps) {
  const [userError, setError] = useState(false);
  const [profanity, setProfanity] = useState(false);
  const [getUser] = useLazyQuery(QUERY_USER, {
    fetchPolicy: 'network-only',
  });

  const dataCheck = async (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    if (userDataObject === '' && question !== 5) return setError(true);
    if (userDataObject.length >= minLength) {
      if (hasBannedWords(userDataObject)) return setProfanity(true);
      if (question === 2) {
        const { data } = await getUser({
          variables: { username: userDataObject.toLowerCase() },
        });
        // console.log(data);
        if (!data.user) {
          setError(false);
          return nextQuestion(e);
        }
        return setError(true);
      }
      if (question === 3) {
        const regex =
          /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d:])([^\s]){8,}$/;
        if (!regex.test(userDataObject)) {
          setUserData({ ...userData, password: '' });
          return setError(true);
        }
      }
      if (question === 4) {
        const { data } = await getUser({
          variables: {
            phone: userDataObject,
          },
        });

        if (!data.user) {
          setError(false);
          return nextQuestion(e);
        }
        return setError(true);
      }
      setError(false);
      return nextQuestion(e);
    }
    return setError(true);
  };

  return (
    <>
      <label htmlFor={placeholder} className="text-2xl">
        {title}
      </label>
      <small>{description}</small>
      <input
        type={
          question === 3
            ? 'password'
            : question === 4
            ? 'tel'
            : question === 5
            ? 'email'
            : 'text'
        }
        className={`xs:w-1/2 xs:text-2xl md:w-1/4 md:text-4xl text-center m-5 rounded ${
          userError && 'border-red-500 focus:border-blue-400'
        }`}
        placeholder={placeholder}
        value={userDataObject}
        onChange={(e) => {
          const object =
            question === 1
              ? { ...userData, name: e.target.value }
              : question === 2
              ? { ...userData, username: e.target.value.toLowerCase() }
              : question === 3
              ? { ...userData, password: e.target.value }
              : question === 4
              ? {
                  ...userData,
                  phone: e.target.value.trim().replace(/\D/g, ''),
                }
              : question === 5
              ? { ...userData, email: e.target.value }
              : { ...userData };

          setUserData(object);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            dataCheck(e);
          }
        }}
      />

      <div className="question-boxes inline-flex">
        <button
          className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l ${
            question <= 1
              ? ' disabled:hover:bg-gray-300 disabled:bg-slate-200 text-gray-700'
              : ''
          }`}
          disabled={question <= 1 ? true : false}
          onClick={(e) => {
            e.preventDefault();
            lastQuestion();
          }}
        >
          Prev
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          onClick={(e) => {
            dataCheck(e);
          }}
        >
          Next
        </button>
      </div>

      <div className="errors mt-5">
        {userError && (
          <div>
            <h5>
              {question === 2
                ? `Username is invalid/taken!`
                : question === 4
                ? `Phone # is taken!`
                : 'Please input a valid value!'}
            </h5>
          </div>
        )}

        {profanity && (
          <div>
            <h5>Please, no profanity.</h5>
          </div>
        )}
      </div>
    </>
  );
}
