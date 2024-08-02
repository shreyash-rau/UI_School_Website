import React from "react";
import "./Students.css";

const Students = () => {
  return (
    <div className="students">
      <h1>Students</h1>
      <h2>Life at GreenWood</h2>
      <p>
        Extracurricular Activities: Music, Dance, Drama, Art, Sports, Robotics,
        Debate Club, Science Club
      </p>
      <h2>Clubs and Societies</h2>
      <p>Literary Society, Environmental Club, Astronomy Club, Coding Club</p>
      <h2>Achievements</h2>
      <ul>
        <li>John Smith - National Level Math Olympiad Winner</li>
        <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
        <li>
          Tech Innovators Club - Winners of Inter-School Robotics Competition
        </li>
      </ul>
      <h2>Student Council</h2>
      <p>President: Amy Parker, Grade 12</p>
      <p>Vice President: Rajiv Mehta, Grade 11</p>
      <p>Secretary: Lisa Wong, Grade 10</p>
    </div>
  );
};

export default Students;
