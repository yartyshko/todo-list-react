import React, {useContext} from "react";
import PropTypes from 'prop-types';
import Context from "../context";

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem',
        backgroundColor: '#009688',
        color: 'white'

    },
    input: {
        marginRight: '1rem'
    },
    buttonClose: {
        backgroundColor: '#f00',
        borderRadius: '50%',
        color: 'white',
        border: 'none',
        padding: 0,
        width: '20px',
        height: '20px',
        fontSize: '20px',
        lineHeight: 1,
        cursor: 'pointer'
    }
}

function TodoItem({todo, index, onChange}){
    const {removeTodo} = useContext(Context)
    const classes = []

    if (todo.completed){
        classes.push('done')
    }
    return(
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    style={styles.input}
                    onChange={() => onChange(todo.id)}
                />
                <strong>{index + 1}</strong>
                &nbsp;
                {todo.title}
            </span>
            <button style={styles.buttonClose} onClick={removeTodo.bind(null, todo.id)}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem;