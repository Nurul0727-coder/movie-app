'use client'

import {SearchInput} from './SearchInpit';
import { ChangeEvent, useState } from 'react';
import { SearchResultList}from './SearchResultList';

export const SearchForMainPage = () => {
    const [searchValue, setSearchValue]= useState <string>('')

    const  handleChange = (event: ChangeEvent<HTMLInputElement>)=>{
        setSearchValue(event.target.value);

    };
    return(
        <div className='relative'>
            <SearchInput handleChange={handleChange} value={searchValue}/>
            {searchValue && <SearchResultList searchValue={searchValue}/>}
            </div>
    );
};



