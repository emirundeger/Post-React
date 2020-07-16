import React from "react";

const course = () => (
  <div>
    <h1>{props.match.params.courseTitle}</h1>
    <p>You selected the Course with ID: {props.match.params.courseId}</p>
  </div>
);

export default course;
