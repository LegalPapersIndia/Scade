import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About";
import Products from "./Components/Products/Products";
import Team from "./Components/Team/Team.jsx";
import Contact from "./Components/ContactUs/Contact";
import ScrollToTopButton from "./Components/ScrollToTop";
import ScrollToTopOnNavigate from "./Components/ScrollonNavigate";
import Chatbot from "./Components/Chatbot";

const FloatingBackground = () => {
  return (
    <>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate />
      {[...Array(8)].map((_, i) => (
        <Sphere key={i} args={[1, 64, 64]} position={[Math.sin(i) * 8, Math.cos(i) * 6, -10]}>
          <MeshDistortMaterial
            color="#00d4ff"
            attach="material"
            distort={0.4}
            speed={1.5 + i * 0.2}
            roughness={0}
            metalness={0.9}
            emissive="#0088ff"
            emissiveIntensity={0.6}
          />
        </Sphere>
      ))}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#00ffff" />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-gradient-to-br from-black via-blue-950 to-purple-950 overflow-hidden">
        {/* 3D Background */}
        <div className="fixed inset-0 -z-10 opacity-70">
          <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
            <Suspense fallback={null}>
              <FloatingBackground />
            </Suspense>
          </Canvas>
        </div>

        <Navbar />
        <main className="relative z-10">
          <Suspense fallback={<div className="h-screen flex items-center justify-center text-4xl font-bold text-cyan-400">Loading Scade...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<div className="text-center pt-40 text-7xl font-black text-cyan-400">404</div>} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ScrollToTopButton />
        <ScrollToTopOnNavigate />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;