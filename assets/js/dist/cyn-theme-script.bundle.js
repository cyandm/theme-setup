(() => {
  // assets/js/functions/common.js
  var ENVIRONMENT = "development";
  function isDev() {
    return ENVIRONMENT === "development";
  }
  function devLog(...variable) {
    if (isDev() === false) return;
    console.log(...variable);
  }

  // assets/js/functions/modals.js
  function Modals() {
    devLog("Modal function is running");
    const handleModalState = (modalName, state) => {
      const modals = document.querySelectorAll(
        '[modal][data-modal-name="'.concat(modalName, '"]')
      );
      if (!modals) {
        devLog('Modal "'.concat(modalName, '" not found.'));
        return;
      }
      modals.forEach((modal) => {
        modal.dataset.active = state;
      });
      devLog('Modal "'.concat(modalName, '" state set to "').concat(state, '".'));
    };
    const addEventListeners = (selector, action, actionName) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        const modalName = element.dataset.modalName;
        element.addEventListener("click", () => {
          action(modalName);
        });
        devLog('"'.concat(actionName, '" triggered for modal "').concat(modalName, '".'));
      });
    };
    addEventListeners(
      "[modal-opener]",
      (modalName) => handleModalState(modalName, "true"),
      "Open"
    );
    addEventListeners(
      "[modal-closer]",
      (modalName) => handleModalState(modalName, "false"),
      "Close"
    );
    addEventListeners(
      "[modal-toggler]",
      (modalName) => {
        const modal = document.querySelector(
          '[modal][data-modal-name="'.concat(modalName, '"]')
        );
        if (!modal) {
          devLog('Toggle failed: Modal "'.concat(modalName, '" not found.'));
          return;
        }
        const newState = modal.dataset.active === "true" ? "false" : "true";
        devLog('Toggling modal "'.concat(modalName, '" to "').concat(newState, '".'));
        handleModalState(modalName, newState);
      },
      "Toggle"
    );
  }

  // assets/js/index.js
  Modals();
})();
