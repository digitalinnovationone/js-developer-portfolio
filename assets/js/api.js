
const url = "https://raw.githubusercontent.com/juniorfjj/js-curriculo-portfolio/projeto-base/data/profile.json"

async function fetchProfileData () {
    const fetchin = await fetch(url)
    return await fetchin.json()
}