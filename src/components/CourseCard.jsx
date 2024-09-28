import { Badge, Icon, Image } from '@blend-ed/blendx-ui';
import React from 'react';

const CourseCard = ({ title, link, image, estimatedTime, price }) => {
  return (
    <div className="course-card">
      <Image src={image} alt={title} className="course-card__image" />
      <div className="course-card__body">
        <Badge variant="light-yellow" className="course-card__badge">
          Course
        </Badge>
        <div className="course-card__head">
          <div className="course-card__title">
            {title}
          </div>
          <div className="course-card__est-time">
            <Icon icon="time" type="line" size="xxs" className="course-card__est-time-icon" />
            <span>{estimatedTime}</span>
          </div>
        </div>
        <div className="course-card__footer">
          <div className="course-card__price">
            {'$' + price}
          </div>
          <Icon icon="share-forward" variant="ghost-gray" type="line" size="sm" className="course-card__share" onClick={() => alert('Share')} />
        </div>
      </div>
    </div>
  );
}

export default CourseCard;