(function () {
  const content = document.getElementById('content');
  const buttons = Array.from(document.querySelectorAll('.tab-btn'));

  const texts = {
    1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tortor mauris, maximus semper volutpat vitae, varius placerat dui. Nunc consequat dictum est, at vestibulum est hendrerit at. Mauris suscipit neque ultrices nisl interdum accumsan. Sed euismod, ligula eget tristique semper, lectus est pellentesque dui, sit amet rhoncus leo mi nec orci. Curabitur hendrerit, est in ultricies interdum, lacus lacus aliquam mauris, vel vestibulum magna nisl id arcu. Cras luctus tellus ac convallis venenatis. Cras consequat tempor tincidunt. Proin ultricies purus mauris, non tempor turpis mollis id. Nam iaculis risus mauris, quis ornare neque semper vel.`,
    2: `Section 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et nibh porttitor, volutpat libero a, pretium sapien. Integer at porta justo. Nullam dapibus, mauris at feugiat gravida, enim lorem tristique arcu, sit amet vulputate velit ipsum eget sapien. Aliquam vitae tellus ac est elementum accumsan. Suspendisse elementum arcu vitae sollicitudin aliquet. Praesent aliquet rhoncus felis, eget egestas nunc tincidunt id.`,
    3: `Section 3: Phasellus ac nibh in turpis facilisis efficitur. Sed sit amet lacinia tortor. Integer ultrices, lorem et accumsan pulvinar, libero nisl finibus purus, in viverra libero mauris nec nisl. Ut pellentesque justo est, id fermentum est facilisis id. Quisque congue, enim quis ultrices interdum, ipsum est rhoncus lorem, vitae congue elit ipsum ut erat. Fusce ut velit sed arcu faucibus tempus.`,
  };

  function setActive(section) {
    buttons.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.section === String(section));
    });
  }

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const section = btn.dataset.section;
      setActive(section);
      content.innerHTML = `<p>${texts[section]}</p>`;
    });
  });

  // initial active state
  setActive(1);
})();