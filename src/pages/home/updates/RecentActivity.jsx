import { Button } from "@blend-ed/blendx-ui";
import RecentActivityCard from "../../../components/RecentActivityCard";

const RecentActivity = () => {
  return (
    <div className="recent-activity-container">
      <div className="recent-activity__header">
        <div className="recent-activity__title">Recent Activity</div>
        <Button size="xs" variant="ghost-gray">See my feed</Button>
      </div>
      <RecentActivityCard image={"https://via.placeholder.com/150"} title="Maths Quiz" type="course" progressPercentage={50} />
    </div>
  );
}

export default RecentActivity;