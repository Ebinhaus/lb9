import React, {Component} from "react";
import "./Banner.css";

class Banner extends Component {// классовый компонент из-за props - получает данные от родителя
 render() {
  return ( // дизайн - bootstrap
    <div className="container" >
     <h1 className="display-3">{this.props.title}</h1>
     <p className="lead">{this.props.subtitle}</p>
    </div>
   );
 }
}

export default Banner;