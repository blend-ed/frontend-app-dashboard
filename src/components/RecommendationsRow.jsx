import React from 'react';
import { Link } from 'react-router-dom';

const RecommendationsRow = (props) => {
    const { title, children, seeAllLink } = props

    return (
        <div className="recommendations-row-container">
            <div className="recommendations-row__header">
                <div className="recommendations-row__title">{title}</div>
                <Link to={seeAllLink} className="recommendations-row__link">
                    See all
                </Link>
            </div>
            <div className="recommendations-row">
                {children}
            </div>
        </div>
    );
}

export default RecommendationsRow;