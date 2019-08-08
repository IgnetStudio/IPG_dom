function setCookie(name, value, days, path, domain, secure) {

    if(!navigator.cookieEnabled) return; // browser check

    var e = encodeURIComponent;

    var cookie = e(name) + "=" + e(value);

    if(typeof days === "number") {
        var date = new Date();

        date.setTime(date.getTime() + days * 1000 * 60 * 60 * 24);

        cookie += "; expires=" + date.toGMTString();

    }

    if(path) {
        cookie += "; path=" + path;
    }

    if(domain) {
        cookie += "; domain=" + domain;
    }

    if(secure) {
        cookie += "; secure=";
    }

    // return cookie;

    document.cookie = cookie;

    // setCookie("firstName", "Jan", 100)); // add cookie in browser console

}

function getCookie(name) {

    if(!document.cookie) return null; // check ief cookie is empty

    var cookieArray = document.cookie.split(/; */);
    var cookieObject = {};

    // console.log(cookieArray); // show cookie in browser

    cookieArray.forEach (function(cookie) {
        cookie = cookie.split("=");
        cookieObject[cookie[0]] = decodeURIComponent(cookie[1]);

    });

    // console.log(cookieObject); // show cookie in browser

    return cookieObject[name] || null;

}