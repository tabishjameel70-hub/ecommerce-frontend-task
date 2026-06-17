import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, data } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SearchResult from './pages/searchresult.jsx';
import './components/App.css';
import Productsection from './components/Productsection';
import Accessories from './pages/accessories.jsx';
import Electronics from './pages/electronics.jsx';
import smartPhones from './pages/Smartphones.jsx'
import Oppo from './pages/Oppo.jsx'
import Apple from './pages/Apple.jsx'
import Realme from './pages/Realme.jsx';
import Hero from './components/Hero.jsx';
const Appcontent = () => {
    const [input, setinput] = useState('');
    const [Error, setError] = useState(false);
    const [loading, setloading] = useState(false)
    const [frontData, setfrontData] = useState(null);
    const [home, sethome] = useState(null);
    const [kitcehb, setkitcehb] = useState(null);
    const [allData, setallData] = useState(null);
    const [TechData, setTechData] = useState(null);
    const [clothing, setclothing] = useState(null);
    const [decore, setdecore] = useState(null);
    const [access, setaccess] = useState(null);
    const [electronicsData, setelectronicsData] = useState(null)
    const [smart, setsmart] = useState(null);
    const [oppoData, setoppoData] = useState(null);
    const [appleData, setappleData] = useState(null);
    const [realmeData, setrealmeData] = useState(null);
    const Allproducts = async () => {
        if (input === '') {
            alert("please enter something");
            return;
        }
        try {
            const response = await fetch(`https://dummyjson.com/products/search?q=${input}`)
            const result = await response.json();
            setallData(result.products) // ✅ removed filter
            setError(false);
        } catch (err) {
            setallData(null);
            setError(err.message);
        }
    }
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
    const ConsumerElectronics = async () => {
        const [mobiles, laptops, accessories, watches, tablets] = await Promise.all([
            fetch('https://dummyjson.com/products/category/smartphones?limit=1').then(r => r.json()),
            fetch('https://dummyjson.com/products/category/laptops?limit=1').then(r => r.json()),
            fetch('https://dummyjson.com/products/category/mobile-accessories?limit=1').then(r => r.json()),
            fetch('https://dummyjson.com/products/category/watches?limit=1').then(r => r.json()),
            fetch('https://dummyjson.com/products/category/tablets?limit=1').then(r => r.json()),

        ])
        const merged = [
            ...mobiles.products,
            ...laptops.products,
            ...accessories.products,
            ...watches.products,
            ...tablets.products,
        ]
        setTechData(merged)
    }
    const clothingappliances = async () => {
        // ✅ Fix
        const [Mens, Women] = await Promise.all([
            fetch(`https://dummyjson.com/products/category/mens-shirts?limit=3`).then(r => r.json()),
            fetch(`https://dummyjson.com/products/category/womens-dresses?limit=2`).then(r => r.json()),
        ])
        const merged = [
            ...Mens.products,
            ...Women.products,
        ]
        setclothing(merged);
    }
    const decorationappliances = async () => {
        const res = await fetch(`https://dummyjson.com/products/category/home-decoration`)
        const result = await res.json();
        setdecore(result.products);
    }
    const accessories = async () => {
        const response = await fetch(`https://dummyjson.com/products/category/mobile-accessories?limit=20`);
        const result = await response.json();
        setaccess(result.products);
        setError(false);
    }
    const electonics = async () => {
        const [mobiles, laptops, accessories, watches, tablets] = await Promise.all([
            fetch('https://dummyjson.com/products/category/smartphones?limit=1').then(r => r.json()),
            fetch('https://dummyjson.com/products/category/laptops?limit=2').then(r => r.json()),
            fetch('https://dummyjson.com/products/category/mobile-accessories?limit=1').then(r => r.json()),
            fetch('https://dummyjson.com/products/category/watches?limit=2').then(r => r.json()),
            fetch('https://dummyjson.com/products/category/tablets?limit=2').then(r => r.json()),

        ])
        const merged = [
            ...mobiles.products,
            ...laptops.products,
            ...accessories.products,
            ...watches.products,
            ...tablets.products,
        ]
        setelectronicsData(merged);
    }
    const Smartphones = async () => {
        const response = await fetch(`https://dummyjson.com/products/category/smartphones?limit=15`);
        const result = await response.json();
        setsmart(result.products);
        setError(false);

    }
    const toggleproducts = async () => {
        const response = await fetch(`https://dummyjson.com/products/category/smartphones?limit=10`);
        const result = await response.json();
        const product1 = result.products.filter(p => p.brand === 'Oppo');
        setoppoData(product1);
        const product2 = result.products.filter(p => p.brand === "Apple");
        setappleData(product2);
        const product3 = result.products.filter(p => p.brand === "Realme");
        setrealmeData(product3);
    }
    useEffect(() => {
        const fetches = async () => {
            setloading(true);
            await Promise.all([
                ConsumerElectronics(),
                products(),
                homeappliances(),
                kitchenappliances(),
                clothingappliances(),
                decorationappliances(),
                accessories(),
                electonics(),
                Smartphones(),
                toggleproducts(),
            ])
            setloading(false);
        }
        fetches();
    }, [])
    return (
        <>
            <Navbar input={input} setinput={setinput} onSearch={Allproducts} />
            <Routes>
                <Route path="/" element={
                    <>
                        <Productsection frontData={frontData} home={home} kitcehb={kitcehb} TechData={TechData} loading={loading} clothing={clothing} decore={decore} />
                    </>
                } />
                <Route path="/search" element={
                    <SearchResult
                        filterproduct={allData}
                        input={input}
                        frontData={frontData}
                        home={home}
                        kitcehb={kitcehb}
                        TechData={TechData}
                        loading={loading}
                        clothing={clothing}
                        decore={decore}
                        access={access}
                        electronicsData={electronicsData}
                        smart={smart}
                        oppoData={oppoData}
                        appleData={appleData}
                       realmeData={realmeData}
                    />
                } />
                <Route path='/search' element={
                    <Accessories access={access} />
                } />
                <Route path='/search' element={
                    <Electronics electronicsData={electronicsData} />
                } />
                <Route path='/search' element={
                    <Smartphones smart={smart} />
                } />
                <Route path='/search' element={
                    <Oppo 
                        oppoData={oppoData}
                    />
                } />
                <Route path='/search' element={
                    <Apple
                        appleData={appleData}
                    />
                } />
                <Route path='/search' element={
                    <Realme
                       realmeData={realmeData}
                    />
                } />
            </Routes>
        </>
    )
}
const App = () => {
    return (
        <BrowserRouter>
            <Appcontent />
        </BrowserRouter>
    )
}

export default App
