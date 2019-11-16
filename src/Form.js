import React from 'react';
import { Dropdown } from 'semantic-ui-react'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {  

        }
        const DropdownExampleSearchSelectionTwo = () => (
            <Dropdown placeholder='Start' search selection options={startOptions} />
          )
        const DropdownExampleSearchSelectionTwo = () => (
            <Dropdown placeholder='End' search selection options={endOptions} />
          )
    }

    
    
    render() { 
        return (
          console.log("test")
         );
    }
}
 
export default Form;