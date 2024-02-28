
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/digitalinnovationone/js-developer-portfolio/aa0fe75149e26b1dd6ff20c2ae78eafd38ab609f/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
