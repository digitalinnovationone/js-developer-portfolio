async function fetchProfileData() {
  const url = 'https://raw.githubusercontent.com/rafaschenkel/js-developer-portfolio/schenkel/data/profile.json';
  const dados = await (await fetch(url)).json();
  return await dados;
}
