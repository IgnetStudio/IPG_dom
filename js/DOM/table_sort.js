(function () {
    var ipgTable = document.querySelector("#ipgTable");
    var ipgHead = ipgTable.querySelectorAll("thead th");
    var ipgBody = ipgTable.querySelectorAll("tbody tr");

    function makeArray(nodeList) { // make temporary array & insert table row
        var tempArray = [];
        for (var i = 0; i < nodeList.length; i++) {
            tempArray.push(nodeList[i]);
        }
        return tempArray;
    }

    function resetClass(nodeList) { // clear ipgAsc & ipgDesc class names
        for (var i = 0; i < nodeList.length; i++) {
            nodeList[i].className = "";
        }
    }

    function sortTable(e) { // main function, sort columns ascending & descending
        var ipgTarget = e.target;
        var headArray = makeArray(ipgHead);
        var bodyArray = makeArray(ipgBody);
        var ipgIndex = headArray.indexOf(ipgTarget);
        var ipgFragment = document.createDocumentFragment();
        var ipgOrder = (ipgTarget.className === "" || ipgTarget.className === "ipgDesc") ? "ipgAsc" : "ipgDesc";
        resetClass(ipgHead);
        bodyArray.sort(function (a, b) {
            var tdA = a.children[ipgIndex].textContent;
            var tdB = b.children[ipgIndex].textContent;
            if (tdA < tdB) {
                return ipgOrder === "ipgAsc" ? -1 : 1;
            }
            else if (tdA > tdB) {
                return ipgOrder === "ipgAsc" ? 1 : -11;
            }
            else {
                return 0;
            }
        });
        bodyArray.forEach(function (tr) {
            ipgFragment.appendChild(tr);
        });
        ipgTarget.className = ipgOrder;
        ipgTable.querySelector("tbody").appendChild(ipgFragment);
    }
    for (var i = 0; i < ipgHead.length; i++) {
        ipgHead[i].addEventListener("click", sortTable, false);
    }
})();