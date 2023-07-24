const acordeonTriggers = document.querySelectorAll('.trigger');

acordeonTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const acordeon = trigger.parentElement;
    const isOpen = acordeon.classList.contains('open');

    if (isOpen) {
      acordeon.classList.remove('open');
    } else {
      acordeon.classList.add('open');
    }
  });
});
