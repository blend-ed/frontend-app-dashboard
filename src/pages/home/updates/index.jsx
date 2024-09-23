import RecentActivity from "./RecentActivity";
import UpcomingEvents from "./UpcomingEvents";

const Updates = () => {
  return (
    <div className="updates-container">
      <div className="updates__header">
        <div className="updates__title">Updates</div>
      </div>
      <div className="updates">
        <RecentActivity />
        <UpcomingEvents />
      </div>
    </div>
  );
}

export default Updates;