const getRequest = function(url) {  
  return new Promise((resolve, reject) => {
      fetch(url)
      .then(res => {
        resolve(res.json());
      })
      .catch(err => {
        reject(err);
      });
  });
}

const getHiringList = function() {
  return getRequest('/hiring.json')
}

export default {
  getHiringList
}