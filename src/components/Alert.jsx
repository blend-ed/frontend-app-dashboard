import { useState } from 'react';
import { Button, Container } from '@openedx/paragon';
import Alert from '../blendx-ui/src/Alert';
import PageBanner from '../blendx-ui/src/PageBanner';

const BLAlert = () => {
    const [alerts, setAlerts] = useState([
        {
            variant: 'primary',
            icon: 'checkbox-circle',
            dismissible: true,
            actions: [
                {
                    href: 'https://example.com',
                    label: 'Learn More',
                },
                {
                    href: 'https://example.com',
                    label: 'Buy',
                },
            ],
            stacked: true,
            description: 'This is an alert message. It can be used to provide feedback or information to the user.',
            show: false,
        },
        {
            variant: 'success',
            icon: 'checkbox-circle',
            dismissible: true,
            actions: [
                {
                    href: 'https://example.com',
                    label: 'Learn More',
                },
                {
                    href: 'https://example.com',
                    label: 'Buy',
                },
            ],
            stacked: true,
            description: 'This is an alert message. It can be used to provide feedback or information to the user.',
            show: false,
        },
        {
            variant: 'error',
            icon: 'error-warning',
            dismissible: true,
            actions: [
                {
                    href: 'https://example.com',
                    label: 'Learn More',
                },
                {
                    href: 'https://example.com',
                    label: 'Buy',
                },
            ],
            stacked: true,
            description: 'This is an alert message. It can be used to provide feedback or information to the user.',
            show: false,
        },
        {
            variant: 'outline-primary',
            icon: 'checkbox-circle',
            dismissible: true,
            actions: [
                {
                    href: 'https://example.com',
                    label: 'Learn More',
                },
                {
                    href: 'https://example.com',
                    label: 'Buy',
                },
            ],
            stacked: true,
            description: 'This is an alert message. It can be used to provide feedback or information to the user.',
            show: false,
        },
        {
            variant: 'outline-error',
            icon: 'error-warning',
            dismissible: true,
            actions: [
                {
                    href: 'https://example.com',
                    label: 'Learn More',
                },
                {
                    href: 'https://example.com',
                    label: 'Buy',
                },
            ],
            stacked: true,
            description: 'This is an alert message. It can be used to provide feedback or information to the user.',
            show: false,
        },
    ]);

    const [nonDismissibleNonStackedAlert, setNonDismissibleNonStackedAlert] = useState([
        {
            variant: 'primary',
            icon: 'checkbox-circle',
            dismissible: false,
            stacked: false,
            description: 'This is an alert message. It can be used to provide feedback or information to the user.',
            show: false,
        },
        {
            variant: 'success',
            icon: 'checkbox-circle',
            dismissible: false,
            stacked: false,
            description: 'This is an alert message. It can be used to provide feedback or information to the user.',
            show: false,
        },
        {
            variant: 'red',
            icon: 'error-warning',
            dismissible: false,
            stacked: false,
            description: 'This is an alert message. It can be used to provide feedback or information to the user.',
            show: false,
        },
        {
            variant: 'outline-success',
            icon: 'checkbox-circle',
            dismissible: false,
            stacked: false,
            description: 'This is an alert message. It can be used to provide feedback or information to the user.',
            show: false,
        },
        {
            variant: 'outline-error',
            icon: 'error-warning',
            dismissible: false,
            stacked: false,
            description: 'This is an alert message. It can be used to provide feedback or information to the user.',
            show: false,
        },
        {
            variant: 'purple',
            icon: 'checkbox-circle',
            dismissible: false,
            stacked: false,
            description: 'This is an alert message. It can be used to provide feedback or information to the user.',
            show: false,
        }
    ]);

    const toggleAlert = (index) => {
        const updatedAlerts = [...alerts];
        updatedAlerts[index].show = !updatedAlerts[index].show;
        setAlerts(updatedAlerts);
    };

    const toggleNonDismissibleNonStackedAlert = (index) => {
        const updatedAlerts = [...nonDismissibleNonStackedAlert];
        updatedAlerts[index].show = !updatedAlerts[index].show;
        setNonDismissibleNonStackedAlert(updatedAlerts);
    }

    return (
        <main>
            <Container className="py-3">
                <h1 className='mb-4'>Alert</h1>

                {alerts.map((alert, index) => (
                    <div key={index}>
                        <Button variant={alert.variant} onClick={() => toggleAlert(index)} className='mb-4'>
                            {alert.show ? 'Hide' : 'Show'} {alert.variant.includes('green') ? 'Success' : 'Error'} Alert
                        </Button>
                        {' '}
                        <Alert
                            show={alert.show}
                            variant={alert.variant}
                            icon={alert.icon}
                            dismissible={alert.dismissible}
                            onClose={() => toggleAlert(index)}
                            actions={alert.actions}
                            stacked={alert.stacked}
                            description={alert.description}
                        >
                            {alert.variant.includes('green') ? 'Success' : 'Error'}
                        </Alert>
                    </div>
                ))}

                {nonDismissibleNonStackedAlert.map((alert, index) => (
                    <div key={index}>
                        <Button size='sm' variant={alert.variant} onClick={() => toggleNonDismissibleNonStackedAlert(index)} className='mb-4'>
                            {alert.show ? 'Hide' : 'Show'} {alert.variant.includes('green') ? 'Success' : 'Error'} Alert
                        </Button>
                        {' '}
                        <Alert
                            show={alert.show}
                            variant={alert.variant}
                            icon={alert.icon}
                            dismissible={alert.dismissible}
                            onClose={() => toggleNonDismissibleNonStackedAlert(index)}
                            actions={alert.actions}
                            stacked={alert.stacked}
                            description={alert.description}
                        >
                            {alert.variant.includes('green') ? 'Success' : 'Error'}
                        </Alert>
                    </div>
                ))}
                <PageBanner title="This is a car." show dismissible variant='primary' icon='information' onDismiss={() => console.log('dismissed')} description='This is a page banner. It can be used to provide feedback or information to the user.' className="mb-4" />
                <PageBanner show dismissible variant='error' icon='information' onDismiss={() => console.log('dismissed')} description='This is a page banner. It can be used to provide feedback or information to the user.' className="mb-4" />
                <PageBanner show dismissible variant='success' icon='information' onDismiss={() => console.log('dismissed')} description='This is a page banner. It can be used to provide feedback or information to the user.' className="mb-4" />
                <PageBanner show dismissible variant='outline-primary' icon='information' onDismiss={() => console.log('dismissed')} description='This is a page banner. It can be used to provide feedback or information to the user.' className="mb-4" />
            </Container>
        </main>
    );
};

export default BLAlert;