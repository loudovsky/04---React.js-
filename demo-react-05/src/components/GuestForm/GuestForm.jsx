import { useId } from "react";
import { useForm } from "react-hook-form";



const GuestForm = ({
    onAddGuest = () => {} // Communication avec le composant parent (default : Noop)
}) => {
    //! "useForm" est un 'hook' de la librairie "React-Hook-Form"
    //* Son objectif -> Gestion du formulaire
    //* - register : permet d'enregistrer l'input dans "React-Hook-Form"
    //* - handleSubmit : désactive le comportement par défaut et envoie les données du form (formatées)
    //* - reset : permet de remettre les valeurs intiales dans le formulaire
    //* - setFocus : permet de manipuler le focus des balises
    //* - formState: permet d'obtenir l'état du formulaire (Interaction ? Erreurs? ... )

    const { register, handleSubmit, reset, setFocus, formState: { errors } } = useForm();
    

    // Id pour l'accessibilité du formulaire
    const formId = useId();

    //Gestion des données du formulaire
    //* - Les données dont déjà traitées par "React-Hook-Form"
    const handleGuestSubmit = (data) => {
        //Traitement...
        onAddGuest(data);

        //Cleanup
        setFocus('firstname')
        reset();
    }

    return (
        <form onSubmit={handleSubmit(handleGuestSubmit)}>
            <div>
                <label htmlFor={formId + '-fname'}>Prénom  </label>
                <input id={formId + '-fname'} type="text" {...register('firstname', { required: true })} />
                {errors.firstname && (                      

                    <span>Le prénom est obligatoire !</span>
                )}      
            </div>
            <div>
                <label htmlFor={formId + '-lname'}>Nom  </label>
                <input id={formId + '-lname'} type="text" {...register('lastname', { required: true })} />
                {errors.lastname && (

                    <span>Le nom est obligatoire !</span>
                )}  
            </div>
            <div>
                <button type="submit">Valider</button>
            </div>
        </form>
    );
};

export default GuestForm;