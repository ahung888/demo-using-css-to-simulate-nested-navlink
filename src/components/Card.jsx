import { NavLink } from 'react-router-dom';
import '../assets/css/card.css';

export default function Card() {
  return (
    <div className="card">
      <NavLink to="/page1">
        <div className="body">
          <h3>Card Title</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, accusamus. Officia autem, facilis sint tenetur nemo, dolores ullam incidunt minus dolorum ab, delectus qui aperiam. Impedit incidunt accusamus ipsa aut.</p>
        </div>
      </NavLink>
      <NavLink to="/page2">
        <img className="thumbnail" src="/img/portrait.svg" width="50" />
      </NavLink>
    </div>
  );
}
