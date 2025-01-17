import {useForm} from '@/hooks/useForm'
import PropTypes from 'prop-types'

export const TodoAdd = ({onNewTodo}) => {

    const { description, onInputChange, onResetForm } = useForm({
        description:''
    });

    const onSubmit = (event) => {
        event.preventDefault();
       
        if(description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }
        onNewTodo(newTodo);
        onResetForm();
    }

  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text" 
        placeholder="What does it does?" 
        name="description"
        value={description}
        onChange={onInputChange}
      />

      <button type="submit">Add</button>
    </form>
  );
};

TodoAdd.propTypes = {
    onNewTodo: PropTypes.func.isRequired
}
