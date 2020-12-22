import React, { useState } from 'react';

const MaterialsInput = ({ addMaterial }) => {
    const [materialDescription, setMaterialDescription] = useState('')
    const [materialQuantity, setMaterialQuantity] = useState('')

    const submitMaterial = e => {
        e.preventDefault();
        const newMaterials = {
            materialDescription,
            materialQuantity
        }
        addMaterial(newMaterials)
        setMaterialDescription('')
        setMaterialQuantity('')
    }

    return (
        <div>
            <label>Description
                <input 
                    type="text"
                    value={materialDescription}
                    name="materialDescription"
                    onChange={e => setMaterialDescription(e.target.value)} />
            </label>
            <label>Quantity
                <input 
                    type="number"
                    value={materialQuantity}
                    name="materialDescription"
                    onChange={e => setMaterialQuantity(e.target.value)} />
            </label>
            <button onClick={submitMaterial}>Add Material</button>
        </div>
    )
};

export default MaterialsInput;