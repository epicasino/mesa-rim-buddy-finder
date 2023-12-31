import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { iUserDataDash } from '../components/dashboard/types';
import ScheduleForm from '../components/dashboard/ScheduleForm';
import AccountInfoForm from '../components/dashboard/AccountInfoForm';

export default function Dashboard() {
  const { loading, data } = useQuery(QUERY_ME, { fetchPolicy: 'network-only' });

  const userData: iUserDataDash = data?.me;

  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }

  // console.log(data);

  return (
    <main>
      <section className="bg-dashboard bg-cover min-h-screen flex flex-col items-center justify-center mt-[10vh]">
        <div className="text-center bg-slate-100 bg-opacity-50 md:w-[98vw] md:h-min-[98vh] justify-items-center items-center gap-5 rounded md:p-5 md:m-5">
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <>
              <header className="my-8">
                <h1>Hello, {userData.username}!</h1>
                <h5>Here's your account details...</h5>
              </header>
              <section className="w-full h-full grid grid-cols-2 gap-2">
                <ScheduleForm userData={userData} />
                <AccountInfoForm userData={userData} />
              </section>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
