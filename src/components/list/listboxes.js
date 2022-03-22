import React, { Component } from 'react';
import { connect } from "react-redux";
import { retrieveBox } from '../../actions/boxes'
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
            <div>
                <h4>List</h4>
                <ul>
                    {boxes && boxes.map((box, index) => (
                        <li key={index} >
                            {box.name}{box.weight}{box.color}{box.price}
                        </li>
                    ))}
                </ul>
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



