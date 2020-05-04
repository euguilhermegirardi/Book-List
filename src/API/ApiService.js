const ApiService = {
  AuthorList: () => {
    // ES6 (only reason to use 'fetch')
    return fetch('http://localhost:3001/data')
    .then(res => res.json());
  },

  CreateAuthor: data => {
    return fetch('http://localhost:3001/data', { method: 'POST', headers: { 'content-type': 'application/json' }, body: data })
    .then(res => res.json());
  },

  RemoveAuthor: id => {
    return fetch(`http://localhost:3001/data/${id}`, { method: 'DELETE', headers: { 'content-type': 'application/json' } })
    .then(res => res.json());
  }
};

export default ApiService;
