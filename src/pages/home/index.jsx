import ProgressCard from "./ProgressCard";
import RecommendedCourses from "./recommended-courses";
import Updates from "./updates";

const Home = () => {
    return (
        <main>
            <ProgressCard />
            <Updates />
            <RecommendedCourses />
        </main>
    )
}

export default Home;