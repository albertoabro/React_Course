
import PropTypes from 'prop-types';

/*For const values or not hooks relationship, write the instruction out.
this sentence it's encapsulated in this module
*/
const newMessage = 'Alberto' //Boolean values, undefined and null not will be printed / Object are not valid 
const object = { //Objects and Promises must be sending with JSON.stringify(nameObject)
    message: 'message',
    message2: 'message2'
}

export const App = ({title: title = 'Not title', subTitle = 'Not subtitle', name = 'Alberto'}) => {

    
    return (
        // <> it's equal to Fragment -> Group text's elements, map collection to Fragment's array, assign multi element to once variable 
        <> 
        <h1 data-testid="test-title">{title}</h1> {/* For use Js code, use {} and for comments inside of JSX use like this*/}
        <code>{JSON.stringify(object)}</code>
        <p>{subTitle}</p>
        <p>{subTitle}</p>
        <p>{name}</p>
        </>
    )
}

App.propTypes = {
    title: PropTypes.string.isRequired,
}