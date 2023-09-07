import { useState } from 'react';
import DailyFormInputs from './DailyFormInputs';
import { initialScheduleValue } from './scheduleFormFunctions';
import { useMutation } from '@apollo/client';
import { ADD_INFO } from '../../utils/mutations';
import { iUserDataForm } from './types';

export default function ScheduleForm({ userData }: iUserDataForm) {
  const userSchedule = userData?.availability || initialScheduleValue;

  // console.log(userSchedule);

  const [schedule, setSchedule] = useState(userSchedule);

  const [updateAvailability] = useMutation(ADD_INFO);

  const submitSchedule = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await updateAvailability({
        variables: { userInfo: { availability: schedule } },
      });

      if (data?.addInfo) {
        console.log({ updated: data?.addInfo, message: 'Success!' });
        location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      className="xs:col-span-2 md:col-span-1 w-full h-full bg-slate-200 bg-opacity-75 grid grid-rows-9 rounded items-center"
      onSubmit={(e) => {
        submitSchedule(e);
      }}
    >
      <h5>Your Weekly Schedule</h5>
      <DailyFormInputs
        schedule={schedule}
        setSchedule={setSchedule}
        dayObject={schedule.sunday}
        day="Sunday"
      />
      <DailyFormInputs
        schedule={schedule}
        setSchedule={setSchedule}
        dayObject={schedule.monday}
        day="Monday"
      />
      <DailyFormInputs
        schedule={schedule}
        setSchedule={setSchedule}
        dayObject={schedule.tuesday}
        day="Tuesday"
      />
      <DailyFormInputs
        schedule={schedule}
        setSchedule={setSchedule}
        dayObject={schedule.wednesday}
        day="Wednesday"
      />
      <DailyFormInputs
        schedule={schedule}
        setSchedule={setSchedule}
        dayObject={schedule.thursday}
        day="Thursday"
      />
      <DailyFormInputs
        schedule={schedule}
        setSchedule={setSchedule}
        dayObject={schedule.friday}
        day="Friday"
      />
      <DailyFormInputs
        schedule={schedule}
        setSchedule={setSchedule}
        dayObject={schedule.saturday}
        day="Saturday"
      />
      <div>
        <button
          type="submit"
          className="px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded"
        >
          Update Schedule
        </button>
      </div>
    </form>
  );
}
