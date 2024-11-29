const bicicletas = require('./datosBici.js');

const dhBici = {
    bicicletas,

    buscarBici(id){
        const buscar = this.bicicletas.filter((bici) => bici.id == id);
        return buscar.length > 0 ? buscar[0] : null;
    },
    venderBici(id){
        const vender = this.buscarBici(id);
        if (vender) {
            vender.vendida = true;
            return vender;
        } else {
            return "Bicicleta no encontrada";
        }
    },
    biciParaLaVenta(){
        return this.bicicletas.filter(bici => bici.vendida === false)
    },
    biciVendidas(){
        return this.bicicletas.filter(bici => bici.vendida === true)
    },
    totalDeVentas(){
        const ventas = this.biciVendidas();
        return ventas.reduce((acumulador, bici) => acumulador + bici.precio, 0);
    },
    biciPorRodado(numeroDelRodado){
        const rodadoBici = this.bicicletas.filter((bici) => bici.rodado == numeroDelRodado);
        return rodadoBici.length > 0 ? rodadoBici[0] : null;
    },
    listarTodasLasBicis(){
        this.bicicletas.forEach((bici , i) => { 
            console.log(`${i + 1}. ID: ${bici.id}, Marca: ${bici.marca}, Modelo: ${bici.modelo}, Precio: ${bici.precio}, Vendida: ${bici.vendida}`);
        });
    },
    aumentoBici(porcentajeAumento){
        return this.bicicletas.map((bici) =>{
            return {
                ...bici,
                precio: bici.precio +(bici.precio*porcentajeAumento)/100,
            };
        });
    }
}

// console.log(dhBici.buscarBici(1));
// console.log(dhBici.venderBici(2));
// console.log(dhBici.biciParaLaVenta());
// console.log(dhBici.totalDeVentas());
// dhBici.listarTodasLasBicis();
console.log(dhBici.aumentoBici(100));


