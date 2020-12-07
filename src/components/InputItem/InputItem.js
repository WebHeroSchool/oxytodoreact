import React,{ useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function InputItem () {
	const state = {
		inputValue:'',
		inputLabel:'Добавить дело'
	}

    const[inputValue,setInputValue] = useState(state.InputValue)

	const onButtonClick = () => {
		if(setInputValue !== ''){
            state.InputItem({
            	inputValue: '',
    		    inputLabel:'Добавить дело'
            });
            
            const onClickAdd = () => setInputValue;

		}   else {setInputValue({
			    inputLabel:"Ошибка"
		    });

    }
    
    const [inputLabel,setInputLabel] = useState(state.InputValue)
		return  (<div>
	        <TextField
	            id="Dense"
	            label={setInputLabel}
	            margin="dense"
                fullWidth
                value={setInputValue}
                onChange={event => setInputValue({inputValue:event.target.value})}
	        />
	        <Button
	            variant="contained"
	            color="primary"
	            onClick={onButtonClick}
	            fullWidth
	        >
	            Добавить
	        </Button>
        </div>);
	}
}

export default InputItem;



/*class InputItem extends React.Component {
	state = {
		inputValue:'',
		inputLabel:'Добавить дело'
	};

    onButtonClick=() => {
    	if(this.state.inputValue !== ''){
    	    this.setState({
    		    inputValue: '',
    		    inputLabel:'Добавить дело'
    	    });

    	    this.props.onClickAdd(this.state.inputValue);
    	}   else{this.setState({
                inputLabel:"Ошибка"
    	    });
    		
    	};


    }
	render(){
		const {onClickAdd} = this.props;
		return  (<div>
	        <TextField
	            id="Dense"
	            label={this.state.inputLabel}
	            margin="dense"
                fullWidth
                value={this.state.inputValue}
                onChange={event => this.setState({inputValue:event.target.value})}
	        />
	        <Button
	            variant="contained"
	            color="primary"
	            onClick={this.onButtonClick}
	            fullWidth
	        >
	            Добавить
	        </Button>
        </div>);
	}
}

export default InputItem;
*/
