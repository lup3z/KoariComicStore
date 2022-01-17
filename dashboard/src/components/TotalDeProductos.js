import React, {Component} from "react";

class TotalDeProductos extends Component {

    constructor(props){
        super(props);
        this.state={
            cantidad: [],
            url: "https://serene-beyond-45379.herokuapp.com/http://koaricomic.herokuapp.com/products"
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
          this.setState(
              {
                cantidad: data.count
              }
          )
      }
      render() {
        
        return (
          <div>
              <p>La cantidad de productos en la tienda es: {this.state.cantidad}</p>
          </div>
        );
        
    }

}

export default TotalDeProductos;
