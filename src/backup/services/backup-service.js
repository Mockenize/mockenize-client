module.exports = function ($http, apiUrl) {
    var baseUrl = apiUrl.concat('/_mockenize/file');

    this.upload = function (key) {
        var f = document.getElementById('file').files[0];
        if(f) {
          r = new FileReader();
          r.onloadend = function(e) {
            var data = e.target.result;

            $http({
              method: 'POST',
              url: baseUrl + '/upload',
              data: data,
              headers: {
                  'Content-Type': 'application/octet-stream'
              }
            }).then(function (response) {
                alert("Import file with sucess!");
            }, function (response) {
              alert(response.data);
            });
          }

          r.readAsBinaryString(f);
        }
    };
};
