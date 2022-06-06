import React from 'react'

const Navigation = ({ navigation }) => {
    console.log(navigation);
    return (
        <div>
            {navigation.map((item, index) => (
                <span key={index} style={{ fontWeight: "bold" }}> {item} ></span>
            ))}
        </div>
    )
}

export default Navigation