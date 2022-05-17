"use strict";

export default function Descodificar(Codigos) {
  let Number = Codigos.length;
  const ArraryCodigo = Codigos.split("", Number);
  let Cod = "";
  for (var i = 0; i < ArraryCodigo.length; i++) {
    const Desconponer = ArraryCodigo[i];
    if (Desconponer != "C") {
      if (Desconponer != "0") {
        Cod += Desconponer;
      }
    }
  }
  return Cod;
}
