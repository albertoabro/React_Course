import Link from "next/link"

type ProductsPaginationProps = {
    page: number;
    totalPages: number
}

export const ProductsPagination = ({page, totalPages}: ProductsPaginationProps) => {

    const pages = Array.from({length: totalPages}, (_, index) => index + 1);

    return (
        <nav className="flex justify-center py-10">
            {
                page > 1 && (
                    <Link
                        href={`/admin/products?page=${page - 1}`}
                        className="bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 w-10 h-9"
                    >
                        &laquo;
                    </Link>
                )
            }
            {
                pages.map(currentPage => (
                    <Link
                        key={currentPage} 
                        href={`/admin/products?page=${currentPage}`}
                        className={`bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 w-10 h-9 
                            ${page === currentPage && 'font-black' } `}
                    >
                        {currentPage}
                    </Link>
                ))
            }
            {
                page < totalPages && (
                    <Link
                        href={`/admin/products?page=${page + 1}`}
                        className="bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0  w-10 h-9"
                    >
                        &raquo;
                    </Link>
                )
            }
        </nav>
    )
}
