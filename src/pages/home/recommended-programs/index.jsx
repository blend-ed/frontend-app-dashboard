import React from 'react';
import { Link } from 'react-router-dom';
import ProgramCard from '../../../components/ProgramCard';

const RecommendedPrograms = () => {
  return (
    <div className="recommended-programs-container">
      <div className="recommended-programs__header">
        <div className="recommended-programs__title">Recommended Programs</div>
        <Link to="/programs" className="recommended-programs__link">
          See all
        </Link>
      </div>
      <div className="recommended-programs">
        <ProgramCard
          title="Full Stack Web Development"
          description="Learn to build web applications using the MERN stack"
          estimatedTime="6 months"
          link="/programs/full-stack-web-dev"
          image="https://cdn.pixabay.com/photo/2016/03/09/13/58/online-marketing-1246457_1280.jpg"
          price={10}
          courseCount={10}
        />
        <ProgramCard
          title="Data Science"
          description="Learn to analyze data and make data-driven decisions"
          estimatedTime="6 months"
          link="/programs/data-science"
          image="https://cdn.pixabay.com/photo/2020/12/09/03/10/digital-marketing-5816304_1280.jpg"
          price={10}
        />
        <ProgramCard
          title="UI/UX Design"
          description="Learn to design user-friendly interfaces and experiences"
          estimatedTime="6 months"
          link="/programs/ui-ux-design"
          image="https://cdn.pixabay.com/photo/2021/02/01/15/29/social-media-marketing-5971028_1280.jpg"
          price={0}
        />
        <ProgramCard
          title="Digital Marketing"
          description="Learn to promote products and services online"
          estimatedTime="6 months"
          link="/programs/digital-marketing"
          image="https://cdn.pixabay.com/photo/2016/03/09/13/58/online-marketing-1246457_1280.jpg"
        />
      </div>
    </div>
  );
}

export default RecommendedPrograms;