$('.clearResult').click(function() {
  $('#getResult1').html('');
  $('#getResult2').html('');
  $('#postResult').html('');
});

$('#getRequest1').click(function() {
  axios
    .get('http://jsonplaceholder.typicode.com/todos')
    .then(function(response) {
      $('#getResult1').html(getSuccessHTML(response));
    })
    .catch(function(error) {
      $('#getResult1').html(getFailHTML(error));
    });
});

$('#getRequest2').click(function() {
  axios
    .get('http://jsonplaceholder.typicode.com/todos', {
      params: {
        id: $('#todoId').val()
      }
    })
    .then(function(response) {
      $('#getResult2').html(getSuccessHTML(response));
    })
    .catch(function(error) {
      $('#getResult2').html(getFailHTML(error));
    });
});

$('#postRequest').click(function() {
  axios
    .post('http://jsonplaceholder.typicode.com/todos', {
      userId: '1',
      title: $('#todoTitle').val(),
      completed: true
    })
    .then(function(response) {
      $('#postResult').html(getSuccessHTML(response));
    })
    .catch(function(error) {
      $('#postResult').html(getFailHTML(error));
    });
});

function getSuccessHTML(response) {
  return (
    '<h4>Result</h4>' +
    '<h5>Status:</h5>' +
    '<pre>' +
    response.status +
    ' ' +
    response.statusText +
    '</pre>' +
    '<h5>Headers</h5>' +
    '<pre>' +
    JSON.stringify(response.headers, null, '  ') +
    '</pre>' +
    '<h5>Data</h5>' +
    '<pre>' +
    JSON.stringify(response.data, null, '  ') +
    '</pre>'
  );
}

function getFailHTML(error) {
  return (
    '<h4>Result</h4>' +
    '<h5>Status:</h5>' +
    '<pre>' +
    error.response.status +
    '</pre>' +
    '<h5>Message</h5>' +
    '<pre>' +
    error.message +
    '</pre>'
  );
}
