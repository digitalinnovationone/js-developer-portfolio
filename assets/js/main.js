(async () => {
  const profileData = await fetchProfileData();
  updateInfos(profileData);
})();

function updateInfos(profileData) {
  const name = document.querySelector('#profile-name');
  name.innerText = profileData.name;

  const job = document.querySelector('#profile-job');
  job.innerText = profileData.job;

  const linkedin = document.querySelector('#profile-linkedin');
  linkedin.setAttribute('href', `${profileData.linkedin}`);
  linkedin.innerText = profileData.linkedin.replace('https://www.linkedin.com/in/', '');

  const location = document.querySelector('#profile-location');
  location.innerText = profileData.location;

  const phone = document.querySelector('#profile-phone');
  phone.setAttribute(
    'href',
    `https://wa.me/+55${profileData.phone.replace('(', '').replace(')', '').replace(' ', '').replace('-', '')}`
  );
  phone.innerText = profileData.phone;

  const email = document.querySelector('#profile-email');
  email.setAttribute('href', `mailto:${profileData.email}`);
  email.innerText = profileData.email;
}
