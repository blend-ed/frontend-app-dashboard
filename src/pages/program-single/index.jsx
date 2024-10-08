import React from 'react'
import { withParams } from '../../utils/hoc'
import CourseExploreCard from '../../components/CourseExploreCard'
import BlendxCard from '../../components/BlendxCard'
import { Accordion } from "@blend-ed/blendx-ui"
import ProgramCard from '../../components/ProgramCard'
import programDummyData from '../../dummyData/programDummyData.json'
import courseDummyData from '../../dummyData/courseDummyData.json'


function ProgramSingle(props) {
    const { params } = props

    return (
        <main className='program-single__wrapper'>
            <div className="program-single__left">
                <div className="program-single__description">
                    <p className='program-single__description-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim totam mollitia obcaecati earum architecto ipsam molestiae sed autem iure atque quis, vero veniam nisi nulla officia repellendus. Suscipit, pariatur tenetur!</p>
                </div>
                <div className="program-single__overview">
                    <h3 className='program-single__description-title'>Program Overview</h3>
                    <p className='program-single__description-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim totam mollitia obcaecati earum architecto ipsam molestiae sed autem iure atque quis, vero veniam nisi nulla officia repellendus. Suscipit, pariatur tenetur!</p>
                </div>



                <div className="program-single__content">
                    <h3 className='program-single__description-title'>Program Contents</h3>
                    <Accordion className="program-single__accordion" icon="info" title="Click me" activeKey="1" dropDownArrow="left">
                        <Accordion className="" icon="info" title="Click me" activeKey="1" dropDownArrow="left">
                            <div>This is the content</div>
                            <div>This is the content</div>
                            <div>This is the content</div>
                        </Accordion>
                        <Accordion className="" icon="info" title="Click me" activeKey="1" dropDownArrow="left">
                            <div>This is the content</div>
                            <div>This is the content</div>
                            <div>This is the content</div>
                        </Accordion>
                    </Accordion>

                    <Accordion className="program-single__accordion" icon="info" title="Click me" activeKey="1" dropDownArrow="left">
                        <Accordion className="" icon="info" title="Click me" activeKey="1" dropDownArrow="left">
                            <div>This is the content</div>
                            <div>This is the content</div>
                            <div>This is the content</div>
                        </Accordion>
                    </Accordion>

                </div>

                <div className="program-single__popular-program">
                    <h3 className='program-single__description-title'>Top Programs In blend-ed</h3>
                    <div>
                        {courseDummyData.slice(0, 3).map((course, index) => (
                            <BlendxCard key={index} title={course.title} image={course.image} estimatedTime={course.estimatedTime} totalCourses={`${course.courseCount} Courses`} price={course.price} type="price" variant="Program" />
                        ))}
                    </div>

                </div>

            </div>
            <div className="program-single__right"><CourseExploreCard preview="https://picsum.photos/seed/cxvzv/500/500" price="400" estimatedTime="6 months" author="John Doe" cardType="program" courseCount="5 Courses" /></div>

        </main>
    )
}

export default withParams(ProgramSingle)