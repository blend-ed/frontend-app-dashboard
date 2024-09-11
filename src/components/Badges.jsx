import { Container } from "@openedx/paragon"
import Badge from '../blendx-ui/src/Badge'

const Badges = () => {
    const badgeConfig = [
        {
            text: "Badge",
            variant: "info",
        },
        {
            text: "Badge",
            variant: "success",
            iconBefore: "ri-flashlight-fill",
        },
        {
            text: "Badge",
            variant: "danger",
            iconAfter: "ri-flashlight-fill",
        },
        {
            text: "Badge",
            variant: "light-info",
        },
        {
            text: "Badge",
            variant: "light-success",
            iconBefore: "ri-flashlight-fill",
        },
        {
            text: "Badge",
            variant: "light-error",
            iconAfter: "ri-flashlight-fill",
        },
        {
            text: "Badge",
            variant: "light-info",
            iconAfter: "ri-flashlight-fill",
        },
        {
            text: "Badge",
            variant: "light-success",
            iconBefore: "ri-flashlight-fill",
        },
        {
            text: "2",
            variant: "info",
        },
        {
            text: "2",
            variant: "light-info",
        },
        {
            text: "Badge",
            variant: "info",
            disabled: true,
        },
        {
            text: "Badge",
            variant: "info",
            withDot: true,
        },
        {
            text: "Badge",
            variant: "light-info",
            withDot: true,
        }
    ];

    const smallBadgeConfig = [
        {
            text: "Badge",
            variant: "info",
            size: "sm",
        },
        {
            text: "Badge",
            variant: "success",
            size: "sm",
            iconBefore: "ri-flashlight-fill",
        },
        {
            text: "Badge",
            variant: "danger",
            size: "sm",
            iconAfter: "ri-flashlight-fill",
        },
        {
            text: "Badge",
            variant: "light-info",
            size: "sm",
        },
        {
            text: "Badge",
            variant: "light-success",
            size: "sm",
            iconBefore: "ri-flashlight-fill",
        },
        {
            text: "Badge",
            variant: "light-error",
            size: "sm",
            iconAfter: "ri-flashlight-fill",
        },
        {
            text: "Badge",
            variant: "light-info",
            size: "sm",
            iconAfter: "ri-flashlight-fill",
        },
        {
            text: "Badge",
            variant: "light-success",
            size: "sm",
            iconBefore: "ri-flashlight-fill",
        },
        {
            text: "2",
            variant: "info",
            size: "sm",
        },
        {
            text: "2",
            variant: "light-info",
            size: "sm",
        },
        {
            text: "Badge",
            variant: "info",
            size: "sm",
            disabled: true,
        },
        {
            text: "Badge",
            variant: "info",
            size: "sm",
            withDot: true,
        },
        {
            text: "Badge",
            variant: "light-info",
            size: "sm",
            withDot: true,
        }
    ];

    return (
        <Container>
            <div className="p-3">
                <div>
                    <h1>Badges</h1>
                    <p>Badges content goes here.</p>
                </div>
                <div className="mb-4 d-flex">
                    {badgeConfig.map((badge, index) => (
                        <Badge key={index} variant={badge.variant} iconBefore={badge.iconBefore} iconAfter={badge.iconAfter} className={"mr-4"} disabled={badge.disabled} withDot={badge.withDot}>
                            {badge.text}
                        </Badge>
                    ))}
                </div>
                <div className="mb-4 d-flex">
                    {smallBadgeConfig.map((badge, index) => (
                        <Badge key={index} variant={badge.variant} iconBefore={badge.iconBefore} iconAfter={badge.iconAfter} size={badge.size} className={"mr-4"} disabled={badge.disabled} withDot={badge.withDot}>
                            {badge.text}
                        </Badge>
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default Badges;