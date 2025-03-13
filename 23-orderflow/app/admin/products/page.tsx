import { ProductSearchForm } from "@/components/products/ProductSearchForm";
import { ProductsPagination } from "@/components/products/ProductsPagination";
import { ProductTable } from "@/components/products/ProductTable";
import { Heading } from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import { unstable_cache } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation";

const productCount = unstable_cache( async () => {
    return await prisma.product.count();
}, ['product-count'], {revalidate: false});

const getProducts = async(page: number, pageSize: number) => {
    return await prisma.product.findMany({
        take: pageSize,
        skip: (page - 1) * pageSize,
        include:{
            category: true
        }
    });
}

const ProductPage = async({searchParams}: {searchParams: {page?: string}}) => {

    const params = await searchParams;
    const pageParam = params.page;

    const page = parseInt(pageParam ?? '1',10);
    const pageSize = 10;

    if(page <= 0 || isNaN(page)) redirect('/admin/products');

    const productsData = getProducts(page, pageSize);
    const totalProductsData = productCount();

    const [products, totalProducts] = await Promise.all([productsData, totalProductsData]);
    const totalPages = Math.ceil(totalProducts / pageSize);

    if(page > totalPages) redirect('/admin/products');

    return (
        <>
            <Heading>
                Admin Products
            </Heading>

            <div className="flex flex-col lg:flex-row lg:justify-between gap-5">
                <Link
                    href={'/admin/products/new'}
                    className="bg-amber-400 w-full lg:w-auto text-xl px-10 py-3 text-center
                    font-bold cursor-pointer"
                >
                    Create Product
                </Link>
                
                <ProductSearchForm />
            </div>

            <ProductTable 
                products={products}
            />

            <ProductsPagination page={page} totalPages={totalPages}/>
        </>
    )
}

export default ProductPage;
