import { Image } from "@openedx/paragon";

const Icons = () => {

    const ArrowIcons = [
        "arrow-down-s",
        "arrow-down",
        "arrow-left-s",
        "arrow-left",
        "arrow-right-s",
        "arrow-right",
        "arrow-up-s",
        "arrow-up",
    ];

    const BuildingIcons = [
        "bank",
        "building-2",
        "building-3",
        "building-4",
        "building",
        "community",
        "hospital",
        "hotel",
        "school",
        "store",
    ];

    const BusinessIcons = [
        "briefcase-2",
        "briefcase-3",
        "briefcase-4",
        "briefcase-5",
        "briefcase",
        "mail-send",
        "mail",
        "mail-open",
        "mail-unread",
        "inbox-archive",
        "inbox",
        "inbox-unarchive",
        "archive",
        "archive-2",
        "medal",
        "medal-2",
    ];

    const CustomIcons = [
        "component-line",
        "component-fill",
        "info-tooltip-fill"
    ];

    const BrandIcons = [
        "facebook",
        "x",
        "instagram",
        "linkedin",
        "google",
        "whatsapp",
    ];

    const FlagIcons = [
        "us", "de", "fr", "es", "it", "cn", "jp", "br", "in", "ru", "gb", "ca", "au", "kr", "mx", "id", "tr", "sa", "za", "nl", "se", "ch", "sg", "ae", "ar", "my", "ph", "co", "th", "eg", "pl", "vn", "ua", "ro", "cl", "cz", "at", "dk", "no", "fi", "be", "il", "pt", "hu", "gr", "ie", "nz", "pe", "rs", "pk", "bg", "hr", "dz", "ma", "rs", "tn", "ve", "do", "lt", "si", "ba", "cr", "sk", "gt", "ee", "lv", "uy", "hn", "lu", "cy", "mt", "mc", "pa", "ad", "li", "is", ""
    ];

    const FlagIcon = ({ icon }) => (
        <Image src={`https://hatscripts.github.io/circle-flags/flags/${icon}.svg`} width="16rem" alt={icon} className="m-2" />
    );

    return (
        <div className="p-4">
            <div className="mb-4">
                <h1 className="mb-2">Custom Icons</h1>
                <div className="d-flex flex-wrap mx-2">
                    {CustomIcons.map((icon) => (
                        <span className={`m-2 bl-${icon}`} key={icon}></span>
                    ))}
                </div>
            </div>
            <div className="mb-4">
                <h1 className="mb-4">Remix Icons</h1>
                <div className="d-flex">
                    <div className="mx-4">
                        <h3>Arrow Icons</h3>
                        <div className="d-flex flex-wrap">
                            {ArrowIcons.map((icon) => (
                                <span className={`m-2 ri-${icon}-line`} key={icon}></span>
                            ))}
                        </div>
                        <div className="d-flex flex-wrap">
                            {ArrowIcons.map((icon) => (
                                <span className={`m-2 ri-${icon}-fill`} key={icon}></span>
                            ))}
                        </div>
                    </div>
                    <div className="mx-4">
                        <h3>Building Icons</h3>
                        <div className="d-flex flex-wrap">
                            {BuildingIcons.map((icon) => (
                                <span className={`m-2 ri-${icon}-line`} key={icon}></span>
                            ))}
                        </div>
                        <div className="d-flex flex-wrap">
                            {BuildingIcons.map((icon) => (
                                <span className={`m-2 ri-${icon}-fill`} key={icon}></span>
                            ))}
                        </div>
                    </div>
                    <div className="mx-4">
                        <h3>Business Icons</h3>
                        <div className="d-flex flex-wrap">
                            {BusinessIcons.map((icon) => (
                                <span className={`m-2 ri-${icon}-line`} key={icon}></span>
                            ))}
                        </div>
                        <div className="d-flex flex-wrap">
                            {BusinessIcons.map((icon) => (
                                <span className={`m-2 ri-${icon}-fill`} key={icon}></span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <h1 className="mb-4">
                    Brand Icons
                </h1>
                <div className="d-flex flex-wrap">
                    {BrandIcons.map((icon) => (
                        <span className={`m-2 ${icon}-original`} key={icon}></span>
                    ))}
                </div>
                <div className="d-flex flex-wrap">
                    {BrandIcons.map((icon) => (
                        <span className={`m-2 ${icon}-black`} key={icon}></span>
                    ))}
                </div>
                <div className="d-flex flex-wrap bg-gray-950 rounded">
                    {BrandIcons.map((icon) => (
                        <span className={`m-2 ${icon}-white`} key={icon}></span>
                    ))}
                </div>
            </div>
            <div className="mb-4">
                <h1 className="mb-4">
                    Flag Icons
                </h1>
                <div className="d-flex flex-wrap">
                    {FlagIcons.map((icon) => (
                        <FlagIcon icon={icon} key={icon} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Icons;