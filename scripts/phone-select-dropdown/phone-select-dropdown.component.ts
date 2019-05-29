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

//             this.updatePhone = function() {
//                 console.log('updatePhone()', this.selectedPhone);
//             }
//         }
//     });




import {IComponentController} from 'angular';   // interface

export type Phone = {
    name: string,
    snippet: string
;}

export default class PhoneSelectDropdownController implements IComponentController {

    public phones: Phone[] = [];
    public selectedPhone: string = null;

    constructor() {
        console.log('PhoneSelectDropdownController');
    }
} 


