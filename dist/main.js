define("Operators", ["require", "exports", "rxjs"], function (require, exports, rxjs_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Study {
        run() {
            this._from();
        }
        _from() {
            let input = [1, 2, 3];
            rxjs_1.of(input).subscribe((aa) => console.log(aa));
        }
    }
    exports.Study = Study;
});
define("main", ["require", "exports", "Operators"], function (require, exports, model) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var el = document.getElementById('content');
    var greeter = new model.Study().run();
});
//# sourceMappingURL=main.js.map