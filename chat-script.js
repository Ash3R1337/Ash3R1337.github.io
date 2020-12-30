var _maxId;
var _messages;

$(document).ready(function(){
 _maxId = 0;
 _messages = [];
 chatRequest();
 setInterval(chatRequest, 2000);

 $('#btnSend').click(function(elem){
        var name = $('#name').val();
        var text = $('#text').val();
        $.post('add.php', {name: name, text: text}, function(){
                $('#text').attr('value', '');
                $(".in_mes").val('');
        });
  });
});

function chatRequest()
{
 
  $.post('get_json.php', {maxId: _maxId}, chatResult, 'json');
}

function chatResult(msgs){
 // Добавление новых сообщений в массив.
 for(var i = 0; i < msgs.length; i++)
 {
        var m = new Object();
        m.dt = msgs[i]['date'];
        m.name = msgs[i]['name'];
        m.text = msgs[i]['text'];
        _messages.push(m);
        _maxId++;
  }
 var html = '';
 if(_messages.length<=5){
    for (var i = _messages.length - 1; i >=0; i--)
    {
      var m = _messages[i];
      if (i%2==1){
        html +='<p style = "color: #AC0000; position: relative; left: 10px;">'+m.name+'</p>';
        html +='<p style = "color: #EE0707; position: relative; left: 10px;">'+m.text+'</p><br/>';
      }else{
        html +='<p style = "color: #00BB1A; position: relative; left: 10px;">'+m.name+'</p>';
        html +='<p style = "color: #06F01C; position: relative; left: 10px;">'+m.text+'</p><br/>';
      }
    }
 }else{
    for (var i = _messages.length - 1; i >= _messages.length-5; i--){
      var m = _messages[i];
      if (i%2==1){
        html +='<p style = "color: #AC0000; position: relative; left: 10px;">'+m.name+'</p>';
        html +='<p style = "color: #EE0707; position: relative; left: 10px;">'+m.text+'</p><br/>';
      }else{ 
        html +='<p style = "color: #00BB1A; position: relative; left: 10px;">'+m.name+'</p>';
        html +='<p style = "color: #06F01C; position: relative; left: 10px;">'+m.text+'</p><br/>';
      }
   }
 }
 $('#chat').html(html);
}
