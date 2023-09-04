import { useState } from 'react';
import RegisterHeader from '../register/RegisterHeader';

export default function RegisterFormSection() {
  const [showReg, setShowReg] = useState(false);

  const [fade, setFade] = useState(false);

  const [question, setQuestion] = useState(0);

  const [userData, setUserData] = useState({
    username: '',
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  return (
    <section
      className="text-center  bg-slate-100 bg-opacity-50 w-[95vw] h-[95vh] flex flex-col justify-center items-center gap-10"
      id="formSection"
    >
      {!showReg && (
        <RegisterHeader
          fade={fade}
          setFade={setFade}
          setShowReg={setShowReg}
          setQuestion={setQuestion}
        />
      )}

      {showReg && (
        <form>
          {question === 1 && (
            <div className="flex flex-col items-center">
              <label htmlFor="name" className="text-2xl">
                Alright, Let's first get your name...
              </label>
              <input
                type="input"
                className="w-1/4 text-4xl text-center"
              ></input>
            </div>
          )}
        </form>
      )}
    </section>
  );
}
