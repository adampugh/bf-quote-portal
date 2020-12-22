import React from 'react';

const MaterialsDisplay = ({ materials }) => {
    return (
        <div className="materials__display">
            {
                materials.length > 0 && materials.map(({materialDescription, materialQuantity}) => {
                    return (
                        <div className="materials__display__row">
                            <p>{materialDescription} {materialQuantity}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MaterialsDisplay;