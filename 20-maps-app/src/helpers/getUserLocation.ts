

export const getUserLocation = async(): Promise<[number, number]> => {
    return new Promise( (resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            ( {coords } ) => {
                const latitude = parseFloat(coords.latitude.toFixed(6));
                const longitude = parseFloat(coords.longitude.toFixed(6));
                resolve([ longitude, latitude])
            },
            (err) => {
                alert('Error getting user location');
                console.log(err);
                reject( new Error('Error getting user location'));
            },
            {
                enableHighAccuracy: true
            }
        )
    });
}

