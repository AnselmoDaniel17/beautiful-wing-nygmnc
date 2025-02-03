// src/App.js
import React, { useState } from "react";
import {
  Card,
  CardContent,
  Button,
  Input,
  TextField,
  Checkbox,
} from "@mui/material";
import { db } from "./firebase"; // Importa la referencia a Firestore
import { collection, addDoc } from "firebase/firestore";

export default function VehicleControl() {
  const [form, setForm] = useState({
    responsable: "",
    licencia: "",
    fechaSalida: "",
    horaSalida: "",
    fechaEntrada: "",
    horaEntrada: "",
    solicitante: "",
    motivo: "",
    kmSalida: "",
    kmEntrada: "",
    vehiculo: "",
    matricula: "",
    llantaRefaccion: false,
    tapetes: false,
    interiores: false,
    espejos: false,
    luces: false,
    trianguloGato: false,
    molduras: false,
    taponesLlantas: false,
    llaveBirlos: false,
    tarjetaCirculacion: false,
    placas: false,
    antena: false,
    observaciones: "",
    autorizo: "",
    reviso: "",
    Recibio: "",
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Guarda los datos en Firestore
      await addDoc(collection(db, "vehiculos"), form);
      console.log("Formulario enviado y guardado en Firestore", form);

      // Puedes limpiar el formulario después de enviarlo si lo deseas
      setForm({
        responsable: "",
        licencia: "",
        fechaSalida: "",
        horaSalida: "",
        fechaEntrada: "",
        horaEntrada: "",
        solicitante: "",
        motivo: "",
        kmSalida: "",
        kmEntrada: "",
        vehiculo: "",
        matricula: "",
        llantaRefaccion: false,
        tapetes: false,
        interiores: false,
        espejos: false,
        luces: false,
        trianguloGato: false,
        molduras: false,
        taponesLlantas: false,
        llaveBirlos: false,
        tarjetaCirculacion: false,
        placas: false,
        antena: false,
        observaciones: "",
        autorizo: "",
        reviso: "",
        Recibio: "",
      });
    } catch (e) {
      console.error("Error al guardar el formulario en Firestore", e);
    }
  };

  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-4">
          {Object.keys(form).map((key) =>
            key === "observaciones" ? (
              <TextField
                key={key}
                name={key}
                value={form[key]}
                onChange={handleChange}
                placeholder="OBSERVACIONES"
                multiline
                rows={4}
              />
            ) : typeof form[key] === "boolean" ? (
              <div key={key} className="flex items-center gap-2">
                <Checkbox
                  name={key}
                  checked={form[key]}
                  onChange={handleChange}
                />
                <label>{key.replace(/([A-Z])/g, " $1").toUpperCase()}</label>
              </div>
            ) : (
              <Input
                key={key}
                name={key}
                value={form[key]}
                onChange={handleChange}
                placeholder={key.replace(/([A-Z])/g, " $1").toUpperCase()}
              />
            )
          )}
          <Button type="submit">Guardar</Button>
        </form>
      </CardContent>
    </Card>
  );
}
