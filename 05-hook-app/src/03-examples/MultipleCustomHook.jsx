import React from 'react'
import { useFetch } from '@/hooks/useFetch'
import { useCounter } from '@/hooks/useCounter'
import { LoadingMessage } from './LoadingMessage';
import { PokemonCard } from './PokemonCard';
export const MultipleCustomHook = () => {

    const { counter, increment, decrement } = useCounter(1);
    const url = `https://pokeapi.co/api/v2/pokemon/${counter}`;
    const { data, isLoading, hasError } = useFetch(url);
    return (
        <>
            <h1 className='text-4xl font-extrabold font-display dark:text-white'>Pokemon information</h1>
            <hr />

            {isLoading
                ? <LoadingMessage />
                : <PokemonCard
                    style={{flexDirection: 'row'}}
                    id={data?.id}
                    name={data?.name}
                    sprites={ [
                        data?.sprites.front_default,
                        data?.sprites.front_shiny,
                        data?.sprites.back_default,
                        data?.sprites.back_shiny,
                    ]}
                />
            }

            <button className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl 
                                focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium font-display rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
                onClick={() => counter > 1 ? decrement() : null}>
                Last
            </button>
            <button className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl 
                                focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
                onClick={() => increment()}>
                Next
            </button>
        </>
    )
}

