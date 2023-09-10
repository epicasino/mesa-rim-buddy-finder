import { iUserModal } from '../types';

export default function ModalSchedule({ userInfo }: { userInfo: iUserModal }) {
  return (
    <article className="flex flex-col items-center">
      <h3>Schedule</h3>
      <table className="table-auto border-collapse w-2/3">
        <thead className="border-slate-500 border-b-2">
          <th>Day</th>
          <th>Availability</th>
        </thead>
        <tbody className="text-center">
          <tr>
            <td className="py-2">Sunday</td>
            <td>
              {userInfo?.availability?.sunday
                ? userInfo?.availability?.sunday.unavailable
                  ? 'Unavailable'
                  : `From: ${userInfo?.availability?.sunday?.from} to ${userInfo?.availability?.sunday?.to}`
                : 'N/A'}
            </td>
          </tr>
          <tr>
            <td className="py-2">Monday</td>
            <td>
              {userInfo?.availability?.monday
                ? userInfo?.availability?.monday.unavailable
                  ? 'Unavailable'
                  : `From: ${userInfo?.availability?.monday?.from} to ${userInfo?.availability?.monday?.to}`
                : 'N/A'}
            </td>
          </tr>
          <tr>
            <td className="py-2">Tuesday</td>
            <td>
              {userInfo?.availability?.tuesday
                ? userInfo?.availability?.tuesday.unavailable
                  ? 'Unavailable'
                  : `From: ${userInfo?.availability?.tuesday?.from} to ${userInfo?.availability?.tuesday?.to}`
                : 'N/A'}
            </td>
          </tr>
          <tr>
            <td className="py-2">Wednesday</td>
            <td>
              {userInfo?.availability?.wednesday
                ? userInfo?.availability?.wednesday.unavailable
                  ? 'Unavailable'
                  : `From: ${userInfo?.availability?.wednesday?.from} to ${userInfo?.availability?.wednesday?.to}`
                : 'N/A'}
            </td>
          </tr>
          <tr>
            <td className="py-2">Thursday</td>
            <td>
              {userInfo?.availability?.thursday
                ? userInfo?.availability?.thursday.unavailable
                  ? 'Unavailable'
                  : `From: ${userInfo?.availability?.thursday?.from} to ${userInfo?.availability?.thursday?.to}`
                : 'N/A'}
            </td>
          </tr>
          <tr>
            <td className="py-2">Friday</td>
            <td>
              {userInfo?.availability?.friday
                ? userInfo?.availability?.friday.unavailable
                  ? 'Unavailable'
                  : `From: ${userInfo?.availability?.friday?.from} to ${userInfo?.availability?.friday?.to}`
                : 'N/A'}
            </td>
          </tr>
          <tr>
            <td className="py-2">Saturday</td>
            <td>
              {userInfo?.availability?.saturday
                ? userInfo?.availability?.saturday.unavailable
                  ? 'Unavailable'
                  : `From: ${userInfo?.availability?.saturday?.from} to ${userInfo?.availability?.saturday?.to}`
                : 'N/A'}
            </td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}
