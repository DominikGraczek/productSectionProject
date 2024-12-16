interface ProductCardInterface {
    name: string;
    description: string;
    img_url: string;
    price: number;
}
const ProductCard: React.FC<ProductCardInterface> = ({
    name,
    description,
    img_url,
    price,
}) => {
    return (
        <a
            href="#"
            className="p-4 border rounded-lg shadow-md bg-white dark:bg-black flex flex-col dark:border-gray-600"
        >
            <img src={img_url} alt={name} className="rounded-md mb-2" />
            <div className="flex items-center justify-between mb-2">
                <h1 className="font-medium text-sm truncate">{name}</h1>
                <span className="font-bold text-sm">{price}$</span>
            </div>
            <h2 className="text-xs truncate">{description}</h2>
        </a>
    );
};

export default ProductCard;
