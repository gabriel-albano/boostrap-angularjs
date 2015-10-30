var app = angular.module('bootstrap', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);

app.controller('NavBarCtrl', function($scope, $uibModal) {

  $scope.mnuOption = function(option, size) {
    var modalInstance;
    if (option === 1) {
      modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'option1.html',
        controller: 'ModalCtrl',
        size: size,
        resolve: {
          foo: function() {
            return null;
          }
        }
      });
    } else if (option === 2) {
      modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'option2.html',
        controller: 'ModalCtrl',
        size: size,
        resolve: {
          foo: function() {
            return null;
          }
        }
      });
    }

  };

});

app.controller('ModalCtrl', function($scope, $modalInstance, foo) {

  $scope.ok = function() {
    console.log("OK button was clicked")
    $modalInstance.close(0);
  };

  $scope.cancel = function() {
    console.log("Cancel button was clicked")
    $modalInstance.dismiss('cancel');
  };
});

app.controller('AlertCtrl', function($scope) {

  $scope.alerts = [{
    type: 'warning',
    msg: '<h4>Warning!</h4>Best check yo self, you are not looking too good. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.'
  }, {
    type: 'danger',
    msg: 'Oh snap! Change a few things up and try <a href=\'#\'>submitting</a> again.'
  }, {
    type: 'success',
    msg: 'Well done! You successfully read this <strong>important</strong> alert message.'
  }, {
    type: 'info',
    msg: 'Heads up! This alert needs your attention, but it is not super important.'
  }];

  $scope.addAlert = function(aType, aText) {
    $scope.alerts.push({
      type: aType,
      msg: aText
    });
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

});
