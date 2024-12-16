import { useState } from "react";
import CollapsibleSection from "./CollapsibleSection";

interface SideBarProps {
    onApplyFilters: (filters: Record<string, any>) => void;
}

const SideBar: React.FC<SideBarProps> = ({ onApplyFilters }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleSection = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const filters: Record<string, any> = {};

        filters.sizes = formData.getAll("sizes");
        filters.availability = formData.getAll("availability");
        filters.categories = formData.getAll("categories");
        filters.colors = formData.getAll("colors");
        filters.minPrice = formData.get("minPrice");
        filters.maxPrice = formData.get("maxPrice");

        onApplyFilters(filters);
    };

    return (
        <div className="fixed top-20 left-0 h-full w-1/2 lg:w-1/4 z-20 overflow-y-auto shadow-lg bg-white dark:bg-black text-black dark:text-white">
            <div className="ml-6">
                <h1 className="font-bold pt-10 text-2xl mb-5">Filters</h1>
                <h2 className="text-xl">Size</h2>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="mt-3 border-b-2 pb-5 mr-5 border-dotted w-auto flex flex-wrap border-black dark:border-white">
                        {["XS", "S", "M", "L", "XL", "2XL"].map((size) => (
                            <div key={size} className="flex">
                                <input
                                    name="sizes"
                                    className="size-4 m-2"
                                    value={size}
                                    type="checkbox"
                                />
                                <span className="m-1">{size}</span>
                            </div>
                        ))}
                    </div>
                    <CollapsibleSection
                        title="Availability"
                        isOpen={openIndex === 0}
                        onToggle={() => toggleSection(0)}
                    >
                        <div className="w-full flex my-2">
                            <input
                                name="availability"
                                className="checkbox-md"
                                value="In Stock"
                                type="checkbox"
                            />
                            <span className="ml-2">In Stock</span>
                        </div>
                        <div className="w-full flex">
                            <input
                                name="availability"
                                className="checkbox-md"
                                value="Out of Stock"
                                type="checkbox"
                            />
                            <span className="ml-2">Out of Stock</span>
                        </div>
                    </CollapsibleSection>

                    <CollapsibleSection
                        title="Category"
                        isOpen={openIndex === 1}
                        onToggle={() => toggleSection(1)}
                    >
                        <div className="w-full flex my-2">
                            <input
                                name="categories"
                                className="checkbox-md"
                                value="Men"
                                type="checkbox"
                            />
                            <span className="ml-2">Men</span>
                        </div>
                        <div className="w-full flex">
                            <input
                                name="categories"
                                className="checkbox-md"
                                value="Women"
                                type="checkbox"
                            />
                            <span className="ml-2">Women</span>
                        </div>
                    </CollapsibleSection>

                    <CollapsibleSection
                        title="Colors"
                        isOpen={openIndex === 2}
                        onToggle={() => toggleSection(2)}
                    >
                        <div className="flex flex-wrap">
                            {[
                                "Red",
                                "Blue",
                                "Green",
                                "Yellow",
                                "White",
                                "Black",
                            ].map((color) => (
                                <div key={color} className="w-full flex my-2">
                                    <input
                                        name="colors"
                                        className="checkbox-md"
                                        value={color}
                                        type="checkbox"
                                    />
                                    <span className="ml-2">{color}</span>
                                </div>
                            ))}
                        </div>
                    </CollapsibleSection>

                    <CollapsibleSection
                        title="Price Range"
                        isOpen={openIndex === 3}
                        onToggle={() => toggleSection(3)}
                    >
                        <div className="w-full flex my-2">
                            <label>Min:</label>
                            <input
                                name="minPrice"
                                type="number"
                                className="ml-2 border p-0.5 bg-white dark:bg-black"
                                placeholder="0"
                            />
                        </div>
                        <div className="w-full flex my-2">
                            <label>Max:</label>
                            <input
                                name="maxPrice"
                                type="number"
                                className="ml-2 border p-0.5 bg-white dark:bg-black"
                                placeholder="1000"
                            />
                        </div>
                    </CollapsibleSection>
                    <button type="submit" className="btn mt-2">
                        Apply Filters
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SideBar;
