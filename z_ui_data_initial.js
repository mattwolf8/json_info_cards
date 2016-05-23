function ui_data_initial() {
  // set variable
  var user_id = userData[key].id;

  function no(){
    //
    var image_no = document.createElement('img');
    image_no.setAttribute('src', './no.png');
    list_phone_icon.appendChild(image_no);
  }

  function yes(){
    
    var image_yes = document.createElement('img');
    image_yes.setAttribute('src', './yes.png');
    list_phone_icon.appendChild(image_yes);
  }

  function icon_function(){
    if(userData[key].phone !== ""){
     return yes();
    }else{
      return no();
    }
  }

  function phone_function(){
    if(userData[key].phone !== ""){
     return 'Phone ' + userData[key].phone;
    }else{
      return 'Phone: N/A';
    }
  }

  //div
  var data_result_div = document.createElement('div');
  // data_result_div.setAttribute('id',user_id);
  // data_result_div.setAttribute('class','data_result_div');
  main_content.appendChild(data_result_div);

  // UL 
  var list = document.createElement('ul');
  list.setAttribute('class','initial');
  data_result_div.appendChild(list);


  // Website 10
  var list_website = document.createElement('li');
  var list_website_link = document.createElement('a');
  list_website_link.setAttribute('href', 'http://www.' + userData[key].website);
  list_website_link.setAttribute('target', '_blank');
  list_website_link.innerHTML = userData[key].website;
  list_website.appendChild(list_website_link);
  list.appendChild(list_website);


  // Phone 9 
  var list_phone = document.createElement('li');
  list_phone.innerHTML =  phone_function();
  list.insertBefore(list_phone, list_website);

  // Address | Zipcode 8
  var list_zipcode = document.createElement('li');
  list_zipcode.innerHTML =  'Zip Code: ' + userData[key].address.zipcode;
  list.insertBefore(list_zipcode, list_phone);

  // Address  | City 7 
  var list_city = document.createElement('li');
  list_city.innerHTML =  'City: ' + userData[key].address.city;
  list.insertBefore(list_city, list_zipcode);

  // Address  | Suite 6
  var list_suite = document.createElement('li');
  list_suite.innerHTML =  'Suite: ' + userData[key].address.suite;
  list.insertBefore(list_suite, list_city);

  // Address  | Street 5 
  var list_street = document.createElement('li');
  list_street.innerHTML =  'Street: ' + userData[key].address.street;
  list.insertBefore(list_street, list_suite);

  // Phone Number Icon 4
  var list_phone_icon = document.createElement('li');
  icon_function();
  list.insertBefore(list_phone_icon, list_street);

  // Email  3
  var list_email = document.createElement('li');
  list_email.innerHTML =  'email: ' + userData[key].email;
  list.insertBefore(list_email, list_phone_icon);

  // username 2 
  var list_username = document.createElement('li');
  list_username.innerHTML =  'Username: ' + userData[key].username;
 list.insertBefore(list_username, list_email);

  //  First & Last Name 1
  var list_name = document.createElement('li');
  list_name.innerHTML =  'Name: ' + userData[key].name;
 list.insertBefore(list_name, list_username);
}