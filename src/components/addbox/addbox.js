import React, { Component } from 'react';
import { connect } from "react-redux";
import { ChromePicker } from 'react-color'
import { createBox } from '../../actions/boxes'
import {useNavigate} from 'react-router-dom'
import './addbox.css'

class AddBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            weight: '',
            color: '#ffffff',
            country: '',
            displayColorPicker: false,
            msg: '',
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
            color: color.hex,
        })
    }
    handleSubmit = (event) => {
        let price;
       
        console.log(this.state);
        event.preventDefault()

        const { name, weight, color, country } = this.state
        price = multiple(country, weight)

        this.props.createBox(name, weight, color, country, price).then((data) => {
            this.setState({ name: data.name, weight: data.weight, color: data.color, country: data.country, price: data.price, msg: data})
            console.log(data);
        }).catch((error) => {
            console.log(error);
        })
        
    
     

    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        })

    }


    render() {
        return (
            <div className='add-container'>
                <p className='pop-up'>{this.state.msg}</p>
                <div className='add'>
             
                <div className='add-form' >
                    <form id='contact' onSubmit={this.handleSubmit}>
                        <div>
                            <label>
                                <input type='text' name='name' id='name' placeholder='Name' value={this.state.name}
                                    onChange={this.handleChange} required

                                />
                            </label>
                            <label>
                                <input type='number' id='weight' placeholder='Weight' value={this.state.weight <= -1 ? 0 : this.state.weight}
                                    onChange={this.handleChange} required
                                />
                            </label>
                        </div>
                        <div>
                            <button  className='btn' onClick={this.handleClick}>
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
                              
                                <select id='country' value={this.state.country} onChange={this.handleChange}>
                                    <option value=''> --Select Country-- </option>
                                    <option value='Sweden'>Sweden</option>
                                    <option value='China'>China</option>
                                    <option value='Brazil'>Brazil</option>
                                    <option value='Australia'>Australia</option>
                                </select>
                            </div>
                            <div>
                                <button  className='btn'id='btn-submit' type="submit">save</button>
                            </div>

                        </div>
                    </form>

                </div>
                </div>

            </div>
        );
    }
}
function multiple(value, weight) {
    if (value === 'Sweden') {
        return Math.round(weight * 1.3) + ' SEK'
    } else if (value === 'China') {
        return Math.round(weight * 4) + ' CNY'
    } else if (value === 'Brazil') {
        return Math.round(weight * 8.6) + ' BRL'
    } else if (value === 'Australia') {
        return Math.round(weight * 7.2) + ' AUD'
    }

}

export default connect(null, { createBox })(AddBox);
