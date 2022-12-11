import React from 'react'

function FormatPrice({ price }) {
    return Intl.NumberFormat('en-NP', {
        style: 'currency',
        currency: "NPR",
        maximumFractionDigits: 2,
    }).format((price ? price : 0) / 100)
}

export default FormatPrice