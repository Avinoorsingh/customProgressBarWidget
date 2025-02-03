import React from "react";
import { createElement } from "react";
 
export default function ProgressBar({ percentage }) {
    return (
        <div key='uniqueKey' style={{ width: '100%', backgroundColor: '#e0e0df', borderRadius: '5px' }}>
            <div key='uniqueKey'
                style={{
                    width: `${percentage}%`,
                    backgroundColor: "green",
                    // backgroundImage: 'linear-gradient(to right, #ff7e5f, #feb47b, #86a8e7, #91eae4)',
                    height: '20px',
                    borderRadius: '5px',
                    textAlign: 'center',
                    color: 'white'
                }}
            >
                {percentage}%
            </div>
        </div>
    );
}