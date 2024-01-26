function compareEmails(newsletter) {
  if (newsletter.email.value != newsletter.verify.value) {
    alert("Your email addresses don't match. Please double check");
    return false;
  } else {
    return true;
  }
}
