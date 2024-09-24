import ProgressCard from "./ProgressCard";
import RecommendedCourses from "./recommended-courses";
import RecommendedPrograms from "./recommended-programs";
import Updates from "./updates";

const Home = () => {
    return (
        <main>
            <ProgressCard />
            <Updates />
            <RecommendedCourses />
            <RecommendedPrograms />
        </main>
    )
}

export default Home;