import React from 'react';
import styles from '../styles/ProposeACountry.module.css';

import countryList from '../utils/countries';

const proposeACountry = () => {
  return (
    <div className={styles.parent}>
      <form className={styles.form}>
        <h1 className={styles.heading}>Propose a Country</h1>
        <p>
          Your email address.
          <br />
          So we can let you know once we add it.
        </p>
        <input type="email" placeholder="Enter your email address..." />
        <label htmlFor="countries">
          <div>Country</div>
          <select
            name="countries"
            id="countries"
            placeholder="Select a country"
          >
            <option>Select a Country...</option>
            {countryList.map((country) => (
              <option key={country}>{country}</option>
            ))}
          </select>
        </label>
        <p>
          Providers that you are interested in, in this country.
          <br />
          (optional)
        </p>
        <textarea
          name="providers"
          id=""
          cols={30}
          rows={3}
          placeholder="Names, info and the service(s) they provide..."
        ></textarea>
        <input type="submit" value="SUBMIT COUNTRY SUGGESTION" />
      </form>
    </div>
  );
};

export default proposeACountry;
