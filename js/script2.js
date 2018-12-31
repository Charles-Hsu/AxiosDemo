function performGetRequest1() {
  var resultElement = $('#getResult1');
  axios
    .get('http://jsonplaceholder.typicode.com/todos')
    .then(function(response) {
      resultElement.html(generateSuccessHTMLOutput(response));
    })
    .catch(function(error) {
      resultElement.html(generateErrorHTMLOutput(error));
    });
}

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

function performGetRequest2() {
  var resultElement = $('#getResult2');
  var todoId = $('#todoId').val();
  axios
    .get('http://jsonplaceholder.typicode.com/todos', {
      params: {
        id: todoId
      }
    })
    .then(function(response) {
      resultElement.html(generateSuccessHTMLOutput(response));
    })
    .catch(function(error) {
      resultElement.html(generateErrorHTMLOutput(error));
    });
}

// performPostRequest
// $('#todoInputForm').on('submit', function(e) {
$('#postRequest').click(function(e) {
  // alert('post');
  var resultElement = $('#postResult');
  var todoTitle = $('#todoTitle').val();
  axios
    .post('http://jsonplaceholder.typicode.com/todos', {
      userId: '1',
      title: todoTitle,
      completed: false
    })
    .then(function(response) {
      resultElement.html(generateSuccessHTMLOutput(response));
    })
    .catch(function(error) {
      resultElement.html(generateErrorHTMLOutput(error));
    });
  e.preventDefault();
});

function clearOutput() {
  $('#getResult1').html('');
  $('#getResult2').html('');
  $('#postResult').html('');
}

$('.clearOutput').click(clearOutput);
$('#performGetRequest1').click(performGetRequest1);
$('#performGetRequest2').click(performGetRequest2);

// TEST
$('h4').click(function() {
  $(this).slideUp();
});
