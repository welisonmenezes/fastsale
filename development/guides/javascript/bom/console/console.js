(function(){

mostrarNaTela("Abra o console do seu navegador. Pressione 'F12'");

/*	CONSOLE
 * 		objeto que dá acesso ao browser debug console
 */

// método 'clear'
console.log('lixo');
console.log('lixo 2');
console.clear();

// metodo 'log'
window.console.log('teste console log');

window.console.log('teste console log com objeto', {name: 'teste'});

console.log('chamando sem usar window antes');

console.log('teste com array', [1, 2, 'facebook', 'twitter', 300]);

// método 'info' (bem similar ao log)

console.info('teste console info');

// método table (exibe dados com formatração amigável)

console.table(['facebook', 'instagram', 'twitter']);
console.table({name: 'welison', idade: 30, qualidade: 'lindo'});

// método 'warn'

console.warn('teste console warn');

// método 'error'
console.error('teste console error');

// método 'assert'
console.assert(false, "O primeiro parâmetro é false, por isso mostro");
console.assert(true, "O primeiro parâmetro é true, por isso não mostro");

// método 'count'
for (i = 0; i < 10; i++) {
  console.count();
}


// método 'group'
console.log("Estou fora do grupo");
console.group();
console.log("Estou dentro do grupo");
console.log("Estou dentro do grupo");
console.log("Estou dentro do grupo");
console.groupEnd(); // encerrando group

// método 'groupCollapsed'
console.log("Estou fora do grupo collapsed");
console.groupCollapsed();
console.log("Estou dentro do grupo collapsed");
console.log("Estou dentro do grupo collapsed");
console.log("Estou dentro do grupo collapsed");
console.groupEnd(); // encerrando group


// método 'time' e 'timeEnd'
console.time();
for (i = 0; i < 100000; i++) {
  // some code
}
console.timeEnd();

// método 'trace'
console.trace();


})();