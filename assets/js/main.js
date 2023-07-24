(async () => {
  const profileData = await fetchProfileData();
  updateInfos(profileData);
  updateHardSkills(profileData);
  updateSoftSkills(profileData);
  updatePortfolio(profileData);
  updateExperienceProfessional(profileData);
})();

function updateInfos(profileData) {
  const photo = document.querySelector('#profile-photo');
  photo.setAttribute('src', `${profileData.photo}`);

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

function updateHardSkills(profileData) {
  const ulHardSkills = document.querySelector('#profile-hardskills');
  const hardSkills = profileData.skills.hardSkills
    .map(hard => {
      return `
        <li>
          <img class="tools-img html" src="${hard.logo}"
            alt="icone ${hard.name}">
        </li>
      `;
    })
    .join('');
  ulHardSkills.innerHTML = hardSkills;
}

function updateSoftSkills(profileData) {
  const ulSoftSkills = document.querySelector('#profile-softskills');
  const softSkills = profileData.skills.softSkills
    .map(soft => {
      return `
        <li>${soft}</li>
      `;
    })
    .join('');
  ulSoftSkills.innerHTML = softSkills;
}

function updatePortfolio(profileData) {
  const ulProjects = document.querySelector('#projects');
  const projects = profileData.portfolio
    .map(proj => {
      return `
        <li class="project">
          <h3 class="project-title">${proj.name}</h3>
          <a href="${proj.url}"
              target="_blank">https://github.com/rafaschenkel/devsteam</a>
        </li>
      `;
    })
    .join('');
  ulProjects.innerHTML = projects;
}

function updateExperienceProfessional(profileData) {
  const experiencies = document.querySelector('#experiencies');
  const expProfessional = profileData.professionalExperience
    .map(exp => {
      return `
      <li class="experience">
        <h3>${exp.name}</h3>
        <p class="company">${exp.company}</p>
        <p class="time">${exp.period}</p>
        <p class="descriptio">${exp.description}</p>
      </li>
    `;
    })
    .join('');
  experiencies.innerHTML = expProfessional;
}
