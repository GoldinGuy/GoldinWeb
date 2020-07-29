function send_mail() {
  window.location.href = 'mailto:goldinwebdesign@gmail.com?subject=Website%20Inquiry' +
    '&body=' + encodeURI(document.getElementById("message_field").value)
  return false
}
