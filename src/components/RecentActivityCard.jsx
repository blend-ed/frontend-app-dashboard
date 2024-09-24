import { Badge, Image, ProgressBar, Button } from "@blend-ed/blendx-ui"
import { useNavigate } from "react-router-dom"

const RecentActivityCard = ({ image, title, type, progressPercentage, link }) => {
  const navigate = useNavigate();

  return (
    <div className="recent-activity-card">
      <Image src={image} alt={title} className="recent-activity-card__image" />
      <div className="recent-activity-card__body">
        <div className="recent-activity-card__head">
          <Badge variant="yellow" size="sm" className="recent-activity-card__badge">{type}</Badge>
          <div className="recent-activity-card__title">{title}</div>
          <ProgressBar progress={progressPercentage} size="sm" type="inline" />
        </div>
        <Button
          size="xs"
          variant="outline-gray"
          iconBefore="play"
          iconType="fill"
          border
          className="recent-activity-card__button"
          onClick={() => navigate(link)}
        >
          Resume
        </Button>
      </div>
    </div>
  );
}

export default RecentActivityCard;