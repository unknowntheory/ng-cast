angular.module('video-player')
  .service('youTube', function($http) {
    
    this.search = function(query, callback, max) {
      
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          part: 'snippet',
          key: YOUTUBE_API_KEY,
          q: query,
          maxResults: max || 5,
          type: 'video',
          videoEmbeddable: 'true'
        }
        
      }).then(function successCallBack(response) {
        callback(response.data.items);
        
      }, function errorCallBack(response) {
        response = JSON.stringify(response);
        console.log('Failed:', response);
      });
    
    };
    
  });
