export default function TableMortality() {
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
          Tabla de Mortalidades
        </h1>


        
        <div className="overflow-x-auto">

          <table className="w-full rounded-lg overflow-hidden shadow-md">


            
            <thead className="bg-color-header text-white">

              <tr>

                <th className="p-3">
                  ID
                </th>

                <th className="p-3">
                  Fecha
                </th>

                <th className="p-3">
                  ID Ganado
                </th>

                <th className="p-3">
                  Causa
                </th>

                <th className="p-3">
                  Descripción
                </th>

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
                  101
                </td>

                <td className="p-3">
                  Enfermedad
                </td>

                <td className="p-3">
                  Problema respiratorio
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
                  102
                </td>

                <td className="p-3">
                  Accidente
                </td>

                <td className="p-3">
                  Lesión grave
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
                  103
                </td>

                <td className="p-3">
                  Desconocida
                </td>

                <td className="p-3">
                  Sin información adicional
                </td>

              </tr>


            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}