function searchResult() {

    document.getElementsByClassName("btn")[0].addEventListener("click", function() {

        var input = document.getElementById("searchbar").value;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {

            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("result").innerHTML = xhr.responseText;
            }
        }
        xhr.open("GET", "http://localhost:8080/superheroes.php?query=" + input);
        xhr.send();
    })
}

window.onload=searchResult;