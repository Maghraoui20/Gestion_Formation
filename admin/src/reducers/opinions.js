const opinions=  (opinions = [], action) => {
    switch (action.type) {
      case 'FETCH_ALL':
        return action.payload;
        case 'CREATE' :
          return [...opinions, action.payload]; 
          case 'UPDATE':
        return opinions.map((opinion) => (opinion._id === action.payload._id ? action.payload : opinion));
        case 'DELETE':
          return opinions.filter((opinion) => opinion._id !== action.payload);
      default:
        return opinions;
    }
  };
  export default opinions;