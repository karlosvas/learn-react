# Curso de React
![Mi imagen local](https://imgs.search.brave.com/7qvu_dNY6EHodkmP_bm3akDMDUiYjSxk35Bv3XuOjuA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS93aGF0aXMvaW1n/X3JlYWN0LmpwZw)  

Este repositorio es utilizado como un conjunto de proyectos para aprender a utilizar manejar y mejorar con react, si ves algún fallo, o alguna manera de implementación de mejora no dudes en enviarme un issue 😊, estaré encantado de echuchar sugerencias.

## Recursos y cursos
React = https://es.react.dev/  

midudev curso1= https://youtu.be/7iobxzd_2wY?si=6MNFpkT6Jgf6gI9q  
midudev curso2= https://youtu.be/qkzcjwnueLA?si=7XW5FKqBlQO0bkw5  
midudev curso3= https://youtu.be/XYpadB4VadY?si=AEdXRTIAUHDlDG3F  
midudev curso4= https://youtu.be/x-LcbVw99o8?si=WCKBiR96ptj6_HjZ  
midudev curso5= https://youtu.be/GOEiMwDJ3lc?si=SWSLEQI71xg_pv3M  

### Para probarlo
Utilizar (Vite && React && NodeJS) para ser inicializado.
``` shell
pnpm install
pnpm run dev
``` 

### Apuntes
**La renderizacion de los estado en React son asincronas.**
Los useState siempre devene star en el cuerpoo del componente ya que React los guarda ebn un array y no devemos cmabiar las posiciones de este, de deven de estar dentro ni de un if ni de un while si de nada que pueda llegar a modificarlo.
La forma correcta lde leer el local stoprage es dentro del propio useState
Podemos ver quien y cuantas veces se esta escuchando el evento con getEventListeners(window).  

**El componente <React.Fragment><React.Fragment>**  
React fragment se utiliza para renderizar mas de un componente. de la misma manera se le puede remplazar con <></>.  

**El componente <React.StrictMode></React.StrictMode>**  
Se utiliza para dar adveretencias sobre el uso de reeact si estas utilizaando código antiguo, si estas haciendo algo incorrecto. AL montar el componente ejecuta el efecto dos veces para asegurarse. Solo para en desarollo no en produccion.

**useEffect**  
useEffect es un Hook, por lo que sólo puedes llamarlo en el nivel superior de tu componente o en los propios Hooks. No puedes llamarlo dentro de bucles o condiciones. Si es necesario, se extrae un nuevo componente y mueve el estado a él.

**Costom hook**  
Los custom hooks tratan de reutilizar lógica en diferentes componnetes. Siempre empiezan con la palabra use, no pueden estar dentro de un if ni de un while. No puede cambiar su posición y siempre teiene que ser llamado desde el cuerpo de nuestro componente, dentro de un custoom hook podremos llamar otros hooks. Custom hook (lógica reutilizable).
Es recomendable evitar darle un nombre que hable sobre que es la implementacion o la funcion que realiza.
