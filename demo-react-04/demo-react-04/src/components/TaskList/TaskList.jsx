import clsx  from 'clsx';
import style from './TaskList.module.scss';


//Composant qui symbolise un élément de la liste
const TaskItem = ({id, name, desc, priority, isDone}) => {

    return (
        <article className={clsx(style.task, isDone && style.finish)}>
                <div className={style.info}>
                    <p>{name} {priority === 'high' && <span className={style.urgent}></span>}</p>
                    <p>{desc}</p>
                </div>
                <div className={style.action}>
                    <button disabled={isDone}>Terminer</button>
                    <button>Supprimer</button>
                </div>
        </article>
    );
};

//Composant qui représente la liste
const TaskList = ({
    tasks = [] //! Propriétés (props) de "Tasks" pour obtenir la liste des tâches du parent (le nom peut être différent)
}) => {

    return (
        <section className={style["task-list"]}>
            {tasks.map(
                (task, index) => <TaskItem {...task} key={task.id} />
            )}
        </section>
    )
}

export default TaskList;