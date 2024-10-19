import React from 'react'
import { Carousel } from '@blend-ed/blendx-ui'
import DiscoverBanner from '../../../components/DiscoverBanner'
import discoverBannerImg from '../../../assets/images/discover-banner-img.svg'

function CarouselContainer() {
    return (
        <div>
            <Carousel >
                <DiscoverBanner
                    title="The Magic of Mathematics"
                    description='Connect with instructors and institutions worldwide'
                    badgeText='New Course'
                    primaryBtn={{ text: 'Subscribe', url: 'www.google.com/' }}
                    secondaryBtn={{ text: 'Try for free', url: 'www.google.com/' }}
                    image={discoverBannerImg}
                    variant='danger'
                />
                <DiscoverBanner
                    title="The Magic of Mathematics"
                    description='Connect with instructors and institutions worldwide'
                    badgeText='New Course'
                    primaryBtn={{ text: 'Subscribe', url: 'www.google.com/' }}
                    secondaryBtn={{ text: 'Try for free', url: 'www.google.com/' }}
                    image={discoverBannerImg}
                    variant='primary'
                />
                <DiscoverBanner
                    title="The Magic of Mathematics"
                    description='Connect with instructors and institutions worldwide'
                    badgeText='New Course'
                    primaryBtn={{ text: 'Subscribe', url: 'www.google.com/' }}
                    secondaryBtn={{ text: 'Try for free', url: 'www.google.com/' }}
                    image={discoverBannerImg}
                    variant='success'
                />
            </Carousel>
        </div>
    )
}

export default CarouselContainer