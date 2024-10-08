import React from 'react'
import CourseCard from '../components/CourseCard'

function CourseTab({ renderCourses, cardType }) {

    return (
        <div className="course-cards-container">
            {renderCourses.map((course, index) => (
                <CourseCard key={course.id} title={course.title} description={course.description} image={course.image} estimatedTime={course.estimatedTime} price={course.price} type={cardType} progress={course.progress} badgeText="Course"
                />
            ))}
        </div>
    )
}

export default CourseTab