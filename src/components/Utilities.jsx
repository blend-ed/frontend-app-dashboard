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
                    <div className="mx-4">
                        <h3>Buttons</h3>
                        {btnProps.map(({ className, title }, index) => (
                            <Button key={index} variant="white" className={`${className} mb-2 mx-1`}>{title}</Button>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Utilities;