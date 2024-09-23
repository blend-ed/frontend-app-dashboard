import { Badge, Button, Image, ProgressBar } from "@blend-ed/blendx-ui"

const RecentActivityCard = ({ image, title, type, progressPercentage }) => {
  return (
    <div className="recent-activity-card">
      <Image src={image} alt={title} className="recent-activity-card__image" />
      <div className="recent-activity-card__body">
        <div className="recent-activity-card__head">
          <Badge variant="yellow" size="sm" className="recent-activity-card__badge">{type}</Badge>
          <div className="recent-activity-card__title">{title}</div>
          <ProgressBar progress={progressPercentage} size="sm" />
        </div>
        <Button size="xs" variant="outline-gray" iconBefore="play">Resume</Button>
      </div>
    </div>
  );
}

export default RecentActivityCard;