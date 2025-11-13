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
function toggleMember(id) {
    const selected = document.getElementById(id);
    const all = document.querySelectorAll('.member-links');
    all.forEach(section => {
        if (section !== selected) section.classList.add('hidden');
    });
    selected.classList.toggle('hidden');
}

function toggleGroupContact() {
    const group = document.querySelector('.group-subbuttons');
    group.classList.toggle('hidden');
}

function showPhone() {
    alert("Call us at: +63 9509034091");
}
