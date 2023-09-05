import { useState } from 'react';
import { iRegisterQuestionProps } from '../types';

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
  const [error, setError] = useState(false);

  const dataCheck = (
    e:
      | React.KeyboardEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (userDataObject === '' && question !== 5) return setError(true);
    if (userDataObject.length >= minLength) {
      if (question === 3) {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!regex.test(userDataObject)) {
          setUserData({ ...userData, password: '' });
          return setError(true);
        }
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
        className="w-1/4 text-4xl text-center m-5 rounded"
        placeholder={placeholder}
        value={userDataObject}
        onChange={(e) => {
          const object =
            question === 1
              ? { ...userData, name: e.target.value }
              : question === 2
              ? { ...userData, username: e.target.value }
              : question === 3
              ? { ...userData, password: e.target.value }
              : question === 4
              ? {
                  ...userData,
                  phone: e.target.value,
                }
              : question === 5
              ? { ...userData, email: e.target.value }
              : { ...userData };

          setUserData(object);
        }}
        // Buggy...
        // onKeyDown={(e) => {
        //   if (e.key === 'Enter') {
        //     dataCheck(e);
        //   }
        // }}
      />

      {error && (
        <div>
          <h1>Error</h1>
        </div>
      )}

      <div className="question-boxes inline-flex">
        <button
          className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l ${
            question <= 1
              ? ' disabled:hover:bg-gray-300 disabled:bg-slate-200 text-gray-700'
              : ''
          }`}
          disabled={question <= 1 ? true : false}
          // For some reason, when password check fails, if user fails it again, lastQuestion function will trigger, and will go back to the previous question.
          onClick={(e) => {
            e.preventDefault();
            e.target.addEventListener('click', lastQuestion);
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
    </>
  );
}
