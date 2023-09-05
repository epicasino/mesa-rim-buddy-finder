import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

export default function Dashboard() {
  const { loading, data } = useQuery(QUERY_ME, { fetchPolicy: 'network-only' });

  const userData = data?.me || {};

  if (loading) {
    return <h1>Loading...</h1>;
  }

  console.log(data);

  return (
    <section>
      <header>
        <h1>Hello, {userData.username}!</h1>
      </header>
    </section>
  );
}
