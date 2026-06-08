export default function AdditionalInfo() {
    return (
        <section className="py-16 bg-blue-50">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl mb-4">
                        Chez IFDCE
                    </h3>
                  
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                        <div className="w-12 h-12 bg-indigo-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                            <span className="text-indigo-600 font-bold">T</span>
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">Technicien</h4>
                        <p className="text-gray-600 text-sm">Formation technique spécialisée</p>
                    </div>

                    <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                        <div className="w-12 h-12 bg-indigo-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                            <span className="text-indigo-600 font-bold">TS</span>
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">Technicien Spécialisé</h4>
                        <p className="text-gray-600 text-sm">Expertise technique avancée</p>
                    </div>

                    <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                        <div className="w-12 h-12 bg-indigo-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                            <span className="text-indigo-600 font-bold">L</span>
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">Licence</h4>
                        <p className="text-gray-600 text-sm">Formation universitaire</p>
                    </div>

                    <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                        <div className="w-12 h-12 bg-indigo-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                            <span className="text-indigo-600 font-bold">M</span>
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">Master</h4>
                        <p className="text-gray-600 text-sm">Recherche et expertise</p>
                    </div>
                  
                    
                </div>
                  <div className="w-full text-center p-6 md:w-1/4 h-fit justify-self-center mt-7 bg-white rounded-lg shadow-sm">
                        <div className="w-12 h-12 bg-indigo-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                            <span className="text-indigo-600 font-bold">D</span>
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">Doctorat</h4>
                        <p className="text-gray-600 text-sm">Recherche et innovation</p>
                    </div>
            </div>
        </section>
    );
}