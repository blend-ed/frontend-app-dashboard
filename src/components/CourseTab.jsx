import React from 'react'
import BlendxCard from './BlendxCard'

function CourseTab({ renderCourses, cardType }) {

    return (
        <div className="course-cards-container">
            {renderCourses.map((course, index) => (
                <BlendxCard key={index} title={course.title} image={course.image} estimatedTime={course.estimatedTime} price={course.price} type="price" variant="Course" />
            ))}
        </div>
    )
}

export default CourseTab