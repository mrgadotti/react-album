const breakpoints = [1, 2, 3];

const unsplashPhotos = [
    { id: 1, src: "http://192.168.0.190:8000/marcelo/imagens/1.jpeg" },
    { id: 2, src: "http://192.168.0.190:8000/marcelo/imagens/2.jpeg" },
    { id: 3, src: "http://192.168.0.190:8000/marcelo/imagens/3.jpeg" },
];

const photos = unsplashPhotos.map((photo) => {
    const width = 1024;
    const height = 768;

    return {
        src: photo.src,
        width,
        height,
        id: photo.id
    };
});

export default photos;
