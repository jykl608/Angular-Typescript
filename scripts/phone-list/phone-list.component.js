angular
    .module('phoneList', [])
    .component('phoneList', {
    // templateUrl: 'scripts/phone-list/phone-list.template.html', // This causes CORS error
    template: "\n            <ul class=\"phone-list\">\n                <li data-ng-repeat=\"phone in $ctrl.phones\">{{ phone.name }} - {{ phone.snippet }}</li>\n            </ul>\n        ",
    controller: function PhoneListController() {
        this.phones = [
            {
                name: 'Nexus S',
                snippet: 'Fast just got faster with Nexus S.'
            },
            {
                name: 'Motorola XOOM™ with Wi-Fi',
                snippet: 'The Next, Next Generation tablet.'
            },
            {
                name: 'MOTOROLA XOOM™',
                snippet: 'The Next, Next Generation tablet.'
            }
        ];
    }
});
