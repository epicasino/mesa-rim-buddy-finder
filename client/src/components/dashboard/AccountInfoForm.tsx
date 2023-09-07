import { iUserDataForm } from './types';
import { useState, useEffect } from 'react';

export default function AccountInfoForm({ userData }: iUserDataForm) {
  const [formInput, setFormInput] = useState({ ...userData });

  useEffect(() => {
    console.log(formInput);
  }, [formInput]);

  // console.log(formInput);

  return (
    <form className="xs:col-span-2 md:col-span-1 w-full h-full bg-slate-200 bg-opacity-75 rounded grid grid-rows-10 items-center justify-center">
      <h5>Account Info</h5>
      <div className="flex gap-2 justify-center items-center">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={formInput.name}
          onChange={(e) => setFormInput({ ...formInput, name: e.target.value })}
          className="form-input"
        />
      </div>
      <div className="flex gap-2 justify-center items-center">
        <label htmlFor="pronouns">Pronouns</label>
        <input
          name="pronouns"
          value={formInput.pronouns}
          placeholder="Pronouns"
          onChange={(e) =>
            setFormInput({ ...formInput, pronouns: e.target.value })
          }
          className="form-input"
        />
      </div>
      <div className="flex gap-2 justify-center items-center">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={formInput.email}
          placeholder="Email"
          onChange={(e) =>
            setFormInput({ ...formInput, email: e.target.value })
          }
          className="form-input"
        />
      </div>
      <div className="flex gap-2 justify-center items-center">
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          name="phone"
          value={formInput.phone}
          placeholder="Phone"
          onChange={(e) =>
            setFormInput({ ...formInput, phone: e.target.value })
          }
          className="form-input"
        />
      </div>
      <label>Locations:</label>
      <div className="grid grid-cols-3 grid-rows-2">
        <div className="flex flex-col items-center">
          <label htmlFor="Mira Mesa">Mira Mesa</label>
          <input type="checkbox" name="Mira Mesa" />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="Mission Valley">Mission Valley</label>
          <input type="checkbox" name="Mission Valley" />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="North City">North City</label>
          <input type="checkbox" name="North City" />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="Reno">Reno</label>
          <input type="checkbox" name="Reno" />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="Austin">Austin</label>
          <input type="checkbox" name="Austin" />
        </div>
      </div>
    </form>
  );
}

// modify name, pronouns, email, phone, locations, topRope, and leadClimb
