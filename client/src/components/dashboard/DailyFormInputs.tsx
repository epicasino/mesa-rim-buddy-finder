import { iDailyFormInputProps } from './types';
import {
  toSchedule,
  fromSchedule,
  unavailableSchedule,
} from './scheduleFormFunctions';

export default function DailyFormInputs({
  schedule,
  setSchedule,
  dayObject,
  day,
}: iDailyFormInputProps) {
  const fromTime = new Date(
    '1970-01-01T' + dayObject.from + 'Z'
  ).toLocaleTimeString('en-US', {
    timeZone: 'UTC',
    hour: '2-digit',
  });

  const toTime = new Date(
    '1970-01-01T' + dayObject.to + 'Z'
  ).toLocaleTimeString('en-US', {
    timeZone: 'UTC',
    hour: '2-digit',
  });

  return (
    <div className="grid grid-cols-4 justify-items-center items-center">
      <p>{day}:</p>
      <select
        onChange={(e) => {
          const fromScheduleObject = fromSchedule(e, day, dayObject);
          setSchedule({
            ...schedule,
            ...fromScheduleObject,
          });
        }}
        value={fromTime !== 'Invalid Date' ? fromTime : 'From:'}
      >
        <option disabled>From:</option>
        <option value={'06:00:00'}>6 AM</option>
        <option value={'07:00:00'}>7 AM</option>
        <option value={'08:00:00'}>8 AM</option>
        <option value={'09:00:00'}>9 AM</option>
        <option value={'10:00:00'}>10 AM</option>
        <option value={'11:00:00'}>11 AM</option>
        <option value={'12:00:00'}>12 PM</option>
        <option value={'13:00:00'}>1 PM</option>
        <option value={'14:00:00'}>2 PM</option>
        <option value={'15:00:00'}>3 PM</option>
        <option value={'16:00:00'}>4 PM</option>
        <option value={'17:00:00'}>5 PM</option>
        <option value={'18:00:00'}>6 PM</option>
        <option value={'19:00:00'}>7 PM</option>
        <option value={'20:00:00'}>8 PM</option>
        <option value={'21:00:00'}>9 PM</option>
        <option value={'22:00:00'}>10 PM</option>
      </select>
      <select
        onChange={(e) => {
          const toScheduleObject = toSchedule(e, day, dayObject);

          setSchedule({
            ...schedule,
            ...toScheduleObject,
          });
        }}
        value={toTime !== 'Invalid Date' ? toTime : 'To:'}
      >
        <option disabled>To:</option>
        <option value={'06:00:00'}>6 AM</option>
        <option value={'07:00:00'}>7 AM</option>
        <option value={'08:00:00'}>8 AM</option>
        <option value={'09:00:00'}>9 AM</option>
        <option value={'10:00:00'}>10 AM</option>
        <option value={'11:00:00'}>11 AM</option>
        <option value={'12:00:00'}>12 PM</option>
        <option value={'13:00:00'}>1 PM</option>
        <option value={'14:00:00'}>2 PM</option>
        <option value={'15:00:00'}>3 PM</option>
        <option value={'16:00:00'}>4 PM</option>
        <option value={'17:00:00'}>5 PM</option>
        <option value={'18:00:00'}>6 PM</option>
        <option value={'19:00:00'}>7 PM</option>
        <option value={'20:00:00'}>8 PM</option>
        <option value={'21:00:00'}>9 PM</option>
        <option value={'22:00:00'}>10 PM</option>
      </select>
      <div>
        <input
          type="checkbox"
          checked={dayObject.unavailable}
          onChange={(e) => {
            const toScheduleObject = unavailableSchedule(e, day, dayObject);

            setSchedule({
              ...schedule,
              ...toScheduleObject,
            });
          }}
        />
        <span className="xs:text-xs md:text-sm">Unavailable</span>
      </div>
    </div>
  );
}
