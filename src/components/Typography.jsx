import { Container } from "@openedx/paragon";

const Typography = () => {
    return (
        <main>
            <Container className="py-3">
                <div>
                    <h1>The quick brown fox jumps over the lazy dog.</h1>
                    <h2>The quick brown fox jumps over the lazy dog.</h2>
                    <h3>The quick brown fox jumps over the lazy dog.</h3>
                    <h4>The quick brown fox jumps over the lazy dog.</h4>
                    <h5>The quick brown fox jumps over the lazy dog.</h5>
                    <h6>The quick brown fox jumps over the lazy dog.</h6>
                </div>
                <div>
                    <p>The quick brown fox jumps over the lazy dog.</p>
                    <p className="fs-1">The quick brown fox jumps over the lazy dog.</p>
                    <p className="fs-2">The quick brown fox jumps over the lazy dog.</p>
                    <p className="fs-3">The quick brown fox jumps over the lazy dog.</p>
                    <p className="fs-4">The quick brown fox jumps over the lazy dog.</p>
                    <p className="fs-5">The quick brown fox jumps over the lazy dog.</p>
                    <p className="fs-6">The quick brown fox jumps over the lazy dog.</p>
                </div>
                <div>
                    <p className="label">The quick brown fox jumps over the lazy dog.</p>
                    <p className="label fs-1">The quick brown fox jumps over the lazy dog.</p>
                    <p className="label fs-2">The quick brown fox jumps over the lazy dog.</p>
                    <p className="label fs-3">The quick brown fox jumps over the lazy dog.</p>
                    <p className="label fs-4">The quick brown fox jumps over the lazy dog.</p>
                    <p className="label fs-5">The quick brown fox jumps over the lazy dog.</p>
                    <p className="label fs-6">The quick brown fox jumps over the lazy dog.</p>
                </div>
                <div>
                    <p className="sub-h1">The quick brown fox jumps over the lazy dog.</p>
                    <p className="sub-h2">The quick brown fox jumps over the lazy dog.</p>
                    <p className="sub-h3">The quick brown fox jumps over the lazy dog.</p>
                    <p className="sub-h4">The quick brown fox jumps over the lazy dog.</p>
                </div>
            </Container>
        </main>
    )
}

export default Typography;