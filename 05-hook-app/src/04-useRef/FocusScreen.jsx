import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClick = () => {
        inputRef.current.select();
    }

    return (
        <>
            <h1 className='text-4xl font-extrabold font-display dark:text-white'>Focus Screen</h1>
            <hr />

            <input 
                type="text" 
                placeholder="Insert name" 
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                    rounded-lg block w-100 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                ref={inputRef}
            />

            <button 
                className="mt-1.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg 
                text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={onClick}
            >
                Set Focus
            </button>
        </>
    )
}


