import React, { useEffect } from 'react';
import { QUERY_USER } from '../../../utils/queries';
import { useLazyQuery } from '@apollo/client';
import { iUserModal } from '../types';
import ModalSchedule from './ModalSchedule';

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

  console.log(userInfo);

  return (
    <dialog
      open={showModal ? true : false}
      className="w-auto h-[106vh] bg-slate-950 bg-opacity-50 flex justify-center items-center"
      onClick={() => setShowModal(false)}
    >
      <section
        className="w-2/3 min-h-2/3 h-fit bg-white rounded grid grid-rows-5 user-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <header className="flex flex-col items-center justify-center">
              <h1>{userInfo.name}</h1>
              <small>
                Pronouns: {userInfo.pronouns ? userInfo.pronouns : 'N/A'}
              </small>
            </header>
            <div className="row-span-4 grid xs:grid-cols-1 md:grid-cols-2">
              <ModalSchedule userInfo={userInfo} />
              <div className="grid grid-rows-2">
                <article className="flex flex-col items-center">
                  <h3>Info</h3>
                  <h5>Top Rope: {userInfo.topRope ? '✔️' : 'X'}</h5>
                  <h5>Lead Climb: {userInfo.leadClimb ? '✔️' : 'X'}</h5>
                  <h5>Bouldering: {userInfo.bouldering ? '✔️' : 'X'}</h5>
                  <h5>Phone: {userInfo.phone}</h5>
                  {userInfo.email && <h5>{userInfo.email}</h5>}
                </article>
                <article className="flex flex-col items-center">
                  <h3>Locations</h3>
                  {userInfo?.locations?.miraMesa && <h5>Mira Mesa</h5>}
                  {userInfo?.locations?.missionValley && (
                    <h5>Mission Valley</h5>
                  )}
                  {userInfo?.locations?.northCity && <h5>North City</h5>}
                  {userInfo?.locations?.reno && <h5>Reno</h5>}
                  {userInfo?.locations?.austin && <h5>Austin</h5>}
                </article>
              </div>
            </div>
          </>
        )}
      </section>
    </dialog>
  );
}
