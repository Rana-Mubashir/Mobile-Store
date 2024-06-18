import React from 'react'
import ModelsPage from './ModelsPage';
import AccessoriesBarPage from "./AccessoriesBarPage";
import AccessoriesCardPage from "./AccessoriesCardPage";
import NewArrivalsPage from './NewArrivalsPage';
import TestimonialsPage from "./TestimonialsPage";


function LandingPage() {
    return (
        <div>
            <ModelsPage />
            <AccessoriesBarPage />
            <AccessoriesCardPage />
            <NewArrivalsPage />
            <TestimonialsPage />
        </div>
    )
}

export default LandingPage