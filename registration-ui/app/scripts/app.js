'use strict';


angular
    .module('registration', ['registration.patient.controllers', 'registration.navigation', 'authentication', 
        'infrastructure.httpErrorInterceptor', 'registration.initialization', 'registration.util'])
    .config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
        $routeProvider.when('/search', {reloadOnSearch: false, templateUrl: 'modules/patient/views/search.html', controller: 'SearchPatientController', resolve: {initialization: 'initialization'}});
        $routeProvider.when('/patient/new', {templateUrl: 'modules/patient/views/newpatient.html', controller: 'CreatePatientController', resolve: {initialization: 'initialization'}});
        $routeProvider.when('/patient/:patientUuid', {templateUrl: 'modules/patient/views/editpatient.html', controller: 'EditPatientController', resolve: {initialization: 'initialization'}});
        $routeProvider.when('/visit', {templateUrl: 'modules/patient/views/visit.html', controller: 'VisitController', resolve: {initialization: 'initialization'}});
        $routeProvider.when('/printPatient', {templateUrl: 'modules/patient/views/print.html'});
        $routeProvider.when('/patientcommon', {templateUrl: 'modules/patient/views/patientcommon.html'});
        $routeProvider.otherwise({redirectTo: '/search'});
        $httpProvider.defaults.headers.common['Disable-WWW-Authenticate'] = true;
    }]).run(function ($rootScope, $templateCache) {
        //Disable caching view template partials
        $rootScope.$on('$viewContentLoaded', function () {
                $templateCache.removeAll();
            }
        )
        // $rootScope.$on( "$routeChangeStart", function(event, next, current) {
        //     console.log(next);
        //     //hook in change logic      
        // });
    });