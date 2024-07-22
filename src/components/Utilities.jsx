import { Button, Card, Container } from "@openedx/paragon";

const Utilities = () => {
    const cardProps = [
        { className: "shadow-xs mb-4", title: "Shadow XS", content: "Card content" },
        { className: "shadow mb-4", title: "Shadow", content: "Card content" },
        { className: "focus mb-4", title: "Focus", content: "Card content" },
        { className: "focus-important mb-4", title: "Focus Important", content: "Card content" },
        { className: "focus-error mb-4", title: "Focus Error", content: "Card content" },
    ];

    const btnProps = [
        { className: "btn-outline-neutral", title: "Neutral Button" },
        { className: "btn-outline-primary", title: "Primary Button" },
        { className: "btn-outline-error", title: "Error Button" },
        { className: "btn-outline-stroke", title: "Stroke Button" },
    ];

    const radiusProps = [
        { className: "radius-0", title: "Radius 0" },
        { className: "radius-2", title: "Radius 2" },
        { className: "radius-4", title: "Radius 4" },
        { className: "radius-6", title: "Radius 6" },
        { className: "radius-8", title: "Radius 8" },
        { className: "radius-full", title: "Radius Full" },
    ];

    return (
        <div className="bg-gray-50 h-100 ml-n3 p-4" style={{ minHeight: "100vh" }}>
            <Container className="w-100">
                <h1 className="mb-4">Utilities</h1>
                <div className="d-flex">
                    <div>
                        <h3>Cards</h3>
                        {cardProps.map(({ className, title, content }, index) => (
                            <Card key={index} className={className + " p-3"}>
                                <h2>{title}</h2>
                                <p className="mb-0">{content}</p>
                            </Card>
                        ))}
                    </div>
                    <div className="ml-4">
                        <div className="mx-4 mb-4">
                            <h3>Buttons</h3>
                            {btnProps.map(({ className, title }, index) => (
                                <Button key={index} variant="white" className={`${className} mb-2 mx-1`}>{title}</Button>
                            ))}
                        </div>
                        <div className="mx-4">
                            <h3>Radius</h3>
                            {radiusProps.map(({ className, title }, index) => (
                                <Card key={index} className={`${className} p-3 mb-4`}>
                                    <h2>{title}</h2>
                                    <p className="mb-0">Card content</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Utilities;