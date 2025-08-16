import { useEffect, useState } from "react";
import PropsPost from "./Ejercicio53-2";

export default function ComponentesPorPost() {
  let [post, setPost] = useState([]);
  let url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetch(url)
      .then((consulta) => consulta.json())
      .then((filtrado) => setPost(filtrado.slice(0, 3)));
  }, []);
  return (
    <>
      <div className="text-center">
        {post.map((elemnt) => (
          <PropsPost
            id={elemnt.id}
            titulo={elemnt.title}
            cuerpo={elemnt.body}
          />
        ))}
      </div>
    </>
  );
}
