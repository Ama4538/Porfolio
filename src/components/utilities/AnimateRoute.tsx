import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Page Imports
import Home from "../../pages/Home";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Project from "../../pages/Project";

// Animation
const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
};

const pageTransition = {
    duration: 0.20,
};

const AnimatedRoutes = () => {
    // Used for routing
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.key}>
                <Route
                    path="/"
                    element={
                        <motion.div
                            variants={pageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={pageTransition}
                        >
                            <Home />
                        </motion.div>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <motion.div
                            variants={pageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={pageTransition}
                        >
                            <About />
                        </motion.div>
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <motion.div
                            variants={pageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={pageTransition}
                        >
                            <Contact />
                        </motion.div>
                    }
                />
                <Route
                    path="/projects/:projectName"
                    element={
                        <motion.div
                            variants={pageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={pageTransition}
                        >
                            <Project />
                        </motion.div>
                    }
                />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;