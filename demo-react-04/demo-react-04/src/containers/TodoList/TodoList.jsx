import { useRef, useState } from "react";
import TaskForm from "../../components/TaskForm/TaskForm";
import TaskList from "../../components/TaskList/TaskList";


const Todolist = () => {

    //State avec les tâches (par défaut, une liste vide)
    const [tasks, setTasks] = useState([]);

    // Variable pour mémoriser l'état précédent (pas dans state => car c'est une valeur business, càd qui n'est pas utile à l'affichage, mais simplement pour le fonctionnement interne)
    // - Utilisation d'une ref pour créer une persistance d'une donnée. (0) pour débuter à zéro.
    const taskId = useRef(0);

    // Gestion des données reçues depuis le formulaire
    const handleNewTask = (newTask) => {
        //console.log('newTask', newTask);

        //Créer une tâche avec les valeurs du formulaire et d l'id
        const task = {
            //name: newTask.name,
            //desc: newTask.desc,
            //priority: newTask.priority, => mais notation trop longue
        
            ...newTask, // Permet de copier TOUTES les valeurs de "newTask" dans "task"
            id: taskId.current,
            isDone: false
        };

        //Incrémentation de l'id des tâches (mémorisé par la ref)
        taskId.current++;
        //ajouter la tache dans la liste des tâches, [] permet d'enclencher la concaténation de plusieurs termes, '...' : opérateur spread => permet de récupérer les tasks stockées, les séparer pour y ajouter newTask

        setTasks(prevTasks => [...prevTasks, task])
    };

    return (
        <>
            <h2>Ajouter une tâche</h2>
            <TaskForm onTaskSubmit={handleNewTask}  />

            {/* Composant : list de tâches*/}

            <h2>Liste des tâches</h2>
            <TaskList tasks={tasks}/>
        </>
    );
}

export default Todolist;