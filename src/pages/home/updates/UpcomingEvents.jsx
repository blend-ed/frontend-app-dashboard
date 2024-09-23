import { Button } from "@blend-ed/blendx-ui";
import EventCard from "../../../components/EventCard";

const UpcomingEvents = () => {
  return (
    <div className="upcoming-events-container">
      <div className="upcoming-events__header">
        <div className="upcoming-events__title">Upcoming Events</div>
        <Button size="xs" variant="ghost-gray">See All</Button>
      </ div>
      <EventCard date="2021-09-30T09:00:00" variant="primary" title="Maths Quiz" link="/events/maths-quiz" />
    </div>
  );
}

export default UpcomingEvents;