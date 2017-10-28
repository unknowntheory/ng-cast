angular.module('video-player')

  .component('videoPlayer', {
    templateUrl: 'src/templates/videoPlayer.html',
    bindings: {
      first: '<'
    },
    controller: function() {
      this.url = 'https://www.youtube.com/embed/';
      this.$onInit = function() {
        this.link = this.url + this.first.id.videoId;
      };
      
    }

  });
