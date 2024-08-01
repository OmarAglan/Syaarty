'use client'
import React from 'react'

function SearchBar() {
    const handleSearch = () => {

    }
    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className='searchbar__item'>
                <SearchManfuacturer />
            </div>
        </form>
    )
}

export default SearchBar