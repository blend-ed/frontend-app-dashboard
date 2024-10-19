import { Badge, Icon, Image, ProgressBar } from '@blend-ed/blendx-ui';
import classNames from 'classnames';
import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const BlendxCard = ({ title, link, image, estimatedTime, totalCourses, price, type, progress, className, variant }) => {

  const navigate = useNavigate();
  return (
    <div className={classNames("course-card", className)} onClick={() => navigate(link)}>
      <Image src={image} alt={title} className="course-card__image" />
      <div className="course-card__body">
        <Badge variant={variant === "Course" ? "light-yellow" : "light-success"} className="course-card__badge">
          {variant}
        </Badge>
        <div className="course-card__head">
          <div className="course-card__title">
            {title}
          </div>
          <div className="course-card__info-panel-items">
            <div className="course-card__est-time">
              <Icon icon="time" type="line" size="xxs" className="course-card__est-time-icon" />
              <span>{estimatedTime}</span>
            </div>
            {totalCourses && <div className="course-card__est-time">
              <Icon icon="book" type="line" size="xxs" className="course-card__est-time-icon" />
              <span>{totalCourses}</span>
            </div>}
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

BlendxCard.propTypes = {
  title: propTypes.string.isRequired,
  link: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  estimatedTime: propTypes.string.isRequired,
  price: propTypes.number,
  type: propTypes.oneOf(['price', 'progress']).isRequired,
  progress: propTypes.number,
  className: propTypes.string,
  variant: propTypes.oneOf(['Program', 'Course']).isRequired,
  totalCourses: propTypes.number
}

BlendxCard.defaultProps = {
  price: 0,
  discover: false,
  type: 'price',
  progress: 0,
  className: '',
  badgeText: '',
  totalCourses: null

}

export default BlendxCard;