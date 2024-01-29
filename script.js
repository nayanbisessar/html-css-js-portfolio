/**
 * Toggles the visibility of a mobile navigation menu and updates the associated styles.
 */
function toggleMenu() {
    // Get references to the menu links and phone icon using querySelector
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".phone-icon");

    // Toggle the "open" class on both the menu links and phone icon
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

/**
 * Opens a specified tab and updates the associated tab links and content visibility.
 *
 * @param tabname - The ID of the tab content to be opened.
 * @param event - The event object representing the triggering event (e.g., a click).
 */
function opentab(tabname, event) {
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
