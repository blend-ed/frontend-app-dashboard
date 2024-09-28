import { Link } from "react-router-dom";
import RecentActivityCard from "../../../components/RecentActivityCard";

const RecentActivityData = {
  title: "Maths Quiz",
  type: "course",
  progressPercentage: 50,
  image: "https://via.placeholder.com/150",
  link: "#",
};

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
      <RecentActivityCard
        title={RecentActivityData.title}
        type={RecentActivityData.type}
        progressPercentage={RecentActivityData.progressPercentage}
        image={RecentActivityData.image}
        link={RecentActivityData.link}
      />
    </div>
  );
}

export default RecentActivity;