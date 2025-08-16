import Saludo from "./Ejercicio1";
import Despedir from "./Ejercicio2";
import Nombre from "./Ejercicio3";
import BotonClick from "./Ejercicio4";
import Titulo from "./Ejercicio5";
import Usuario from "./Ejercicio6";
import Lista from "./Ejercicio7";
import Imagen from "./Ejercicio20";
import Tarjeta from "./Ejercicio8";
import Footer from "./Ejercicio9";
import Perfil from "./Ejercicio10";
import Menu from "./Ejercicio11";
import Producto from "./Ejercicio12";
import Galeria from "./Ejercicio13";
import BlogPost from "./Ejercicio14";

export default function AppEjercicios() {
  // Ejercicio dificil menu
  let arrayObjetos = [];
  let masInformacion = { nombre: "Mas informacion", link: "#" };
  let contacto = { nombre: "Contactenos", link: "#" };
  let sobreMi = { nombre: "Informacion sobre mi", link: "#" };

  arrayObjetos.push(masInformacion);
  arrayObjetos.push(contacto);
  arrayObjetos.push(sobreMi);

  // Ejercicio galeria

  let arrayGaleria = [];
  let primeraImagen = "/img/guitarra_03.jpg";
  let segundaImagen = "/img/guitarra_04.jpg";
  let terceraImagen = "/img/guitarra_05.jpg";

  arrayGaleria.push(primeraImagen);
  arrayGaleria.push(segundaImagen);
  arrayGaleria.push(terceraImagen);

  return (
    <>
      <main>
        <nav>
          <Menu array={arrayObjetos} />
        </nav>
        {/* // ? COMPONENTES */}
        {/* EJERCICIOS FACILES */}
        <Saludo />
        <Despedir />
        <Nombre prop={"Jhon"} />
        <BotonClick />
        <Titulo />

        {/* EJERCICIOS MEDIOS  */}
        <Usuario nombre={"Jhon"} edad={21} />
        <Imagen url="https://pin.it/4R1HEueWg" />
        <Lista array={["hola ", "mundo ", "bonito"]} />
        <Tarjeta
          titulo={"Titulo descriptivo"}
          descripcion={"Descripcion prrona"}
        />

        {/* EJERCICIOS DIFICLES  */}
        <Perfil nombre={"Jhon"} edad={21} foto={"guitarra_01"} />
        <Producto nombre={"Jhon"} precio={1200} foto={"guitarra_03"} />
        <Galeria array={arrayGaleria} />
        <BlogPost
          titulo={"El resplandor"}
          autor={"Sthephen Kings"}
          fecha={2022}
          contenido={"El libro es buenisimo"}
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
