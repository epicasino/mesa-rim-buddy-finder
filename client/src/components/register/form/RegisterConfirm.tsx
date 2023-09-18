import { iRegisterConfirmProps } from '../types';

export default function RegisterConfirm({
  userData,
  setUserData,
  lastQuestion,
  submitForm,
  confirmError,
}: iRegisterConfirmProps) {
  return (
    <>
      <div
        className="flex flex-col text-start"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            submitForm(e);
          }
        }}
      >
        <label htmlFor="userDataConfirm" className="text-2xl text-center">
          Just to confirm...
        </label>
        <small className="text-center">
          Make sure to double check your info!
        </small>
        <label htmlFor="name" className="text-sm">
          Name
        </label>
        <input
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          type="text"
          className="text-xl"
        />
        <label htmlFor="username" className="text-sm">
          Username
        </label>
        <input
          value={userData.username}
          onChange={(e) =>
            setUserData({ ...userData, username: e.target.value })
          }
          type="text"
          className="text-xl"
        />
        <label htmlFor="password" className="text-sm">
          Password (Can't Change Here)
        </label>
        <input
          value={userData.password}
          type="password"
          className="text-xl"
          readOnly={true}
        />
        <label htmlFor="phone" className="text-sm">
          Phone #
        </label>
        <input
          value={userData.phone}
          onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
          type="tel"
          className="text-xl"
        />
        <label htmlFor="email" className="text-sm">
          Email
        </label>
        <input
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          type="email"
          className="text-xl"
        />
      </div>
      <div className="question-boxes inline-flex mt-4">
        <button
          className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l`}
          // For some reason, when password check fails, if user fails it again, lastQuestion function will trigger, and will go back to the previous question.
          onClick={(e) => {
            e.preventDefault();
            e.target.addEventListener('click', lastQuestion);
          }}
        >
          Prev
        </button>
        <button
          className="bg-blue-600 hover:bg-blue-500
            focus:bg-blue-600 text-white font-bold py-2 px-4 rounded-r"
          type="submit"
          onClick={(e) => submitForm(e)}
        >
          Submit
        </button>
      </div>

      {confirmError && <p>{confirmError.message}</p>}
    </>
  );
}
