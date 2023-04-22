// crea un nuevo objeto `Date`
var timeZone = new Date();
 
// obtener la hora en la configuración regional de Perú.
var now = timeZone.toLocaleTimeString('es-PE');
console.log(now);
 
//---------------------------------------

// crea otro objeto `Date`
var today = new Date();
// obtener la fecha en la configuración regional de Perú.
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
options.timeZone = 'UTC';
options.timeZoneName = 'short';
 
var now = today.toLocaleString('es-PE', options);
console.log(now);
