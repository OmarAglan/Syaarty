'use client'
import { useState } from 'react'
import SearchManfuacturer from './SearchManfuacturer'

function SearchBar() {
    const [manfuacturer, setManfuacturer] = useState('')

    const handleSearch = () => {

    }
    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className='searchbar__item'>
                <SearchManfuacturer
                    manfuacturer={manfuacturer}
                    setManfuacturer={setManfuacturer}
                />
            </div>
        </form>
    )
}

export default SearchBar