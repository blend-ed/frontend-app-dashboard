import ProgressCard from "../../components/ProgressCard";
import RecommendedCourses from "./recommended-courses";
import RecommendedPrograms from "./recommended-programs";
import { Button } from "@blend-ed/blendx-ui";
import Updates from "./updates";

const Home = () => {
    return (
        <main>
            <div className="progress-card-container">
                <div className="progress-card__header">
                    <div className="progress-card__title">Progress</div>
                    <Button size="xs" variant="ghost-gray">See Progress</Button>
                </div>
                <ProgressCard />
            </div>
            <Updates />
            <RecommendedCourses />
            <RecommendedPrograms />
        </main>
    )
}

export default Home;