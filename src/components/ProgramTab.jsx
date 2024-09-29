import React from 'react'
import ProgramCard from '../components/ProgramCard'

function ProgressTab({ renderPrograms }) {
    return (
        <div className="program-cards-container">
            {renderPrograms.map((program, index) => (
                <ProgramCard key={program.id} title={program.title} description={program.description} image={program.image} estimatedTime={program.estimatedTime} price={program.price} discover progress={program.progress} />
            ))}
        </div>
    )
}

export default ProgressTab