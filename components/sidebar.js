import React from "react";
import styles from "../styles/Sidebar.module.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Sidebar = (props) => {
  const date = new Date().toString();
  const { people } = props.data.data.allPeople;

  const [quote, setQuote] = useState("");

  useEffect(() => {
    try {
      return axios
        .get(
          `http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote`
        )
        .then((response) => {
          const quotes = response.data.content;
          setQuote(quotes);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.container1}>
        <a className={styles.link1} href="#">
          Home
        </a>
        <a className={styles.link2} href="#">
          Star Wars
        </a>
      </div>
      <div className={styles.container2}>
        <header className={styles.header}>{date}</header>
        <section className={styles.section}>
          <h1 className={styles.heading}>StarWars Characters</h1>
          <h4 className={styles.heading}>{quote}</h4>
          <table className={styles.table}>
            <tr>
              <th>Name</th>
              <th>Hair Color</th>
              <th>Skin Color</th>
              <th>Eye Color</th>
              <th>Gender</th>
              <th>Home world name</th>
            </tr>
            {people.map((person) => {
              return (
                <tr key={person.name}>
                  <td>
                    <a className={styles.personLinks} href="#">
                      {person.name}
                    </a>
                  </td>
                  <td>{person.hairColor}</td>
                  <td>{person.skinColor}</td>
                  <td>{person.eyeColor}</td>
                  <td>{person.gender}</td>
                  <td>{person.homeworld.name}</td>
                </tr>
              );
            })}
          </table>
        </section>
      </div>
    </div>
  );
};

export default Sidebar;
