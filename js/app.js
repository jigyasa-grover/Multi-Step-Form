
// Creating angular app and inject ngAnimate and ui-router 
// =============================================================================
angular.module('formApp', ['ngAnimate', 'ui.router'])

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

        .state('form.ques-numberOfAgents', {
            url: '/ques-numberOfAgents',
            templateUrl: 'forms/ques-numberOfAgents.html'
        })

        .state('form.ques-maxTime', {
            url: '/ques-maxTime',
            templateUrl: 'forms/ques-maxTime.html'
        })

        .state('form.ques-maxLoops', {
            url: '/ques-maxLoops',
            templateUrl: 'forms/ques-maxLoops.html'
        })
        
        // url will be /form/ques1
        .state('form.ques1', {
            url: '/ques1',
            templateUrl: 'forms/ques1.html'
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
.controller('formController', function($scope) {
    
    // Storing form data in this object
    $scope.formData = {};
    
    // Function to process the form
    $scope.processForm = function() {
        alert('Awesome!');
    };
    
});
