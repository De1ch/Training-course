 var img = document.querySelectorAll('img'),
            i = 0,
            max = img.length,
            left,
            top;

        for (; i < max; i += 1) {
            left = Math.round(Math.random() * (document.body.offsetWidth - 100))  + 'px'; 
            top = Math.round(Math.random() * (document.body.offsetHeight - 100))  + 'px';
            // 100 - это размер картинки, чтобы не смещалась за пределы body
            
            img[i].style.left = left;
            img[i].style.top = top;
        }
