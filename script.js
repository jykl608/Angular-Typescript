var HEROS = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];
// class 
var HerosComponentController = /** @class */ (function () {
    function HerosComponentController() {
    }
    HerosComponentController.prototype.$onInit = function () {
        this.heros = HEROS;
    };
    return HerosComponentController;
}());
var HerosComponent = /** @class */ (function () {
    function HerosComponent() {
        this.controller = HerosComponentController;
        this.controllerAs = '$ctrl';
        this.template = "\n            <ul>\n                <li data-ng-repeat=\"hero in $ctrl.heros\">{{ hero.name }}</li>\n            </ul>        \n        ";
    }
    return HerosComponent;
}());
angular
    .module("MyApp", [])
    .component("heros", {
    // template: "My heros: ",
    template: "\n        <ul>\n            <li data-ng-repeat=\"hero in $ctrl.heros\">{{ hero.name }}</li>\n        </ul>\n    ",
    controller: function herosController() {
        this.heros = HEROS;
    },
    controllerAs: "$ctrl"
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ["MyApp"]);
});
