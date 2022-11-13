import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import ProposalSent from '../components/modals/ProposalSent';
import styles from '../styles/ProposeACountry.module.css';

const proposeACountry: React.FC = () => {
  const router = useRouter();
  const [countries, setCountries] = useState([]);
  const [inputs, setInputs] = useState({
    country: '',
    email: '',
    providers: '',
  });
  const [showInvalid, setShowInvalid] = useState(false);
  const [showNoCountry, setShowNoCountry] = useState(false);
  const [showModal, setShowModal] = useState(false);
  console.log('inputes=>', inputs);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await fetch(
          'https://api.adalo.com/v0/apps/d555f7ca-f23c-47bc-a0e6-8caf0e046da8/collections/t_ab3581141de44cd19ef7cf36462a3da7?limit=200',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer eo14jtmxpm3pyheppkmuzkb47',
            },
          }
        );
        const countries = await data.json();
        const countriesArray = countries.records.map(
          (country: {
            id: number;
            'Country name': string;
            created_at: string;
            updated_at: string;
          }) => country['Country name']
        );
        setCountries(countriesArray);
      } catch (err) {
        console.log('Err', err);
      }
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
          onChange={(e) => {
            setShowInvalid(false);
            setInputs((prev) => ({
              ...prev,
              email: e.target.value,
            }));
          }}
          required
          type="text"
          placeholder="Enter your email address..."
          value={inputs.email}
        />
        {showInvalid && <p className={styles.invalid}>Invalid email</p>}
        <label htmlFor="countries">
          <div>Country</div>
          <select
            name="countries"
            id="countries"
            placeholder="Select a country"
            onChange={(e) => {
              setShowNoCountry(false);
              if (e.target.value) {
                setInputs((prev) => ({
                  ...prev,
                  country: e.target.value,
                }));
              }
            }}
          >
            <option className={styles.placeholder}>Select a Country...</option>
            {countries[0] &&
              countries.map((country) => (
                <option key={country}>{country}</option>
              ))}
          </select>
          {showNoCountry && (
            <p className={styles.invalid}>No country selected</p>
          )}
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
          onChange={(e) =>
            setInputs((prev) => ({
              ...prev,
              providers: e.target.value,
            }))
          }
        ></textarea>
        <div className={styles.buttonsContainer}>
          <Link href="/signup">
            <button className={`${styles.cancel} main-blue`}>Cancel</button>
          </Link>
          <button
            onClick={(e) => {
              e.preventDefault();
              if (
                !inputs.email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
              )
                return setShowInvalid(true);
              if (!inputs.country) return setShowNoCountry(true);
              setShowModal(true);
            }}
            className={styles.submit}
            type="submit"
          >
            SUBMIT
          </button>
        </div>
      </form>
      {showModal && <ProposalSent setShowModal={setShowModal} />}
    </div>
  );
};

export default proposeACountry;
