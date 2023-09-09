import { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';

interface iUsersData {
  page: number;
  users: Array<iUserData>;
}

interface iUserData {
  _id: string;
  name: string;
  pronouns: string;
  phone: string;
  email?: string;
  topRope: boolean;
  leadClimb: boolean;
  locations: {
    miraMesa: boolean;
    missionValley: boolean;
    northCity: boolean;
    reno: boolean;
    austin: boolean;
  };
}

export default function Explore() {
  const [page, setPage] = useState(0);
  const [usersData, setUsersData] = useState<iUsersData>({
    page: 0,
    users: [],
  });
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

  console.log(usersData);

  return (
    <main>
      <section className="bg-dashboard bg-cover min-h-screen flex flex-col items-center justify-center">
        <div className="text-center bg-slate-100 bg-opacity-50 md:w-[98vw] min-h-[98vh] items-center gap-5 rounded p-5 m-5">
          <h1>Explore</h1>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <table className="table-fixed border-collapse min-w-full overflow-auto">
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
                  <tr data-id={user._id}>
                    <th className='py-2'>{user.name}</th>
                    <th className='py-2'>{user.pronouns ? user.phone : 'N/A'}</th>
                    <th className='py-2'>{user.phone ? user.phone : 'N/A'}</th>
                    <th className='py-2'>{user.email ? user.email : 'N/A'}</th>
                    <th className='py-2'>{user.topRope ? '✔️' : ''}</th>
                    <th className='py-2'>{user.leadClimb ? '✔️' : ''}</th>
                    <th className="flex flex-col items-center py-2">
                      {user.locations.miraMesa && <small>Mira Mesa</small>}
                      {user.locations.missionValley && <small>Mission Valley</small>}
                      {user.locations.northCity && <small>North City</small>}
                      {user.locations.reno && <small>Reno</small>}
                      {user.locations.austin && <small>Austin</small>}
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>
      {/* <button type='button' onClick={() => setPage(page + 1)}>Click</button> */}
    </main>
  );
}
