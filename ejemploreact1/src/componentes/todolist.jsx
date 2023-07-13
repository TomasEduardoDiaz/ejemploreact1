import react from "react";

export function todolist(){
    return(
        <>
            <h1> hola mundo </h1>
            <h1> lista de tareas </h1>
            <ul className="list-group">
                <todoitem/>
            </ul>
        </>
    )
}