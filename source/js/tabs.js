const tabs = document.querySelectorAll(".countries__tab-link");
const tabContent = document.querySelectorAll(".countries__tab-item");
const linkToTab = document.querySelectorAll(".countries__item-link");

tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => {
    hideTab();
    tab.classList.add("countries__tab-link--current");
    tabContent[i].classList.add("countries__tab-item--current");
  });
});

const hideTab = () => {
  tabs.forEach((item) => {
    item.classList.remove("countries__tab-link--current");
  });
  tabContent.forEach((item) => {
    item.classList.remove("countries__tab-item--current");
  });
};
