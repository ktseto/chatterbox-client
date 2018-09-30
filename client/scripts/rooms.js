var Rooms = {
  add: function (room) {
    var allRooms = $('option').map(function() { return $(this).val(); });
    
    if (!Object.values(allRooms).includes(room)) {
      var compile = _.template('<option class="options" value="<%- room %>"><%- room %></option>');
      RoomsView.$select.append(compile({room: room}));
    }
  }
};