import PropTypes from 'prop-types';

export const TodoItem = ({ id, done,description, onDeleteTodo, onToggleTodo }) => {

  return ( 
    <li key={id} className="grid grid-cols-2 justify-between">
      <span 
        onClick={ () => onToggleTodo (id)}
        className={` ${ (done) ? 'line-through' : '' } `}
        aria-label='span'
      >
          {description}
        </span>
      <button onClick={ () => onDeleteTodo(id)}>Delete</button>
    </li>
  );
};

TodoItem.propTypes ={
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onDeleteTodo: PropTypes.func,
  onToggleTodo: PropTypes.func
}