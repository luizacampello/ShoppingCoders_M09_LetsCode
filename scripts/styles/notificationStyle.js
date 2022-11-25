(() => {
    const style = document.createElement('style');
    style.innerHTML = `
    div.notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 200px;
        padding: 20px;
        text-align: center;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
		color: white;
      }

      div.notification-error {
        background-color: #a14343;
        box-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
      }

      div.notification-success {
        background-color: #43a143;
        box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
      }

      div.notification-info {
		background-color: #43a143;
          box-shadow: 0 0 10px rgba(0, 0, 255, 0.5);
      }
    `;
    document.body.appendChild(style);
})();
