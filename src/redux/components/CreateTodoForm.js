import React, {useState} from 'react';

const CreateTodoForm = ({onSubmit}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !description || isLoading) return;
        try {
            setIsLoading(true)
            await onSubmit(title, description);
            setTitle('')
            setDescription('')
        } catch (e){
            console.log(e)
        } finally {
            setIsLoading(false)
        }
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                       value={title}
                       onChange={({target: {value}}) => setTitle(value)}
                       placeholder='todo title'/>
                <br/>
                <br/>
                <input type="text"
                       value={description}
                       onChange={({target: {value}}) => setDescription(value)}
                       placeholder='todo description'/>
                <button type={"submit"} disabled={!title || !description || isLoading}>Create todo</button>
            </form>

        </div>
    );
};

export default CreateTodoForm;

// сама форма не буде робити запит, цим буде займатися парент. Форма потрібна
// для того, щоб зібрати дані і відправити їй вверх. тому вводимо пропсу onSubmit
