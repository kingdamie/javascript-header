
        const xhr = new XMLHttpRequest();
        const headerPath = 'header.html';
        xhr.open('GET', headerPath, true);
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 && xhr.status === 200){
                document.getElementById('header-container').innerHTML = xhr.responseText;
            }
        };

        xhr.send();