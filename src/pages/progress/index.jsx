import { useState } from 'react'
import ProgressCard from '../../components/ProgressCard'
import MiniTable from '../../components/MiniTable'
import { dummyData, dummyColumns } from './course-summary-table/courseSummanyTable'

import CourseEngagementChart from './course-engagement-chart/india'

function Progress() {
    const [corseSortBy, setCourseSortBy] = useState('course')

    return (
        <main>
            <ProgressCard />

            {/* mini table for course summary */}
            <MiniTable
                title="Course Summary"
                data={dummyData}
                columns={dummyColumns}
                sortBy={corseSortBy}
                setSortBy={setCourseSortBy}
                hasFixedColumnWidths
            />

            {/* course engagement chart */}
            <CourseEngagementChart />
        </main>
    )
}

export default Progress