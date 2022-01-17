import React, {Component} from "react";

class ListadoDeProductos extends Component {

    constructor(props){
        super(props);
        this.state={
            listado: [],
            url: "http://localhost:3030/api/products"
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
                listado: data.products
              }
          )
      }
      render() {
        
        return (
          <div>
              <p>El listado de productos en tienda es:</p>
              {this.state.listado.map((product, i)=>
              <tr key={i}>
                <td>{product.id}</td>
                <td>{product.name}   </td>
                <td>${product.price}</td>
            </tr>
              )}
          </div>
        )
        
    }

}

export default ListadoDeProductos;
