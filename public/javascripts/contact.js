$(window).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    var flag = true;
    var requireFields = [
      '#name',
      '#length',
      '.attraction-visited',
      '.best-attraction',
      '#contact'
    ];
    var numberFields = [
      '#length'
    ];
    var dateFields = [
      '#date'
    ];
    var emailFields = [
      '#contact'
    ];

    flag = validate(requireFields, isNotEmpty, 'Field is required.', flag);
    flag = validate(numberFields, isNumber, 'This does not look like a number.', flag);
    flag = validate(emailFields, isEmail, 'This does not look like an email.', flag);

    if(flag) {
      var data = {
        firstname: $('#name').val(),
        length: $('#length').val(),
        date: $('#date').val(),
        visited: getCheckboxValues('.attraction-visited'),
        best: $('.best-attraction:checked').val(),
        email: $('#contact').val(),
        file: $('#picture').val()
      }
      $.ajax({
        type : 'POST',
        url :  $('.contact-form').attr('action'),
        data: data,
        dataType : 'json',
        success: function(res) { console.log('Success!'); }
      });
    }

    return false;
  });
});

function getCheckboxValues(selector) {
  var inputArray = $(selector+ ':checked');
  var result = [];
  for(var i=0; i<inputArray.length; i++) {
    if(inputArray[i].checked) result.push($(inputArray[i]).val());
  }
  return result;
}

function validate(selectorArray, ruleFnc, errorMessage, flag) {
  selectorArray.forEach(function(selector) {
    var validationResult = ruleFnc(selector);
    $('#'+selector.slice(1,selector.length)+'-error').text(validationResult? '' : errorMessage);
    if(flag) flag = validationResult;
  });
  return flag;
}

function isNumber(selector) {
  var number = $(selector).val();
  var exp = /^\d+$/;
  return exp.test(number);
}

function isEmail(selector) {
  var email = $(selector).val();
  var exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;
  return exp.test(email);
}

function isNotEmpty(selector) {
  var selectorType = selector.slice(0,1);
  if(selectorType === '#') {
    var fieldVal = $(selector).val();
    return fieldVal === '' || fieldVal === undefined? false : true;
  } else if(selectorType === '.') {
    var inputArray = $(selector+ ':checked');
    var result = [];
    for(var i=0; i<inputArray.length; i++) {
      if(inputArray[i].checked) result.push($(inputArray[i]).val());
    }
    return result.length > 0? true : false;
  }
}
