import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';


const EmployeesList = ({data, onDelete, onIncrease}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
                key={id}
                {...item}
                onDelete={() => onDelete(id)}
                onIncrease={onIncrease}
            />
        )
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;