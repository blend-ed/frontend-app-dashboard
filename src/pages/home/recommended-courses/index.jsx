import React from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../../../components/CourseCard';
import dummyData from './dummyData.json';

const courseData = dummyData;

const RecommendedCourses = () => {
  return (
    <div className="recommended-courses-container">
      <div className="recommended-courses__header">
        <div className="recommended-courses__title">Recommended Courses</div>
        <Link to="/courses" className="recommended-courses__link">
          See all
        </Link>
      </div>
      <div className="recommended-courses">
        {courseData.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            estimatedTime={course.estimatedTime}
            link={course.link}
            image={course.image}
            price={course.price}
            type="price"
            badgeText="Course"
          />
        ))}
      </div>
    </div>
  );
}

export default RecommendedCourses;