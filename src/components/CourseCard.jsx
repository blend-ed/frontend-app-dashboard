import { Badge, Icon, Image, ProgressBar } from '@blend-ed/blendx-ui';
import classNames from 'classnames';
import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ title, link, image, estimatedTime, price, type, progress, className, badgeText }) => {

  const navigate = useNavigate();
  return (
    <div className={classNames("course-card", className)} onClick={() => navigate(link)}>
      <Image src={image} alt={title} className="course-card__image" />
      <div className="course-card__body">
        <Badge variant={badgeText === "Course" ? "light-yellow" : "light-primary"} className="course-card__badge">
          {badgeText}
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
          {type === 'progress' && <ProgressBar className="course-card__footer-progressbar" progress={progress} type="inline" />}
          {
            type === 'price' &&
            <>
              <div className="course-card__price">
                {price === 0 ? 'Free' : `$${price}`}
              </div>
              <Icon icon="share-forward" variant="ghost-gray" type="line" size="sm" className="course-card__share" onClick={() => alert('Share')} />
            </>
          }
        </div>
      </div >
    </div >
  );
}

CourseCard.propTypes = {
  title: propTypes.string.isRequired,
  link: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  estimatedTime: propTypes.string.isRequired,
  price: propTypes.number,
  type: propTypes.oneOf(['price', 'progress']),
  progress: propTypes.number,
  className: propTypes.string,
  badgeText: propTypes.string
}

CourseCard.defaultProps = {
  price: 0,
  discover: false,
  type: 'price',
  progress: 0,
  className: '',
  badgeText: ''
}

export default CourseCard;