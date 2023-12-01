function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/views/member.html',
        controllers: 'SkillsMemberController',
        ControllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}