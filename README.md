Official Node.js Docs: https://nodejs.org/en/docs/guides/

Full Node.js Reference (for all core modules): https://nodejs.org/dist/latest/docs/api/

More about the Node.js Event Loop: https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/

Blocking and Non-Blocking Code: https://nodejs.org/en/docs/guides/dont-block-the-event-loop/

--------------------------------------------------
start npm

$ npm init
$ npm test
$ npm start
$ npm run server-start (para custom script en package.json)

-------------------------------------------------
packages

nodemon
	actualiza server cuando hay cambios en el código
	$ npm install nodemon --save-dev 
	$ npm install nodemon --save

express.js
	. es un package (framework)
	. https://expressjs.com/en/starter/installing.html
	. middleware: trabaja con request y responses elegantemente
	. provee routing
	. retorna html pages
	. opciones: Vanilla Node.js, Adonis.js (laravel inspired), Koa, Sails.js
	$ npm install --save express

Body parser
	$ npm install --save body-parser

Pug
	. https://pugjs.org/api/getting-started.html
	$ npm install --save ejs pug express-handlebars

Handlebars
	$ npm install --save express-handlebars@3.0

-------------------------------------------------

Template engines
	- EJS
		<p><%= name %></p>
		- use normal html and plain javascript in templates
	- Pug (Jade)
		p #{name}
		use minimal html and custom template language
	- Handlebars
		<p>{{ name }}</p>
		. use normal html and custom template language

MVC
	- separa Models, views y controllers
	- Routes son Controllers
		- Controllers are split across Middleware Functions

package-lock.json contiene las versiones de las dependencias.
	- si queremos bloquear la actualización de dependencias o que no se usa otra más nuevo. Entonces comitear.

types of erros
	- syntax errors
	- runtime errors
	- logical errors


-------------------------------------------------



Node js está construído sobre V8 (javascript engine created by google)
	- el engine toma el código javascript, lo compila en machine code.
	- V8 está escrito en C++
	- finalmente corre en la máquina para un browser. 
			Corre funcionalidades extendidas que no puede correr el browser usando javascript directamente.


The REPL
	- Read, Eval, Print, Loop



node js
	- uses only one thread

Event loop
	- maneja event callbacks
	- Handle Event Callbacks
	- callbacks contains fast finished code

Node js is a single javascript thread
	- pero hay operaciones que corren en un diferente thread.

Event Loop
	- keeps the node js process running
	- Tiene timers:
		- execute setTimeout, setInterval callbacks
	- tIENE Check Pending Callbaks
		- Execute I/O related callbacks that were deferrred
	- Poll
		- Retrieve new I/O events, execute their callbacks
	- Check
		- execute setImmediate() callbacks
		- mas rápido que setTimeout
	- Close callbacks
		- execute all close event callbacks
	- process.exit
		- cuando no hay callbacks pendientes
		- refs == 0

Node.js uses the Event-Driven Architecture: it has an Event Loop for orchestration and a Worker Pool for expensive tasks.
Node.js uses the Google V8 engine for JavaScript, which is quite fast for many common operations. Exceptions to this rule are regexps and JSON operations, discussed below.