import { Badge, Icon, Image } from '@blend-ed/blendx-ui';
import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ title, link, image, estimatedTime, price }) => {

  const navigate = useNavigate();
  return (
    <div className="course-card" onClick={() => navigate(link)}>
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
            {price === 0 ? 'Free' : `$${price}`}
          </div>
          <Icon icon="share-forward" variant="ghost-gray" type="line" size="sm" className="course-card__share" onClick={() => alert('Share')} />
        </div>
      </div>
    </div>
  );
}

CourseCard.propTypes = {
  title: propTypes.string.isRequired,
  link: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  estimatedTime: propTypes.string.isRequired,
  price: propTypes.number,
}

CourseCard.defaultProps = {
  price: 0,
}

export default CourseCard;