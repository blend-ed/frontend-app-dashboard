import { useEffect, useState } from 'react'
import { TabMenu, Search, InlineDropdown } from '@blend-ed/blendx-ui'

import CourseTab from '../../components/CourseTab'
import ProgressTab from '../../components/ProgramTab'

import courseDummyData from '../../dummyData/courseDummyData.json'
import programDummyData from '../../dummyData/programDummyData.json'

function Course() {
    const [activeTab, setActiveTab] = useState('Courses')
    const [searchValue, setSearchValue] = useState('')
    const [filterValue, setFilterValue] = useState('')
    const [renderCourses, setRenderCourses] = useState(courseDummyData)
    const [renderPrograms, setRenderPrograms] = useState(programDummyData)

    // search filter function
    useEffect(() => {
        // course search filter
        const filteredCourses = courseDummyData.filter((course) => {
            return course.title.toLowerCase().includes(searchValue.toLowerCase())
        })
        setRenderCourses(filteredCourses)

        // program search filter
        const filteredPrograms = programDummyData.filter((program) => {
            return program.title.toLowerCase().includes(searchValue.toLowerCase())
        })
        setRenderPrograms(filteredPrograms)
    }, [searchValue])

    // filter filter function
    useEffect(() => {
        // filter courses and programs by A-Z
        if (filterValue === 'atoz') {
            setRenderCourses([...renderCourses].sort((a, b) => a.title.localeCompare(b.title)))
            setRenderPrograms([...renderPrograms].sort((a, b) => a.title.localeCompare(b.title)))
        }
        //filter courses and programs by Z-A
        if (filterValue === 'ztoa') {
            setRenderCourses([...renderCourses].sort((a, b) => b.title.localeCompare(a.title)))
            setRenderPrograms([...renderPrograms].sort((a, b) => b.title.localeCompare(a.title)))
        }
    }, [filterValue])
    return (
        <main>
            <div className='course-header'>
                <TabMenu>
                    <TabMenu.Item label="Courses" active={activeTab === "Courses"} onClick={() => { setActiveTab("Courses") }} />
                    <TabMenu.Item label="Programs" active={activeTab === "Programs"} onClick={() => { setActiveTab("Programs") }} />
                </TabMenu>
            </div>

            <div className='course-body'>
                <div className="course-body-header">
                    <Search onChange={(e) => { setSearchValue(e) }} />
                    <InlineDropdown border onSelect={(e) => { setFilterValue(e.value) }}>
                        <InlineDropdown.Item icon="edit" iconType="fill" label="Relevent" value="relevent" />
                        <InlineDropdown.Item icon="sort-alphabet-asc" iconType="" label="A to Z" value="atoz" />
                        <InlineDropdown.Item icon="sort-alphabet-desc" iconType="" label="Z to A" value="ztoa" />
                        <InlineDropdown.Item icon="arrow-up-circle" iconType="fill" label="Upcoming" value="upcoming" />
                    </InlineDropdown>
                </div>
                <div className="course-body-content">
                    {activeTab === "Courses" && <CourseTab renderCourses={renderCourses} cardType="progress" />}
                    {activeTab === "Programs" && <ProgressTab renderPrograms={renderPrograms} />}
                </div>
            </div>
        </main>
    )
}

export default Course