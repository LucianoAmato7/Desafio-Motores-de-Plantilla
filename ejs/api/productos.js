class Api {

    constructor() {
        this.productos = [
            {
            title: "Iphone 14 Pro Max", 
            price: 1650, 
            thumbnail: "https://i.ibb.co/KGKjZBG/i14-Pro-Max.png",
            id: 1
            }
        ]
    }

    productosTodos(){

        if( this.productos.length > 0 ) {

            return this.productos
    
        } else {

            return false 

        }

    }


    guardar( newProd ){

        let lastElement = this.productos.length -1;

        let id = this.productos.length > 0 ? this.productos[lastElement].id + 1 : 1; 
    
        let prod = {...newProd, id: id }

        this.productos.push( prod )
    
        return prod

    }

}


export default Api

//PRODUCTO DE PRUEBA
// {
//     title: "Iphone 14 Pro Max", 
//     price: 1650, 
//     thumbnail: "https://i.ibb.co/KGKjZBG/i14-Pro-Max.png",
//     id: 1
// }