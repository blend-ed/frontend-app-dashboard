import { Link } from "react-router-dom";
import RecentActivityCard from "../../../components/RecentActivityCard";

const RecentActivity = () => {
  return (
    <div className="recent-activity-container">
      <div className="recent-activity__header">
        <div className="recent-activity__title">Recent Activity</div>
        <Link
          to="#"
          className="recent-activity__link"
        >
          See my feed
        </Link>
      </div>
      <RecentActivityCard image={"https://via.placeholder.com/150"} title="Maths Quiz" type="course" progressPercentage={50} />
    </div>
  );
}

export default RecentActivity;