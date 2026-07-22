export default function TableBirth() {
  return (
    <div className="min-h-screen bg-fondo p-6">

      <div
        className="
          max-w-6xl
          mx-auto
          bg-white
          shadow-lg
          rounded-xl
          p-6
          border-t-4
          border-btn-confim
        "
      >

        
        <h1 className="text-3xl font-bold text-center mb-6 text-color-title">
          Tabla de Nacimientos
        </h1>


        
        <div className="overflow-x-auto">

          <table className="w-full rounded-lg overflow-hidden shadow-md">

           
            <thead className="bg-color-header text-white">

              <tr>
                <th className="p-3">ID</th>
                <th className="p-3">Fecha</th>
                <th className="p-3">ID Ganado</th>
                <th className="p-3">ID Madre</th>
                <th className="p-3">Peso</th>
                <th className="p-3">Estado</th>
                <th className="p-3">Notas</th>
              </tr>

            </thead>


          
            <tbody className="text-center text-color-title">


         
              <tr
                className="
                  border-b
                  border-color-border
                  hover:bg-verde-claro
                  transition
                "
              >

                <td className="p-3">
                  1
                </td>

                <td className="p-3">
                  09/06/2026
                </td>

                <td className="p-3">
                  201
                </td>

                <td className="p-3">
                  101
                </td>

                <td className="p-3 font-semibold">
                  4.5 kg
                </td>

                <td className="p-3 text-btn-information font-bold">
                  Activo
                </td>

                <td className="p-3">
                  Nacimiento normal
                </td>

              </tr>


            
              <tr
                className="
                  border-b
                  border-color-border
                  hover:bg-verde-claro
                  transition
                  bg-fondo
                "
              >

                <td className="p-3">
                  2
                </td>

                <td className="p-3">
                  08/06/2026
                </td>

                <td className="p-3">
                  202
                </td>

                <td className="p-3">
                  102
                </td>

                <td className="p-3 font-semibold">
                  5 kg
                </td>

                <td className="p-3 text-btn-information font-bold">
                  Activo
                </td>

                <td className="p-3">
                  Cría saludable
                </td>

              </tr>


              
              <tr
                className="
                  hover:bg-verde-claro
                  transition
                "
              >

                <td className="p-3">
                  3
                </td>

                <td className="p-3">
                  07/06/2026
                </td>

                <td className="p-3">
                  203
                </td>

                <td className="p-3">
                  103
                </td>

                <td className="p-3 font-semibold">
                  3.8 kg
                </td>

                <td className="p-3 text-color-title font-bold">
                  Inactivo
                </td>

                <td className="p-3">
                  Revisión requerida
                </td>

              </tr>


            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}