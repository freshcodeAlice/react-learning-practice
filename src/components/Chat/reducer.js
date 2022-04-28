export const reducer = (state, action) => {
  switch (action.type) {
    case 'DATA_LOAD_SUCCESS': {
      const {
        data: { users, messages },
      } = action;
      const usersMap = new Map();
      users.forEach(user => usersMap.set(user.id, user)); //Пройтись по массиву юзеров и создать карту соответствий
      const messagesWithAuthors = messages.map(msg => {
        return {
          ...msg,
          author: usersMap.get(msg.authorID),
        }; // Пройтись по массиву сообщений, и каждому сообщению добавить поле со ссылкой на объект автора
      });
      const newState = {
        ...state,
        users,
        messages: messagesWithAuthors,
      };
      return newState;
    }
    case 'DATA_LOAD_ERROR': {
      const { error } = action;
      return {
        ...state,
        error,
      };
    }

    default:
      return state;
  }
};
