import clsx  from 'clsx';
import style from './TaskList.module.scss';
import { useId, useState } from 'react';


//Composant qui symbolise un élément de la liste
const TaskItem = ({id, name, desc, priority, isDone, onDelete, onFinish}) => {

    return (
        <article className={clsx(style.task, isDone && style.finish)}>
                <div className={style.info}>
                    <p>{name} {priority === 'high' && <span className={style.urgent}></span>}</p>
                    <p>{desc}</p>
                </div>
                <div className={style.action}>
                    <button onClick={() => onFinish(id)} disabled={isDone}>Terminer</button>
                    <button onClick={() => onDelete(id)}>Supprimer</button>
                </div>
        </article>
    );
};

//Composant qui représente la liste
const TaskList = ({
    tasks = [], //! Propriétés (props) de "Tasks" pour obtenir la liste des tâches du parent (le nom peut être différent)
    onTaskDelete = () => {}, //! Props "onTaskDelete" pour informer le parent qu'on souhaite supprimer la tâche (par défaut : NOOP)
    onTaskFinish = () => {}, //! props
}) => {

    const checkboxId = useId(); 
    const [taskFilter, setTaskFilter] = useState({
        high: false,
        normal: false,
        low: false,
    });

    const handleFilterAll = () => {        

        // Abre de décision:

        if(taskFilter.high && taskFilter.normal && taskFilter.low) {
            // Si tout est coché => on décoche tout
            setTaskFilter({high: false, normal: false, low: false});
        }
        
        else {
            // Sinon, tout cocher
            setTaskFilter({high: true, normal: true, low: true});

        }
        
    }                       

    const handleFilter = (e) => {

        const checkboxName = e.target.name; // contient uniquement high / normal / low (attribut "name" des balises)
        
        setTaskFilter(taskF => {
            // Je crée un nouvel objet 
            return {
                ...taskF, //copie de toutes les valeurs actuelles présentes dans le state
                [checkboxName]: !taskF[checkboxName] // Le ! permet d'inverser la valeur (si false => true, si true => false)
                //Je modifie la valeur ciblée par le "name" de la checkbox 
                //NB : grâce à l'opérateur d'accès [] pour manipuler les propriétés du state (Objet)
            }
        })        

    }

    const tasksWithFilter = tasks.filter(elem => (taskFilter.high && elem.priority === 'high' )
                                        || (taskFilter.normal && elem.priority === 'normal' )
                                        || (taskFilter.low && elem.priority === 'low' ));
    return (
        <>
        <div>
           <input type="checkbox" id={checkboxId + '-all'}
                                onChange={handleFilterAll} checked={taskFilter.high && taskFilter.normal && taskFilter.low}  />
           <label htmlFor={checkboxId + '-all'}>Tous</label>
           <input type="checkbox" id={checkboxId + '-high'} 
                               name= 'high' onChange={handleFilter} checked={taskFilter.high} /> 
           <label htmlFor={checkboxId + '-high'}>Urgent</label>
           <input type="checkbox" id={checkboxId + '-normal'} 
                                name = 'normal' onChange={handleFilter}  checked={taskFilter.normal} /> 
           <label htmlFor={checkboxId + '-normal'}>Normal</label>
           <input type="checkbox" id={checkboxId + '-low'}
                               name = 'low' onChange={handleFilter}  checked={taskFilter.low} /> 
           <label htmlFor={checkboxId + '-low'}>Basse</label> 
        </div>
        <section className={style["task-list"]}>
            {tasksWithFilter.map(
                (task) => <TaskItem {...task} key={task.id} 
                                onDelete={onTaskDelete}
                                onFinish={onTaskFinish}/>
            )}
        </section>
        </>
    )
}

export default TaskList;