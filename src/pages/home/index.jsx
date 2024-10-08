import ProgressCard from "../../components/ProgressCard";
import RecommendedPrograms from "./recommended-programs";
import { Button } from "@blend-ed/blendx-ui";
import Updates from "./updates";
import BlendxCard from "../../components/BlendxCard";

import RecommendationsRow from "../../components/RecommendationsRow";

import courseDummyData from '../../dummyData/courseDummyData.json'
import programDummyData from '../../dummyData/programDummyData.json'

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
            <RecommendationsRow title="Recomended Courses" seeAllLink={"/course"} >
                {courseDummyData.slice(0, 4).map((course, index) => (
                    <BlendxCard key={index} title={course.title} image={course.image} estimatedTime={course.estimatedTime} price={course.price} type="price" variant="Course" />
                ))}
            </RecommendationsRow>
            <RecommendedPrograms />
        </main>
    )
}

export default Home;