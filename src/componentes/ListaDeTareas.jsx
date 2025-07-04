import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import '../hojas-de-estilo/ListasDeTareas.css'
import Tarea from "./Tarea";


function ListaDeTareas(){

  // Hooks -> Estado Inidial = []
  // vamos a tener un arreglo de objetos
  const [tareas, setTareas] = useState([]);
  // Cada tarea se va a representar como un objeto en el array

  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);

    }
  }

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);

  }

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  }

  return(
    <>
      <TareaFormulario onSubmit={agregarTarea}/>
      <div className='tareas-lista-contenedor'>
        {/* //Mostrar una lista de componentes de React */}
        {
          //Cada uno de los elementos del arreglo se van a pasar aqui(el argumento hace de referencia a un objeto)
          tareas.map((tarea) => 
          <Tarea
            key= {tarea.id}
            id= {tarea.id}
            texto= {tarea.texto}
            completada= {tarea.completada}
            eliminarTarea={eliminarTarea}
            completarTarea={completarTarea} />
          )
        }
      </div>
    </>
  );
}

export default ListaDeTareas;