import { useId, useState, useRef } from "react";
import style from './TaskForm.module.scss'

const TaskForm = ({
    onTaskSubmit = () => {} //!Props "event" avec une NOOP par défaut
}) => {
    
    // Génération d'un id pour l'accessibilité du formulaire
    const formId = useId();

    // State pour les éléments du formulaire 
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [priority, setPriority] = useState('normal');

    //Utilisation d'une "ref" pour interagir avec une balise (Access impératif)
    // - Nécessite de le lier avec la balise -> "ref={inputRef}"
    // - Il est possible d'interagir avec la balise via la propriété "current"
    const inputRef = useRef()

    //Gestion du submit du formulaire
    const handleFormSubmit = (e) => {

        //Désactivation du comportement par défaut du navigateur qui se rafraîchit par défaut quand on clique sur un submit
        e.preventDefault();

        //Les données à envoyer
        const data = {
            name,
            desc,
            priority,
        }
        
        //Envoyer les données au composant parent via la props "onTaskSubmit"
        onTaskSubmit(data);

        //Une fois que tout a été envoyé, cleanup du formulaire
        setName('');
        setDesc('');
        setPriority('normal');

        //placer le focus sur l'input "name"
        inputRef.current.focus();
    }

    // Rendu
    return (
        <form className={style['form-task']} onSubmit={handleFormSubmit}>

                <label htmlFor={formId+'-name'}>Nom</label>
                <input id={formId+'-name'} type="text"  required
                    // La valeur de l'input va être récupérée à partir du state name, tandis qu' onChange synchronise les modifications de l'input vers le State
                    value={name} onChange={e => setName(e.target.value)} 
                    //ref={inputRef} permet de situer l'endroit où se fera le focus
                    ref={inputRef} />
                
                
                <label htmlFor={formId+'-desc'}>Description</label>
                <textarea id={formId+'-desc'}
                    value={desc} onChange={e => setDesc(e.target.value)}></textarea>
                
                <label htmlFor={formId+'-prio'}>Priorité</label>
                <select id={formId+'-prio'}
                    value={priority} onChange={e => setPriority(e.target.value)}>

                    <option value='low'>Basse</option>
                    <option value='normal'>Normal</option>
                    <option value='high'>Urgent</option>
                </select>

                <button type="submit">Ajouter</button>
            </form>
    )
}

export default TaskForm;