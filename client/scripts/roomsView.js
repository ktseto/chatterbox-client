var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  //$option: $('option'),

  initialize: function() {
    RoomsView.$button.on('click', RoomsView.renderRoom);
    RoomsView.$select.change(RoomsView.filterRoom);
  },

  // handleAdd: function(event) {
  //   event.preventDefault();
  //   //window.prompt();
  //   var input = window.prompt();
  //   console.log(input);
  //   Rooms.add(input);
  //   RoomsView.renderRoom(input);
    
  //   var compile = _.template('<option value=""><%- input %></option>');
  //   RoomsView.$select.append(compile({input: input}));
  // },

  // var nodeFn = _.template('<option value="NewRoom"><%- room %></option>');
  // $('select').append(nodeFn({room: room}));

  render: function() {
  },

  renderRoom: function(event) {
    var input = window.prompt();
    Rooms.add(input);
  },
  
  filterRoom: function(event) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      $('.chat').remove();
      for (var message of data.results) {
        if (!message.username && !message.text) {
          message.username = 'anonymous';
          message.text = '';
        }
        if (message.roomname === $('select').val()) {
          MessagesView.renderMessage(message);
        }
      }
    });
  }
  
};



// var FormView = {

//   $form: $('form'),

//   initialize: function() {
//     FormView.$form.on('submit', FormView.handleSubmit);
//   },

//   handleSubmit: function(event) {
//     // Stop the browser from submitting the form
//     event.preventDefault();
//     var message = {
//       username: App.username,
//       text: $('#message').val(),
//       roomname: 'lobby'
//     };
//     Parse.create(message);
//   },

//   setStatus: function(active) {
//     var status = active ? 'true' : null;
//     FormView.$form.find('input[type=submit]').attr('disabled', status);
//   }

// };