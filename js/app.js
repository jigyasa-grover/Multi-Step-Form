// Creating angular app and inject ngAnimate and ui-router 
// =============================================================================
angular.module('formApp', ['ngAnimate', 'ui.router', 'ngFileSaver'])

// Configuring our routes 
// =============================================================================
.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

    // route to show our basic form (/form)
        .state('form', {
        url: '/form',
        templateUrl: 'forms/form.html',
        controller: 'formController'
    })

    // nested states 
    // each of these sections will have their own view
    // url will be nested (/form/profile)
    .state('form.profile', {
        url: '/profile',
        templateUrl: 'forms/form-profile.html'
    })

    .state('form.ques-maxTime', {
        url: '/ques-maxTime',
        templateUrl: 'forms/ques-maxTime.html'
    })

    .state('form.ques-sizeOfNetwork', {
        url: '/ques-sizeOfNetwork',
        templateUrl: 'forms/ques-sizeOfNetwork.html'
    })

    .state('form.ques-regionLanguage', {
        url: '/ques-regionLanguage',
        templateUrl: 'forms/ques-regionLanguage.html'
    })

    .state('form.ques-agentTastes', {
        url: '/ques-agentTastes',
        templateUrl: 'forms/ques-agentTastes.html'
    })

    .state('form.ques-numberOfAgents', {
        url: '/ques-numberOfAgents',
        templateUrl: 'forms/ques-numberOfAgents.html'
    })

    .state('form.ques-typesOfAgents', {
        url: '/ques-typesOfAgents',
        templateUrl: 'forms/ques-typesOfAgents.html'
    })



    .state('form.ques-maxLoops', {
        url: '/ques-maxLoops',
        templateUrl: 'forms/ques-maxLoops.html'
    })

    .state('form.ques-hashtagProb', {
        url: '/ques-hashtagProb',
        templateUrl: 'forms/ques-hashtagProb.html'
    })

    .state('form.ques-rates', {
        url: '/ques-rates',
        templateUrl: 'forms/ques-rates.html'
    })

    // url will be /form/lastQues
    .state('form.lastQues', {
        url: '/lastQues',
        templateUrl: 'forms/lastQues.html'
    });

    // Catch all route
    // Send users to the form page 
    $urlRouterProvider.otherwise('/form/profile');
})

// Form Controller
// =============================================================================
.controller('formController', ['FileSaver', 'Blob', '$scope', function(FileSaver, Blob, $scope) {

    // Storing form data in this object
    $scope.formData =   $scope.formData || {};
    // {
    //     "name": "",
    //     "email": "",
    //     "maxTime": "",
    //     "sizeOfNetwork": "",
    //     "sameAgentRegion": "",
    //     "sameAgentLanguage": "",
    //     "agentTastes": "",
    //     "standardAgent": null,
    //     "celebrityAgent": null,
    //     "ideologueAgent": null,
    //     "humoristAgent": null,
    //     "companyAgent": null,
    //     "govtAgent": null
    // };

    // Function to process the form
    $scope.processForm = function() {
        alert('Awesome!');
        var data = new Blob([$scope.formData], { type: 'text/plain;charset=utf-8' });
        FileSaver.saveAs(data, 'formData.json');

    };

}]);