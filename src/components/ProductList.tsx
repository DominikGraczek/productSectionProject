import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
interface ProductListProps {
    filters: Record<string, any>;
}

const ProductList: React.FC<ProductListProps> = ({ filters }) => {
    const clothes: string[] = [
        "NEW",
        "BEST SELLERS",
        "SHIRTS",
        "POLO SHIRTS",
        "SHORTS",
        "SUITS",
        "T-SHIRTS",
        "JEANS",
        "JACKETS",
        "COATS",
    ];
    interface Product {
        id: number;
        img_url: string;
        name: string;
        description: string;
        size: string[];
        color: string[];
        amount: number;
        price: number;
        category: "man" | "woman";
    }

    const [products, setProducts] = useState<Product[] | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>("");

    useEffect(() => {
        fetch("/productdata.json")
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

    const filteredProducts = products?.filter((product) => {
        const searchMatch = product.name
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        const sizesMatch =
            !filters.sizes?.length ||
            filters.sizes.some((size: string) => product.size.includes(size));
        const availabilityMatch =
            !filters.availability?.length ||
            (filters.availability.includes("In Stock") && product.amount > 0) ||
            (filters.availability.includes("Out of Stock") &&
                product.amount === 0);
        const categoryMatch =
            !filters.categories?.length ||
            filters.categories.includes(product.category);
        const colorMatch =
            !filters.colors?.length ||
            filters.colors.some((color: string) =>
                product.color.includes(color.toLowerCase())
            );
        const priceMatch =
            (!filters.minPrice ||
                product.price >= parseFloat(filters.minPrice)) &&
            (!filters.maxPrice ||
                product.price <= parseFloat(filters.maxPrice));
        return (
            searchMatch &&
            sizesMatch &&
            availabilityMatch &&
            categoryMatch &&
            colorMatch &&
            priceMatch
        );
    });

    return (
        <div className="absolute top-20 left-1/2 lg:left-1/4 lg:w-3/4 w-1/2 bg-white dark:bg-black h-max text-black dark:text-white">
            <div className="m-5">
                <h2 className="font-medium">Home/Products</h2>
                <h1 className="font-bold text-3xl">PRODUCTS</h1>
                <div className="flex mt-2 flex-wrap justify-between">
                    <input
                        className="dark:bg-gray-700 bg-gray-300 rounded-md h-16 w-full pr-2 2xl:w-2/5 text-right font-medium"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="hidden 2xl:flex flex-wrap 2xl:w-3/5 items-center justify-self-auto">
                        {clothes.map((title) => (
                            <button
                                className="dark:border-gray-600 border-gray-200 flex border-2 mb-0.5 ml-1 h-2/4 items-center px-4 hover:bg-gray-200"
                                key={title}
                            >
                                {title}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="2xl:hidden flex flex-wrap w-full items-center justify-self-auto pt-1 ">
                    {clothes.map((title) => (
                        <a
                            className="border-2 mb-0.5 h-2/4 w-full sm:w-1/2 lg:w-1/4 items-center px-4 hover:bg-gray-200"
                            key={title}
                        >
                            {title}
                        </a>
                    ))}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4">
                    {products === null ? (
                        <p>Loading...</p>
                    ) : filteredProducts && filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                name={product.name}
                                description={product.description}
                                img_url={product.img_url}
                                price={product.price}
                            />
                        ))
                    ) : (
                        <p>No products found</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
