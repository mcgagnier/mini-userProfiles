angular.module('userProfiles').service('mainService', function($http) {
var users;
this.getUsers = function() {
    return $http({
        method: 'GET',
        url: 'https://reqres.in/api/users?page=1'
    }).then(function(response){
        users = response.data.data;
        return users
    });
}

this.toggleFavorite = function(i) {
    data.forEach(function(user) {
        if (user.id == i) {
            user.isFavorite = !user.isFavorite;
        }
    })

}
})
