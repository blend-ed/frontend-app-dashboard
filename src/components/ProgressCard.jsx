import React from 'react'

function ProgressCard() {
    return (
        <div className="progress-card">
            <div className="progress-card__item">
                <h2 className="progress-card__item-value">2</h2>
                <div className="progress-card__item-title">Ongoing courses</div>
            </div>
            <div className="progress-card__line" />
            <div className="progress-card__item">
                <h2 className="progress-card__item-value">5%</h2>
                <div className="progress-card__item-title">Completed</div>
            </div>
            <div className="progress-card__line" />
            <div className="progress-card__item">
                <h2 className="progress-card__item-value">30h</h2>
                <div className="progress-card__item-title">Weekly engagement</div>
            </div>
        </div>
    )
}

export default ProgressCard