angular.module('video-player')

  .component('search', {
    templateUrl: 'src/templates/search.html',
    bindings: {
      search: '<',
      query: '<'
    }, 
    controller() {
      this.query = '';
    }
    
  });
