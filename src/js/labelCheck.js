/** 
 * basic script to toggle dark mode switcher.
 * context: dark mode switcher defaulted to ‘off’ whenever the page changed, but the dark mode preference remained.
 * this script is deferred and called after DOM initializes to properly switch the switch.
 */

if (darkmode.isActivated()) {
  document.getElementById("darkmode-toggle").checked = true;
} else {
  document.getElementById("darkmode-toggle").checked = false;
}