import { useState } from 'react';
import RegisterHeader from './RegisterHeader';
import RegisterForm from './form/RegisterForm';

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
        <RegisterForm
          userData={userData}
          setUserData={setUserData}
          fade={fade}
          setFade={setFade}
          setShowReg={setShowReg}
          question={question}
          setQuestion={setQuestion}
        />
      )}
    </section>
  );
}
