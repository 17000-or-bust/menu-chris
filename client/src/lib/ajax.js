import $ from 'jquery';

export default {

  renderMenu: (meal, id, callback) => {

    let tempURL = `/api/menu/${meal}/${id}`;
    console.log('temp: ', tempURL);

    $.get({
      url: tempURL,
      success: (data) => callback(null, data),
      error: (err) => callback(err)
    })
  },




}