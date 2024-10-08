import React from 'react'
import { withParams } from '../../utils/hoc'
import CourseExploreCard from '../../components/CourseExploreCard'
import { Accordion } from "@blend-ed/blendx-ui"
import CourseCard from '../../components/CourseCard'
import courseDummyData from '../../dummyData/courseDummyData.json'


function CourseSingle(props) {
    const { params } = props
    return (
        <main className='course-single__wrapper'>
            <div className="course-single__left">
                <div className="course-single__description">
                    <p className='course-single__description-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim totam mollitia obcaecati earum architecto ipsam molestiae sed autem iure atque quis, vero veniam nisi nulla officia repellendus. Suscipit, pariatur tenetur!</p>
                </div>
                <div className="course-single__overview">
                    <h3 className='course-single__description-title'>Course Overview</h3>
                    <p className='course-single__description-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim totam mollitia obcaecati earum architecto ipsam molestiae sed autem iure atque quis, vero veniam nisi nulla officia repellendus. Suscipit, pariatur tenetur!</p>
                </div>



                <div className="course-single__content">
                    <h3 className='course-single__description-title'>Course Contents</h3>
                    <Accordion className="course-single__accordion" icon="info" title="Click me" activeKey="1" dropDownArrow="left">
                        <div>This is the content</div>
                        <div>This is the content</div>
                        <div>This is the content</div>
                    </Accordion>
                    <Accordion className="course-single__accordion" icon="info" title="Click me" activeKey="1" dropDownArrow="left">
                        <div>This is the content</div>
                        <div>This is the content</div>
                        <div>This is the content</div>
                    </Accordion>
                    <Accordion className="course-single__accordion" icon="info" title="Click me" activeKey="1" dropDownArrow="left">
                        <div>This is the content</div>
                        <div>This is the content</div>
                        <div>This is the content</div>
                    </Accordion>
                </div>

                <div className="course-single__popular-course">
                    <h3 className='course-single__description-title'>Top Courses In blend-ed</h3>
                    <div>
                        {courseDummyData.slice(0, 3).map((course, index) => (
                            <CourseCard className="course-single__course-card" key={index} title={course.title} link={course.link} image={course.image} estimatedTime={course.estimatedTime} price={course.price} type="price" badgeText="Course" />
                        ))}
                    </div>

                </div>

            </div>
            <div className="course-single__right"><CourseExploreCard preview="https://picsum.photos/seed/cxvzv/500/500" price="400" estimatedTime="6 months" author="John Doe" cardType="course" /></div>

        </main>
    )
}

export default withParams(CourseSingle)