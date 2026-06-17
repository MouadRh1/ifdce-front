// src/page/about.jsx
import Cards from "../component/cards";
import Bloc from "../component/bloc";
import Faqs from "../component/faqs";
import FeaturedPrograms from "../component/FeaturedPrograms";

export default function About() {
    return (
        <>
            <Bloc />
            {/* Nouvelle section des programmes phares */}
            <FeaturedPrograms />
            <Cards />
            <Faqs />
        </>
    );
}