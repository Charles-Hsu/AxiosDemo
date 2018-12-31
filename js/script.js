$('#getRequest1').click(function() {
  axios
    .get('http://jsonplaceholder.typicode.com/todos')
    .then(function(response) {
      $('#getResult1').html(generateSuccessHTMLOutput(response));
    })
    .catch(function(error) {
      $('#getResult1').html(generateErrorHTMLOutput(error));
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
      $('#getResult2').html(generateSuccessHTMLOutput(response));
    })
    .catch(function(error) {
      $('#getResult2').html(generateErrorHTMLOutput(error));
    });
});

$('#postRequest').click(function() {
  axios
    .post('http://jsonplaceholder.typicode.com/todos', {
      userId: '1',
      title: $('#todoTitle').val(),
      completed: false
    })
    .then(function(response) {
      $('#postResult').html(generateSuccessHTMLOutput(response));
    })
    .catch(function(error) {
      $('#postResult').html(generateErrorHTMLOutput(error));
    });
});

$('.clearResult').click(function() {
  $('#getResult1').html('');
  $('#getResult2').html('');
  $('#postResult').html('');
});

function generateSuccessHTMLOutput(response) {
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
    JSON.stringify(response.headers, null, '\t') +
    '</pre>' +
    '<h5>Data</h5>' +
    '<pre>' +
    JSON.stringify(response.data, null, '\t') +
    '</pre>'
  );
}

function generateErrorHTMLOutput(error) {
  return (
    '<h4>Result</h4>' +
    '<h5>Message:</h5>' +
    '<pre>' +
    error.message +
    '</pre>' +
    '<h5>Status:</h5>' +
    '<pre>' +
    error.response.status +
    ' ' +
    error.response.statusText +
    '</pre>' +
    '<h5>Headers</h5>' +
    '<pre>' +
    JSON.stringify(error.response.headers, null, '\t') +
    '</pre>' +
    '<h5>Data</h5>' +
    '<pre>' +
    JSON.stringify(error.response.data, null, '\t') +
    '</pre>'
  );
}
