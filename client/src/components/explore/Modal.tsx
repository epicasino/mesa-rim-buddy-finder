import React from 'react';

interface iModal {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({ showModal, setShowModal }) {
  return (
    <dialog
      open={showModal ? true : false}
      className="w-auto h-full bg-slate-950 bg-opacity-50 flex justify-center items-center"
    >
      <article className="w-2/3 h-2/3 bg-white rounded grid grid-cols-7 grid-rows-5">
        <h1 className='col-span-7'></h1>
      </article>
    </dialog>
  );
}
