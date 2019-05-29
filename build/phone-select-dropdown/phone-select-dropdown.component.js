"use strict";
// angular
//     .module('phoneSelectDropdownModule', [])
//     .component('phoneSelectDropdown', { // <phone-select-dropdown>
//         template: `
//             <div class="phone-selector-container">
//                 <select data-ng-model="$ctrl.selectedPhone" data-ng-change="$ctrl.updatePhone()">
//                     <option data-ng-repeat="phone in $ctrl.phones">{{ phone.name }}</option>            
//                 </select>
//             </div>
//             <div class="phone-selected" data-ng-if="$ctrl.selectedPhone">
//                 Selected phone: {{ $ctrl.selectedPhone }}
//             </div>
//         `,
//         controller: function PhoneSelectDropdownController($scope) {
//             this.selectedPhone = null;
//             this.phones = [
//                 {
//                     name: 'Nexus S',
//                     snippet: 'Fast just got faster with Nexus S.'
//                 }, 
//                 {
//                     name: 'Motorola XOOM™ with Wi-Fi',
//                     snippet: 'The Next, Next Generation tablet.'
//                 }, 
//                 {
//                     name: 'MOTOROLA XOOM™',
//                     snippet: 'The Next, Next Generation tablet.'
//                 }
//             ];
Object.defineProperty(exports, "__esModule", { value: true });
class PhoneSelectDropdownController {
    constructor() {
        this.phones = [];
        this.selectedPhone = null;
        console.log('PhoneSelectDropdownController');
    }
}
exports.default = PhoneSelectDropdownController;
//# sourceMappingURL=phone-select-dropdown.component.js.map