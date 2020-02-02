import React, {Component} from 'react';

export default class PhoneForm extends Component {
    state = {
        name : '',
        phoneNum : ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        // 리로딩 방지
        e.preventDefault();
        // 부모에 데이터 넘겨줌
        this.props.onCreate(this.state);
        this.setState({
            name : '',
            phoneNum : ''
            })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="Name"
                    value={ this.state.name }
                    onChange={this.handleChange}
                    name="name"
                />
                <input
                    placeholder="Phone number"
                    value={ this.state.phoneNum }
                    onChange={this.handleChange}
                    name="phoneNum"
                />
                <button type="submit">Submit</button>
            </form>
        );
    }

}