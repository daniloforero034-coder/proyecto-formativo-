import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

export default function App() {
  return (
    <>
      <NavBar />

      <main className="min-h-screen bg-fondo">

        {/* HERO PRINCIPAL */}
        <section className="relative overflow-hidden">

          {/* Fondos decorativos */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-verde-claro rounded-full blur-3xl opacity-40"></div>

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-naranja-claro rounded-full blur-3xl opacity-30"></div>

          <div className="relative max-w-7xl mx-auto px-6 py-24">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* TEXTO */}
              <div>

                {/* Etiqueta */}
                <span className="inline-flex items-center gap-2 px-5 py-2 bg-verde-claro text-color-title rounded-full font-semibold mb-6">
                  🐑 Plataforma Inteligente de Gestión Ovina
                </span>

                {/* TÍTULO */}
                <h1 className="text-5xl md:text-6xl font-black leading-tight mb-8">

                  <span className="bg-gradient-to-r from-btn-confim via-naranja-claro to-amarillo-claro bg-clip-text text-transparent">
                    Bienvenido a OVIADSO
                  </span>

                </h1>

                {/* DESCRIPCIÓN PRINCIPAL */}
                <p className="text-xl text-color-title leading-9 mb-6">
                  Administra y controla la producción ovina de forma eficiente
                  desde una sola plataforma moderna, diseñada para optimizar
                  procesos, mejorar la organización y facilitar la toma de
                  decisiones.
                </p>

                {/* DESCRIPCIÓN SECUNDARIA */}
                <p className="text-lg text-color-subtitle leading-8 mb-10">
                  Registra nacimientos, controla la alimentación, monitorea el
                  estado sanitario, realiza seguimiento reproductivo y gestiona
                  el peso de cada animal. Toda la información estará disponible
                  de manera organizada, segura y accesible.
                </p>

                {/* BOTONES */}
                <div className="flex flex-wrap gap-4">

                  {/* Botón principal */}
                  <button
                    className="
                      px-8
                      py-4
                      rounded-2xl
                      bg-btn-confim
                      text-white
                      font-bold
                      shadow-xl
                      hover:bg-naranja-claro
                      hover:scale-105
                      transition-all
                      duration-300
                    "
                  >
                    Explorar Plataforma
                  </button>

                  {/* Botón secundario */}
                  <button
                    className="
                      px-8
                      py-4
                      rounded-2xl
                      border-2
                      border-btn-information
                      text-btn-information
                      font-bold
                      hover:bg-btn-information
                      hover:text-white
                      transition-all
                      duration-300
                    "
                  >
                    Conocer Más
                  </button>

                </div>

              </div>


              {/* IMAGEN PRINCIPAL */}
              <div className="relative flex justify-center">

                {/* Decoración detrás de la imagen */}
                <div className="absolute w-[450px] h-[450px] bg-verde-exito rounded-full blur-3xl opacity-40"></div>

                <img
                  src="/bono.jpeg"
                  alt="Sistema OVIADSO"
                  className="
                    relative
                    w-full
                    max-w-[500px]
                    h-[500px]
                    object-cover
                    rounded-[40px]
                    shadow-2xl
                    border-[10px]
                    border-white
                    hover:scale-105
                    transition-all
                    duration-500
                  "
                />

              </div>

            </div>


            {/* SECCIÓN UNIDAD OVINA */}
            <div className="mt-24">

              <div
                className="
                  bg-white
                  rounded-[40px]
                  shadow-2xl
                  overflow-hidden
                  border
                  border-color-border
                "
              >

                <div className="grid lg:grid-cols-2 items-center">

                  <img
                    src="/unidaddeovinos.jpeg"
                    alt="Unidad de Ovinos"
                    className="w-full h-full object-cover min-h-[450px]"
                  />

                  <div className="p-12">

                    {/* Etiqueta */}
                    <span className="bg-verde-claro text-color-title px-4 py-2 rounded-full font-semibold">
                      Centro Agropecuario La Granja
                    </span>

                    {/* Título */}
                    <h2 className="text-4xl font-bold text-color-title mt-6 mb-6">
                      Innovación para la Gestión Ovina
                    </h2>

                    {/* Texto */}
                    <p className="text-color-subtitle text-lg leading-8 mb-6">
                      La Unidad de Ovinos del Centro Agropecuario La Granja del
                      SENA Espinal es un espacio dedicado a la producción,
                      manejo y seguimiento técnico de los ovinos.
                    </p>

                    <p className="text-color-subtitle text-lg leading-8">
                      OVIADSO surge como una solución tecnológica que permite
                      centralizar la información, optimizar procesos y mejorar
                      la eficiencia administrativa y productiva mediante una
                      gestión digital moderna.
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* CARACTERÍSTICAS */}
            <div className="grid md:grid-cols-3 gap-8 mt-20">

              {/* TARJETA 1 */}
              <div
                className="
                  bg-white
                  p-8
                  rounded-3xl
                  shadow-lg
                  border
                  border-color-border
                  hover:shadow-2xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >

                <div className="text-5xl mb-4">
                  🐑
                </div>

                <h3 className="text-2xl font-bold text-color-title mb-3">
                  Control Ovino
                </h3>

                <p className="text-color-subtitle">
                  Registro detallado de cada animal, historial productivo,
                  reproductivo y sanitario.
                </p>

              </div>


              {/* TARJETA 2 */}
              <div
                className="
                  bg-white
                  p-8
                  rounded-3xl
                  shadow-lg
                  border
                  border-color-border
                  hover:shadow-2xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >

                <div className="text-5xl mb-4">
                  📊
                </div>

                <h3 className="text-2xl font-bold text-color-title mb-3">
                  Información Centralizada
                </h3>

                <p className="text-color-subtitle">
                  Consulta toda la información de la unidad desde una sola
                  plataforma de manera rápida y organizada.
                </p>

              </div>


              {/* TARJETA 3 */}
              <div
                className="
                  bg-white
                  p-8
                  rounded-3xl
                  shadow-lg
                  border
                  border-color-border
                  hover:shadow-2xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >

                <div className="text-5xl mb-4">
                  🚀
                </div>

                <h3 className="text-2xl font-bold text-color-title mb-3">
                  Mayor Productividad
                </h3>

                <p className="text-color-subtitle">
                  Optimiza recursos y mejora la toma de decisiones mediante
                  datos confiables y actualizados.
                </p>

              </div>

            </div>


            {/* ESTADÍSTICAS */}
            <div className="grid md:grid-cols-4 gap-6 mt-20">

              {/* Estadística 1 */}
              <div
                className="
                  bg-verde-claro
                  rounded-3xl
                  p-8
                  text-center
                  shadow-lg
                  border
                  border-color-border
                "
              >

                <h3 className="text-5xl font-black text-color-title">
                  100%
                </h3>

                <p className="text-color-subtitle mt-2">
                  Digital
                </p>

              </div>


              {/* Estadística 2 */}
              <div
                className="
                  bg-amarillo-claro
                  rounded-3xl
                  p-8
                  text-center
                  shadow-lg
                  border
                  border-color-border
                "
              >

                <h3 className="text-5xl font-black text-color-title">
                  24/7
                </h3>

                <p className="text-color-subtitle mt-2">
                  Disponibilidad
                </p>

              </div>


              {/* Estadística 3 */}
              <div
                className="
                  bg-verde-exito
                  rounded-3xl
                  p-8
                  text-center
                  shadow-lg
                  border
                  border-color-border
                "
              >

                <h3 className="text-5xl font-black text-color-title">
                  +6
                </h3>

                <p className="text-color-subtitle mt-2">
                  Módulos
                </p>

              </div>


              {/* Estadística 4 */}
              <div
                className="
                  bg-btn-information
                  rounded-3xl
                  p-8
                  text-center
                  shadow-lg
                  border
                  border-color-border
                "
              >

                <h3 className="text-5xl font-black text-white">
                  🐑
                </h3>

                <p className="text-white mt-2">
                  Gestión Inteligente
                </p>

              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
} 