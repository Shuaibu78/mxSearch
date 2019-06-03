$('input.form-control.search-game').search(function(){
      $('#search').keyup(function () {
            $('#result').html('');
            let searchField = $('#search').val();
            let expression = new RegExp(searchField, "i");
            $.getJson('AreaData.json', function (AreaData) {
                  $.each(AreaData, function (key, value) {
                        if (value.name.search(expression) != -1) {
                              $('#result').append('<li class="list-group-item"><img src="" ' + value.images + ' height="40" width="40" class="img-thumbnail" /> ' + value.name + ' | <span class="text-muted">' + value.location + '</span></li>');
                        }
                  });
            })
      });
      });