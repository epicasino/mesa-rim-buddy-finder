import { iUserDataForm } from './types';
import { useState } from 'react';
import { ADD_INFO } from '../../utils/mutations';
import { useMutation, useLazyQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';
import { hasBannedWords } from 'banned-words-spotter';

export default function AccountInfoForm({ userData }: iUserDataForm) {
  const [formInput, setFormInput] = useState(userData);

  const [updateError, setUpdatedError] = useState<{ message: unknown }>({
    message: '',
  });

  const [getUser] = useLazyQuery(QUERY_USER, { fetchPolicy: 'network-only' });

  // console.log(formInput);

  const [addInfo] = useMutation(ADD_INFO);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _id, username, ...formInputRest } = formInput;

    try {
      const pronounRegex = /(\w+\/\w+)/;

      if (
        hasBannedWords(
          `${formInputRest.email} ${formInputRest.name} ${formInputRest.pronouns}`
        )
      ) {
        throw 'Profanity Detected';
      }
      if (
        !pronounRegex.test(formInputRest.pronouns) &&
        formInputRest.pronouns !== null &&
        formInputRest.pronouns !== ''
      ) {
        throw 'Pronouns Invalid';
      }

      const phoneCheck = await getUser({
        variables: { phone: formInputRest.phone },
      }).then((res) => res.data);

      // console.log(phoneCheck);

      if (phoneCheck.user && phoneCheck.user?._id !== userData._id) {
        throw 'Phone # Taken';
      }

      const updatedInfo = await addInfo({
        variables: { userInfo: { ...formInputRest } },
      });

      if (updatedInfo?.data) {
        location.reload();
      }
      // console.log(updatedInfo);
    } catch (err) {
      console.error(err);
      setUpdatedError({ message: err });
    }
  };

  return (
    <form
      className="xs:col-span-2 md:col-span-1 w-full h-full bg-slate-200 bg-opacity-75 rounded grid grid-rows-6 grid-cols-4 items-center justify-center"
      onSubmit={(e) => handleSubmit(e)}
    >
      <header className="col-span-4 flex flex-col">
        <h5>Account Info</h5>
        {updateError.message === 'Profanity Detected' && (
          <h5>ERROR: {updateError.message} in one or more fields!</h5>
        )}
        {updateError.message === 'Pronouns Invalid' && (
          <h5>ERROR: Pronouns invalid!</h5>
        )}
        {updateError.message === 'Phone # Taken' && (
          <h5>ERROR: Phone Number Already Taken!</h5>
        )}
      </header>
      <div className="flex gap-2 justify-center items-center col-span-2 flex-col">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={formInput.name}
          onChange={(e) => setFormInput({ ...formInput, name: e.target.value })}
          className="form-input"
        />
      </div>
      <div className="flex gap-2 justify-center items-center col-span-2 flex-col">
        <label htmlFor="pronouns">Pronouns:</label>
        <input
          name="pronouns"
          value={formInput?.pronouns || ''}
          placeholder="Pronouns"
          onChange={(e) => {
            setFormInput({ ...formInput, pronouns: e.target.value });
          }}
          className="form-input"
        />
      </div>
      <div className="flex gap-2 justify-center items-center col-span-2 flex-col">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={formInput?.email || ''}
          placeholder="Email"
          onChange={(e) =>
            setFormInput({ ...formInput, email: e.target.value })
          }
          className="form-input"
        />
      </div>
      <div className="flex gap-2 justify-center items-center col-span-2 flex-col">
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          name="phone"
          value={formInput.phone}
          maxLength={14}
          placeholder="Phone"
          onChange={(e) =>
            setFormInput({ ...formInput, phone: e.target.value })
          }
          className="form-input"
        />
      </div>
      <div className="grid grid-cols-3 col-span-4">
        <label className="col-span-3">Locations:</label>
        <div className="flex flex-col items-center">
          <label htmlFor="Mira Mesa">Mira Mesa</label>
          <input
            type="checkbox"
            name="Mira Mesa"
            checked={formInput.locations.miraMesa ? true : false}
            onChange={(e) => {
              e.target.checked
                ? setFormInput({
                    ...formInput,
                    locations: { ...formInput.locations, miraMesa: true },
                  })
                : setFormInput({
                    ...formInput,
                    locations: { ...formInput.locations, miraMesa: false },
                  });
            }}
          />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="Mission Valley">Mission Valley</label>
          <input
            type="checkbox"
            name="Mission Valley"
            checked={formInput.locations.missionValley ? true : false}
            onChange={(e) =>
              e.target.checked
                ? setFormInput({
                    ...formInput,
                    locations: { ...formInput.locations, missionValley: true },
                  })
                : setFormInput({
                    ...formInput,
                    locations: { ...formInput.locations, missionValley: false },
                  })
            }
          />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="North City">North City</label>
          <input
            type="checkbox"
            name="North City"
            checked={formInput.locations.northCity ? true : false}
            onChange={(e) =>
              e.target.checked
                ? setFormInput({
                    ...formInput,
                    locations: { ...formInput.locations, northCity: true },
                  })
                : setFormInput({
                    ...formInput,
                    locations: { ...formInput.locations, northCity: false },
                  })
            }
          />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="Reno">Reno</label>
          <input
            type="checkbox"
            name="Reno"
            checked={formInput.locations.reno ? true : false}
            onChange={(e) =>
              e.target.checked
                ? setFormInput({
                    ...formInput,
                    locations: { ...formInput.locations, reno: true },
                  })
                : setFormInput({
                    ...formInput,
                    locations: { ...formInput.locations, reno: false },
                  })
            }
          />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="Austin">Austin</label>
          <input
            type="checkbox"
            name="Austin"
            checked={formInput.locations.austin ? true : false}
            onChange={(e) =>
              e.target.checked
                ? setFormInput({
                    ...formInput,
                    locations: { ...formInput.locations, austin: true },
                  })
                : setFormInput({
                    ...formInput,
                    locations: { ...formInput.locations, austin: false },
                  })
            }
          />
        </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 col-span-4">
        <label className="col-span-3 mt-5">Disciplines:</label>
        <div className="flex flex-col items-center">
          <label htmlFor="Top Rope">Top Rope</label>
          <input
            type="checkbox"
            name="Top Rope"
            checked={formInput.topRope ? true : false}
            onChange={(e) => {
              e.target.checked
                ? setFormInput({ ...formInput, topRope: true })
                : setFormInput({
                    ...formInput,
                    topRope: false,
                  });
            }}
          />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="Lead Climb">Lead Climb</label>
          <input
            type="checkbox"
            name="Lead Climb"
            checked={formInput.leadClimb ? true : false}
            onChange={(e) => {
              e.target.checked
                ? setFormInput({ ...formInput, leadClimb: true })
                : setFormInput({
                    ...formInput,
                    leadClimb: false,
                  });
            }}
          />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="Bouldering">Bouldering</label>
          <input
            type="checkbox"
            name="Bouldering"
            checked={formInput.bouldering ? true : false}
            onChange={(e) => {
              e.target.checked
                ? setFormInput({ ...formInput, bouldering: true })
                : setFormInput({
                    ...formInput,
                    bouldering: false,
                  });
            }}
          />
        </div>
      </div>
      <div className="col-span-4 flex flex-col items-center gap-2">
        <div className="inline-flex items-center">
          <input
            name="Show Profile"
            type="checkbox"
            checked={formInput.showProfile}
            onChange={(e) => {
              e.target.checked
                ? setFormInput({ ...formInput, showProfile: true })
                : setFormInput({ ...formInput, showProfile: false });
            }}
          />
          <label htmlFor="Show Profile">Show Profile on Explore</label>
        </div>
        <button
          type="submit"
          className="px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded"
        >
          Update Account
        </button>
      </div>
    </form>
  );
}

// modify name, pronouns, email, phone, locations, topRope, and leadClimb
