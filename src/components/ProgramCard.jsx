import React from 'react';
import { Image, Button } from '@blend-ed/blendx-ui';
import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@blend-ed/blendx-ui';
import classNames from 'classnames';

const ProgramCard = ({ title, description, estimatedTime, link, image, price, courseCount, discover, size }) => {
  const navigate = useNavigate();
  return (
    <div className={classNames("program-card", `program-card-${size}`)}>
      <Image src={image} alt={title} className="program-card__image" />
      <div className="program-card__content">
        <div className="program-card__body">
          <div className="program-card__head">
            <div className="program-card__title">
              {title}
            </div>
            {!discover && <div className="program-card__price">
              {price === 0 ? 'Free' : `$${price}`}
            </div>}
          </div>
          <div className="program-card__description">
            {description}
          </div>
          <div className="program-card__badges">
            <Badge className="program-card__badge" iconBefore="time" iconType="line" size="xxs" variant="disabled">
              {estimatedTime}
            </Badge>
            <Badge className="program-card__badge" iconBefore="book-2" iconType="line" size="xxs" variant="disabled">
              {courseCount} courses
            </Badge>
          </div>
        </div>
        <div className="program-card__footer">
          <Button onClick={() => navigate(link)} variant="primary" size="xs">
            View Program Details
          </Button>
        </div>
      </div>
    </div>
  );
}

ProgramCard.propTypes = {
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  estimatedTime: propTypes.string.isRequired,
  link: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  price: propTypes.number,
  courseCount: propTypes.number,
  discover: propTypes.bool,
}

ProgramCard.defaultProps = {
  price: 0,
  courseCount: 0,
  discover: false,
}


export default ProgramCard;