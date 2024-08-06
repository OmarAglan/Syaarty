'use client'
import { SearchManfuacturerPrpos } from '@/types'
import { Combobox, ComboboxButton, ComboboxInput, Transition } from '@headlessui/react'
import Image from 'next/image'
import { useState } from 'react'

function SearchManfuacturer({ manfuacturer, setManfuacturer }: SearchManfuacturerPrpos) {
    const [query, setQuery] = useState('')
    return (
        <div className='search-manufacturer'>
            <Combobox>
                <div className='relative w-full'>
                    <ComboboxButton className='absolute top-[14px]'>
                        <Image
                            src='/car-logo.svg'
                            alt='search'
                            width={20}
                            height={20}
                            className='ml-4'
                        />
                    </ComboboxButton>

                    <ComboboxInput
                        className='search-manufacturer__input'
                        placeholder='البحث بالماركة'
                        displayValue={(manfuacturer: string) => manfuacturer}
                        onChange={(event) => setQuery(event.currentTarget.value)}
                    />

                    <Transition>

                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchManfuacturer