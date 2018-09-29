var Rooms = {

  add: function (room) {
    var input = window.prompt;
    var nodeFn = _.template('<option value="NewRoom"><%- input %></option>');
    $('select').append(nodeFn({input: input}));
  }
};