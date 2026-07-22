"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import ResetPassword from "./ResetPassword";

interface LoginProps {
  textButton?: string;
}

export default function Login({
  textButton = "Ingresar",
}: LoginProps) {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
    
      <Button
        type="button"
        variant="default"
        onClick={() => setOpenDialog(true)}
        className="
          cursor-pointer
          w-auto
          px-8
          py-2
          rounded-full
          font-semibold
          text-white
          bg-gradient-to-r
          from-orange-500
          to-amber-500
          hover:opacity-90
          hover:scale-105
          transition-all
          duration-300
          shadow-lg
          border-0
        "
      >
        {textButton}
      </Button>

     
      <Dialog
        open={openDialog}
        onOpenChange={setOpenDialog}
      >
        <DialogContent
          className="
            sm:max-w-[410px]
            overflow-hidden
            rounded-3xl
            border-0
            bg-white
            p-0
            shadow-[0_15px_50px_rgba(0,0,0,0.18)]
          "
        >
          
          <div
            className="
              relative
              bg-gradient-to-r
              from-orange-500
              via-amber-500
              to-yellow-400
              px-7
              py-7
              text-white
            "
          >
            
            <div
              className="
                absolute
                top-0
                right-0
                w-32
                h-32
                bg-white/10
                rounded-full
                blur-3xl
              "
            />

            <DialogHeader className="text-center items-center">
              <DialogTitle
                className="
                  text-3xl
                  font-bold
                  tracking-tight
                  text-white
                "
              >
                Bienvenido
              </DialogTitle>

              <DialogDescription
                className="
                  text-orange-100
                  text-sm
                  mt-1
                "
              >
                Inicia sesión para continuar
              </DialogDescription>
            </DialogHeader>
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();

           
            }}
          >
            <div className="p-7">
              <FieldGroup className="space-y-5">

               
                <Field>
                  <Label
                    htmlFor="usuario"
                    className="
                      text-sm
                      font-medium
                      text-gray-700
                    "
                  >
                    Usuario
                  </Label>

                  <Input
                    id="usuario"
                    name="usuario"
                    type="text"
                    placeholder="Ingrese usuario o correo"
                    className="
                      mt-2
                      h-11
                      rounded-xl
                      border-gray-200
                      bg-gray-50
                      text-sm
                      focus-visible:ring-2
                      focus-visible:ring-orange-400
                      focus-visible:border-orange-400
                      transition-all
                    "
                  />
                </Field>

               
                <Field>
                  <Label
                    htmlFor="contraseña"
                    className="
                      text-sm
                      font-medium
                      text-gray-700
                    "
                  >
                    Contraseña
                  </Label>

                  <Input
                    id="contraseña"
                    name="contraseña"
                    type="password"
                    placeholder="Ingrese su contraseña"
                    className="
                      mt-2
                      h-11
                      rounded-xl
                      border-gray-200
                      bg-gray-50
                      text-sm
                      focus-visible:ring-2
                      focus-visible:ring-orange-400
                      focus-visible:border-orange-400
                      transition-all
                    "
                  />

                  
                  <div className="mt-3 text-right">
                    <ResetPassword
                      OnClick={() => setOpenDialog(true)}
                      textButton="¿Olvidaste tu contraseña?"
                    />
                  </div>
                </Field>

              </FieldGroup>

             
              <DialogFooter className="mt-7">
                <Button
                  type="submit"
                  className="
                    w-40
                    h-11
                    mx-auto
                    rounded-xl
                    bg-gradient-to-r
                    from-orange-500
                    to-amber-500
                    text-white
                    text-sm
                    font-semibold
                    hover:opacity-90
                    hover:scale-[1.01]
                    transition-all
                    duration-300
                    shadow-lg
                  "
                >
                  Ingresar
                </Button>
              </DialogFooter>
            </div>
          </form>

        </DialogContent>
      </Dialog>
    </>
  );
}