import Radio from "../blendx-ui/src/Radio";

const Radios = () => {
    return (
        <main>
            <div className="py-3">
                <div>
                    <h1>Radio</h1>
                    <p>Radio content goes here.</p>
                </div>
                <Radio />
                <Radio checked />
                <Radio disabled />
                <Radio checked disabled />

                <Radio label="Radio" sublabel="Sublabel" badge="Badge" className="mb-4" checked />
                <Radio label="Radio" sublabel="Sublabel" badge="Badge" position="right" className="mb-4" />
                <Radio label="Radio" sublabel="Sublabel" badge="Badge" description="Description goes here" className="mb-4" />
                <Radio label="Radio" sublabel="Sublabel" badge="Badge" description="Description goes here" className="mb-4" link="Link" />
                <Radio label="Radio" sublabel="Sublabel" badge="Badge" position="right" description="Description goes here" className="mb-4" link="Link" />

                <Radio.Card label="Radio" className="mb-4" />
                <Radio.Card label="Radio" className="mb-4" indeterminate />
                <Radio.Card label="Radio" sublabel="Sublabelasdfsafd" badge="Badgeasdfasdfasdf" className="mb-4" description="Description goes here" link="Link" image="https://via.placeholder.com/150" />
                <Radio.Card label="Radio" sublabel="Sublabelasdfsafd" badge="Badgeasdfasdfasdf" className="mb-4" description="Description goes here" link="Link" image="https://via.placeholder.com/150" disabled />
                <Radio.Card label="Radio" sublabel="Sublabelasdfsafd" badge="Badgeasdfasdfasdf" className="mb-4" description="Description goes here" link="Link" image="https://via.placeholder.com/150" disabled checked />

                <Radio checked className="mb-4" />
                <Radio disabled className="mb-4" />
                <Radio checked disabled className="mb-4" />
                <Radio indeterminate className="mb-4" />
                <Radio indeterminate disabled className="mb-4" />

            </div>
        </main>
    )
}

export default Radios;