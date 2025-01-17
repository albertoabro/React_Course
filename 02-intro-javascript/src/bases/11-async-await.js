const getImage = async () => {

try{

    const apiKey='Keeux9fZo305sabIAyfJnx5pqqxeFTBG';
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`); //Wait to next promise must to finish and then continue

    const {data} = await response.json()
    const {url} = data.images.original;

    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);

    console.log(data);
}

catch (error){
    console.error(error);
}
}

getImage();