import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../CoffeeCard/CoffeeCard";
import { useState } from "react";


const MainLayout = () => {
    const loadedCoffees= useLoaderData();
    const [coffees,setCoffees]= useState(loadedCoffees)
    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-center text-3xl font-bold mt-4">Hot Cold Coffee</h1>

           <div className=" md:grid md:grid-cols-2 gap-4 mt-10 sm:space-y-4">
           {
                coffees.map(coffee => <CoffeeCard key={coffee._id}
                     coffee={coffee}
                     coffees={coffees}
                     setCoffees={setCoffees}
                     ></CoffeeCard>)
            }
           </div>
        </div>
    );
};

export default MainLayout;