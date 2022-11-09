import React from "react";
import data from "../data.json";
import styles from "../styles/Home.module.css";
import Search from "./Search";
import { useState } from "react";

const Home = () => {
  function compareName(a, b) {
    // converting to uppercase to have case-insensitive comparison
    const name1 = a.grade.toUpperCase();
    const name2 = b.grade.toUpperCase();

    let comparison = 0;

    if (name1 > name2) {
      comparison = 1;
    } else if (name1 < name2) {
      comparison = -1;
    }
    return comparison;
  }

  const sortedData = data.sort(compareName);

  const [students, setStudents] = useState(sortedData);

  const leaderboard = students.map((student) => {
    return (
      <div key={student.rollNo} className={styles.leaderboard}>
        <article className={styles.leaderboard__profile}>
          <img
            src={student.img}
            alt="Evan Spiegel"
            className={styles.leaderboard__picture}
          />
          <span className={styles.leaderboard__rollNo}>{student.rollNo}</span>
          <span className={styles.leaderboard__name}>{student.name}</span>
          <span className={styles.leaderboard__value}>{student.grade}</span>
        </article>
      </div>
    );
  });

  const handleClickA = () => {
    console.log("clicked");
    const newItem = sortedData.filter((newVal) => {
      return newVal.grade === "A";
    });
    setStudents(newItem);
  };

  const handleClickB = () => {
    console.log("clicked");
    const newItem = sortedData.filter((newVal) => {
      return newVal.grade === "B";
    });
    setStudents(newItem);
  };

  const handleClickC = () => {
    console.log("clicked");
    const newItem = sortedData.filter((newVal) => {
      return newVal.grade === "C";
    });
    setStudents(newItem);
  };

  const handleClickAll = () => {
    console.log("clicked");
    setStudents(sortedData);
  };
  return (
    <div>
      <div className={styles.head}>
        <Search students={students} setStudents={setStudents} />
        <div className={styles.btns}>
          <button className={styles.btn} id="button" onClick={handleClickA}>
            A
          </button>
          <button className={styles.btn} id="button" onClick={handleClickB}>
            B
          </button>
          <button className={styles.btn} id="button" onClick={handleClickC}>
            C
          </button>
          <button className={styles.btn} id="button" onClick={handleClickAll}>
            ALL
          </button>
        </div>
      </div>

      {leaderboard}
    </div>
  );
};

export default Home;
