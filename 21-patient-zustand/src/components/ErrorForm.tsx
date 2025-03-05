import { ReactNode } from "react"


export const ErrorForm = ({children}: {children: ReactNode}) => {
    return (
        <p className="text-center my-4 bg-red-600 text-white p-3 uppercase text-sm">
            {children}
        </p>
    )
}
