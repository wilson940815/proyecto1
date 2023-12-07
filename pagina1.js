let arrayGafas;
const traerDatos = async () => {
    try {
        const response = await fetch('/gafas.json');
        const data = await response.json();
        let carou = document.querySelector(".carou");
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            carou.innerHTML = `
    <div class="carousel-item">
        <img src="${data[i].img}" class="d-block w-100 h-100" alt="${data[i].nombre}">
    </div>
    `
        }
        arrayGafas = data;
    } catch (error) {
        console.log(error);
    }
}

traerDatos();






