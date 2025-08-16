import { useEffect, useState } from "react";

const [count, setCount] = useState(0);

// Definicion del useState
// Ejemplo de autenticacion

const [autenticacion, setAutenticacion] = useState(false);
const [valorTotal, setValorTotal] = useState([]);
const [carritoCompras, setCarritoCompras] = useState([]);

// Definicion del useEffect
// Ejemplo de autenticacion

useEffect(() => {
  // Se ejecutara por lo menos una vez ya que si la variable tiene almenos un valor, se ejecutara una vez
  console.log(`Tengo valor, me ejecutara dos veces`);
}, [autenticacion]);

setTimeout(() => {
  setAutenticacion(true);
}, 3000);

const [dataBase, setDataBase] = useState([]);

useEffect(() => {
  useState(API);
}, []);
