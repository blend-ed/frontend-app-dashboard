import { Icon } from "@blend-ed/blendx-ui";
import { Link } from "react-router-dom";

const EventCard = (props) => {
  const { date, title, variant, link } = props;
  return (
    <div className={`event-card event-${variant}`} {...props}>
      <div className="event-card-header">
        <div className="event-card-date">
          <Icon icon='calendar' type='line' className="event-card-icon" size='sm' />
          {new Date(date).toLocaleDateString()}
        </div>
        <div className="event-card-time">
          <Icon icon='time' type='line' className="event-card-icon" size='sm' />
          {new Date(date).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}
        </div>
      </div>
      <div className="event-card-body">
        <div className="event-card-title">{title}</div>
        {link && <Link className="event-card-link" to={link}>
          <Icon icon='link' className="event-card-icon" size='sm' />
          join meeting
        </Link>}
      </div>
    </div>
  )
}

export default EventCard;