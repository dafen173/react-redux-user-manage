import React, {useState} from "react"
import PropTypes, { func } from 'prop-types'

function useInputValue (defaultValue = '') {
    const [value, setValue] = useState(defaultValue)
    return {
        bind: {
            value: value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}


function AddTodo ({ onCreate }) {
    const input = useInputValue('')
    //const inputSelect = useInputSelect('soad')

    function submitHandler(event) {
        event.preventDefault()
        if (input.value().trim()) {
            onCreate( input.value() )
            input.clear()
            //setValue('')
        }

        //onCreate( inputSelect.value() )
    }

//========================================================================================
    /* const [select, setSelect] = useState('korn')
    const handlerSelect = e => {
        setSelect(e.target.value)

        console.log(e.target.value)
        //console.log(select)
    } */
//========================================================================================
    return (
        <form onSubmit={submitHandler}> 
            <input {...input.bind} />
            {/* <select {...inputSelect.bind}> 
                <option value="nirvana">nirvana777</option>
                <option value="slipknot">slipknot777</option>
                <option value="soad">hatebreed777</option>  
                <option value="korn">korn777</option>
            </select> */}
            <button type="submit">Add User</button>
        </form>
    )
}


AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo