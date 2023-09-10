import React, { useEffect } from 'react';
import { QUERY_USER } from '../../utils/queries';
import { useLazyQuery } from '@apollo/client';
import { iUserModal } from './types';

interface iModal {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedUser: string;
}

export default function Modal({
  showModal,
  setShowModal,
  selectedUser,
}: iModal) {
  const [getUser, { loading, data }] = useLazyQuery(QUERY_USER);

  useEffect(() => {
    const getInfo = async () => {
      const { data } = await getUser({ variables: { userId: selectedUser } });
      return data;
    };
    getInfo();
  }, [selectedUser, getUser]);

  // console.log(data)
  const userInfo: iUserModal = data?.user || {};

  console.log(userInfo)

  return (
    <dialog
      open={showModal ? true : false}
      className="w-auto h-full bg-slate-950 bg-opacity-50 flex justify-center items-center"
      onClick={() => setShowModal(false)}
    >
      <article
        className="w-2/3 h-2/3 bg-white rounded grid grid-cols-7 grid-rows-5 user-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="col-span-7 flex flex-col items-center justify-center">
          <h1>{userInfo.name}</h1>
          <small>Pronouns {userInfo.pronouns ? userInfo.pronouns : "N/A"}</small>
        </header>
      </article>
    </dialog>
  );
}
