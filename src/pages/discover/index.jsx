import React from 'react'
import CarouselContainers from './carousel-container'
import { Badge, Button, Search } from '@blend-ed/blendx-ui'
import RecommendationsRow from '../../components/RecommendationsRow'
import courseDummyData from '../../dummyData/courseDummyData.json'
import programDummyData from '../../dummyData/programDummyData.json'

import BlendxCard from '../../components/BlendxCard'



function Discover() {

    const tags = ["Top Course", "New Course", "Trending Course", "Popular Course", "Recommended Course", "Physics", "Chemistry", "Biology", "Mathematics", "Computer Science", "Engineering"]

    return (
        <main>
            {/* Carousel section */}
            <CarouselContainers />
            {/* Search section */}
            <div className="search-section">
                <span className='search-section__heading'>Search for new courses</span>
                <Search placeholder="Search..." className="search-section__search-bar" />
                <div className="search-tags">
                    {tags.map((tag, index) => (
                        <Button variant="outline-gray" key={index} size="xs">{tag}</Button>
                    ))}
                </div>
            </div>

            {/* recomended courses */}
            <RecommendationsRow title="Recomended Courses" seeAllLink={"/course"} >
                {courseDummyData.slice(0, 4).map((course, index) => (
                    <BlendxCard key={index} title={course.title} image={course.image} estimatedTime={course.estimatedTime} price={course.price} type="price" variant="Course" />
                ))}
            </RecommendationsRow>

            {/* recomended program */}
            <RecommendationsRow title="Recomended Courses" seeAllLink={"/program"} >
                {courseDummyData.slice(0, 4).map((course, index) => (
                    <BlendxCard key={index} title={course.title} image={course.image} estimatedTime={course.estimatedTime} price={course.price} type="price" variant="Program" totalCourses={`${course.courseCount} Courses`} />
                ))}
            </RecommendationsRow>

        </main>
    )
}

export default Discover