import React from 'react'
import { Button, Icon, Image, ShareButtonComponent } from '@blend-ed/blendx-ui'

function CourseExploreCardBadge({ label, icon }) {
    return (
        <div className='course-discover-card__badge'>
            <Icon icon={icon} type="line" size="sm" className="course-discover-card__badge-icon" />
            <span className="course-discover-card__label">{label}</span>
        </div>
    )
}


function CourseExploreCard(props) {
    const { preview, price, estimatedTime, author, cardType, courseCount } = props

    const primaryBtnText = cardType === 'course' ? 'Add to Cart' : 'Enroll Now'

    return (
        <div className='course-discover-card__wrapper'>
            <Image src={preview} alt="" className='course-discover-card__preview-img' />
            <div className="course-discover-card__price-section">
                <span className='course-discover-card__price'>{price === 0 ? 'Free' : `$${price}`}</span>
                <div className="course-discover-card__share-icon">
                    <ShareButtonComponent url="https://www.blend-ed.com/blog/blend-ed-owasp-partnership" />
                </div>
            </div>
            <div className="course-discover-card__info-section">
                {cardType === 'program' && courseCount && <CourseExploreCardBadge icon="book" label={courseCount} />}
                <CourseExploreCardBadge icon="time" label={estimatedTime} />
                <CourseExploreCardBadge icon="user-2" label={author} />
            </div>
            <div className="course-discover-card__btns-section">
                <Button size="md" variant="primary" className="course-discover-card__btns">{primaryBtnText}</Button>
                <Button size="md" variant="outline-gray" className="course-discover-card__btns" >Add to WishList</Button>
            </div>

        </div>
    )
}

export default CourseExploreCard