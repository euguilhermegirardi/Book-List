const ApiService = {
  AuthorList: () => {
    // ES6 (reason)
    return fetch('http://localhost:3001/data')
      .then(res => res.json())

  },
  CreateAuthor: author => {
    return fetch('http://localhost:3001/data', { method: 'POST', headers: { 'content-type': 'application/json' }, body: author })
      .then(res => res.json());
  },
  ListName: () => {
    return fetch('http://localhost:3001/data/name')
      .then(res => { return res.json() })
  },
  ListBooks: () => {
    return fetch('http://localhost:3001/data/book')
      .then(res => { return res.json() })
  },
  RemoveAuthor: id => {
    return fetch(`http://localhost:3001/data/${id}`, { method: 'DELETE', headers: { 'content-type': 'application/json' } })
      .then(res => { return res.json() })
  }

}

export default ApiService;
