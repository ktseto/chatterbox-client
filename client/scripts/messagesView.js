var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //console.log(Parse.readAll());
  },

  render: function() {
    
  },

  renderMessage: function (message) {
    $('#chats').append(MessageView.render(message));
    
  }
};


    /*
    Parse.readAll((data) => {
      // examine the response from the server request:
      var html = '';
      for (var i = 0; i < data.results.length; i++) {
        html += MessageView.render()(data.results[i]);
      }

      $('#chats').append(html);
    });
    */