import React, {Component} from "react";

class UltimoProductoCreado extends Component {

    constructor(props){
        super(props);
        this.state={
            ultimoProducto: [],
            url: "https://serene-beyond-45379.herokuapp.com/http://koaricomic.herokuapp.com/api/products"
        }
    }

    apiCall(url, consecuencia){
        fetch(url)
            .then(response => response.json())
            .then (data => consecuencia(data))
            .catch(error => console.log(error))
    }

    componentDidMount() {
        console.log("-----")
        this.apiCall(this.state.url, this.mostrarInfo )
        
      }

      mostrarInfo = (data) => {
          console.log(data)
          this.setState({
            ultimoProducto: data.products[data.products.length -1].name
              })
      }
      render() {
        
        return (
          <div>
              <p>El ultimo elemento creado en la tienda es: {this.state.ultimoProducto}</p>
          </div>
        );
        
    }

}

export default UltimoProductoCreado;
