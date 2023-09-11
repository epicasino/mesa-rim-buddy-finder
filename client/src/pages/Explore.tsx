import { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';
import Modal from '../components/explore/modal/Modal';
import TableRow from '../components/explore/TableRow';
import { iUsersData } from '../components/explore/types';
import Auth from '../utils/auth';

export default function Explore() {

  const userLoggedIn = Auth.loggedIn()

  const [page, setPage] = useState(0);
  const [usersData, setUsersData] = useState<iUsersData>({
    page: 0,
    users: [],
  });
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState('');

  const [getUsers, { loading }] = useLazyQuery(QUERY_USERS, {
    fetchPolicy: 'network-only',
  });

  // This will run one time after the component mounts
  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = async () => {
      // do something else
      console.log('page loaded');
      const { data } = await getUsers({ variables: { page } });
      // console.log(data);
      setUsersData(data?.users);
    };

    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, [getUsers, page]);

  // console.log(usersData);

  return (
    <main className='mt-[10vh]'>
      <section className="bg-dashboard bg-cover min-h-screen flex flex-col items-center justify-center">
        {showModal && (
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            selectedUser={selectedUser}
          />
        )}
        <div className="text-center bg-slate-100 bg-opacity-50 md:w-[98vw] min-h-[98vh] items-center gap-5 rounded p-5 m-5">
          <h1>Explore</h1>
          {!userLoggedIn && (<h5>To see Email & Phone of your follow climbers, log in or register!</h5>) }
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <table className="table-auto border-collapse min-w-full overflow-x-scroll">
              <thead className="border-b-2 border-gunmetal-900">
                <tr>
                  <th>Name</th>
                  <th>Pronouns</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Top Rope</th>
                  <th>Lead</th>
                  <th>Locations</th>
                </tr>
              </thead>
              <tbody>
                {usersData?.users.map((user) => (
                  <TableRow
                    user={user}
                    setSelectedUser={setSelectedUser}
                    setShowModal={setShowModal}
                    loggedIn={userLoggedIn}
                  />
                ))}
              </tbody>
            </table>
          )}
          <button type="button" disabled onClick={() => setPage(page + 1)}>
            Test Button for Pagination (Disabled)
          </button>
        </div>
      </section>
    </main>
  );
}
