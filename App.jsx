import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutResearch from './pages/AboutResearch';
import Methodology from './pages/Methodology';
import Outcomes from './pages/Outcomes';
import Researcher from './pages/Researcher';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutResearch />} />
                    <Route path="/methodology" element={<Methodology />} />
                    <Route path="/outcomes" element={<Outcomes />} />
                    <Route path="/researcher" element={<Researcher />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
