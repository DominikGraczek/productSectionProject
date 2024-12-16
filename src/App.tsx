import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import SideBar from "./components/SideBar";
import { useState } from "react";

const App = () => {
    const [filters, setFilters] = useState<Record<string, any>>({});

    const handleApplyFilters = (appliedFilters: Record<string, any>) => {
        setFilters(appliedFilters);
        console.log("Applied Filters:", appliedFilters);
    };
    return (
        <div>
            <NavBar />
            <SideBar onApplyFilters={handleApplyFilters} />
            <ProductList filters={filters} />
        </div>
    );
};

export default App;
