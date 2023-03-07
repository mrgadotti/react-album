import api from "./api";
import { Images } from "./models";

const unsplashPhotos = [
    { id: 1, src: "http://192.168.0.190:8000/marcelo/imagens/1.jpeg" },
    { id: 2, src: "http://192.168.0.190:8000/marcelo/imagens/2.jpeg" },
    { id: 3, src: "http://192.168.0.190:8000/marcelo/imagens/3.jpeg" },
];



const photos = (): Images[] => {
    console.log(JSON.stringify(unsplashPhotos));


    api.get("test.json").then((response) => {
        console.log(JSON.stringify(response.data));
    });

    const links = unsplashPhotos.map((photo) => {
        const width = 1024;
        const height = 768;


        return {
            src: photo.src,
            width,
            height,
            id: photo.id,
            // title: "Slide title", 
            // description: "Slide description"
        };
    });
    console.log(JSON.stringify(unsplashPhotos));
    return links;
};


export default photos;
