const cities= (cities = [], action) => {
    switch (action.type) {
      case 'FETCH_ALL':
        return action.payload;
      default:
        return cities;
    }
  };
  export default cities;