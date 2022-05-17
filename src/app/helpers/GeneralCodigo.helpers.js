"use strict";
export default function GeneralCodigo(Letra, Codigo, Size) {
  let numberOutput = Math.abs(parseInt(Codigo) + 1);
  let length = Codigo.toString().length;
  let FirtLetra = Letra;
  let zero = "0";
  return FirtLetra + zero.repeat(Size - length) + numberOutput.toString();
}
