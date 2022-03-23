import React, { Component } from 'react';
import { connect } from "react-redux";
import { retrieveBox } from '../../actions/boxes'
import './listboxes.css'
class ListBoxes extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.retrieveBox();
    }
    render() {
        const { boxes } = this.props;
        console.log('data' + this.props.boxes);
        return (
            <div className='list'>

                <table className="content-table">
                    <thead>
                        <tr>
                            <th>Reciever</th>
                            <th>Weight</th>
                            <th>Box color</th>
                            <th>Shipping cost</th>
                        </tr>
                    </thead>

                    <tbody>{boxes && boxes.map((box, index) =>
                        <tr key={index}>
                            <td >{box.name}</td>
                            <td >{box.weight}</td>
                            <td style={{ background: box.color }}></td>
                            <td >{box.price}</td>

                        </tr>)}
                    </tbody>
                </table>

            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        boxes: state.boxes,
    };
};
export default connect(mapStateToProps, { retrieveBox, })(ListBoxes);



