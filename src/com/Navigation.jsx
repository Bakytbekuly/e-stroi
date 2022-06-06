import React from 'react'

const Navigation = ({ navigation }) => {

    let nav = navigation.filter(item => {
        if (item) {
            return true
        }
        else {
            return false
        }
    })
    return (
        <div>
            {nav.map((item, index) => (
                <span key={index} style={{ fontWeight: "bold" }}> {item} > </span>
            ))}
        </div>
    )
}

export default Navigation