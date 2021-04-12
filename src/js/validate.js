function validate(event) {
  // TODO - write custom validation logic to validate the 
  // values entered by the user. If values are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  console.log('TODO - validate the entries of Bird here before submitting');
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
