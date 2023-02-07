import { Component } from 'react';

import './employees-list-item.css';

class EmployeesListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            increase: this.props.increase,
            star: false,
        }
    }

    onIncrease = () => {
        const id = this.props.id;
        this.setState(({increase}) => {
            this.props.onIncrease(id, !increase);
            return{
                increase: !increase
            }
        })
    }

    onStar = () => {
        this.setState(({star}) => {
            return {
                star: !star
            }
        })
    }

    render() {
        const {name, salary, onDelete} = this.props;
        const {increase, star} = this.state;
        let className = "list-group-item d-flex justify-content-between";
        if (increase) {
            className += ' increase';
        }
        if (star){
            className += ' like';
        }
        return (
            <li className={className}>
                <span onClick={this.onStar} className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={this.onIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }

}

export default EmployeesListItem;