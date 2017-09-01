class PageApi{
    static getAllPages(){
        return fetch('http://toulousecms.dev/wp-json/wp/v2/pages')
            .then(res => res.json())
            .catch(error => error);
    }
}

export default PageApi;