import { Container } from "@openedx/paragon";
import Accordion from "../../../blendx-ui/src/Accordion";

const BLAccordion = () => {
    return (
        <main>
            <Container className="py-3">
                <h1 className='mb-4'>
                    Accordion
                </h1>
                <Accordion
                    defaultActiveKey="0"
                    icon="account-circle"
                    title="Accordion Title"
                    className="mb-3"
                >
                    <p className="mb-0 text-wrap">
                        Accordion content goes here. You can add any HTML elements, including text, images, and links. You can also add other components, such as buttons, forms, and tables.
                    </p>
                    asdf
                </Accordion>

                <Accordion
                    defaultActiveKey="0"
                    icon="account-circle"
                    title="Accordion Title"
                >
                    <Accordion
                        defaultActiveKey="0"
                        icon="account-circle"
                        title="Accordion Title"
                    >
                        <p className="mb-0 text-wrap">
                            Accordion content goes here. You can add any HTML elements, including text, images, and links. You can also add other components, such as buttons, forms, and tables.
                        </p>
                    </Accordion>
                </Accordion>

            </Container>
        </main>
    );
}

export default BLAccordion;