import React, {Component} from 'react';

export default class PhoneInfo extends Component {
    static defaultProps = {
        info: {
            name: '이름',
            phoneNum: '010-0000-0000',
            id: 0
        }
    }

    state = {
        // 수정 버튼을 누르면 editing true로 설정하고, 아니면 false
        // true일때는 기존 텍스트로 보여주던 값들을 input으로 보여주기
        editing: false,
        name: '',
        phoneNum: '',
    }


    handleRemove = () => {
        // 삭제 버튼이 클릭되면 onRemove에 id 넣어서 호출.
        const {info, onRemove} = this.props;
        onRemove(info.id);

    }


    // editing 값을 반전시키는 함수
    // true <-> false
    handleToggleEdit = () => {
        const {editing} = this.state;
        this.setState({
            editing: !editing
        });
    }

    // input에서 onChange 이벤트가 발생할 때 호출
    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name] : value // input의 name 에 맞게 state를 찾아서 value로 변경
        })
    }

    componentDidUpdate(prevProps, prevStates) {
        // editing 값이 바뀌었을 때 처리할 로직
        // 수정을 누르면 기존의 값이 input에 나타나고
        // 수정을 적용할 땐 input의 값을 부모에 전달
        const {info, onUpdate} = this.props;
        if(!prevStates.editing && this.state.editing) {
            // 이전이 false이고 지금이 true이면
            // == 이전은 버튼 클릭 안하고 지금 클릭하면
            // == 수정 중이면
            console.log("component did update")
            this.setState({
                name:info.name,
                phoneNum:info.phoneNum
            })

        }

        if(prevStates.editing && !this.state.editing) {
            onUpdate(info.id, {
                name: this.state.name,
                phoneNum: this.state.phoneNum
            })
        }
    }
    
    render() {
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        }

        const {editing} = this.state;

        if(editing) {
            return (
                <div style={style}>
                  <div>
                    <input
                      value={this.state.name}
                      name="name"
                      placeholder="이름"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    <input
                      value={this.state.phoneNum}
                      name="phoneNum"
                      placeholder="전화번호"
                      onChange={this.handleChange}
                    />
                  </div>
                  <button onClick={this.handleToggleEdit}>적용</button>
                  <button onClick={this.handleRemove}>삭제</button>
                </div>
              );
        }

        // info라는 객체를 props 로 받아옴
        const {
            name, phoneNum
        } = this.props.info;

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phoneNum}</div>
                <button onClick={this.handleRemove}>Delete</button>
                <button onClick={this.handleToggleEdit}>Update</button>

            </div>
        );
    }
}