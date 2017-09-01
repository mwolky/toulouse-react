class TourApi {
    static getAllTours() {
        return fetch('http://toulousecms.dev/wp-json/wp/v2/tours')
            .then(res => res.json())
            .catch(error => {
                return error;
            });
    }
}

export default TourApi;