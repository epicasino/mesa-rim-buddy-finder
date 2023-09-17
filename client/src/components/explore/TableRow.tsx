import { iUserData } from './types';

export default function TableRow({
  user,
  setSelectedUser,
  setShowModal,
  loggedIn,
}: {
  user: iUserData;
  setSelectedUser: React.Dispatch<React.SetStateAction<string>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  loggedIn: boolean;
}) {
  return (
    <tr className="border-b-2 border-gunmetal-900">
      <th className="py-2">
        <button
          type="button"
          onClick={() => {
            setSelectedUser(user._id);
            setShowModal(true);
          }}
          className="hover:underline"
          disabled={!loggedIn}
        >
          {user.name}
        </button>
      </th>
      <td className="py-2">{user.pronouns ? user.pronouns : 'N/A'}</td>
      <td className="py-2">
        {loggedIn
          ? user.phone
            ? user.phone
            : 'N/A'
          : user.phone.replace(user.phone, '*'.repeat(user.phone.length))}
      </td>
      <td className="py-2">
        {loggedIn
          ? user.email
            ? user.email
            : 'N/A'
          : user.email
          ? user.email?.replace(user.email, '*'.repeat(user.email.length))
          : 'N/A'}
      </td>
      <td className="py-2">{user.topRope ? '✔️' : 'X'}</td>
      <td className="py-2">{user.leadClimb ? '✔️' : 'X'}</td>
      <td className="py-2">{user.bouldering ? '✔️' : 'X'}</td>
      <td className="flex flex-col items-center py-2">
        {user.locations.miraMesa && <small>Mira Mesa</small>}
        {user.locations.missionValley && <small>Mission Valley</small>}
        {user.locations.northCity && <small>North City</small>}
        {user.locations.reno && <small>Reno</small>}
        {user.locations.austin && <small>Austin</small>}
      </td>
    </tr>
  );
}
