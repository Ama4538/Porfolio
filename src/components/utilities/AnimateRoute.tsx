// Imports
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion';

// Page Imports
import Home from "../../pages/Home"
import About from "../../pages/About";

const AnimatedRoutes = () => {
    // Listens to url changes to play render
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.key}>
                <Route
                    path="/"
                    element={
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.20 }}
                        >
                            <Home />
                        </motion.div>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.20 }}
                        >
                            <About />
                        </motion.div>
                    }
                />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;