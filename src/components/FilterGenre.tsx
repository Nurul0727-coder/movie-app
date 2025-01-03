'use client';

import{Badge} from'@/components/ui/badge';
import{
    Popover,
    PopoverContent,
    PopoverTrigger,
}from '@/components/ui/popover';
import { options } from '@/constands/api';
import{GenreType} from '@/constands/type';   
import { useState, useEffect } from 'react';

export const FilterGenre =() => {    
    const [genres, setGenres] = useState([]);

    useEffect(() => {const fetchGenres = async () => {
        const response = await fetch(
            'https://api.themoviedb.org/3/genre/movie/list?language=en',
           options
        );

        const data = await response.json();
        setGenres(data.genres);
    };
    fetchGenres();
    },[]);
    return (
        <Popover>
            <PopoverTrigger>-
                <div className='border rounded-lg p-4 w-[150px]'>Genres</div>
            </PopoverTrigger>
            <PopoverContent>
                {genres.map((genre: GenreType) => (
                    <Badge key={`genre-${genre.id}`}>{genre?.name} </Badge>
                ))}
            </PopoverContent>
        </Popover>
    );
   
};