import React, { Component } from 'react';

/*
1. Подгружать данные
2. Делиться этими данными с тем, кто умеет эти данные отображать
Принцип отображения этому компоненту (дата-провайдеру) должен сообщить кто-то другой

*/

class DataProvider extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [],
      isFetching: true,
      isError: false,
    };
  }

  componentDidMount () {
    this.load();
  }

  load = () => {
    const { loadData } = this.props;

    loadData()
      .then(data => {
        this.setState({
          data: data,
        });
      })
      .catch(error => {
        this.setState({
          isError: true,
        });
      })
      .finally(() => {
        this.setState({
          isFetching: false,
        });
      });
  };

  render () {
    return this.props.children(this.state);
  }
}

export default DataProvider;
