
function updateProfileInfos(profileData) {
    const photo = document.getElementById('profile_photo')
    photo.src = profileData.photo
    photo.alt = `Foto de ${profileData.nome}`

    const name = document.getElementById('profile_name')
    //Também é possível utilizar textContent para substituir o texto no elemento, tal como o innerText; O primeiro, mantém a formatação original do elemento. Ex.: Se ele tiver quebras de linhas, manterá essa quebra.
    name.innerText = profileData.nome

    const job = document.getElementById('profile_job')
    job.innerText = profileData.job
    
    const location = document.getElementById('profile_location')
    location.innerText = profileData.location
    
    const phone = document.getElementById('profile_phone')
    phone.innerText =profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.getElementById('profile_email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.phone}`
}

function updateSoftSkillsInfos(profileData) {
    const softSkills = document.getElementById('profile_softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map (skill => `<li>${skill}</li>`).join('')
}

function updateHardSkillsInfos(profileData) {
    const hardtSkills = document.getElementById('profile_hardSkills')
    hardtSkills.innerHTML = profileData.skills.hardSkills.map (hSkill => `<li><img src="${hSkill.logo}" alt="${hSkill.name}" title="${hSkill.name}"></li>`).join('')
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile_languages')
    console.log(languages)
    languages.innerHTML = profileData.idiomas.map (language => `<li>${language.nome} (${language.nivel})</li>`).join('')
}






(async () => {

    const profileData = await fetchProfileData()
    console.log(profileData)
    updateProfileInfos(profileData)
    updateSoftSkillsInfos(profileData)
    updateHardSkillsInfos(profileData)
    updateLanguages(profileData)
})()

