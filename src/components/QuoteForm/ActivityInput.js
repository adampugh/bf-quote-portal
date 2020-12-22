import React, { useState } from 'react';

const ActivityInput = () => {
    const [activityTitle, setActivityTitle] = useState('')

    return (
        <div>
            <label>Title
                <input 
                    type="text"
                    value={activityTitle}
                    name="materialDescription"
                    onChange={e => setActivityTitle(e.target.value)} />
            </label>
            <label>Client

            </label>
            <label>Site
                
            </label>
            <button>Add Material</button>
        </div>
    )
}

export default ActivityInput;