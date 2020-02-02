import React, {Component} from 'react';
import PhoneInfo from './PhoneInfo';

export default class PhoneInfoList extends Component {
    static defaultProps = {
        data: [],
        onRemove: () => console.warn("onRemove not defined"),
        onUpdate: () => console.warn("onUpdate not defined"),
    }

    render() {
        const {data, onRemove, onUpdate} = this.props;
        const list = data.map(
            info => (
            <PhoneInfo 
                key={info.id} 
                info={info}
                onRemove={onRemove}
                onUpdate={onUpdate}
            />)
        ); // key는 배열을 렌더링할 때 꼭 필요한 값.


        return(
            <div>
                {list}
            </div>
        )
    }
}