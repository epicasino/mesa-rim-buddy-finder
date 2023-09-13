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
        defaultValue={dayObject.from ? dayObject.from : ''}
        disabled={dayObject.unavailable ? true : false}
      >
        <option disabled value={''}>
          From:
        </option>
        <option value={'6 AM'}>6 AM</option>
        <option value={'7 AM'}>7 AM</option>
        <option value={'8 AM'}>8 AM</option>
        <option value={'9 AM'}>9 AM</option>
        <option value={'10 AM'}>10 AM</option>
        <option value={'11 AM'}>11 AM</option>
        <option value={'12 PM'}>12 PM</option>
        <option value={'1 PM'}>1 PM</option>
        <option value={'2 PM'}>2 PM</option>
        <option value={'3 PM'}>3 PM</option>
        <option value={'4 PM'}>4 PM</option>
        <option value={'5 PM'}>5 PM</option>
        <option value={'6 PM'}>6 PM</option>
        <option value={'7 PM'}>7 PM</option>
        <option value={'8 PM'}>8 PM</option>
        <option value={'9 PM'}>9 PM</option>
        <option value={'10 PM'}>10 PM</option>
      </select>
      <select
        onChange={(e) => {
          const toScheduleObject = toSchedule(e, day, dayObject);

          setSchedule({
            ...schedule,
            ...toScheduleObject,
          });
        }}
        defaultValue={dayObject.to ? dayObject.to : 'To:'}
        disabled={dayObject.unavailable ? true : false}
      >
        <option disabled>To:</option>
        <option value={'6 AM'}>6 AM</option>
        <option value={'7 AM'}>7 AM</option>
        <option value={'8 AM'}>8 AM</option>
        <option value={'9 AM'}>9 AM</option>
        <option value={'10 AM'}>10 AM</option>
        <option value={'11 AM'}>11 AM</option>
        <option value={'12 PM'}>12 PM</option>
        <option value={'1 PM'}>1 PM</option>
        <option value={'2 PM'}>2 PM</option>
        <option value={'3 PM'}>3 PM</option>
        <option value={'4 PM'}>4 PM</option>
        <option value={'5 PM'}>5 PM</option>
        <option value={'6 PM'}>6 PM</option>
        <option value={'7 PM'}>7 PM</option>
        <option value={'8 PM'}>8 PM</option>
        <option value={'9 PM'}>9 PM</option>
        <option value={'10 PM'}>10 PM</option>
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
