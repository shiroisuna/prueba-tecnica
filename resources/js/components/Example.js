import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';



function Example() {

    const [data, setData] = useState([])

    useEffect(() => {
        getProductos() 
    }, [])

    const getProductos = async () => {
        const resp = await axios.get('http://localhost:8000/productos').then(res => {
            setData(res.data);
        });
    }

    const insertProductos = async () => {
        const data = { nombre: this.nombre.value, precio: this.precio.value }
        const resp = await axios.post('http://localhost:8000/productos/insert', data).then(res => {
            setData(res.data);
        })
    }

    const destroyProductos = async () => {
        
        const resp = await axios.get('http://localhost:8000/productos/delete/'+this.id.value).then(res => {
            setData(res.data);
        })
    }

    const updateProductos = async () => {
        const data = { nombre: this.nombre.value, precio: this.precio.value }
        const resp = await axios.post('http://localhost:8000/productos/update', data).then(res => {
            setData(res.data);
        })
    }


    const insertComentario = async () => {
        const data = { nombre: this.nombre.value, precio: this.precio.value }
        const resp = await axios.post('http://localhost:8000/Comentario', data).then(res => {
            setData(res.data);
        })
    }
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="#">Navbar</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                  </li>
                </ul>
                
              </div>
            </nav>

            
                
                    <h2 align="center">Productos</h2>
                    <div className="col-12">
                        <div className="row">
                            <form onSubmit="{this.insertProductos}">
                            <div className="col-3">
                                <label for="nombre">Nombre del producto:</label>
                                
                            </div>
                            <div className="col-3">
                                <label for="precio">Precio:</label>
                                
                            </div>
                            <div className="col-3">
                                <button class="btn btn-success">Agregar</button>
                                
                            </div>
                            </form>
                        </div>
                    </div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Comentario</th>
                                <th>Acción</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                data.map(row => {
                                    return (
                                        <tr>
                                            <td scope="row">{row.id}</td>
                                            <td>{row.nombre}</td>
                                            <td>{row.precio}</td>
                                            <td>{row.comentario}</td>
                                            <td>
                                                <tr>
                                                    <td><button class="btn btn-warning">Editar</button></td>
                                                    <td><button class="btn btn-danger" onclick="{this.destroyProductos}">Eliminar</button></td>    
                                                </tr>
                                            </td>
                                        </tr>
                                    )
                                })
                                
                            }
                            
                        </tbody>
                    </table>
                    
                    

                
               
                
           
        </div>
    );
}

export default Example;



if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
