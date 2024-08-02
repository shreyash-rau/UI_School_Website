import React from "react";
import "./Faculty.css";

const Faculty = () => {
  return (
    <div className="faculty">
      <h1>Faculty</h1>
      <ul>
        <li>
          Dr. Emily Carter,
          Position: Head of Science Department
          Bio: Dr. Carter is passionate about fostering scientific curiosity in young minds. With a background in molecular biology,
        </li>
        <li>
          Professor Raj Patel,
          Position: Mathematics Faculty
          Bio: Professor Patel believes that math is more than just numbers—it’s a language that unlocks the universe’s secrets. He enjoys demystifying complex concepts and making math accessible to all.
        </li>
        <li>
          Ms. Maria Rodriguez,
          Position: Spanish Language Teacher
          Bio: Ms. Rodriguez infuses her classes with cultural richness and a love for language. She’s a salsa dancer, a lover of poetry, and believes that learning a new language opens doors to understanding diverse perspectives.
        </li>
        <li>
          Dr. Amy Parker,
          Position: History Department Chair
          Bio: Dr. Foster’s passion lies in unraveling the tapestry of the past. He brings historical events to life through engaging storytelling and encourages critical thinking. When he’s not buried in archives,
        </li>
        <li>
          Sophia Davis: Science Teacher, M.Sc. in Chemistry, 12 years of
          teaching experience
        </li>
        <li>
          David Wilson: Computer Science Teacher, B.Tech in Computer Science, 5
          years of teaching experience
        </li>
      </ul>
    </div>
  );
};

export default Faculty;
