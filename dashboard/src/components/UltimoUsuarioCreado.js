import React, {Component} from "react";

class UltimoUsuarioCreado extends Component {

    constructor(props){
        super(props);
        this.state={
            ultimoUsuario: [],
            url: "https://serene-beyond-45379.herokuapp.com/http://koaricomic.herokuapp.com/api/users"
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
            ultimoUsuario: data.users[data.users.length -1].name
              })
      }
      render() {
        
        return (
          <div>
              <p>El ultimo usuario que de dio de alta es: {this.state.ultimoUsuario}</p>
          </div>
        );
        
    }

}

export default UltimoUsuarioCreado;
