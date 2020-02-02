import React, {Component} from 'react';
import PhoneForm from './components/PhoneForm'
import PhoneInfoList from './components/PhoneInfoList';

export default class App extends Component{

  id = 2
  state = {
    information: [
      {
        id: 0,
        name: '박수현',
        phoneNum: '010-0000-0000'
      },
      {
        id: 1,
        name: '홍길동',
        phoneNum: '010-0000-0001'
      }
    ],
    keyword: ''
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value
    });
  }

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({
        id : this.id++,
        ...data
      })
    })
  }

  handleRemove = (id) => {
    const {information} = this.state;
    this.setState({
      // 배열에 있는 filter라는 내장 함수.
      // 특정 조건에 부합하는 원소들만 뽑아내서 새 배열 만들어줌.
      information: information.filter(info => info.id !== id)
    })
  }

  handleUpdate = (id, data) => {
    const {information} = this.state;
    this.setState({
      information: information.map(
        info => id === info.id ?
        {...info, ...data}
        : info
      )
    })
  }

  render() {
    const {information, keyword} = this.state;

    return (
      <div>
        <PhoneForm 
          onCreate={this.handleCreate}
        />
        <p>
          <input
            placeholder="Enter name to search..."
            onChange={this.handleChange}
            value={keyword}
          />
        </p>
        <PhoneInfoList 
          data={this.state.information}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>

    );
  }
}

