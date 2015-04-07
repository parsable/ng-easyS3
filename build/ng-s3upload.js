// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Grunt

// Config
'use strict';

angular.module('ngS3upload.config', []).value('ngS3upload.config', {
  debug: true
}).config(['$compileProvider', function ($compileProvider) {
  if (angular.isDefined($compileProvider.urlSanitizationWhitelist)) {
    $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|data):/);
  } else {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|data):/);
  }
}]);

// Modules
angular.module('ngS3upload.directives', []);
angular.module('ngS3upload', ['ngS3upload.config', 'ngS3upload.directives', 'ngS3upload.services', 'ngSanitize']);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZy1zM3VwbG9hZC9uZy1zM3VwbG9hZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0EsT0FBTyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLENBQUMsQ0FDckMsS0FBSyxDQUFDLG1CQUFtQixFQUFFO0FBQ3ZCLE9BQUssRUFBRSxJQUFJO0NBQ2QsQ0FBQyxDQUNGLE1BQU0sQ0FBQyxDQUFDLGtCQUFrQixFQUFFLFVBQVMsZ0JBQWdCLEVBQUM7QUFDcEQsTUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLHdCQUF3QixDQUFDLEVBQUU7QUFDaEUsb0JBQWdCLENBQUMsd0JBQXdCLENBQUMsb0NBQW9DLENBQUMsQ0FBQztHQUNqRixNQUFNO0FBQ0wsb0JBQWdCLENBQUMsMEJBQTBCLENBQUMsb0NBQW9DLENBQUMsQ0FBQztHQUNuRjtDQUNGLENBQUMsQ0FBQyxDQUFDOzs7QUFHTixPQUFPLENBQUMsTUFBTSxDQUFDLHVCQUF1QixFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzVDLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUN2QixDQUNJLG1CQUFtQixFQUNuQix1QkFBdUIsRUFDdkIscUJBQXFCLEVBQ3JCLFlBQVksQ0FDZixDQUFDLENBQUMiLCJmaWxlIjoic3JjL25nLXMzdXBsb2FkL25nLXMzdXBsb2FkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3JlYXRlIGFsbCBtb2R1bGVzIGFuZCBkZWZpbmUgZGVwZW5kZW5jaWVzIHRvIG1ha2Ugc3VyZSB0aGV5IGV4aXN0XG4vLyBhbmQgYXJlIGxvYWRlZCBpbiB0aGUgY29ycmVjdCBvcmRlciB0byBzYXRpc2Z5IGRlcGVuZGVuY3kgaW5qZWN0aW9uXG4vLyBiZWZvcmUgYWxsIG5lc3RlZCBmaWxlcyBhcmUgY29uY2F0ZW5hdGVkIGJ5IEdydW50XG5cbi8vIENvbmZpZ1xuYW5ndWxhci5tb2R1bGUoJ25nUzN1cGxvYWQuY29uZmlnJywgW10pLlxuICB2YWx1ZSgnbmdTM3VwbG9hZC5jb25maWcnLCB7XG4gICAgICBkZWJ1ZzogdHJ1ZVxuICB9KS5cbiAgY29uZmlnKFsnJGNvbXBpbGVQcm92aWRlcicsIGZ1bmN0aW9uKCRjb21waWxlUHJvdmlkZXIpe1xuICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZCgkY29tcGlsZVByb3ZpZGVyLnVybFNhbml0aXphdGlvbldoaXRlbGlzdCkpIHtcbiAgICAgICRjb21waWxlUHJvdmlkZXIudXJsU2FuaXRpemF0aW9uV2hpdGVsaXN0KC9eXFxzKihodHRwcz98ZnRwfG1haWx0b3xmaWxlfGRhdGEpOi8pO1xuICAgIH0gZWxzZSB7XG4gICAgICAkY29tcGlsZVByb3ZpZGVyLmFIcmVmU2FuaXRpemF0aW9uV2hpdGVsaXN0KC9eXFxzKihodHRwcz98ZnRwfG1haWx0b3xmaWxlfGRhdGEpOi8pO1xuICAgIH1cbiAgfV0pO1xuXG4vLyBNb2R1bGVzXG5hbmd1bGFyLm1vZHVsZSgnbmdTM3VwbG9hZC5kaXJlY3RpdmVzJywgW10pO1xuYW5ndWxhci5tb2R1bGUoJ25nUzN1cGxvYWQnLFxuICAgIFtcbiAgICAgICAgJ25nUzN1cGxvYWQuY29uZmlnJyxcbiAgICAgICAgJ25nUzN1cGxvYWQuZGlyZWN0aXZlcycsXG4gICAgICAgICduZ1MzdXBsb2FkLnNlcnZpY2VzJyxcbiAgICAgICAgJ25nU2FuaXRpemUnXG4gICAgXSk7XG4iXX0=;
'use strict';

