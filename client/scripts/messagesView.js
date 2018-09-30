var MessagesView = {

  $chats: $('#chats'),
  $chat: $('div .username'),

  initialize: function() {
    MessagesView.$chats.on('click', '.username', (elements) => {
      console.log(elements.currentTarget);
      $(elements.currentTarget).toggleClass('friend');
    });
  },

  render: function() {
    
  },

  renderMessage: function (message) {
    $('#chats').append(MessageView.render(message));
    
  },
  
  beFriends: function () {
    console.log('hola');
  }
};

