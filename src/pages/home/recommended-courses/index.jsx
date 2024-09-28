import React from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../../../components/CourseCard';


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
        <CourseCard
          title="Introduction to Web Development"
          estimatedTime="2 hours"
          link="/courses/web-dev-intro"
          image="https://cdn.pixabay.com/photo/2016/03/09/13/58/online-marketing-1246457_1280.jpg"
          price={10}
        />
        <CourseCard
          title="Introduction to Data Science"
          estimatedTime="2 hours"
          link="/courses/data-science-intro"
          image="https://cdn.pixabay.com/photo/2020/12/09/03/10/digital-marketing-5816304_1280.jpg"
          price={10}
        />
        <CourseCard
          title="Introduction to UI/UX Design"
          estimatedTime="2 hours"
          link="/courses/ui-ux-design-intro"
          image="https://cdn.pixabay.com/photo/2021/02/01/15/29/social-media-marketing-5971028_1280.jpg"
        />
        <CourseCard
          title="Introduction to Digital Marketing"
          estimatedTime="2 hours"
          link="/courses/digital-marketing-intro"
          image="https://cdn.pixabay.com/photo/2016/03/09/13/58/online-marketing-1246457_1280.jpg"
        />
      </div>
    </div>
  );
}

export default RecommendedCourses;