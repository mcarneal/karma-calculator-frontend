import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    ArcGauge
} from '@progress/kendo-react-gauges';

class arc extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        };
    }

    componentDidMount() {
        setInterval(
            () => {
                this.setState({
                    value: Math.ceil(Math.random() * 100)
                });
            },
            1000);
    }

    render() {
        const colors = [
            { from: 0, to: 25, color: 'red' },
            { from: 25, to: 100, color: 'lime' }
        ];

        const arcOptions = {
            value: this.state.value,
            colors
        };

        const arcCenterRenderer = (value, color) => {
            return (<h3 style={{ color: color }}>{value}%</h3>);
        };

        return (
            <ArcGauge {...arcOptions} arcCenterRender={arcCenterRenderer} />
        );
    }
}

export default arc
