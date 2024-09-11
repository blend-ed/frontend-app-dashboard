import { Card, Container } from "@openedx/paragon"
import ActivityFeed from "../blendx-ui/src/ActivityFeed"
const Activity = () => {

    const activityData = [
        {
            avatar: 'https://via.placeholder.com/40',
            title: 'John Doe',
            subtitle: '2 hours ago',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            children: (
                <Card className="p-3">
                    <p className="mb-0">
                        Card content goes here. You can add any HTML elements, including text, images, and links. You can also add other components, such as buttons, forms, and tables.
                    </p>
                </Card>
            ),
        },
        {
            avatar: 'https://via.placeholder.com/40',
            title: 'Jane Doe',
            subtitle: '2 hours ago',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            avatar: 'https://via.placeholder.com/40',
            title: 'John Smith',
            subtitle: '2 hours ago',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            avatar: 'https://via.placeholder.com/40',
            title: 'Jane Smith',
            subtitle: '2 hours ago',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
    ]

    return (
        <main>
            <Container className="py-3">
                <h1 className='mb-4'>
                    Activity
                </h1>
                <p>
                    Activity content goes here. You can add any HTML elements, including text, images, and links. You can also add other components, such as buttons, forms, and tables.
                </p>

                <ActivityFeed>
                    <ActivityFeed.Header>
                        <ActivityFeed.Title>
                            Activity Feed
                        </ActivityFeed.Title>
                        <ActivityFeed.ActionButton onClick={() => console.log('Action button clicked')}>
                            Action
                        </ActivityFeed.ActionButton>
                    </ActivityFeed.Header>
                    <ActivityFeed.TabMenu variant="tabs">
                        <ActivityFeed.Tab title="All" eventKey="all">
                            <ActivityFeed.List variant="notifications">
                                {activityData.map((activity, index) => (
                                    <ActivityFeed.Item key={index} index={index} avatar={activity.avatar} title={activity.title} subtitle={activity.subtitle} description={activity.description} onClick={() => console.log('Activity item clicked ' + index)} link="/activity">
                                        {activity.children}
                                    </ActivityFeed.Item>
                                ))}
                            </ActivityFeed.List>
                        </ActivityFeed.Tab>
                        <ActivityFeed.Tab title="Course" eventKey="course" notification={5}>
                            Course
                        </ActivityFeed.Tab>
                        <ActivityFeed.Tab title="Discussion" eventKey="discussion">
                            Discussion
                        </ActivityFeed.Tab>
                        <ActivityFeed.Divider />
                        <ActivityFeed.Tab title="Assignment" eventKey="assignment">
                            Assignment
                        </ActivityFeed.Tab>
                    </ActivityFeed.TabMenu>
                    <ActivityFeed.Footer linkText="Manage Notifications" linkHref="/activity" />
                </ActivityFeed>
            </Container>
        </main>
    )
}

export default Activity