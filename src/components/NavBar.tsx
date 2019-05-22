import React, { Component } from 'react'

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar is-transparent">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://versions.bulma.io/0.7.0">
                            <img src="https://versions.bulma.io/0.7.0/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
                        </a>
                        <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <div id="navbarExampleTransparentExample" className="navbar-menu">
                        <div className="navbar-start">
                            <a className="navbar-item" href="/Login/">
                                Inicio
                            </a>
                            <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-link" href="/documentation/overview/start/">
                                    ¿Donde quieres ir?
                                </a>
                                <div className="navbar-dropdown is-boxed">
                                    <a className="navbar-item" href="/Profile">
                                        Perfil
                                    </a>
                                    <a className="navbar-item" href="/Feed/">
                                        Panel de los Tweets
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="field is-grouped">
                                    <p className="control">
                                        <a className="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.6.2/bulma-0.6.2.zip">
                                            <span className="icon">
                                                <i className="fas fa-download"></i>
                                            </span>
                                            <span>Descargar</span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
export default NavBar