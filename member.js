function skillsMember() {
   return {
    restrict: 'E',
    templateUrl:'SkillsMemberContrroller',
    controllerAs:  'vm',
    bindToController: true,
    scope: {
        member: '='
    }
  };
}