import image1 from '../assets/image1.jpg'

export default function Presentation() {
    return (
        <section className="relative max-w-screen-xl mx-auto py-16 px-4 md:px-8 bg-gray-50">
            <div className="relative z-10 gap-12 items-center lg:flex">
                <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
                    <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl mb-6">
                        Se reconvertir <span className="text-indigo-600">intelligemment</span>
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg mb-6">
                        Changer de métier n'est pas une faiblesse, c'est un véritable acte de courage. 
                        À l'IFDCE, nos formations certifiantes et diplômantes — en ligne ou en présentiel — vous 
                        accompagnent dans votre reconversion.
                    </p>
                    
                    <div className="mb-6">
                        <p className="text-gray-700 font-medium mb-3">Domaines d'expertise :</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Topographie</span>
                            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Management</span>
                            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Design</span>
                            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Informatique</span>
                            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Géomatique</span>
                            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Ressources Humaines</span>
                            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Génie Civil</span>
                            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Marketing Digital</span>
                            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Comptabilité</span>
                            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Développement Web</span>
                        </div>
                    </div>
                    
                    <p className="text-gray-600 italic">
                        Quel que soit votre projet, nous sommes là pour vous.
                    </p>
                </div>
                
                <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
                    <img 
                        src={image1}
                        alt="Reconversion professionnelle" 
                        className="w-full rounded-lg shadow-lg" 
                    />
                </div>
            </div>
        </section>
    );
}