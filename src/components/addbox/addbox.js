import React, { Component } from 'react';
import { ChromePicker } from 'react-color'

class AddBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            weight: '',
            color: '',
            country: '',
            displayColorPicker: false,
        }
    }


    handleClick = (e) => {
        e.preventDefault()
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    }
    handleClose = () => {
        this.setState({ displayColorPicker: false })
    }
    handleChangeComplete = (color, event) => {

        this.setState({
            color: color.rgb,
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value, 
        })
        
    }


    render() {

        return (
            <div className='add-container'>
                {JSON.stringify(this.state)}
                <div className='add-form' >
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label>
                                <input type='text' name='name' id='name' placeholder='Name' value={this.state.name}
                                    onChange={this.handleChange} required

                                />
                            </label>
                            <label>
                                <input type='number' id='weight' placeholder='Weight' value={this.state.weight<= -1 ? 0 :this.state.weight}
                                    onChange={this.handleChange} 
                                />
                            </label>
                        </div>
                        <div>
                            <button onClick={this.handleClick}>
                                {this.state.displayColorPicker ? 'close color picker' : 'pick a color'}
                            </button>
                            {
                                this.state.displayColorPicker &&
                                <ChromePicker
                                    color={this.state.color}
                                    onChangeComplete={this.handleChangeComplete}
                                />
                            }
                            <div>
                                <p>Country</p>
                                <select id='country' value={this.state.country} onChange={this.handleChange}>
                                   <option value=''> --Select Country-- </option>
                                   <option value='Sweden'>Sweden</option>
                                   <option value='China'>China</option>
                                   <option value='Brazil'>Brazil</option>
                                   <option value='Australia'>Australia</option>
                                </select>
                            </div>
                            <div>
                                <button type="submit">save</button>
                            </div>

                        </div>
                    </form>

                </div>

            </div>
        );
    }
}

export default AddBox;
