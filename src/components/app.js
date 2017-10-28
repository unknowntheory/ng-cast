angular.module('video-player')

  .component('app', {
    templateUrl: 'src/templates/app.html',
    
    controller: function(youTube) {
      this.videos = initDataArr;
      this.first = initData;
      this.onClick = video => {
        this.first = video;
      };
      this.search = (query) => {
        youTube.search(query, data => {
          this.videos = data;
          this.first = data[0];
        });
      };
      // Initialize page with some data
      this.search('React js');
    }
    
  });



// Empty Data, to initialize app.
const initData = {
  kind: 'youtube#searchResult',
  etag: '',
  id: {
    kind: 'youtube#video',
    videoId: ''
  },
  snippet: {
    publishedAt: '2016-02-09T00:05:00.000Z',
    channelId: '',
    title: '',
    description: '',
    thumbnails: {
      default: {
        url: '',
        width: 120,
        height: 90
      }
    },
    channelTitle: '',
    liveBroadcastContent: 'none'
  }
};
const initDataArr = Array(5).fill(initData);