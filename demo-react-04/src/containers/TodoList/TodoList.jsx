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

    // Gestion de la suppression d'un élément via un event de la "Tasklist"
    const handleDeleteTask = (taskId) => {
        
        //? V1 - Utilisation du 'splice' (version un peu longue à écrire, mais qui fonctionne bien)
       /*setTasks(tasks => {
            //Copie des données
            const copy = structuredClone(tasks);
            
            //Supprimer l'élément dans la copie
            const indexTarget = copy.findIndex( elem => elem.id === taskId);
            copy.splice(indexTarget, 1)

            //Renvoyer la copie modifiée
            return copy;
        });*/

        //? V2  - Utilisation de 'toSpliced' (pas de copie néc. car toSpliced en fait déjà une)
        /*setTasks(tasks => tasks.toSpliced(tasks.findIndex(elem.id === taskId), 1))*/

        //? V3 - Utilisation du 'filter', on met un filtre qui récupère tous les éléments sauf l'élément qu'on veut supprimer (idem que sur toSplice, pas besoin de faire une copie)
        setTasks(tasks => tasks.filter(elem => elem.id !== taskId ));
    };

    const handleFinishTask = (taskId) => {
        
        //? V1 Récupération d'un élément et validation de celui-ci
        /*
        setTasks( tasks => {
            const copy = structuredClone(tasks);

            const targetTask = copy.find(elem => elem.id === taskId)

            targetTask.isDone = true

            return copy
        });
        */

       //? V2 Utilisation de la fonction "map" qui permet de transformer une collection (/ex en javascript) en une autre collection (/ex en JSX)
       setTasks(tasks=>tasks.map(elem => (elem.id !== taskId) ? elem : {...elem, isDone : true}));  
    }


    return (
        <>
            <h2>Ajouter une tâche</h2>
            <TaskForm onTaskSubmit={handleNewTask}  />

            {/* Composant : list de tâches*/}

            <h2>Liste des tâches</h2>
            <TaskList tasks={tasks} onTaskDelete={handleDeleteTask} onTaskFinish={handleFinishTask}/>
        </>
    );
}

export default Todolist;