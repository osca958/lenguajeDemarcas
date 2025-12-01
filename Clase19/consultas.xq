
(:Esto es un comentario:)
(:FLOWR:)
(:Bucle for: vincula 1 o más variables a expresiones escritas en xPath
Crea un flujo de tuplas en el que cada tupla está vinculada a una de las variables:)

for $x at $y in doc("coleccion.xml")/coleccion/cd
return <cd>{$X} , {$y}</cd>

(:LET: vincula una variable resultado completo de una expresión, añadiendo esos vinculos a tuplas generadas por una cláusula for:)

let $s:=7
let $z=10

return 10+$s+$z

(:Where: filtrar las tuplas eliminando todos los valroes que no cumplan las condiciones:)

for $x in doc("coleccion.xml")/coleccion/cd where $x/precio < 10

(:Order by: ordena las tuplas según un criterio dado:)

order by $x/precio ascending

(:Return: construye el resultado de la consulta para una tupla dada:)

return <cd>data({$x/titulo})</cd>
