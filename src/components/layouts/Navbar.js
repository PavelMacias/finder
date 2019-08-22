//tipe RCE crea un componente basado en clases 
import React, { Component } from 'react'

export class Navbar extends Component {
    static defaultProps={
        title: "Github Finder"
    }
    render() {
        return (
            <nav className = "navbar bg-primary">
                <h1>
                    {this.props.title}
                </h1>
            </nav>
        )
    }
}

export default Navbar
