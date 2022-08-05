import React from 'react'

const AaaData = () => {
    fetch("https://world.openfoodfacts.org/category/pastas/1.json")
        .then(response => response.json())
        .then(data => {
            console.log(`the count is :${data.count}`)
            console.log(`the product is ${data.products}`)
        });


    return (
        <>
            <div className='name'>name is </div>
        </>
    )
}

export default AaaData;

