//https://ariasthompson.com/2018/02/08/adding-instagram-feed-website-without-plugin/

var request = new XMLHttpRequest();
request.open('GET', 'https://api.instagram.com/v1/users/self/media/recent/?access_token=37123439.e586f61.1dadf9a9e95247caafc77afd408d16b1&count=9', true);

request.onload = function (container) {
    if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);
        for (var i = 0; i < data.data.length; i++) {
            var container = document.getElementById('insta-feed');
            var imgURL = data.data[i].images.standard_resolution.url;
            var div = document.createElement('div');
            div.setAttribute('class', 'instapic');
            container.appendChild(div);
            var img = document.createElement('img');
            img.setAttribute('src', imgURL)
            div.appendChild(img);
        }
    } else {}
};

request.onerror = function () { };

request.send();