export const getGifs = async (category) => {

    const apiKey = 'Keeux9fZo305sabIAyfJnx5pqqxeFTBG';
    const url = `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=1`;
    const response = await fetch(url);
    const {data} = await response.json();

    const gifs = data.map( img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}