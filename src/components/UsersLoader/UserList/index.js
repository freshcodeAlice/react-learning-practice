import React from 'react';
import UserCard from '../UserCard';

class UserList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      filterInput: '',
    };
  }

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  filter = () =>
    this.props.users.filter(user => {
      const {
        name: { first, last },
      } = user;
      return first.toLowerCase().includes(this.state.filterInput);
    });

  renderCard = filtered =>
    filtered.map(user => {
      const {
        name: { first, last },
        picture: { medium },
        email,
        location: { city },
        login: { uuid },
      } = user;
      return (
        <UserCard key={uuid}>
          <img src={medium} />
          <h3>
            {first} {last}
          </h3>
          <p>{email}</p>
          <p>{city}</p>
        </UserCard>
      );
    });

  render () {
    const inlineStyles = {
      display: 'flex',
      flexFlow: 'row wrap',
    };
    const { prev, next, users } = this.props;

    const filteredArray = this.filter();

    return (
      <>
        <h1>Users List</h1>
        <button onClick={prev}>Previous page</button>
        <button onClick={next}>NextPage</button>
        <input type='text' name='filterInput' onChange={this.handleInput} />
        <ul style={inlineStyles}>{this.renderCard(filteredArray)}</ul>
      </>
    );
  }
}

export default UserList;
