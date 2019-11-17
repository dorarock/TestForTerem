$(document).ready(function() {

    $("form").submit(function( event ) {
    
        event.preventDefault();

        $.ajax({
            type: $(this).attr('method'),
            url: $(this).attr('action'),
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            success: function(res){
              alert(res);
            }
          });

      });

  });



  const submitBtn = document.getElementById('submitBtn');
  
  console.log(submitBtn);

submitBtn.addEventListener('click', () => {
    const field1 = document.getElementById('field1').value;
    const field2 = document.getElementById('field2').value;
    const jsonDiv = document.getElementById('jsonDiv');
    console.log(jsonDiv);
     let formObj = {
      f1: field1,
      f2: field2
    };

    let formJSON = JSON.stringify(formObj);
  
    console.log(formJSON);
    
})