import ItemCard from './../Gallery/ItemCard/ItemCard';
import React from 'react'

function ItemOtherOptions({productsDataBase, displayedItem}) {
    
    const showOtherOptions = () => {
        const otherOptions = []
            
        for (let i = 0; otherOptions.length < 5; i++) {
            let option = productsDataBase[Math.floor(Math.random() * productsDataBase.length)]
            if (otherOptions.indexOf(option) === -1 && option !== displayedItem) { otherOptions.push(option) }
        }

        // Function that displays the available items
        return otherOptions.map((item) => (
            <article>
                <ItemCard item={item} />
            </article>
            )
        )
    }

    return (
        <div className='OtherOptions-gallery'>
            {showOtherOptions()}
        </div>
    )
}

export default React.memo(ItemOtherOptions)