angular.module('ngS3upload.config', []).constant('ngS3Config', {
  theme: 'bootstrap3'
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZy1zM3VwbG9hZC9zZXJ2aWNlcy9zMy1jb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLENBQUMsTUFBTSxDQUFDLG1CQUFtQixFQUFFLEVBQUUsQ0FBQyxDQUNyQyxRQUFRLENBQUMsWUFBWSxFQUFFO0FBQ3JCLE9BQUssRUFBRSxZQUFZO0NBQ3BCLENBQUMsQ0FBQyIsImZpbGUiOiJzcmMvbmctczN1cGxvYWQvc2VydmljZXMvczMtY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ25nUzN1cGxvYWQuY29uZmlnJywgW10pLlxuICBjb25zdGFudCgnbmdTM0NvbmZpZycsIHtcbiAgICB0aGVtZTogJ2Jvb3RzdHJhcDMnXG4gIH0pO1xuIl19;
'use strict';

angular.module('ngS3upload.services', []).service('S3Uploader', ['$http', '$q', '$window', function ($http, $q, $window) {
  this.uploads = 0;
  var self = this;

  this.getUploadOptions = function (uri) {
    var deferred = $q.defer();
    $http.get(uri).success(function (response, status) {
      deferred.resolve(response);
    }).error(function (error, status) {
      deferred.reject(error);
    });

    return deferred.promise;
  };

  this.randomString = function (length) {
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];

    return result;
  };

  this.upload = function (scope, uri, key, acl, type, accessKey, policy, signature, file) {
    var deferred = $q.defer();
    scope.attempt = true;

    var fd = new FormData();
    fd.append('key', key);
    fd.append('acl', acl);
    fd.append('Content-Type', file.type);
    fd.append('AWSAccessKeyId', accessKey);
    fd.append('policy', policy);
    fd.append('signature', signature);
    fd.append('file', file);

    var xhr = new XMLHttpRequest();
    xhr.upload.addEventListener('progress', uploadProgress, false);
    xhr.addEventListener('load', uploadComplete, false);
    xhr.addEventListener('error', uploadFailed, false);
    xhr.addEventListener('abort', uploadCanceled, false);
    scope.$emit('s3upload:start', xhr);

    // Define event handlers
    function uploadProgress(e) {
      scope.$apply(function () {
        if (e.lengthComputable) {
          scope.progress = Math.round(e.loaded * 100 / e.total);
        } else {
          scope.progress = 'unable to compute';
        }
        var msg = { type: 'progress', value: scope.progress };
        scope.$emit('s3upload:progress', msg);
        if (typeof deferred.notify === 'function') {
          deferred.notify(msg);
        }
      });
    }
    function uploadComplete(e) {
      var xhr = e.srcElement || e.target;
      scope.$apply(function () {
        self.uploads--;
        scope.uploading = false;
        if (xhr.status === 204) {
          // successful upload
          scope.success = true;
          deferred.resolve(xhr);
          scope.$emit('s3upload:success', xhr, { path: uri + key });
        } else {
          scope.success = false;
          deferred.reject(xhr);
          scope.$emit('s3upload:error', xhr);
        }
      });
    }
    function uploadFailed(e) {
      var xhr = e.srcElement || e.target;
      scope.$apply(function () {
        self.uploads--;
        scope.uploading = false;
        scope.success = false;
        deferred.reject(xhr);
        scope.$emit('s3upload:error', xhr);
      });
    }
    function uploadCanceled(e) {
      var xhr = e.srcElement || e.target;
      scope.$apply(function () {
        self.uploads--;
        scope.uploading = false;
        scope.success = false;
        deferred.reject(xhr);
        scope.$emit('s3upload:abort', xhr);
      });
    }

    // Send the file
    scope.uploading = true;
    this.uploads++;
    xhr.open('POST', uri, true);
    xhr.send(fd);

    return deferred.promise;
  };

  this.isUploading = function () {
    return this.uploads > 0;
  };
}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZy1zM3VwbG9hZC9zZXJ2aWNlcy9zMy11cGxvYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsRUFBRSxDQUFDLENBQ3ZDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxVQUFVLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFO0FBQzdFLE1BQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0FBQ2pCLE1BQUksSUFBSSxHQUFHLElBQUksQ0FBQzs7QUFFaEIsTUFBSSxDQUFDLGdCQUFnQixHQUFHLFVBQVUsR0FBRyxFQUFFO0FBQ3JDLFFBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUMxQixTQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUNaLE9BQU8sQ0FBQyxVQUFVLFFBQVEsRUFBRSxNQUFNLEVBQUU7QUFDbEMsY0FBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUM1QixDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRTtBQUNoQyxjQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3hCLENBQUMsQ0FBQzs7QUFFTCxXQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUM7R0FDekIsQ0FBQzs7QUFFRixNQUFJLENBQUMsWUFBWSxHQUFHLFVBQVUsTUFBTSxFQUFFO0FBQ3BDLFFBQUksS0FBSyxHQUFHLGdFQUFnRSxDQUFDO0FBQzdFLFFBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNoQixTQUFLLElBQUksQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUks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LE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNyQixhQUFLLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFDO09BQ3BDLENBQUMsQ0FBQztLQUNKOzs7QUFHRCxTQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztBQUN2QixRQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDZixPQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDNUIsT0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzs7QUFFYixXQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUM7R0FDekIsQ0FBQzs7QUFFRixNQUFJLENBQUMsV0FBVyxHQUFHLFlBQVk7QUFDN0IsV0FBTyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztHQUN6QixDQUFDO0NBQ0gsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoic3JjL25nLXMzdXBsb2FkL3NlcnZpY2VzL3MzLXVwbG9hZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ25nUzN1cGxvYWQuc2VydmljZXMnLCBbXSkuXG4gIHNlcnZpY2UoJ1MzVXBsb2FkZXInLCBbJyRodHRwJywgJyRxJywgJyR3aW5kb3cnLCBmdW5jdGlvbiAoJGh0dHAsICRxLCAkd2luZG93KSB7XG4gICAgdGhpcy51cGxvYWRzID0gMDtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLmdldFVwbG9hZE9wdGlvbnMgPSBmdW5jdGlvbiAodXJpKSB7XG4gICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgJGh0dHAuZ2V0KHVyaSkuXG4gICAgICAgIHN1Y2Nlc3MoZnVuY3Rpb24gKHJlc3BvbnNlLCBzdGF0dXMpIHtcbiAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgfSkuZXJyb3IoZnVuY3Rpb24gKGVycm9yLCBzdGF0dXMpIHtcbiAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xuICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfTtcblxuICAgIHRoaXMucmFuZG9tU3RyaW5nID0gZnVuY3Rpb24gKGxlbmd0aCkge1xuICAgICAgdmFyIGNoYXJzID0gJzAxMjM0NTY3ODlhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJztcbiAgICAgIHZhciByZXN1bHQgPSAnJztcbiAgICAgIGZvciAodmFyIGkgPSBsZW5ndGg7IGkgPiAwOyAtLWkpIHJlc3VsdCArPSBjaGFyc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoY2hhcnMubGVuZ3RoIC0gMSkpXTtcblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG5cbiAgICB0aGlzLnVwbG9hZCA9IGZ1bmN0aW9uIChzY29wZSwgdXJpLCBrZXksIGFjbCwgdHlwZSwgYWNjZXNzS2V5LCBwb2xpY3ksIHNpZ25hdHVyZSwgZmlsZSkge1xuICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICAgIHNjb3BlLmF0dGVtcHQgPSB0cnVlO1xuXG4gICAgICB2YXIgZmQgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGZkLmFwcGVuZCgna2V5Jywga2V5KTtcbiAgICAgIGZkLmFwcGVuZCgnYWNsJywgYWNsKTtcbiAgICAgIGZkLmFwcGVuZCgnQ29udGVudC1UeXBlJywgZmlsZS50eXBlKTtcbiAgICAgIGZkLmFwcGVuZCgnQVdTQWNjZXNzS2V5SWQnLCBhY2Nlc3NLZXkpO1xuICAgICAgZmQuYXBwZW5kKCdwb2xpY3knLCBwb2xpY3kpO1xuICAgICAgZmQuYXBwZW5kKCdzaWduYXR1cmUnLCBzaWduYXR1cmUpO1xuICAgICAgZmQuYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTtcblxuICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIiwgdXBsb2FkUHJvZ3Jlc3MsIGZhbHNlKTtcbiAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCB1cGxvYWRDb21wbGV0ZSwgZmFsc2UpO1xuICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCB1cGxvYWRGYWlsZWQsIGZhbHNlKTtcbiAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgdXBsb2FkQ2FuY2VsZWQsIGZhbHNlKTtcbiAgICAgIHNjb3BlLiRlbWl0KCdzM3VwbG9hZDpzdGFydCcsIHhocik7XG5cbiAgICAgIC8vIERlZmluZSBldmVudCBoYW5kbGVyc1xuICAgICAgZnVuY3Rpb24gdXBsb2FkUHJvZ3Jlc3MoZSkge1xuICAgICAgICBzY29wZS4kYXBwbHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChlLmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICAgIHNjb3BlLnByb2dyZXNzID0gTWF0aC5yb3VuZChlLmxvYWRlZCAqIDEwMCAvIGUudG90YWwpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzY29wZS5wcm9ncmVzcyA9ICd1bmFibGUgdG8gY29tcHV0ZSc7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBtc2cgPSB7dHlwZTogJ3Byb2dyZXNzJywgdmFsdWU6IHNjb3BlLnByb2dyZXNzfTtcbiAgICAgICAgICBzY29wZS4kZW1pdCgnczN1cGxvYWQ6cHJvZ3Jlc3MnLCBtc2cpO1xuICAgICAgICAgIGlmICh0eXBlb2YgZGVmZXJyZWQubm90aWZ5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBkZWZlcnJlZC5ub3RpZnkobXNnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiB1cGxvYWRDb21wbGV0ZShlKSB7XG4gICAgICAgIHZhciB4aHIgPSBlLnNyY0VsZW1lbnQgfHwgZS50YXJnZXQ7XG4gICAgICAgIHNjb3BlLiRhcHBseShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2VsZi51cGxvYWRzLS07XG4gICAgICAgICAgc2NvcGUudXBsb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwNCkgeyAvLyBzdWNjZXNzZnVsIHVwbG9hZFxuICAgICAgICAgICAgc2NvcGUuc3VjY2VzcyA9IHRydWU7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHhocik7XG4gICAgICAgICAgICBzY29wZS4kZW1pdCgnczN1cGxvYWQ6c3VjY2VzcycsIHhociwge3BhdGg6IHVyaSArIGtleX0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzY29wZS5zdWNjZXNzID0gZmFsc2U7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeGhyKTtcbiAgICAgICAgICAgIHNjb3BlLiRlbWl0KCdzM3VwbG9hZDplcnJvcicsIHhocik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIHVwbG9hZEZhaWxlZChlKSB7XG4gICAgICAgIHZhciB4aHIgPSBlLnNyY0VsZW1lbnQgfHwgZS50YXJnZXQ7XG4gICAgICAgIHNjb3BlLiRhcHBseShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2VsZi51cGxvYWRzLS07XG4gICAgICAgICAgc2NvcGUudXBsb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgc2NvcGUuc3VjY2VzcyA9IGZhbHNlO1xuICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh4aHIpO1xuICAgICAgICAgIHNjb3BlLiRlbWl0KCdzM3VwbG9hZDplcnJvcicsIHhocik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gdXBsb2FkQ2FuY2VsZWQoZSkge1xuICAgICAgICB2YXIgeGhyID0gZS5zcmNFbGVtZW50IHx8IGUudGFyZ2V0O1xuICAgICAgICBzY29wZS4kYXBwbHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNlbGYudXBsb2Fkcy0tO1xuICAgICAgICAgIHNjb3BlLnVwbG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHNjb3BlLnN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeGhyKTtcbiAgICAgICAgICBzY29wZS4kZW1pdCgnczN1cGxvYWQ6YWJvcnQnLCB4aHIpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gU2VuZCB0aGUgZmlsZVxuICAgICAgc2NvcGUudXBsb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMudXBsb2FkcysrO1xuICAgICAgeGhyLm9wZW4oJ1BPU1QnLCB1cmksIHRydWUpO1xuICAgICAgeGhyLnNlbmQoZmQpO1xuXG4gICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5pc1VwbG9hZGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLnVwbG9hZHMgPiAwO1xuICAgIH07XG4gIH1dKTtcbiJdfQ==;
'use strict';

angular.module('ngS3upload.directives', []).directive('s3Upload', ['$parse', 'S3Uploader', 'ngS3Config', function ($parse, S3Uploader, ngS3Config) {
  return {
    restrict: 'AC',
    require: '?ngModel',
    replace: true,
    transclude: false,
    scope: true,
    controller: ['$scope', '$element', '$attrs', '$transclude', function ($scope, $element, $attrs, $transclude) {
      $scope.attempt = false;
      $scope.success = false;
      $scope.uploading = false;

      $scope.barClass = function () {
        return {
          'bar-success': $scope.attempt && !$scope.uploading && $scope.success
        };
      };
    }],
    compile: function compile(element, attr, linker) {
      return {
        pre: function pre($scope, $element, $attr) {
          if (angular.isUndefined($attr.bucket)) {
            throw Error('bucket is a mandatory attribute');
          }
        },
        post: function post(scope, element, attrs, ngModel) {
          // Build the opts array
          var opts = angular.extend({}, scope.$eval(attrs.s3UploadOptions || attrs.options));
          opts = angular.extend({
            submitOnChange: true,
            getOptionsUri: '/getS3Options',
            getManualOptions: null,
            acl: 'public-read',
            uploadingKey: 'uploading',
            folder: '',
            enableValidation: true,
            targetFilename: null
          }, opts);
          var bucket = scope.$eval(attrs.bucket);

          // Bind the button click event
          var button = angular.element(document.getElementById('s3-button-target')),
              file = angular.element(element.find('input')[0]);
          console.log(button);
          button.bind('click', function (e) {
            console.log('test this');

            file[0].click();
          });

          function Init() {

            var fileselect = document.getElementById('s3-file-target'),
                filedrag = document.getElementById('s3-drop-target');

            // file drop
            // filedrag.addEventListener("dragover", FileDragHover, false);
            // filedrag.addEventListener("dragleave", FileDragHover, false);
            filedrag.addEventListener('drop', FileSelectHandler, false);
            filedrag.style.display = 'block';
          }

          // function FileDragHover(e) {
          //   e.stopPropagation();
          //   e.preventDefault();
          //   e.target.className = (e.type == "dragover" ? "hover" : "");
          // }

          if (window.File && window.FileList && window.FileReader) {
            Init();
          }

          // file selection
          function FileSelectHandler(e) {

            // cancel event and hover styling
            // FileDragHover(e);

            // fetch FileList object
            var files = e.target.files || e.dataTransfer.files;

            console.log(files);
          }

          // Update the scope with the view value
          ngModel.$render = function () {
            scope.filename = ngModel.$viewValue;
          };

          var uploadFile = function uploadFile() {
            var selectedFile = file[0].files[0];
            var filename = selectedFile.name;
            var ext = filename.split('.').pop();

            if (angular.isObject(opts.getManualOptions)) {
              _upload(opts.getManualOptions);
            } else {
              S3Uploader.getUploadOptions(opts.getOptionsUri).then(function (s3Options) {
                _upload(s3Options);
              }, function (error) {
                throw Error('Can\'t receive the needed options for S3 ' + error);
              });
            }

            function _upload(s3Options) {
              if (opts.enableValidation) {
                ngModel.$setValidity('uploading', false);
              }

              var s3Uri = 'https://' + bucket + '.s3.amazonaws.com/';
              var key = opts.folder + new Date().getTime() + '-' + S3Uploader.randomString(16) + '.' + ext;
              S3Uploader.upload(scope, s3Uri, key, opts.acl, selectedFile.type, s3Options.key, s3Options.policy, s3Options.signature, selectedFile).then(function () {
                ngModel.$setViewValue(s3Uri + key);
                scope.filename = ngModel.$viewValue;

                if (opts.enableValidation) {
                  ngModel.$setValidity('uploading', true);
                  ngModel.$setValidity('succeeded', true);
                }
              }, function () {
                scope.filename = ngModel.$viewValue;

                if (opts.enableValidation) {
                  ngModel.$setValidity('uploading', true);
                  ngModel.$setValidity('succeeded', false);
                }
              });
            }
          };

          element.bind('change', function (nVal) {
            if (opts.submitOnChange) {
              scope.$apply(function () {
                uploadFile();
              });
            }
          });

          if (angular.isDefined(attrs.doUpload)) {
            scope.$watch(attrs.doUpload, function (value) {
              if (value) uploadFile();
            });
          }
        }
      };
    },
    templateUrl: function templateUrl(elm, attrs) {
      var theme = attrs.theme || ngS3Config.theme;
      return 'theme/' + theme + '.html';
    }
  };
}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZy1zM3VwbG9hZC9kaXJlY3RpdmVzL3MzLXVwbG9hZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLE9BQU8sQ0FBQyxNQUFNLENBQUMsdUJBQXVCLEVBQUUsRUFBRSxDQUFDLENBQ3pDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxVQUFVLE1BQU0sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFO0FBQ3JHLFNBQU87QUFDTCxZQUFRLEVBQUUsSUFBSTtBQUNkLFdBQU8sRUFBRSxVQUFVO0FBQ25CLFdBQU8sRUFBRSxJQUFJO0FBQ2IsY0FBVSxFQUFFLEtBQUs7QUFDakIsU0FBSyxFQUFFLElBQUk7QUFDWCxjQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsVUFBVSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7QUFDM0csWUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDdkIsWUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDdkIsWUFBTSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7O0FBRXpCLFlBQU0sQ0FBQyxRQUFRLEdBQUcsWUFBWTtBQUM1QixlQUFPO0FBQ0wsdUJBQWEsRUFBRSxNQUFNLENBQUMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxNQUFNLENBQUMsT0FBTztTQUNyRSxDQUFDO09BQ0gsQ0FBQztLQUNILENBQUM7QUFDRixXQUFPLEVBQUUsaUJBQVUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7QUFDeEMsYUFBTztBQUNMLFdBQUcsRUFBRSxhQUFVLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO0FBQ3RDLGNBQUksT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFDckMsa0JBQU0sS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7V0FDaEQ7U0FDRjtBQUNELFlBQUksRUFBRSxjQUFVLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTs7QUFFOUMsY0FBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsZUFBZSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ25GLGNBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO0FBQ3BCLDBCQUFjLEVBQUUsSUFBSTtBQUNwQix5QkFBYSxFQUFFLGVBQWU7QUFDOUIsNEJBQWdCLEVBQUUsSUFBSTtBQUN0QixlQUFHLEVBQUUsYUFBYTtBQUNsQix3QkFBWSxFQUFFLFdBQVc7QUFDekIsa0JBQU0sRUFBRSxFQUFFO0FBQ1YsNEJBQWdCLEVBQUUsSUFBSTtBQUN0QiwwQkFBYyxFQUFFLElBQUk7V0FDckIsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNULGNBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDOzs7QUFHdkMsY0FBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUM7Y0FDdkUsSUFBSSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25ELGlCQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3BCLGdCQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsRUFBRTtBQUNoQyxtQkFBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQzs7QUFFekIsZ0JBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztXQUNqQixDQUFDLENBQUM7O0FBRUgsbUJBQVMsSUFBSSxHQUFHOztBQUVaLGdCQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDO2dCQUN4RCxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOzs7OztBQUt2RCxvQkFBUSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUM1RCxvQkFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1dBR3BDOzs7Ozs7OztBQVFELGNBQUksTUFBTSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQUU7QUFDdkQsZ0JBQUksRUFBRSxDQUFDO1dBQ1I7OztBQUdELG1CQUFTLGlCQUFpQixDQUFDLENBQUMsRUFBRTs7Ozs7O0FBTTVCLGdCQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQzs7QUFFbkQsbUJBQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7V0FFcEI7OztBQUlELGlCQUFPLENBQUMsT0FBTyxHQUFHLFlBQVk7QUFDNUIsaUJBQUssQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztXQUNyQyxDQUFDOztBQUVGLGNBQUksVUFBVSxHQUFHLHNCQUFZO0FBQzNCLGdCQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BDLGdCQUFJLFFBQVEsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDO0FBQ2pDLGdCQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDOztBQUVwQyxnQkFBRyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO0FBQzFDLHFCQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7YUFDaEMsTUFBTTtBQUNMLHdCQUFVLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLFNBQVMsRUFBRTtBQUN4RSx1QkFBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2VBQ3BCLEVBQUUsVUFBVSxLQUFLLEVBQUU7QUFDbEIsc0JBQU0sS0FBSyxDQUFDLDJDQUEwQyxHQUFHLEtBQUssQ0FBQyxDQUFDO2VBQ2pFLENBQUMsQ0FBQzthQUNKOztBQUVELHFCQUFTLE9BQU8sQ0FBQyxTQUFTLEVBQUM7QUFDekIsa0JBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO0FBQ3pCLHVCQUFPLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztlQUMxQzs7QUFFRCxrQkFBSSxLQUFLLEdBQUcsVUFBVSxHQUFHLE1BQU0sR0FBRyxvQkFBb0IsQ0FBQztBQUN2RCxrQkFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxBQUFDLElBQUksSUFBSSxFQUFFLENBQUUsT0FBTyxFQUFFLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUMvRix3QkFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQ25CLEtBQUssRUFDTCxHQUFHLEVBQ0gsSUFBSSxDQUFDLEdBQUcsRUFDUixZQUFZLENBQUMsSUFBSSxFQUNqQixTQUFTLENBQUMsR0FBRyxFQUNiLFNBQVMsQ0FBQyxNQUFNLEVBQ2hCLFNBQVMsQ0FBQyxTQUFTLEVBQ25CLFlBQVksQ0FDYixDQUFDLElBQUksQ0FBQyxZQUFZO0FBQ2pCLHVCQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQztBQUNuQyxxQkFBSyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDOztBQUVwQyxvQkFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7QUFDekIseUJBQU8sQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3hDLHlCQUFPLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDekM7ZUFDRixFQUFFLFlBQVk7QUFDYixxQkFBSyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDOztBQUVwQyxvQkFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7QUFDekIseUJBQU8sQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3hDLHlCQUFPLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDMUM7ZUFDRixDQUFDLENBQUM7YUFDTjtXQUNGLENBQUM7O0FBRUYsaUJBQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsSUFBSSxFQUFFO0FBQ3JDLGdCQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7QUFDdkIsbUJBQUssQ0FBQyxNQUFNLENBQUMsWUFBWTtBQUN2QiwwQkFBVSxFQUFFLENBQUM7ZUFDZCxDQUFDLENBQUM7YUFDSjtXQUNGLENBQUMsQ0FBQzs7QUFFSCxjQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQ3JDLGlCQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsVUFBUyxLQUFLLEVBQUU7QUFDM0Msa0JBQUksS0FBSyxFQUFFLFVBQVUsRUFBRSxDQUFDO2FBQ3pCLENBQUMsQ0FBQztXQUNKO1NBQ0Y7T0FDRixDQUFDO0tBQ0g7QUFDRCxlQUFXLEVBQUUscUJBQVMsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNoQyxVQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUM7QUFDNUMsYUFBTyxRQUFRLEdBQUcsS0FBSyxHQUFHLE9BQU8sQ0FBQztLQUNuQztHQUNGLENBQUM7Q0FDSCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJzcmMvbmctczN1cGxvYWQvZGlyZWN0aXZlcy9zMy11cGxvYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmFuZ3VsYXIubW9kdWxlKCduZ1MzdXBsb2FkLmRpcmVjdGl2ZXMnLCBbXSkuXG4gIGRpcmVjdGl2ZSgnczNVcGxvYWQnLCBbJyRwYXJzZScsICdTM1VwbG9hZGVyJywgJ25nUzNDb25maWcnLCBmdW5jdGlvbiAoJHBhcnNlLCBTM1VwbG9hZGVyLCBuZ1MzQ29uZmlnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQUMnLFxuICAgICAgcmVxdWlyZTogJz9uZ01vZGVsJyxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICB0cmFuc2NsdWRlOiBmYWxzZSxcbiAgICAgIHNjb3BlOiB0cnVlLFxuICAgICAgY29udHJvbGxlcjogWyckc2NvcGUnLCAnJGVsZW1lbnQnLCAnJGF0dHJzJywgJyR0cmFuc2NsdWRlJywgZnVuY3Rpb24gKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycywgJHRyYW5zY2x1ZGUpIHtcbiAgICAgICAgJHNjb3BlLmF0dGVtcHQgPSBmYWxzZTtcbiAgICAgICAgJHNjb3BlLnN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgJHNjb3BlLnVwbG9hZGluZyA9IGZhbHNlO1xuXG4gICAgICAgICRzY29wZS5iYXJDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgXCJiYXItc3VjY2Vzc1wiOiAkc2NvcGUuYXR0ZW1wdCAmJiAhJHNjb3BlLnVwbG9hZGluZyAmJiAkc2NvcGUuc3VjY2Vzc1xuICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICB9XSxcbiAgICAgIGNvbXBpbGU6IGZ1bmN0aW9uIChlbGVtZW50LCBhdHRyLCBsaW5rZXIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwcmU6IGZ1bmN0aW9uICgkc2NvcGUsICRlbGVtZW50LCAkYXR0cikge1xuICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNVbmRlZmluZWQoJGF0dHIuYnVja2V0KSkge1xuICAgICAgICAgICAgICB0aHJvdyBFcnJvcignYnVja2V0IGlzIGEgbWFuZGF0b3J5IGF0dHJpYnV0ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcG9zdDogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycywgbmdNb2RlbCkge1xuICAgICAgICAgICAgLy8gQnVpbGQgdGhlIG9wdHMgYXJyYXlcbiAgICAgICAgICAgIHZhciBvcHRzID0gYW5ndWxhci5leHRlbmQoe30sIHNjb3BlLiRldmFsKGF0dHJzLnMzVXBsb2FkT3B0aW9ucyB8fCBhdHRycy5vcHRpb25zKSk7XG4gICAgICAgICAgICBvcHRzID0gYW5ndWxhci5leHRlbmQoe1xuICAgICAgICAgICAgICBzdWJtaXRPbkNoYW5nZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZ2V0T3B0aW9uc1VyaTogJy9nZXRTM09wdGlvbnMnLFxuICAgICAgICAgICAgICBnZXRNYW51YWxPcHRpb25zOiBudWxsLFxuICAgICAgICAgICAgICBhY2w6ICdwdWJsaWMtcmVhZCcsXG4gICAgICAgICAgICAgIHVwbG9hZGluZ0tleTogJ3VwbG9hZGluZycsXG4gICAgICAgICAgICAgIGZvbGRlcjogJycsXG4gICAgICAgICAgICAgIGVuYWJsZVZhbGlkYXRpb246IHRydWUsXG4gICAgICAgICAgICAgIHRhcmdldEZpbGVuYW1lOiBudWxsXG4gICAgICAgICAgICB9LCBvcHRzKTtcbiAgICAgICAgICAgIHZhciBidWNrZXQgPSBzY29wZS4kZXZhbChhdHRycy5idWNrZXQpO1xuXG4gICAgICAgICAgICAvLyBCaW5kIHRoZSBidXR0b24gY2xpY2sgZXZlbnRcbiAgICAgICAgICAgIHZhciBidXR0b24gPSBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3MzLWJ1dHRvbi10YXJnZXQnKSksXG4gICAgICAgICAgICAgIGZpbGUgPSBhbmd1bGFyLmVsZW1lbnQoZWxlbWVudC5maW5kKFwiaW5wdXRcIilbMF0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYnV0dG9uKTtcbiAgICAgICAgICAgIGJ1dHRvbi5iaW5kKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0IHRoaXMnKTtcblxuICAgICAgICAgICAgICBmaWxlWzBdLmNsaWNrKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gSW5pdCgpIHtcblxuICAgICAgICAgICAgICAgIHZhciBmaWxlc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzMy1maWxlLXRhcmdldFwiKSxcbiAgICAgICAgICAgICAgICAgIGZpbGVkcmFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzMy1kcm9wLXRhcmdldFwiKTtcblxuICAgICAgICAgICAgICAgIC8vIGZpbGUgZHJvcFxuICAgICAgICAgICAgICAgIC8vIGZpbGVkcmFnLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBGaWxlRHJhZ0hvdmVyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgLy8gZmlsZWRyYWcuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdsZWF2ZVwiLCBGaWxlRHJhZ0hvdmVyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZmlsZWRyYWcuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgRmlsZVNlbGVjdEhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBmaWxlZHJhZy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZnVuY3Rpb24gRmlsZURyYWdIb3ZlcihlKSB7XG4gICAgICAgICAgICAvLyAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAvLyAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vICAgZS50YXJnZXQuY2xhc3NOYW1lID0gKGUudHlwZSA9PSBcImRyYWdvdmVyXCIgPyBcImhvdmVyXCIgOiBcIlwiKTtcbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgaWYgKHdpbmRvdy5GaWxlICYmIHdpbmRvdy5GaWxlTGlzdCAmJiB3aW5kb3cuRmlsZVJlYWRlcikge1xuICAgICAgICAgICAgICBJbml0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGZpbGUgc2VsZWN0aW9uXG4gICAgICAgICAgICBmdW5jdGlvbiBGaWxlU2VsZWN0SGFuZGxlcihlKSB7XG5cbiAgICAgICAgICAgICAgLy8gY2FuY2VsIGV2ZW50IGFuZCBob3ZlciBzdHlsaW5nXG4gICAgICAgICAgICAgIC8vIEZpbGVEcmFnSG92ZXIoZSk7XG5cbiAgICAgICAgICAgICAgLy8gZmV0Y2ggRmlsZUxpc3Qgb2JqZWN0XG4gICAgICAgICAgICAgIHZhciBmaWxlcyA9IGUudGFyZ2V0LmZpbGVzIHx8IGUuZGF0YVRyYW5zZmVyLmZpbGVzO1xuXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbGVzKTtcblxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgc2NvcGUgd2l0aCB0aGUgdmlldyB2YWx1ZVxuICAgICAgICAgICAgbmdNb2RlbC4kcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBzY29wZS5maWxlbmFtZSA9IG5nTW9kZWwuJHZpZXdWYWx1ZTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciB1cGxvYWRGaWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWRGaWxlID0gZmlsZVswXS5maWxlc1swXTtcbiAgICAgICAgICAgICAgdmFyIGZpbGVuYW1lID0gc2VsZWN0ZWRGaWxlLm5hbWU7XG4gICAgICAgICAgICAgIHZhciBleHQgPSBmaWxlbmFtZS5zcGxpdCgnLicpLnBvcCgpO1xuXG4gICAgICAgICAgICAgIGlmKGFuZ3VsYXIuaXNPYmplY3Qob3B0cy5nZXRNYW51YWxPcHRpb25zKSkge1xuICAgICAgICAgICAgICAgIF91cGxvYWQob3B0cy5nZXRNYW51YWxPcHRpb25zKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBTM1VwbG9hZGVyLmdldFVwbG9hZE9wdGlvbnMob3B0cy5nZXRPcHRpb25zVXJpKS50aGVuKGZ1bmN0aW9uIChzM09wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgIF91cGxvYWQoczNPcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiQ2FuJ3QgcmVjZWl2ZSB0aGUgbmVlZGVkIG9wdGlvbnMgZm9yIFMzIFwiICsgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgZnVuY3Rpb24gX3VwbG9hZChzM09wdGlvbnMpe1xuICAgICAgICAgICAgICAgIGlmIChvcHRzLmVuYWJsZVZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgIG5nTW9kZWwuJHNldFZhbGlkaXR5KCd1cGxvYWRpbmcnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHMzVXJpID0gJ2h0dHBzOi8vJyArIGJ1Y2tldCArICcuczMuYW1hem9uYXdzLmNvbS8nO1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBvcHRzLmZvbGRlciArIChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgKyAnLScgKyBTM1VwbG9hZGVyLnJhbmRvbVN0cmluZygxNikgKyBcIi5cIiArIGV4dDtcbiAgICAgICAgICAgICAgICBTM1VwbG9hZGVyLnVwbG9hZChzY29wZSxcbiAgICAgICAgICAgICAgICAgICAgczNVcmksXG4gICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgb3B0cy5hY2wsXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRmlsZS50eXBlLFxuICAgICAgICAgICAgICAgICAgICBzM09wdGlvbnMua2V5LFxuICAgICAgICAgICAgICAgICAgICBzM09wdGlvbnMucG9saWN5LFxuICAgICAgICAgICAgICAgICAgICBzM09wdGlvbnMuc2lnbmF0dXJlLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEZpbGVcbiAgICAgICAgICAgICAgICAgICkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIG5nTW9kZWwuJHNldFZpZXdWYWx1ZShzM1VyaSArIGtleSk7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLmZpbGVuYW1lID0gbmdNb2RlbC4kdmlld1ZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRzLmVuYWJsZVZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICBuZ01vZGVsLiRzZXRWYWxpZGl0eSgndXBsb2FkaW5nJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgbmdNb2RlbC4kc2V0VmFsaWRpdHkoJ3N1Y2NlZWRlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLmZpbGVuYW1lID0gbmdNb2RlbC4kdmlld1ZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRzLmVuYWJsZVZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICBuZ01vZGVsLiRzZXRWYWxpZGl0eSgndXBsb2FkaW5nJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgbmdNb2RlbC4kc2V0VmFsaWRpdHkoJ3N1Y2NlZWRlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGVsZW1lbnQuYmluZCgnY2hhbmdlJywgZnVuY3Rpb24gKG5WYWwpIHtcbiAgICAgICAgICAgICAgaWYgKG9wdHMuc3VibWl0T25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICBzY29wZS4kYXBwbHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgdXBsb2FkRmlsZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNEZWZpbmVkKGF0dHJzLmRvVXBsb2FkKSkge1xuICAgICAgICAgICAgICBzY29wZS4kd2F0Y2goYXR0cnMuZG9VcGxvYWQsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB1cGxvYWRGaWxlKCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICB0ZW1wbGF0ZVVybDogZnVuY3Rpb24oZWxtLCBhdHRycykge1xuICAgICAgICB2YXIgdGhlbWUgPSBhdHRycy50aGVtZSB8fCBuZ1MzQ29uZmlnLnRoZW1lO1xuICAgICAgICByZXR1cm4gJ3RoZW1lLycgKyB0aGVtZSArICcuaHRtbCc7XG4gICAgICB9XG4gICAgfTtcbiAgfV0pO1xuIl19;
angular.module('ngS3upload').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('theme/bootstrap2.html',
    "<div class=\"upload-wrap\">\n" +
    "  <button class=\"btn btn-primary\" type=\"button\"><span ng-if=\"!filename\">Choose file</span><span ng-if=\"filename\">Replace file</span></button>\n" +
    "  <a ng-href=\"{{ filename  }}\" target=\"_blank\" class=\"\" ng-if=\"filename\" > Stored file </a>\n" +
    "  <div class=\"progress progress-striped\" ng-class=\"{active: uploading}\" ng-show=\"attempt\" style=\"margin-top: 10px\">\n" +
    "    <div class=\"bar\" style=\"width: {{ progress }}%;\" ng-class=\"barClass()\"></div>\n" +
    "    </div>\n" +
    "  <input type=\"file\" style=\"display: none\"/>\n" +
    "</div>"
  );


  $templateCache.put('theme/bootstrap3.html',
    "<div class=\"upload-wrap\">\n" +
    "  <button class=\"btn btn-primary\" type=\"button\" style=\"margin-bottom: 10px\" id=\"s3-button-target\">\n" +
    "    <span>Choose file</span>\n" +
    "  </button>\n" +
    "\n" +
    "  <div id=\"s3-drop-target\" style=\"height: 300px; width: 300px; background-color: #eee\"> drop file here</div>\n" +
    "  <div class=\"progress\" >\n" +
    "    <div class=\"progress-bar progress-bar-striped\" ng-class=\"{active: uploading}\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: {{ progress }}%;\" ng-class=\"barClass()\">\n" +
    "      <span class=\"sr-only\">{{progress}}% Complete</span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <input type=\"file\" style=\"display: none\" id=\"s3-file-target\"/>\n" +
    "</div>\n"
  );

}]);
