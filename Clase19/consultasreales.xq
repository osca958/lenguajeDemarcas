
(: Extraer los titulos de los cd con precio <11 for $x in doc("coleccion.xml")/coleccion/cd where $x/precio < 11 return $x/titulo :)

(:Diferencia entre for y let:)
(:Vamos a extraer solo los titulos de los cd: :)
(:for $x in doc("coleccion.xml")/coleccion/cd/titulo
return <titulos>{$x}</titulos> :)

let $x:= doc("coleccion.xml")/coleccion/cd/titulo
return <titulos>{$x}</titulos>