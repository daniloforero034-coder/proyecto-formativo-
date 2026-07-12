"use client";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Field, FieldGroup } from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import ResetPassword from "./ResetPassword";

import { useState } from "react";

export default function Login(props: any) {
  const [OpenDialog, setOpenDialog] = useState(false);

  return (
    <Dialog open={OpenDialog} onOpenChange={setOpenDialog}>
      <form>
        {/* BOTÓN */}
        <DialogTrigger >
          <Button
            variant="default"
            className="
              cursor-pointer
              px-8
              py-2
              w-full
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
            {props.textButton}
          </Button>
        </DialogTrigger>

        {/* MODAL */}
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
          {/* HEADER */}
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
            {/* EFECTO */}
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

          {/* FORMULARIO */}
          <div className="p-7">
            <FieldGroup className="space-y-5">
              
              {/* USUARIO */}
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

              {/* CONTRASEÑA */}
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

            {/* BOTÓN LOGIN */}
            <DialogFooter className="mt-7">
              <Button
                type="submit"
                className="
                  w-full
                  h-11
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
        </DialogContent>
      </form>
    </Dialog>
  );
}
