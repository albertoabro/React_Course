
const apiKey='Keeux9fZo305sabIAyfJnx5pqqxeFTBG'; //Obtained of Giphy API

const request = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
request
  .then(resp => resp.json()) //Promise's concat
    .then(({data}) => {
        const {url} = data.images.original;
        console.log(url);

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
});