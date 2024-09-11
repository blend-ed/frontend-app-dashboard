import { Container } from "@openedx/paragon";
import Button from '../blendx-ui/src/Button';
import { useState } from "react";
import { SectionHeader } from "../blendx-ui/src/PageHeader";
import Card from "../blendx-ui/src/Card";
import Image from "../blendx-ui/src/Image";

const Dashboard = () => {

    const [theme, setTheme] = useState('light');

    const handleButtonClick = () => {
        document.querySelector('html').setAttribute('data-theme', theme === 'light' ? 'dark' : 'light');
        console.log('Theme:', theme);
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <main>
            <Container className="py-3">
                <h1>Dashboard</h1>
                <p>Welcome to the dashboard!</p>
                <Card>
                    <SectionHeader>
                        <SectionHeader.Head imageComponent={<Image src="https://i.postimg.cc/7Z8vQ0Y9/Rectangle-2.png" alt="Avatar" />} title="John Doe" description="This is a description" />
                        <SectionHeader.Action>
                            <Button onClick={handleButtonClick}>Toggle Theme</Button>
                        </SectionHeader.Action>
                    </SectionHeader>
                </Card>
            </Container>
        </main>
    )
}

export default Dashboard;