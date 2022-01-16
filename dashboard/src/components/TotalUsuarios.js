import React, {Component} from "react";

class TotalUsuarios extends Component {

    constructor(props){
        super(props);
        this.state={
            totalUsus: [],
            url: "http://localhost:3030/api/users"
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
                totalUsus: data.count
              }
          )
      }
      render() {
        
        return (
          <div>
              <p>La cantidad de usuarios de la tienda es: {this.state.totalUsus}</p>
          </div>
        );
        
    }

}

export default TotalUsuarios;
