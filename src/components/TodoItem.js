import React, {Component} from 'react'; 
import classNames from 'classnames';
import PropTypes from 'prop-types'; // ES6
import 'bootstrap/dist/css/bootstrap.min.css';

import './TodoItem.css';
import check from '../img/uncheck.svg';
import checked from '../img/checked.svg';
class TodoItem extends Component{
 constructor(props){
     super(props);
     this.handleClick = this.handleClick.bind(this);
 }
 handleClick() {
    console.log(this.props.item);
  }
 render(){
    const {item, click} = this.props;
    let url = check;

    if(item.isComplete){
        url = checked;
    }
     return(         
         <div className={classNames("TodoItem", {
             'TodoItem-complete' : item.isComplete
         })} >
            <img onClick = {click} src={url} alt="aaaa" />
         <p> {this.props.item.title}</p>      
         </div>
     );
 }
}
TodoItem.propTypes = {
    item : PropTypes.shape({
        isComplete : PropTypes.bool.isRequired,
        title : PropTypes.string.isRequired
    }),
    click : PropTypes.func
}
export default TodoItem;
