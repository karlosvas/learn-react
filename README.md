# Curso de React
Este repositorio es utilizado como un conjunto de proyectos para aprender a utilizar manejar y mejorar con react.

## Recursos y cursos
Pagina ofical de React = https://es.react.dev/  
midudev curso1= https://youtu.be/7iobxzd_2wY?si=6MNFpkT6Jgf6gI9q
midudev curso2= https://youtu.be/qkzcjwnueLA?si=7XW5FKqBlQO0bkw5

### Para probarlo
Utilizar (Vite && React && NodeJS) para ser inicializado.
``` shell
pnpm install
pnpm run dev
``` 

![Logo de React](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)
![Logo de Vite](https://vitejs.dev/logo-with-shadow.png)

### Apuntes
La renderizacion de los estado en React son asincronas.
Los useState siempre devene star en el cuerpoo del componente ya que React los guarda ebn un array y no devemos cmabiar las posiciones de este, de deven de estar dentro ni de un if ni de un while si de nada que pueda llegar a modificarlo.
La forma correcta lde leer el local stoprage es dentro del propio useState
Podemos ver quien y cuantas veces se esta escuchando el evento con getEventListeners(window).  

El componente <React.Fragment><React.Fragment> se utiliza para renderizar mas de un componente. de la misma manera se le puede remplazar con <></>.  

El componente <React.StrictMode></React.StrictMode> se utiliza para dar adveretencias sobre el uso de reeact si estas utilizaando código antiguo, si estas haciendo algo incorrecto. AL montar el componente ejecuta el efecto dos veces para asegurarse. Solo para en desarollo no en produccion.