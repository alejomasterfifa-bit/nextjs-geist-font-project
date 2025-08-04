import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Curso de Domótica en Casa
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Un curso completo diseñado para estudiantes de escuela técnica que desean convertirse en expertos en automatización del hogar
          </p>
          <div className="mb-8">
            <img 
              src="https://placehold.co/1200x600?text=Moderno+sistema+de+domotica+integrado+en+casa+inteligente+con+Raspberry+Pi+sensores+y+dispositivos+conectados"
              alt="Sistema moderno de domótica integrado en casa inteligente con Raspberry Pi, sensores y dispositivos conectados"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/1200x600?text=Error+cargando+imagen';
              }}
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
              ¿Qué aprenderás?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Raspberry Pi como Central</h3>
                    <p className="text-gray-600 dark:text-gray-300">Configuración y programación del cerebro de tu sistema domótico</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Sensores y Actuadores</h3>
                    <p className="text-gray-600 dark:text-gray-300">Luminosidad, humedad, presencia y más</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Sistemas de Seguridad</h3>
                    <p className="text-gray-600 dark:text-gray-300">Protege tu hogar con tecnología avanzada</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Inteligencia Artificial</h3>
                    <p className="text-gray-600 dark:text-gray-300">Integra IA para automatización inteligente</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Guía de Compras</h3>
                    <p className="text-gray-600 dark:text-gray-300">Qué elementos comprar y dónde encontrarlos</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-indigo-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Proyecto Integrador</h3>
                    <p className="text-gray-600 dark:text-gray-300">Implementación práctica completa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/domotica"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Comenzar el Curso
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
