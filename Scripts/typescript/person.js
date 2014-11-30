var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", './human'], function (require, exports, human) {
    var Person = (function (_super) {
        __extends(Person, _super);
        function Person(name) {
            _super.call(this, name || 'Carlos');
        }
        return Person;
    })(human.Human);
    exports.Person = Person;
});
//# sourceMappingURL=Person.js.map