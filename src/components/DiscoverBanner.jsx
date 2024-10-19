import React from 'react'
import { Image, Button, Badge } from '@blend-ed/blendx-ui'
import propTypes from 'prop-types';
import classNames from 'classnames';

function DiscoverBanner(props) {
    const { image, className, title, description, primaryBtn, secondaryBtn, badgeText, variant } = props;
    return (
        <div className={classNames('discover-banner__wrapper', `${variant}-banner-background`, className)}>
            <div className='discover-banner__right'>
                <div className="discover-banner__right-top">
                    <span className='discover-banner__title'>{title}<Badge size="md" iconBefore="flashlight" iconType="fill">{badgeText}</Badge></span>

                    <span className='discover-banner__description'>{description}</span>
                </div>
                <div className="discover-banner__right-bottom">
                    <Button variant={variant} size="sm" className={classNames(`discover-banner__primary-btn`, 'mr-3')}>{primaryBtn.text}</Button>
                    <Button variant="outline-gray" size="sm" className="discover-banner__secondary-btn">{secondaryBtn.text}</Button>
                </div>
            </div>
            <div className='discover-banner__left'>
                <Image src={image} className="discover-banner__left-image"></Image>
            </div>
        </div>
    )
}

DiscoverBanner.propTypes = {
    image: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    primaryBtn: propTypes.shape({
        text: propTypes.string.isRequired,
        url: propTypes.string.isRequired
    }).isRequired,
    secondaryBtn: propTypes.shape({
        text: propTypes.string.isRequired,
        url: propTypes.string.isRequired
    }).isRequired,
    badgeText: propTypes.string.isRequired,
    className: propTypes.string,
    bannerColor: propTypes.string.isRequired
}

DiscoverBanner.defaultProps = {
    className: '',
    bannerColor: ''
}

export default DiscoverBanner