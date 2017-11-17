// var expect = require("chai").expect;
// var axios = require("axios");
// var request = require("request");
// const co = require('co'); /*Para controlar la ejecución asíncrona en ES6 podemos utilizar co(), un interesante paquete que junto a las funciones generadoras nos ofrece una alternativa interesante al uso de callbacks. En futuras versiones de Javascript podremos utilizar aync/await. Si no conoces co() o aync/await, te recomendamos que leas el artículo Controlar la ejecucion asincrona.*/
// const fetch = require('node-fetch'); /*Hay muchos paquetes para gestionar llamadas HTTP, pero la aparición de estándar fetch nos anima a utilizar esta solución, que funciona tanto en navegadores como en Node. Te recomendamos que leas nuestro artículo API fetch, el nuevo estándar que permite hacer llamadas HTTP. La gran ventaja, frente a otros paquetes, es que devuelve promesas y por lo tanto es muy adecuado para utilizarlo con junto con co().*/
//
// describe("Servicio web JSONPlaceholder ", function() {
//   describe("Servicio of Users", function() {
//     const url = "http://jsonplaceholder.typicode.com";
//     /*Pregunto si el estatus es 200 en este caso el servicio esta activo*/
//     it("Status 200", function(done) {
//       /*request me permite obtener toda la informacion realacionada con el servicio web*/
//       request(url, function(error, response, body) {
//         /* console.log(response,body);*/
//         /*Obtengo la informacion del servicio web en este caso el estatus*/
//         expect(response.statusCode).to.equal(200);
//         done();
//       });
//     });
//     /*Valido el resultado de la invocacion del servicio web*/
//     describe('API REST', function() {
//       it('GET /Se valida el tipo de dato del objeto usuarios que retorna la API', () => co(function*() {
//
//         const response = yield fetch(url + '/users');
//
//         expect(response.status).to.be.equal(200);
//         const users = yield response.json();
//         /*console.log(users);*/
//         expect(users).to.be.an('Array');
//         for (let usr of users) {
//           expect(usr).to.be.an('Object');
//           expect(usr.id).to.be.a('Number');
//           expect(usr.name).to.be.a('String');
//           expect(usr.username).to.be.a('String');
//           expect(usr.email).to.be.a('String');
//         }
//       }).catch(function(err) {
//         done(err);
//       }));
//
//       it('GET /Se testean los posts de un usuario', () => co(function*() {
//
//         const responseUsers = yield fetch(url + '/users?email=Rey.Padberg@karina.biz');
//         expect(responseUsers.status).to.be.equal(200);
//
//         const users = yield responseUsers.json();
//         expect(users).to.be.an('Array');
//         expect(users.length).to.be.equal(1);
//
//         const responsePosts = yield fetch(url + '/users/' + users[0].id + '/posts');
//         expect(responsePosts.status).to.be.equal(200);
//
//         const posts = yield responsePosts.json();
//         expect(posts).to.be.an('Array');
//         for (let p of posts) {
//           expect(p).to.be.an('Object');
//           expect(p.userId).to.be.equal(users[0].id);
//           expect(p.id).to.be.a('Number');
//           expect(p.title).to.be.a('String');
//           expect(p.body).to.be.a('String');
//         }
//       }).catch(function(err) {
//         done(err);
//       }));
//
//
//       /*it('POST /Se añaden un nuevo Post al usuario', () => co(function*() {
//
//         const responseUsers = yield fetch(url + '/users?email=Rey.Padberg@karina.biz');
//         expect(responseUsers.status).to.be.equal(200);
//
//         const users = yield responseUsers.json();
//         expect(users).to.be.an('Array');
//         expect(users.length).to.be.equal(1);
//
//         const responseNewPost = yield fetch(url + '/users/' + users[0].id + '/posts', {
//           method: 'POST',
//           Headers: {
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify({
//             "title": "Lorem Ipsum",
//             "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
//               "Etiam fringilla enim mi, a ornare augue sollicitudin id."
//           })
//         });
//         expect(responseNewPost.status).to.be.equal(201);
//
//         const post = yield responseNewPost.json();
//         expect(post).to.be.an('Object');
//         expect(post.userId).to.be.equal(users[0].id);
//         expect(post.id).to.be.a('Number');
//       }).catch(function(err) {
//         done(err);
//       }));*/
//     });
//   });
// });
//
// describe("Servicio web REQ|RES ", function() {
//   describe("Service of users", function() {
//     const url = "https://reqres.in";
//     it("Status 200", function(done) {
//       request(url, function(error, response, body) {
//         expect(response.statusCode).to.equal(200);
//         done();
//       });
//     });
//
//     describe("API REST", function() {
//       it("GET List for users", () => co(function*() {
//         const response = yield fetch(url + '/api/users');
//         expect(response.status).to.be.equal(200);
//         const users = yield response.json();
//         expect(users).to.be.an('Array');
//         for (let usr of users) {
//           expect(usr).to.be.an('Object');
//           expect(usr.id).to.be.a('Number');
//           expect(usr.first_name).to.be.a('String');
//           expect(usr.last_username).to.be.a('String');
//           expect(usr.avatar).to.be.a('String');
//         }
//       }).catch(function(err) {
//         /*done(err);*/
//       }));
//
//       it("GET List for resources", () => co(function*() {
//         const response = yield fetch(url + '/api/unknown');
//         expect(response.status).to.be.equal(200);
//         const resources = yield response.json();
//         expect(resources).to.be.an('Array');
//         for (let rsc of resources) {
//           expect(usr).to.be.an('Object');
//           expect(usr.page).to.be.a('Number');
//           expect(usr.per_page).to.be.a('Number');
//           expect(usr.total).to.be.a('Number');
//           expect(usr.total_pages).to.be.a('Number');
//         }
//       }).catch(function(err) {
//         /*done(err);*/
//       }));
//     });
//   });
// });
