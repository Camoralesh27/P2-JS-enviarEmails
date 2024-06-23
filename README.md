# Notas Proyecto

## * ¡¡ IMPORTANTE !! 
Nunca utilices ó apartate lo más posible de 'innerHTML' lo más que puedas a no ser que quieras ser hackeado. En luegar de este utiliza 'textcontent'

```js
error.innerHTML = 'Hubo un error'; // ¡NO USAR!
error.textContent = 'Hubo un error'; //MANERA CORRECTA
```

innerHTML coloca las etiquetas, en cambio textcontent,si tienes un tag de html aparece las etiquetas como texto en vez de aparecerlas. 

[Video problema seguridad innerHTML](https://youtube.com/shorts/06u4AtF-M04?si=1ht3-MM_y9sAMuy6)


---
---


## * APUNTES
Para colocar comillas invertidas para los 'template strings' hay dos maneras: 
* ALTGR + } (back quote)
* ALT + 96


***
---


**Callback**
Cuando un evento sucede se ejecuta una función.

```js

inputEmail.addEventListener('blur', function() {
        console.log('Sali del imput');
    })

```


---
---


Cuando haces una función, no va con parentesis, si no la vas a llamar desde el principio, y lo que queremos es que escuche el evento antes de que se mande a llamar.  

```js
inputEmail.addEventListener('blur', validar())
```
la manera correcta es esta:
```js
inputEmail.addEventListener('blur', validar)
```
Quitamos los callbacks, por funciones para evitar codigo repetido: 
* Callback
```js
inputMensaje.addEventListener('blur', function(e){
    console.log(e.target.value);
})
```

* Función
```js
inputMensaje.addEventListener('blur', validar)
inputEmail.addEventListener('blur', validar)
inputAsunto.addEventListener('blur', validar)
    
function validar(e) {
    console.log(e.target.value);
}
```


---
---


## trim()
```js

if(e.target.value.trim() === '') {
            console.log('Esta vacio');
        } else {
            console.log('si hay algo');
}
```

el trim() es para eliminar los espacios en blanco en caso de que alguien haya colocado un string con puros espacios


---
---

## Traversing the DOM 

.parentElement -> te lleva al elemento padre del elemento que estás seleccionando.
.nextElementSibling -> te lleva al elemento siguiente del que estas eligiendo.


Nos lleva al **elemento** que estamos seleccionando.
```js
console.log(e.target)
```

Nos lleva al **valor** del elemento que estamos seleccionando.
```js
console.log(e.target.value)
```

Nos lleva al **elemento PADRE** del elemento seleccionado.
```js
console.log(e.target.parentElement)
```

Nos lleva al **hermano del elemento PADRE**, o sea, el siguiente elemento padre.
```js
console.log(e.target.parentElement.nextElementSibling)
```

Nos lleva al **PADRE del elemento PADRE**
```js
console.log(e.target.parentElement.parentElement)
```

## Expresiones regulares
**No tiene sentido memorizarlos**, mejor buscalos en internet y los utilizas.
Una expresion regular es un codigo que busca un patron en una cadena de texto ó en una cadena de números.

Por ejemplo en el caso de un email 'usuario@dominio.com', etc.

Una tarjeta de credito tienen que ser números y tienen que ser 16 números. 
Un codigo postal, usualmente de 5 digitos y solo números. 

```js
const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
```