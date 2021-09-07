const getDog = async () => {
    const url = "https://api.thedogapi.com/v1/images/search";
    const res = await fetch(url);
    const [data] = await res.json();
  
    let { url: image, breeds: [breed] } = data;

    if (!breed) {
        breed = {
            id: 0,
            name: "random"
        }
    }

    const dog = {
        image,
        breed,
    }


    return dog;
}

export default getDog;