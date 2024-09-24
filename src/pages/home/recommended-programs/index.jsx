import React from 'react';
import { Link } from 'react-router-dom';
import ProgramCard from '../../../components/ProgramCard';
import dummyData from './dummyData.json';

const programData = dummyData;

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
        {programData.map((program, index) => (
          <ProgramCard
            key={index}
            title={program.title}
            description={program.description}
            estimatedTime={program.estimatedTime}
            link={program.link}
            image={program.image}
            price={program.price}
            courseCount={program.courseCount}
          />
        ))}
      </div>
    </div>
  );
}

export default RecommendedPrograms;