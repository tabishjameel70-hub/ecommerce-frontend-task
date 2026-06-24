import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, data, useNavigate } from 'react-router-dom';
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
import Productinfo from './pages/Productinfo.jsx'
import Login from './pages/Login.jsx';
import Automobiles from './pages/Automobiles.jsx';
import Clothes from './pages/clothesandwear.jsx'
import HomeDecorPage from './pages/Homeanddecore.jsx'
import ComputerTechPage from './pages/Computertechpage.jsx';
import ToolsEquipmentPage from './pages/ToolsEquipmentPage.jsx';
import SportsOutdoorsPage from './pages/SportsOutdoorsPage.jsx';
import AnimalPetsPage from './pages/AnimalPetsPage.jsx';
import MachineryToolsPage from './pages/MachineryToolsPage.jsx';
import Hotoffers from './pages/Hotoffers.jsx';
import Productinfo2 from './pages/productinfo2.jsx';
import Productinfo3 from './pages/productinfo3.jsx';
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
    const [filteredByPriceData, setFilteredByPriceData] = useState([]);
    const [currentPrice, setcurrentPrice] = useState(0);
    const [maxPrice, setmaxPrice] = useState(1000);
    const [productDetails, setproductDetails] = useState(null);
    const [automobile, setautomobile] = useState(null);
    const [clothesandWear, setclothesandWear] = useState(null);
    const [homeDecorData, setHomeDecorData] = useState([]);
    const [techData, setTechDataList] = useState([]);
    const [toolsData, setToolsData] = useState([]);
    const [sportsData, setSportsData] = useState([]);
    const [animalsData, setAnimalsData] = useState([]);
    const [machineryData, setMachineryData] = useState([]);
    const [moreCategoryData, setMoreCategoryData] = useState([]);
    const [offers, setoffers] = useState(null);
    const navigate = useNavigate();
    const Allproducts = async () => {
        if (input === '') {
            alert("please enter something");
            return;
        }
        try {
            const response = await fetch(`https://dummyjson.com/products/search?q=${input}`)
            const result = await response.json();
            setallData(result.products);
            navigate('/search');
            setError(false);
        } catch (err) {
            setallData(null);
            setError(err.message);
        }
    }
    const products = async () => {
        const API = `https://dummyjson.com/products?limit=5`;
        const response = await fetch(API);
        const result = await response.json();
        if (!response.ok) {
            throw new Error(result.message || 'product not found');
        }
        setfrontData(result.products);
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
    const filterproductprice = async () => {
        const response = await fetch(`https://dummyjson.com/products/category/smartphones?limit=10`);
        const result = await response.json();
        const products = result.products.filter(p => Number(p.price) >= currentPrice && Number(p.price) <= maxPrice);
        setFilteredByPriceData(products);
    }
    const Automobile = async () => {
        const response = await fetch(`https://dummyjson.com/products/category/vehicle`);
        const result = await response.json();
        setautomobile(result.products);
        setError(null);
    }
    const clotheswear = async () => {
        const [Mens, Women] = await Promise.all([
            fetch(`https://dummyjson.com/products/category/mens-shirts?limit=3`).then(r => r.json()),
            fetch(`https://dummyjson.com/products/category/womens-dresses?limit=2`).then(r => r.json()),
        ])
        const merged = [
            ...Mens.products,
            ...Women.products,
        ]
      setclothesandWear(merged);
    }
    const homeAndDecor = async () => {
        try {
            const res = await fetch('https://dummyjson.com/products/category/home-decoration');
            const data = await res.json();
            setHomeDecorData(data.products || data);
        } catch (err) { console.error(err); }
    };

    const computerAndTech = async () => {
        try {
            const res = await fetch('https://dummyjson.com/products/category/laptops');
            const data = await res.json();
            setTechData(data.products || data);
        } catch (err) { console.error(err); }
    };

    const toolsEquipments = async () => {
        try {
            // DummyJSON does not have a tools category; pulling mobile-accessories as a safe data fallback
            const res = await fetch('https://dummyjson.com/products/category/mobile-accessories');
            const data = await res.json();
            setToolsData(data.products || data);
        } catch (err) { console.error(err); }
    };

    const sportsAndOutdoors = async () => {
        try {
            const res = await fetch('https://dummyjson.com/products/category/sports-accessories');
            const data = await res.json();
            setSportsData(data.products || data);
        } catch (err) { console.error(err); }
    };

    const animalAndPets = async () => {
        try {
            // Fallback endpoint to ensure items display on the screen
            const res = await fetch('https://dummyjson.com/products/category/groceries');
            const data = await res.json();
            setAnimalsData(data.products || data);
        } catch (err) { console.error(err); }
    };

    const machineryTools = async () => {
        try {
            const res = await fetch('https://dummyjson.com/products/category/lighting');
            const data = await res.json();
            setMachineryData(data.products || data);
        } catch (err) { console.error(err); }
    };

    const moreCategory = async () => {
        try {
            const res = await fetch('https://dummyjson.com/products/category/sunglasses');
            const data = await res.json();
            setMoreCategoryData(data.products || data);
        } catch (err) { console.error(err); }
    };
    const hoffers = async () => {
        const response = await fetch(`https://dummyjson.com/products`);
        const result = await response.json();
        setoffers(result.products);
        setError(false);
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
                filterproductprice(),
                Automobile(),
             clotheswear(),
                homeAndDecor(),
                computerAndTech(),
                toolsEquipments(),
                sportsAndOutdoors(),
                animalAndPets(),
                machineryTools(),
                moreCategory(),
                hoffers(),
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
                    <Productsection frontData={frontData} home={home} kitcehb={kitcehb} TechData={TechData} loading={loading} clothing={clothing} decore={decore} />
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
                        maxPrice={maxPrice}
                        setcurrentPrice={setcurrentPrice}
                        currentPrice={currentPrice}
                        setmaxPrice={setmaxPrice}
                        filteredByPriceData={filteredByPriceData}
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
                <Route path="/productdetails/:id" element={
                    <Productinfo
                    />
                } />
                <Route path="/login" element={
                    <Login
                    />
                } />
                <Route path="/Automobiles" element={
                    <Automobiles
                        automobile={automobile}
                    />
                } />
                <Route path="/clothes" element={
                    <Clothes
                        clothesandWear={clothesandWear}
                    />
                } />
                <Route path="/home-decor" 
                element={<HomeDecorPage products={homeDecorData} loading={loading} />} />
                <Route path="/computer-tech" 
                element={<ComputerTechPage products={techData} loading={loading} />} />
                <Route path="/tools-equipment" 
                element={<ToolsEquipmentPage products={toolsData} loading={loading} />} />
                <Route path="/sports-outdoors" 
                element={<SportsOutdoorsPage products={sportsData} loading={loading} />} />
                <Route path="/animal-pets" 
                element={<AnimalPetsPage products={animalsData} loading={loading} />} />
                <Route path="/machinery-tools" 
                element={<MachineryToolsPage products={machineryData} loading={loading} />} />
                <Route path="/Hotoffers" element={
                    <Hotoffers
                        offers={offers}
                    />
                } />
                 <Route path="/productdeta" element={
                    <Hotoffers
                        offers={offers}
                    />
                } />     
                 <Route path="/productdetails2/:id" element={
                    <Productinfo2
                    />
                } />
                <Route path="/productdetails3/:id" element={
                    <Productinfo3
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
