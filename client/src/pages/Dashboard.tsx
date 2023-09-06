import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { iUserDataDash } from '../components/dashboard/types';

export default function Dashboard() {
  const { loading, data } = useQuery(QUERY_ME, { fetchPolicy: 'network-only' });

  const userData: iUserDataDash = data?.me;

  if (loading) {
    return <h1>Loading...</h1>;
  }

  // console.log(data);

  return (
    <main>
      <section className="bg-dashboard bg-cover min-h-screen flex flex-col items-center justify-center">
        <div className="text-center bg-slate-100 bg-opacity-50 md:w-[98vw] md:h-[98vh] grid grid-rows-6 justify-items-center items-center gap-5 rounded p-5">
          <header className="row-span-1">
            <h1>Hello, {userData.username}!</h1>
            <h5>Here's your account details...</h5>
          </header>
          <section className="w-full h-full row-span-5 grid grid-cols-2 gap-2">
            <form className="xs:col-span-2 md:col-span-1 w-full h-full bg-slate-200 bg-opacity-75 grid grid-rows-8 rounded items-center">
              <h5>Your Weekly Schedule</h5>
              <div className="grid grid-cols-3">
                <p className="col-span-3">Sunday</p>
                <div className="flex flex-col items-start">
                  <label htmlFor="from" className="text-xs">
                    From
                  </label>
                  <input type="text"></input>
                </div>
                <div className="flex flex-col items-start">
                  <label htmlFor="to" className="text-xs">
                    To
                  </label>
                  <input type="text"></input>
                </div>
              </div>
            </form>
            <form className="xs:col-span-2 md:col-span-1 w-full h-full bg-slate-200 bg-opacity-75 rounded grid grid-rows-8 items-center">
              <h5>Account Info</h5>
            </form>
          </section>
        </div>
      </section>
    </main>
  );
}
