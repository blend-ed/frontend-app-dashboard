import { ContentCard, ContentLabel, Hint, Label, PasswordStrength, Icon, Legend } from '../../../blendx-ui/src/KeyComponents'

const KeyComponents = () => {
    return (
        <main>
            <div className="p-3">
                <div>
                    <h1>Key Components</h1>
                    <p>Key Components content goes here.</p>
                </div>
                <Label className={"mb-2"} label="Label" required />
                <Label className={"mb-2"} label="Label" required info={"Info goes here"} />
                <Label className={"mb-2"} label="Label" required disabled />
                <Label className={"mb-2"} label="Label" required disabled info={"Info goes here"} />
                <ContentLabel className={"mb-2"} label="Label" sublabel="Sublabel" />
                <ContentLabel className={"mb-2"} label="Label" sublabel="Sublabel" badge="Badge" />
                <ContentLabel className={"mb-2"} label="Label" sublabel="Sublabel" badge="Badge" image={"https://via.placeholder.com/150"} />
                <ContentLabel className={"mb-2"} label="Label" sublabel="Sublabel" badge="Badge" image={"https://via.placeholder.com/150"} disabled />
                <ContentLabel className={"mb-2"} label="Label" sublabel="Sublabel" badge="Badge" image={"https://via.placeholder.com/150"} description={"Description goes here"} />
                <ContentLabel className={"mb-2"} label="Label" sublabel="Sublabel" image={" https://via.placeholder.com/150"} description={"Description goes here"} />
                <ContentLabel className={"mb-2"} label="Label" sublabel="Sublabel" image={" https://via.placeholder.com/150"} description={"Description goes here"} size="lg" />
                <ContentCard className={"mb-2"} title="Title" onHide={() => console.log("Hide")} />
                <ContentCard className={"mb-2"} title="Title" subtitle="Subtitle" onHide={() => console.log("Hide")} />
                <ContentCard className={"mb-2"} title="Title" subtitle="Subtitle" image={"https://via.placeholder.com/150"} onHide={() => console.log("Hide")} />
                <ContentCard className={"mb-2"} title="Title" subtitle="Subtitle" image={"https://via.placeholder.com/150"} description={"Description goes here"} onHide={() => console.log("Hide")} />
                <ContentCard className={"mb-2"} title="Title" subtitle="Subtitle" image={"https://via.placeholder.com/150"} description={"Description goes here"} size="lg" onHide={() => console.log("Hide")} />
                <ContentCard className={"mb-2"} title="Title" subtitle="Subtitle" image={"https://via.placeholder.com/150"} description={"Description goes here"} disabled onHide={() => console.log("Hide")} />
                <ContentCard className={"mb-2"} title="Title" subtitle="Subtitle" image={"https://via.placeholder.com/150"} description={"Description goes here"} size="lg" disabled onHide={() => console.log("Hide")} />
                <Hint className={"mb-2"}>
                    Hint goes here
                </Hint>
                <Hint className={"mb-2"} icon="ri-information-fill">
                    Hint goes here
                </Hint>
                <Hint className={"mb-2"} error icon="ri-error-warning-fill">
                    Error hint goes here
                </Hint>
                <Hint className={"mb-2"} disabled icon="ri-information-fill">
                    Disabled hint goes here
                </Hint>
                <PasswordStrength className={"mb-4"} value="password" />
                <PasswordStrength className={"mb-4"} value="passwod" />
                <PasswordStrength className={"mb-4"} value="passwod@" />
                <PasswordStrength className={"mb-4"} value="Pasord@134" />
                <PasswordStrength className={"mb-4"} value="Pasord@134asdf" />
                <div className="my-4">
                    <Icon className={"mr-3"} icon="flashlight" size="sm" type="fill" variant="gray" bordered light />
                    <Icon className={"mr-3"} icon="flashlight" size="sm" type="fill" variant="gray" bordered />
                    <Icon className={"mr-3"} icon="flashlight" size="sm" type="fill" variant="gray" />
                    <Icon className={"mr-3"} icon="flashlight" size="sm" type="fill" variant="gray" light />
                    <Icon className={"mr-3"} icon="flashlight" size="md" type="fill" variant="gray" bordered light />
                    <Icon className={"mr-3"} icon="flashlight" size="md" type="fill" variant="gray" bordered />
                    <Icon className={"mr-3"} icon="flashlight" size="md" type="fill" variant="gray" />
                    <Icon className={"mr-3"} icon="flashlight" size="md" type="fill" variant="gray" light />
                    <Icon className={"mr-3"} icon="flashlight" size="lg" type="fill" variant="gray" bordered light />
                    <Icon className={"mr-3"} icon="flashlight" size="lg" type="fill" variant="gray" bordered />
                    <Icon className={"mr-3"} icon="flashlight" size="lg" type="fill" variant="gray" />
                    <Icon className={"mr-3"} icon="flashlight" size="lg" type="fill" variant="gray" light />
                    <Icon className={"mr-3"} icon="flashlight" size="xl" type="fill" variant="gray" bordered light />
                    <Icon className={"mr-3"} icon="flashlight" size="xl" type="fill" variant="gray" bordered />
                    <Icon className={"mr-3"} icon="flashlight" size="xl" type="fill" variant="gray" />
                    <Icon className={"mr-3"} icon="flashlight" size="xl" type="fill" variant="gray" light />
                    <Icon className={"mr-3"} icon="flashlight" size="xxl" type="fill" variant="gray" bordered light />
                    <Icon className={"mr-3"} icon="flashlight" size="xxl" type="fill" variant="gray" bordered />
                    <Icon className={"mr-3"} icon="flashlight" size="xxl" type="fill" variant="gray" />
                    <Icon className={"mr-3"} icon="flashlight" size="xxl" type="fill" variant="gray" light />
                    <Icon className={"mr-3"} icon="flashlight" size="sm" type="line" variant="gray" bordered light />
                    <Icon className={"mr-3"} icon="flashlight" size="md" type="line" variant="gray" bordered light />
                    <Icon className={"mr-3"} icon="flashlight" size="lg" type="line" variant="gray" bordered light />
                    <Icon className={"mr-3"} icon="flashlight" size="xl" type="line" variant="gray" bordered light />
                    <Icon className={"mr-3"} icon="flashlight" size="xxl" type="line" variant="gray" bordered light />
                </div>
                {/* icon with avatar */}
                <div className="my-4">
                    <Icon className={"mr-3"} icon="user-6" size="sm" type="line" variant="gray" bordered light />
                    <Icon className={"mr-3"} icon="user-6" size="sm" type="line" variant="gray" bordered />
                    <Icon className={"mr-3"} icon="user-6" size="sm" type="line" variant="gray" />
                    <Icon className={"mr-3"} icon="user-6" size="sm" type="line" variant="gray" light />
                    <Icon className={"mr-3"} icon="user-6" size="md" type="line" variant="gray" bordered light />
                    <Icon className={"mr-3"} icon="user-6" size="md" type="line" variant="gray" bordered />
                    <Icon className={"mr-3"} icon="user-6" size="md" type="line" variant="gray" />
                    <Icon className={"mr-3"} icon="user-6" size="md" type="line" variant="gray" light />
                    <Icon className={"mr-3"} icon="user-6" size="lg" type="line" variant="gray" bordered light />
                    <Icon className={"mr-3"} icon="user-6" size="lg" type="line" variant="gray" bordered />
                    <Icon className={"mr-3"} icon="user-6" size="lg" type="line" variant="gray" />
                    <Icon className={"mr-3"} icon="user-6" size="lg" type="line" variant="gray" light />
                    <Icon className={"mr-3"} icon="user-6" size="xl" type="line" variant="gray" bordered light />
                    <Icon className={"mr-3"} icon="user-6" size="xl" type="line" variant="gray" bordered />
                    <Icon className={"mr-3"} icon="user-6" size="xl" type="line" variant="gray" />
                    <Icon className={"mr-3"} icon="user-6" size="xl" type="line" variant="gray" light />
                    <Icon className={"mr-3"} icon="user-6" size="xxl" type="line" variant="gray" bordered light />
                    <Icon className={"mr-3"} icon="user-6" size="xxl" type="line" variant="gray" bordered />
                    <Icon className={"mr-3"} icon="user-6" size="xxl" type="line" variant="gray" />
                    <Icon className={"mr-3"} icon="user-6" size="xxl" type="line" variant="gray" light />
                    <Icon className={"mr-3"} icon="user-6" size="sm" type="fill" variant="gray" bordered light />
                    <Icon className={"mr-3"} icon="user-6" size="md" type="fill" variant="gray" bordered light />
                    <Icon className={"mr-3"} icon="user-6" size="lg" type="fill" variant="gray" bordered light />
                    <Icon className={"mr-3"} icon="user-6" size="xl" type="fill" variant="gray" bordered light />
                    <Icon className={"mr-3"} icon="user-6" size="xxl" type="fill" variant="gray" bordered light />
                </div>

                {/* Legends */}
                <div className="my-4">
                    <Legend className={"mr-3"} variant="gray">
                        Legend
                    </Legend>
                    <Legend className={"mr-3"} variant="primary">
                        Legend
                    </Legend>

                    <Legend className={"mr-3"} variant="success">
                        Legend
                    </Legend>
                </div>

                {/* Legend Dots */}
                <div className="my-4">
                    <Legend.Dot className={"mb-2"} variant="gray" />
                    <Legend.Dot className={"mb-2"} variant="primary" />
                    <Legend.Dot className={"mb-2"} variant="success" />
                </div>

            </div>
        </main>
    )
}

export default KeyComponents;