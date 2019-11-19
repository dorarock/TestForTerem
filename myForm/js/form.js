$(function() {
  $("#myForm").submit(function() {
    const jsonDiv = document.getElementById('jsonDiv');
      let formData = {
          "field1":$("#field1").val(),
          "field2":$("#field2").val(),
          "list1":$('#list1').find(":selected").text(),
          "list2":$('#list2').find(":selected").text(),
          "list3":$('#list3').find(":selected").text(),
          "list4":$('#list4').find(":selected").text()
      };

      let dataJson = $.toJSON(formData);
      jsonDiv.insertAdjacentHTML('beforeend', `<p>${dataJson}</p>`);
      
      $.ajax({
          url:'dataparser.php',
          type:'GET',
          data: 'jsonData=' + dataJson,
          success: function(res) {
              alert('Успешно');
              jsonDiv.insertAdjacentHTML('beforeend', `<p>${res}</p>`);
          }
      });

      // let formData1 =  $(this).serializeArray();
      // console.log(formData1);

      
      return false;
  });
});




// $(document).ready(function() {

//     $("form").submit(function( event ) {
//         event.preventDefault();
//         $.ajax({
//             type: $(this).attr('method'),
//             url: $(this).attr('action'),
//             data: new FormData(this),
//             contentType: false,
//             cache: false,
//             processData: false,
//             success: function(res){
//               alert(res);
//             }
//           });

//       });

//   });



//   const submitBtn = document.getElementById('submitBtn');
  
//   console.log(submitBtn);

// submitBtn.addEventListener('click', () => {
//     const field1 = document.getElementById('field1').value;
//     const field2 = document.getElementById('field2').value;
//     const jsonDiv = document.getElementById('jsonDiv');
//     console.log(jsonDiv);
//      let formObj = {
//       f1: field1,
//       f2: field2
//     }; 

//    let formJSON = JSON.stringify(formObj);
//   console.log(formJSON);
    
// })

