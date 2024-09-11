import { Container } from "@openedx/paragon"
import Button, { ButtonGroup, IconButton } from "../blendx-ui/src/Button"

const Buttons = () => {
    const buttonConfigs = [
        { variant: 'primary', label: 'Primary', iconBefore: 'add', iconAfter: 'add' },
        { variant: 'error', label: 'Error', iconBefore: 'add', iconAfter: 'add' },
        { variant: 'danger', label: 'Danger', iconBefore: 'add', iconAfter: 'add' },
        { variant: 'success', label: 'Success', iconBefore: 'add', iconAfter: 'add' },
        { variant: 'warning', label: 'Warning', iconBefore: 'add', iconAfter: 'add' },
        { variant: 'info', label: 'Info', iconBefore: 'add', iconAfter: 'add' },
        { variant: 'purple', label: 'Purple', iconBefore: 'add', iconAfter: 'add' },
        { variant: 'gray', label: 'Gray', iconBefore: 'add', iconAfter: 'ri-add-line' },
    ];
    return (
        <main>
            <Container className="py-3">
                <div className="mb-4">
                    <h1>Buttons</h1>
                    <p>Buttons are used to trigger actions or events. They are used to perform a variety of functions, such as submitting a form, opening a dialog, or navigating to another page.</p>
                </div>
                {buttonConfigs.map((button, index) => (
                    <div className="mb-4" key={index}>
                        <Button variant={button.variant} onClick={
                            () => alert(`You clicked the ${button.label} button`)
                        }>{button.label}</Button>
                        <Button
                            variant={button.variant}
                            iconBefore={button.iconBefore}
                            iconAfter={button.iconAfter}
                            className="ml-2"
                            onClick={() => alert(`You clicked the ${button.label} button with icon`)}
                        >
                            {button.label} with icon
                        </Button>
                        <IconButton variant={button.variant} icon={button.iconBefore} className="ml-2" onClick={() => alert(`You clicked the ${button.label} icon button`)} />
                        <Button variant={"outline-" + button.variant} className="ml-2" onClick={() => alert(`You clicked the ${button.label} outline button`)}>{button.label}</Button>
                        {/* disabled button */}
                        <Button variant={button.variant} className="ml-2" disabled onClick={() => alert(`You clicked the disabled ${button.label} button`)}>{button.label}</Button>
                        {/* disabled outline button */}
                        <Button variant={"outline-" + button.variant} className="ml-2" disabled onClick={() => alert(`You clicked the disabled ${button.label} outline button`)}>{button.label}</Button>
                        <IconButton variant={button.variant} icon={button.iconBefore} className="ml-2" disabled onClick={() => alert(`You clicked the disabled ${button.label} icon button`)} />
                        {/* small button*/}
                        <Button variant={button.variant} size="sm" className="ml-2" onClick={() => alert(`You clicked the small ${button.label} button`)}>{button.label}</Button>
                        {/* small outline button*/}
                        <Button variant={"outline-" + button.variant} size="sm" className="ml-2" onClick={() => alert(`You clicked the small ${button.label} outline button`)}>{button.label}</Button>
                        <IconButton variant={button.variant} icon={button.iconBefore} size="sm" className="ml-2" onClick={() => alert(`You clicked the small ${button.label} icon button`)} />
                        {/* large button */}
                        <Button variant={button.variant} size="lg" className="ml-2" onClick={() => alert(`You clicked the large ${button.label} button`)}>{button.label}</Button>
                        {/* large outline button */}
                        <Button variant={"outline-" + button.variant} size="lg" className="ml-2" onClick={() => alert(`You clicked the large ${button.label} outline button`)}>{button.label}</Button>
                        <IconButton variant={button.variant} icon={button.iconBefore} size="lg" className="ml-2" onClick={() => alert(`You clicked the large ${button.label} icon button`)} />
                    </div>
                ))}
                <div className="mb-4">
                    <ButtonGroup>
                        <Button variant="primary" onClick={() => alert('You clicked the primary button')}>Primary</Button>
                        <Button variant="error" onClick={() => alert('You clicked the error button')}>Error</Button>
                        <Button variant="danger" onClick={() => alert('You clicked the danger button')}>Danger</Button>
                        <Button variant="success" onClick={() => alert('You clicked the success button')}>Success</Button>
                        <Button variant="warning" onClick={() => alert('You clicked the warning button')}>Warning</Button>
                    </ButtonGroup>
                </div>

                <div className="mb-4">
                    <ButtonGroup>
                        <Button variant="outline-primary" onClick={() => alert('You clicked the primary button')}>Primary</Button>
                        <Button variant="outline-error" onClick={() => alert('You clicked the error button')}>Error</Button>
                        <Button variant="outline-danger" onClick={() => alert('You clicked the danger button')}>Danger</Button>
                        <Button variant="outline-success" onClick={() => alert('You clicked the success button')}>Success</Button>
                        <Button variant="outline-warning" onClick={() => alert('You clicked the warning button')}>Warning</Button>
                    </ButtonGroup>
                </div>

                {/* Social Media Buttons */}
                <div className="mb-4">
                    <h2>Social Media Buttons</h2>
                    <Button variant="blue" iconBefore="facebook-white" onClick={() => alert('You clicked the Facebook button')}>Facebook</Button>
                    <Button variant="black" iconBefore="x-white" className="ml-2" onClick={() => alert('You clicked the Twitter button')}>Twitter</Button>
                    <Button variant="red" iconBefore="google-white" className="ml-2" onClick={() => alert('You clicked the Google button')}>Google</Button>
                    <Button variant="blue" iconBefore="linkedin-white" className="ml-2" onClick={() => alert('You clicked the LinkedIn button')}>LinkedIn</Button>
                    <Button variant="purple" iconBefore="instagram-white" className="ml-2" onClick={() => alert('You clicked the Instagram button')}>Instagram</Button>
                </div>

                {/* Social Media Outline Buttons */}
                <div className="mb-4">
                    <h2>Social Media Outline Buttons</h2>
                    <Button variant="outline-gray" iconBefore="facebook-original" onClick={() => alert('You clicked the Facebook button')}>Facebook</Button>
                    <Button variant="outline-gray" iconBefore="x-original" className="ml-2" onClick={() => alert('You clicked the Twitter button')}>Twitter</Button>
                    <Button variant="outline-gray" iconBefore="google-original" className="ml-2" onClick={() => alert('You clicked the Google button')}>Google</Button>
                    <Button variant="outline-gray" iconBefore="linkedin-original" className="ml-2" onClick={() => alert('You clicked the LinkedIn button')}>LinkedIn</Button>
                    <Button variant="outline-gray" iconBefore="instagram-original" className="ml-2" onClick={() => alert('You clicked the Instagram button')}>Instagram</Button>
                </div>

                {/* Link Buttons */}
                <div className="mb-4">
                    <h2>Link Buttons</h2>
                    <Button variant="link" onClick={() => alert('You clicked the link button')}>Link Button</Button>
                    <Button variant="link" iconBefore="ri-add-line" className="ml-2" onClick={() => alert('You clicked the link button with icon')}>Link Button with icon</Button>
                    <IconButton variant="link" icon="ri-add-line" className="ml-2" onClick={() => alert('You clicked the link icon button')} />
                    <Button variant="link" className="ml-2" disabled onClick={() => alert('You clicked the disabled link button')}>Disabled Link Button</Button>
                    <Button variant="link" size="sm" className="ml-2" onClick={() => alert('You clicked the small link button')}>Small Link Button</Button>
                    <Button variant="link" size="lg" className="ml-2" onClick={() => alert('You clicked the large link button')}>Large Link Button</Button>
                </div>

                {/* Link Error Buttons */}
                <div className="mb-4">
                    <h2>Link Error Buttons</h2>
                    <Button variant="link-error" onClick={() => alert('You clicked the link button')}>Link Button</Button>
                    <Button variant="link-error" iconBefore="ri-add-line" className="ml-2" onClick={() => alert('You clicked the link button with icon')}>Link Button with icon</Button>
                    <IconButton variant="link-error" icon="ri-add-line" className="ml-2" onClick={() => alert('You clicked the link icon button')} />
                    <Button variant="link-error" className="ml-2" disabled onClick={() => alert('You clicked the disabled link button')}>Disabled Link Button</Button>
                    <Button variant="link-error" size="sm" className="ml-2" onClick={() => alert('You clicked the small link button')}>Small Link Button</Button>
                    <Button variant="link-error" size="lg" className="ml-2" onClick={() => alert('You clicked the large link button')}>Large Link Button</Button>
                </div>

                {/* Compact Buttons */}
                <div>
                    <IconButton variant="primary" size="xs" onClick={() => alert('You clicked the extra small button')} icon="ri-add-line" rounded />
                </div>
            </Container>
        </main>
    )
}

export default Buttons;