import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class InputItem extends React.Component {
	state = {
		inputValue:''
	};

    onButtonClick=()=> {
    	if(this.state.inputValue != ''){
    	    this.setState({
    		    inputValue: ''
    	    });

    	    this.props.onClickAdd(this.state.inputValue);
    	}   else{this.setState({
                label="Error"
    	    });
    		
    	};


    }
	render(){
		const {onClickAdd} = this.props;
		return  (<div>
	        <TextField
	            id="Dense"
	            label="Добавить дело"
	            margin="dense"
                fullWidth
                value={this.state.inputValue}
                onChange={event=>this.setState({inputValue:event.target.value})}
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

