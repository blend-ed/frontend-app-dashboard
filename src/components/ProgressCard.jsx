import React from 'react';

function ProgressCardItem({ value, title }) {
    return (
        <div className="progress-card__item">
            <h2 className="progress-card__item-value">{value}</h2>
            <div className="progress-card__item-title">{title}</div>
        </div>
    );
}

function ProgressCard() {
    return (
        <div className="progress-card">
            <ProgressCardItem value="2" title="Ongoing courses" />
            <div className="progress-card__line" />
            <ProgressCardItem value="5%" title="Completed" />
            <div className="progress-card__line" />
            <ProgressCardItem value="30h" title="Weekly engagement" />
        </div>
    );
}

export default ProgressCard;