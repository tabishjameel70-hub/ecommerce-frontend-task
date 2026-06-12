import { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './components/App.css'
import Productsection from './components/Productsection';

const App = () => {
    const [input, setinput] = useState('');
    const [loading, setloading] = useState(false);
    const [Error, setError] = useState(false);
    const [frontData, setfrontData] = useState(null);
    const [home, sethome] = useState(null);
    const [kitcehb, setkitcehb] = useState(null);
    const [allData, setallData] = useState(null);
    const Allproducts = async () => {
        if (input === '') {
            alert("please enter somthing in the field");
        }
        try {
            const response = await fetch(`https://fakestoreapi.com/products`);
            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.message || "product not found!");
            }
            setallData(result);
            setError(false);
        } catch (err) {
            setallData(null);
            setError(err.message);
        }

    }
    const filterproduct = allData?.filter((product) =>
        product.title.toLowerCase().includes(input.toLowerCase())
    );
    const products = async () => {
        const API = `https://fakestoreapi.com/products?limit=5`;
        const response = await fetch(API);
        const result = await response.json();
        if (!response.ok) {
            throw new Error(result.message || 'product not found');
        }
        setfrontData(result);
        setError(false);
    }
    const homeappliances = async () => {
        const response = await fetch(`https://dummyjson.com/products/category/furniture`);
        const result = await response.json();
        sethome(result.products);
        setError(false);
    }
    const kitchenappliances = async () => {
        const response = await fetch(`https://dummyjson.com/products/category/kitchen-accessories?limit=5`);
        const result = await response.json();
        setkitcehb(result.products);
        setError(false);
    }
    useEffect(() => {
        products(),
        homeappliances();
        kitchenappliances();
    }, [])
    return (
        <div>
            <Navbar input={input} setinput={setinput} onSearch={Allproducts}/>
            <header>
                <Hero />
            </header>
            <Productsection allData={filterproduct} frontData={frontData} home={home} kitcehb={kitcehb} />
        </div>
    )
}
export default App