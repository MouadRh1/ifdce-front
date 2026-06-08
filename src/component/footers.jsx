import ifdclogo from "../assets/logofdce.png"

export default function Footers() {
    const footerNavs = [
        {
            label: "Services",
            items: [
                {
                    href: '/diplomas',
                    name: 'Formations diplômantes'
                },
                {
                    href: '/vae',
                    name: 'VAE'
                },
                {
                    href: '/conseil',
                    name: 'Conseil en formation'
                },
                {
                    href: '/support',
                    name: 'Support'
                },
            ],
        },
        {
            label: "À propos",
            items: [
                {
                    href: '/about',
                    name: 'IFDCE'
                },
                {
                    href: '/international',
                    name: 'International'
                },
                {
                    href: '/news',
                    name: 'Actualités'
                },
                {
                    href: '/contact',
                    name: 'Contact'
                },
            ],
        },
        {
            label: "Support",
            items: [
                {
                    href: '/faq',
                    name: 'FAQ'
                },
                {
                    href: '/documentation',
                    name: 'Documentation'
                },
                {
                    href: '/aide',
                    name: 'Aide'
                },
                {
                    href: '/contact',
                    name: 'Nous contacter'
                },
            ],
        }
    ]

    return (
        <footer className="bg-gray-900 text-gray-300 mt-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    {/* Company Info & Newsletter */}
                    <div className="lg:col-span-2">
                        <div className="mb-6">
                            <img src={ifdclogo} className="h-12 w-auto mb-4" alt="IFDCE Logo" />
                            <h3 className="text-white text-lg font-semibold mb-3">
                                Institut de Formation, de Développement de Compétences et d'Excellence
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                IFDCE vous accompagne dans votre développement professionnel avec des formations 
                                diplômantes, la VAE et des programmes en ligne reconnus en France et en Europe.
                            </p>
                        </div>

                        {/* Contact Info */}
                        <div className="mb-6">
                            <h4 className="text-white font-medium mb-3">Contactez-nous</h4>
                            <div className="space-y-2 text-sm">
                                <p className="flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Immeuble N° 22, Rue Jbel Moussa, Agdal, Rabat, Maroc
                                </p>
                                <p className="flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    contact@ifdce.com
                                </p>
                                <p className="flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    +212 665654031
                                </p>
                            </div>
                        </div>

                        {/* Newsletter */}
                      
                    </div>

                    
           
                </div>

               
              
            </div>
        </footer>
    )
}