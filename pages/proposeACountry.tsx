import React, { useEffect, useState } from 'react';
import styles from '../styles/ProposeACountry.module.css';

// import countryList from '../utils/countries';

const proposeACountry = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await fetch(
        'https://api.adalo.com/v0/apps/d555f7ca-f23c-47bc-a0e6-8caf0e046da8/collections/t_ab3581141de44cd19ef7cf36462a3da7?limit=200',
        {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer eo14jtmxpm3pyheppkmuzkb47',
          },
        }
      );
      const countries = await data.json();
      console.log('countries', countries);
      const countriesArray = countries.records.map(
        (country: {
          id: number;
          'Country name': string;
          created_at: string;
          updated_at: string;
        }) => country['Country name']
      );
      console.log('countries array', countriesArray);
      setCountries(countriesArray);
    };
    fetchCountries();
  }, []);
  return (
    <div className={styles.parent}>
      <form className={styles.form}>
        <h1 className={`${styles.heading} main-blue`}>Propose a Country</h1>
        <p>
          Your email address.
          <br />
          So we can let you know once we add it.
        </p>
        <input
          required
          type="email"
          placeholder="Enter your email address..."
        />
        <label htmlFor="countries">
          <div>Country</div>
          <select
            name="countries"
            id="countries"
            placeholder="Select a country"
          >
            <option className={styles.placeholder}>Select a Country...</option>
            {countries[0] &&
              countries.map((country) => (
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
        <div className={styles.buttonsContainer}>
          <button className={`${styles.cancel} main-blue`}>Cancel</button>
          <button className={styles.submit} type="submit">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default proposeACountry;
