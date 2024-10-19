import React from 'react';
import { Button, ProgressBar } from '@blend-ed/blendx-ui';

const dummyData = [
    {
        course: 'Introduction to Python',
        completion_progress: 92,
        attendence: 5,
    },
    {
        course: 'Data Analysis with Excel',
        completion_progress: 100,
        attendence: 3,
    },
    {
        course: 'Web Development Fundamentals',
        completion_progress: 42,
        attendence: 5,
    },
    {
        course: 'Marketing Strategy',
        completion_progress: 31,
        attendence: 3,
    },
    {
        course: 'Cybersecurity Essentials',
        completion_progress: 62,
        attendence: 5,
    },
    {
        course: 'Financial Management',
        completion_progress: 12,
        attendence: 3,
    },
    {
        course: 'Cloud Computing',
        completion_progress: 27,
        attendence: 5,
    },
    {
        course: 'Artificial Intelligence',
        completion_progress: 81,
        attendence: 3,
    }
]

const dummyColumns = [
    {
        label: 'Course',
        key: 'course',
        sortable: true,
        width: "col-2"
    },
    {
        label: 'Completion Progress',
        key: 'completion_progress',
        sortable: true,
        width: "col-6",
        render: ({ value }) => {
            return (
                <div className='course-summary-progress-table'>
                    <ProgressBar progress={value} />
                </div>
            )
        },
    },
    {
        label: 'Attendance',
        key: 'attendence',
        width: "col-2",
        sortable: true,
    },
    {
        label: 'Actions',
        key: 'actions',
        width: "col-2",
        render: (row) => (
            <Button href={`/instructors/${row.programs}`} size="sm" variant="link-gray" className="mini-table__action">
                View Analytics
            </Button>
        )
    }
]

export { dummyData, dummyColumns };