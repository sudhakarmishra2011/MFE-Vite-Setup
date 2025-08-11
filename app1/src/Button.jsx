import React from 'react'

export const Button = ({ label, message }) => {
    return (
        <div onClick={() => message("Hello from App1")}>
            <span style={{ border: "1px solid black" }}>
                Button
            </span>
            {label}
        </div>
    )
}
