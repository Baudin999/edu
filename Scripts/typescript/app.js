define(["require", "exports", './Person'], function (require, exports, personImport) {
    var log = function (m) { return console.log(m); };
    var person = new personImport.Person();
    log(person.name);
});
//# sourceMappingURL=app.js.map