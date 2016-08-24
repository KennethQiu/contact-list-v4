$(document).ready(function() {
  // New contact submit ajax
  $('#new_contact_submit_button').on('click',function(event){
    // prevent refresh
    event.preventDefault();
    // retrive form fields
    var $form = $(this).closest('form');
    var first_name = $form.find('#first_name').val();
    var last_name = $form.find('#last_name').val();
    var mobile = $form.find('#mobile').val();
    var email = $form.find('#email').val();
    var image_url = $form.find('#image_url').val();
    var new_contact = {first_name: first_name, last_name: last_name, mobile: mobile, email: email, image_url: image_url};
    // add new contact to contacts, with class optimistic
      //copy empty card, add class optimistic
      $new_contact_card = $('.dummy').clone().removeClass('dummy').appendTo('.contact_cards').addClass('optimistic');
      //fill in card with form data
      $new_contact_card.find('.image_url').attr('src',image_url);
      $new_contact_card.find('.full_name').text(first_name+' '+last_name);
      $new_contact_card.find('.mobile').text(mobile);      
      $new_contact_card.find('.email').text(email);
    // post data to server
    $.ajax({
      method:   "POST", 
      url:      '/contacts',
      dataType: "json", 
      data:     new_contact, 
    }).done(function(status){  
      console.log('success in getting a response in the post request');
        if(status.success){
          // remove added contact
          console.log('success in saving new contact');
          $('.optimistic').removeClass('optimistic');           
        } else {
          // remove added contact
          console.log('failed in saving new contact');
          $('.optimistic').remove();  
        };
    }).fail(function(jqXHR, textStatus){
      console.log('Failed adding contact because: '+ jqXHR.textStatus);
      // remove added contact
      $('.optimistic').remove();
    });
    // refresh contacts 
    // $.ajax({
    //   method:   'GET',
    //   dataType: 'json',
    //   url:      '/contacts', 
    // }).done(function(contacts){
    //   console.log('success in retrieving all contacts');
    //   console.log(contacts);
    // }).fail(function(jqXHR, textStatus){
    //   console.log('Failed retrieving contacts because: '+ jqXHR.textStatus);
    // });
  });
});
