import {Component} from 'react'
import Producto from './Producto'

const styles = {
  productos: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
}

class Productos extends Component {

  //inicia el metodo de render
  render() {
    const {productos, agregarAlCarro} = this.props
    return (
      <div style={styles.productos}>
        {
          productos.map(producto =>
            <Producto
              agregarAlCarro={agregarAlCarro}
              key={producto.name}
              producto={producto}
            />
          )
        }
      </div>
    )
  }
}

export default Productos
