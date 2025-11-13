const buttons = document.querySelectorAll('.contact-btn');
const infos = document.querySelectorAll('.contact-info');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.getElementById(`contact-${btn.dataset.member}`);

    // Close all other contact boxes
    infos.forEach(info => {
      if (info !== target) info.classList.remove('active');
    });

    // Toggle the selected one
    target.classList.toggle('active');
  });
});
