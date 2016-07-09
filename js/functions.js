//
// Create static template BODY
//

(function htmlBody(){
// script
  var script = document.querySelector('script');

  // Wrapper
  var wrapper = document.createElement('div');
  wrapper.setAttribute('id', 'wrapper');
  document.body.insertBefore(wrapper, script);

  // Header
  var header = document.createElement('header');
  header.setAttribute('id', 'header');
  wrapper.appendChild(header);

  var header_logo = document.createElement('div');
  header_logo.innerHTML = 'User Directory';
  header.appendChild(header_logo);

  // Main Content
  var main_content = document.createElement('main_content');
  main_content.setAttribute('id', 'main_content');
  wrapper.appendChild(main_content);

  //Footer
  var footer = document.createElement('footer');
  footer.setAttribute('id', 'footer');
  footer.innerHTML = ' | JSON Exercise | ';
  wrapper.appendChild(footer);
}());


//
// API CALL
//
(function(){
  var isActiveX = !!window.ActiveXObject,
    xhr = isActiveX ? new ActiveXObject("Microsoft.XMLHTTP"): new XMLHttpRequest();
  xhr.open("GET",'js/data.json',true);
  xhr.send();

  // WORKING WITH THE DATA
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200){
      // the request is complete, parse data and call callback
      var userData = JSON.parse(this.responseText);

      // Call this function on Success
      module_build(userData);
      showMore();
    }
  };
}());


//
// JSON Loop
//
function module_build(userData){
  for (var key in userData) {
    if (userData.hasOwnProperty(key)) {
      module_html(key, userData);
    }
  }
}


function module_html(key, userData){

  var user_data = userData[key];
  var user_id = userData[key].id;

  // dom caching
  var main_content = document.getElementById('main_content');

  // Result Module Wrapper
  var data_result_div = document.createElement('div');
  data_result_div.setAttribute("id", 'data_result_div_' + key);
  data_result_div.setAttribute("class", 'module_wrapper');
  main_content.appendChild(data_result_div);

  // UL
  var list = document.createElement('ul');
  list.setAttribute('class','initial');
  data_result_div.appendChild(list);

  // name
  var list_name = document.createElement('li');
  list_name.innerHTML =  'Name: ' + userData[key].name;
  list.appendChild(list_name);

  var list_username = document.createElement('li');
  list_username.innerHTML =  'Username: ' + userData[key].username;
  list.appendChild(list_username)

  // email
  var list_email = document.createElement('li');
  list_email.innerHTML =  'email: ' + userData[key].email;
  list.appendChild(list_email);

  // icon function
  var list_phone_icon = document.createElement('li');
  list.appendChild(list_phone_icon);
  icon_function(userData, key,list_phone_icon);

  // street
  var list_street = document.createElement('li');
  list_street.innerHTML =  'Street: ' + userData[key].address.street;
  list.appendChild(list_street);

  // suite
  var list_suite = document.createElement('li');
  list_suite.innerHTML =  'Suite: ' + userData[key].address.suite;
  list.appendChild(list_suite);

  // city
  var list_city = document.createElement('li');
  list_city.innerHTML =  'City: ' + userData[key].address.city;
  list.appendChild(list_city);

  //Zipcode
  var list_zipcode = document.createElement('li');
  list_zipcode.innerHTML =  'Zip Code: ' + userData[key].address.zipcode;
  list.appendChild(list_zipcode);

  // phone number
  var list_phone = document.createElement('li');
  list_phone.innerHTML =  phone_function(userData, key);
  list.appendChild(list_phone);

  // Website
  var list_website = document.createElement('li');
  var list_website_link = document.createElement('a');
  list_website_link.setAttribute('href', 'http://www.' + userData[key].website);
  list_website_link.setAttribute('target', '_blank');
  list_website_link.innerHTML = userData[key].website;
  list.appendChild(list_website);
  list_website.appendChild(list_website_link);
} // end function


//
// Icon Function
//
function icon_function(userData, key,list_phone_icon){
  if(userData[key].phone !== ""){
   return yes(list_phone_icon);
  }else{
    return no(list_phone_icon);
  }
}


//
// Icon Conditional Functions
//
function no(list_phone_icon){
  var image_no = document.createElement('img');
  image_no.setAttribute('src', 'imgs/no.png');
  list_phone_icon.appendChild(image_no);
}

function yes(list_phone_icon){
  var image_yes = document.createElement('img');
  image_yes.setAttribute('src', 'imgs/yes.png');
  list_phone_icon.appendChild(image_yes);
}

//
// Phone Function
//
function phone_function(userData, key){
  if(userData[key].phone !== ""){
   return 'Phone ' + userData[key].phone;
  }else{
    return 'Phone: N/A';
  }
}


//
// onClick Event Handler
//
function showMore(){
  var div_click = document.querySelectorAll("#main_content  .module_wrapper  ul");

   for (var i = 0; i < div_click.length; i++){
     // add event listener to each div container
      div_click[i].addEventListener('click', function(event){
         this.classList.toggle('updated');
         console.log(this);
      });
   }
 }
