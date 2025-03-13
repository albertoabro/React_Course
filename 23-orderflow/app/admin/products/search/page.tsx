import { ProductSearchForm } from "@/components/products/ProductSearchForm";
import { ProductTable } from "@/components/products/ProductTable";
import { Heading } from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

const searchProducts = async(searchTerm: string) => {
    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: searchTerm,
                mode: 'insensitive'
            },
        },
        include: {
            category: true
        }
    });

    return products;
}

const SearchProductPage = async({searchParams}: {searchParams: {search: string}}) => {

    const params = await searchParams;
    const searchParam = params.search

    const products = await searchProducts(searchParam);

    return (
        <>
            <Heading>
                Search Results of: {searchParam}
            </Heading>

            <div className="flex flex-col lg:flex-row lg:justify-end gap-5">
                <ProductSearchForm />
            </div>

            {
                products.length > 0 ? (
                    <ProductTable products={products}/>
                ) : <p className="text-center font-black text-xl">No products found</p>
            }
        </>
    )
}

export default SearchProductPage;
