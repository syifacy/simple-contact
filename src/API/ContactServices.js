import axios from 'axios';
export async function fetchContactList(){
  return await axios.get(`https://simple-contact-crud.herokuapp.com/contact`, null )
    .then((response) => {
      return response.data
    })
    .catch(err => {
      throw err;
    });
} 

export async function fetchDetailContact(id) {
  return await axios.get(`https://simple-contact-crud.herokuapp.com/contact/${id}`, null)
  .then((response) =>{
    return response.data
  })
  .catch(err => {
    throw err;
  });
}

export async function fetchUpdateContact(params){

  return await axios.put(`https://simple-contact-crud.herokuapp.com/contact/${params.id}`, {
    firstName: params.body.firstName,
    lastName: params.body.lastName,
    age: params.body.age,
    photo: params.body.photo,
  })
  .then((response) => {
    return response.data
  })
  .catch(err => {
    throw err;
  });
}
export async function fetchDeleteContact(id){
  return await axios.delete(`https://simple-contact-crud.herokuapp.com/contact/${id}`, null)
  .then((response) =>{
    return response.data
  })
  .catch(err => {
    throw err;
  });
}
export async function fetchNewContact(params){
  return await axios.post(`https://simple-contact-crud.herokuapp.com/contact`, {
    firstName: params.body.firstName,
    lastName: params.body.lastName,
    age: params.body.age,
    photo: params.body.photo,
  })
  .then((response) =>{
    return response.data
  })
  .catch(err => {
    throw err;
  });
}
axios.interceptors.request.use(function(fetchDeleteContact) {
  // Do something before request is sent

  console.log(`CONTACT >>  SUCCESS`, fetchDeleteContact);
  return fetchDeleteContact;
}, function(error) {
  // Do something with request error
  console.log('CONTACT >> request ERROR', error);
  return Promise.reject(error.response);
});

// Add a response interceptor
axios.interceptors.response.use(function(response) {
  // Do something with response data

  console.log(`CONTACT >> response  SUCCESS`, response.data);
  return response;
}, function(error) {
  // Do something with response error
  console.log(`CONTACT >> response ${error.config.url} ERROR`, error);
  return Promise.reject(error.response);
});