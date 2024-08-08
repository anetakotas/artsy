document.addEventListener('DOMContentLoaded', function() {
    fetch('../randomArt.json')
        .then(response => response.json())
        .then(data => {

            for(var i = 0; i < Object.keys(data.artworks).length; i++) {
                var container = document.getElementById('carousel-inner-id');
            
                var item = document.createElement('div');
                var image = document.createElement('img');
                var caption = document.createElement('div');
                var h5 = document.createElement('h5');
                var p = document.createElement('p');
            
                item.className = 'carousel-item';
                image.className = 'd-block w-100';
                image.src = '/images/randomArt/' + (i) +'.jpeg';
                image.alt = 'Fourth slide';
                caption.className = 'carousel-caption d-none d-md-block';
                h5.innerHTML = data.artworks[i].title + ' - ' + data.artworks[i].author + '  (' + data.artworks[i].medium + ')';
                p.innerHTML = data.artworks[i].description;
            
                caption.appendChild(h5);
                caption.appendChild(p);
                item.appendChild(caption);
                item.appendChild(image);
                container.appendChild(item); 
                
                if(i == 0) {
                    item.className = 'carousel-item active';
                }

            }

            
        })
})