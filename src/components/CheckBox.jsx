import CheckBox from "../../../blendx-ui/src/CheckBox";

const CheckBoxes = () => {
    return (
        <main>
            <div className="py-3">
                <div>
                    <h1>CheckBox</h1>
                    <p>CheckBox content goes here.</p>
                </div>
                <CheckBox />
                <CheckBox checked />
                <CheckBox disabled />
                <CheckBox checked disabled />

                <CheckBox label="CheckBox" sublabel="Sublabel" badge="Badge" className="mb-4" checked />
                <CheckBox label="CheckBox" sublabel="Sublabel" badge="Badge" position="right" className="mb-4" />
                <CheckBox label="CheckBox" sublabel="Sublabel" badge="Badge" description="Description goes here" className="mb-4" />
                <CheckBox label="CheckBox" sublabel="Sublabel" badge="Badge" description="Description goes here" className="mb-4" link="Link" />
                <CheckBox label="CheckBox" sublabel="Sublabel" badge="Badge" position="right" description="Description goes here" className="mb-4" link="Link" />

                <CheckBox.Card label="CheckBox" className="mb-4" />
                <CheckBox.Card label="CheckBox" className="mb-4" indeterminate />
                <CheckBox.Card label="CheckBox" sublabel="Sublabelasdfsafd" badge="Badgeasdfasdfasdf" className="mb-4" description="Description goes here" link="Link" image="https://via.placeholder.com/150" />
                <CheckBox.Card label="CheckBox" sublabel="Sublabelasdfsafd" badge="Badgeasdfasdfasdf" className="mb-4" description="Description goes here" link="Link" image="https://via.placeholder.com/150" disabled />
                <CheckBox.Card label="CheckBox" sublabel="Sublabelasdfsafd" badge="Badgeasdfasdfasdf" className="mb-4" description="Description goes here" link="Link" image="https://via.placeholder.com/150" disabled checked />

                <CheckBox checked className="mb-4" />
                <CheckBox disabled className="mb-4" />
                <CheckBox checked disabled className="mb-4" />
                <CheckBox indeterminate className="mb-4" />
                <CheckBox indeterminate disabled className="mb-4" />

            </div>
        </main>
    )
}

export default CheckBoxes;