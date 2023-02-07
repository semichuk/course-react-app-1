import "./app-info.css";

const AppInfo = ({data}) => {
    let countIncreasedEmployees = 0;
    data.forEach(element => {
        if (element.increase === true){
            countIncreasedEmployees++;
        }
    });
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании "React apps"</h1>
            <h2>Общее число сотрудников: {data.length}</h2>
            <h2>Премию получат: {countIncreasedEmployees}</h2>
        </div>
    )
}

export default AppInfo;