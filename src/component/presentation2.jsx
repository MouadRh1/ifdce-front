
import studentimage1 from '../assets/studentimage1.png'

export default function Presentation2() {
    return (
        <section className="relative max-w-screen-xl mx-auto py-16 px-4 md:px-8">
            <div className="relative z-10 gap-12 items-center lg:flex">
                <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
                    <img 
                        src={studentimage1}
                        alt="Étudiant en formation hybride" 
                        className="w-full rounded-lg shadow-lg" 
                    />
                </div>
              
                <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
                    <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl mb-6">
                        Une école <span className="text-indigo-600">100% hybride</span>
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg mb-6">
                        Travail, famille, distance... Vous manquez de temps pour suivre des cours en présentiel ? L'IFDCE 
                        vous propose une formation 100 % à distance. Des diplômes reconnus, des cours flexibles et un 
                        accompagnement humain pour réussir à votre rythme.
                    </p>
                    
                    <div className="space-y-4">
                        <div className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                            <span>Formation 100% à distance</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                            <span>Diplômes reconnus</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                            <span>Accompagnement personnalisé</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}