function FormCreationBirth() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-fondo p-6">

      <div
        className="
          w-full
          max-w-md
          bg-white
          shadow-lg
          rounded-xl
          p-8
          border-t-4
          border-btn-confim
        "
      >

        
        <h2 className="text-2xl font-bold text-color-title mb-6 text-center">
          Crear Nacimiento
        </h2>


        <form className="space-y-5">


         
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-semibold text-color-title mb-1"
            >
              Fecha:
            </label>

            <input
              type="date"
              id="date"
              name="date"
              className="
                w-full
                rounded-lg
                border
                border-color-border
                bg-white
                text-color-title
                p-2
                focus:outline-none
                focus:ring-2
                focus:ring-btn-information
                focus:border-btn-information
              "
            />
          </div>


          
          <div>
            <label
              htmlFor="livestock_id"
              className="block text-sm font-semibold text-color-title mb-1"
            >
              ID Ganado:
            </label>

            <input
              type="number"
              id="livestock_id"
              name="livestock_id"
              className="
                w-full
                rounded-lg
                border
                border-color-border
                bg-white
                text-color-title
                p-2
                focus:outline-none
                focus:ring-2
                focus:ring-btn-information
                focus:border-btn-information
              "
            />
          </div>


         
          <div>
            <label
              htmlFor="mother_id"
              className="block text-sm font-semibold text-color-title mb-1"
            >
              ID Madre:
            </label>

            <input
              type="number"
              id="mother_id"
              name="mother_id"
              className="
                w-full
                rounded-lg
                border
                border-color-border
                bg-white
                text-color-title
                p-2
                focus:outline-none
                focus:ring-2
                focus:ring-btn-information
                focus:border-btn-information
              "
            />
          </div>


         
          <div>
            <label
              htmlFor="weight"
              className="block text-sm font-semibold text-color-title mb-1"
            >
              Peso:
            </label>

            <input
              type="number"
              id="weight"
              name="weight"
              className="
                w-full
                rounded-lg
                border
                border-color-border
                bg-white
                text-color-title
                p-2
                focus:outline-none
                focus:ring-2
                focus:ring-btn-information
                focus:border-btn-information
              "
            />
          </div>


          
          <div>
            <label
              htmlFor="status"
              className="block text-sm font-semibold text-color-title mb-1"
            >
              Estado:
            </label>

            <input
              type="text"
              id="status"
              name="status"
              className="
                w-full
                rounded-lg
                border
                border-color-border
                bg-white
                text-color-title
                p-2
                focus:outline-none
                focus:ring-2
                focus:ring-btn-information
                focus:border-btn-information
              "
            />
          </div>


      
          <div>
            <label
              htmlFor="notes"
              className="block text-sm font-semibold text-color-title mb-1"
            >
              Notas:
            </label>

            <input
              type="text"
              id="notes"
              name="notes"
              className="
                w-full
                rounded-lg
                border
                border-color-border
                bg-white
                text-color-title
                p-2
                focus:outline-none
                focus:ring-2
                focus:ring-btn-information
                focus:border-btn-information
              "
            />
          </div>


          
          <button
            type="submit"
            className="
              w-full
              bg-btn-confim
              hover:bg-naranja-claro
              text-white
              font-bold
              py-2
              rounded-lg
              transition
              duration-300
              shadow-md
            "
          >
            Crear Nacimiento
          </button>


        </form>

      </div>

    </div>
  );
}

export default FormCreationBirth;