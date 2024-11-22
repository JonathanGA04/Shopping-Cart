import { useCart } from '../hooks/useCart'
import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export function Footer() {
  // const { filters } = useFilters()


  return (
    <footer className='footer'>
      <h4>Practica con React ⚛️ － <span>@Jonathan A.</span></h4>
      <h5>Shopping Cart</h5>

    </footer>
  )
}