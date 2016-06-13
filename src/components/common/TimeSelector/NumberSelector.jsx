import React, { Component, PropTypes } from 'react';
import { IconAngleUp, IconAngleDown } from 'components/common';
import { 
    compose, range, splitAt, reverse, map, flatten,
    padLeft, replace, inc
} from 'helpers';
import { 
    createArrayOfNumbersOf, formatNumbers, 
    rearrangeNumbers, toListItem 
} from './localHelpers';

export class NumberSelector extends Component {
    constructor(props) {
        super(props);
    
        const { selected, lastNumber } = this.props;

        this.numbers = compose(
            formatNumbers, 
            createArrayOfNumbersOf(NumberSelector.listOfNumbersStartsWith)
        )(lastNumber);
    }

    render() {
        return (
            <div className="number-selector">
                <div className="slider">
                    <div className="scroller">
                        <ul className="numbers">
                            {this.renderNumbers()}
                        </ul>
                    </div>
                    <button className="btn -up" onClick={this.selectPrevious.bind(this)}><IconAngleUp /></button>
                    <button className="btn -down" onClick={this.selectNext.bind(this)}><IconAngleDown /></button>
                </div>
                <span className="label">hours</span>
            </div>
        );
    }

    renderNumbers() {
        return compose(
            toListItem,
            rearrangeNumbers, 
            splitAt(this.props.selected - NumberSelector.offset)
        )(this.numbers);
    }

    selectNext() {
        this.props.onSelectNext();
    }

    selectPrevious() {
        this.props.onSelectPrevious();
    }
}

NumberSelector.propTypes = {
    label: PropTypes.string,
    selected: PropTypes.number,
    lastNumber: PropTypes.number.isRequired,
    onSelectNext: PropTypes.func.isRequired,
    onSelectPrevious: PropTypes.func.isRequired
};

NumberSelector.defaultProps = {
    label: 'numbers',
    selected: 0
};

NumberSelector.listOfNumbersStartsWith = 0;
NumberSelector.offset = 5;