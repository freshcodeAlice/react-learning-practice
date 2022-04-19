import React, { Component } from 'react';
import DataProvider from '../../components/DataProvider';
import PhonesJsonLoader from '../../components/PhonesJsonLoader';
import UsersJsonLoader from '../../components/UsersJsonLoader';

class LoaderPage extends Component {
  render () {
    return (
      <>
        <DataProvider
          loadData={() => {
            return fetch('/users.json').then(res => res.json());
          }}
        >
          {state => {
            return (
              <>
                {state.isFetching && <div>Loading...</div>}
                {state.isError && <div>Error</div>}
                <ol>
                  {state.data.map(user => (
                    <li key={user.id}>{user.name}</li>
                  ))}
                </ol>
              </>
            );
          }}
        </DataProvider>
        <DataProvider
          loadData={() => {
            return fetch('/phones.json').then(res => res.json());
          }}
          children={state => {
            return (
              <>
                {state.isFetching && <div>Loading...</div>}
                {state.isError && <div>Error</div>}
                <ul>
                  {state.data.map(phone => (
                    <li key={phone.id}>
                      {phone.model} - {phone.price}
                    </li>
                  ))}
                </ul>
              </>
            );
          }}
        />
      </>
    );
  }
}

export default LoaderPage;
