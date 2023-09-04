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

  return (
    <>
      <label htmlFor="name" className="text-2xl">
        {title}
      </label>
      <small>{description}</small>
      <input
        type="input"
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
                  email: e.target.value,
                }
              : question === 5
              ? { ...userData, phone: e.target.value }
              : { ...userData };

          setUserData(object);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            if (userDataObject.length >= minLength) {
              if (question === 3) {
                console.log('hi');
                const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
                if (!regex.test(userDataObject)) {
                  setUserData({ ...userData, password: '' });
                  setError(true);
                } else nextQuestion(e);
              }
              nextQuestion(e);
            } else setError(true);
          }
        }}
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
          onClick={(e) => {
            e.preventDefault();
            e.target.addEventListener('click', lastQuestion)
          }}
        >
          Prev
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          onClick={(e) => {
            userDataObject.length >= minLength ? nextQuestion(e) : '';
          }}
        >
          Next
        </button>
      </div>
    </>
  );
}
