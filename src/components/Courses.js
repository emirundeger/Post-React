import React, { Component } from "react";
import Course from "./Course";
import { Link } from "react-router-dom";

class Courses extends Component {
  state = {
    courses: [
      { id: 1, title: "Math" },
      { id: 2, title: "Bio" },
      { id: 3, title: "Chemistry" }
    ]
  };
  render() {
    let posts = this.state.courses.map(course => {
      return (
        //Bunu courses/course url inde calistirmak icin ya hardcoded olarak /courses/course yazican
        //ya da this.props.match.url + course
        <Link
          key={course.id}
          to={{
            pathname: this.props.match.url + course.id,
            search: "?title=" + course.title
          }}
        >
          <article>{course.title}</article>
        </Link>
      );
    });

    return (
      <div>
        <h1>Amazing Courses</h1>
        {posts}
      </div>
    );
  }
}

export default Courses;
