/**
 * Scrolls to an element with the same id as the hash given in URL.
 */
function scroll_to_hash() {
  if(window.location.hash) {
    /* URL with hash exists */
    let id = window.location.hash.substring(1);
    let element = document.getElementById(id);
    if(element) {
      /* Element with hash exists */
      element.scrollIntoView();
    }
  }
}

export default scroll_to_hash;
