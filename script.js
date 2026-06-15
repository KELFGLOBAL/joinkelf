async function loadYAML(path) {
  const response = await fetch(path);
  const text = await response.text();
  return jsyaml.load(text);
}

async function loadContent() {
  const home = await loadYAML("content/home.yml");
  const about = await loadYAML("content/about.yml");
  const benefits = await loadYAML("content/benefits.yml");
  const join = await loadYAML("content/join.yml");

  document.getElementById("hero_title").textContent = home.hero_title;
  document.getElementById("hero_subtitle").textContent = home.hero_subtitle;
  if (home.hero_image) document.getElementById("hero_image").src = home.hero_image;

  document.getElementById("about_title").textContent = about.title;
  document.getElementById("about_body").innerHTML = marked.parse(about.body);
  if (about.image) document.getElementById("about_image").src = about.image;

  document.getElementById("b1_title").textContent = benefits.b1_title;
  document.getElementById("b1_body").textContent = benefits.b1_body;
  if (benefits.b1_image) document.getElementById("b1_image").src = benefits.b1_image;

  document.getElementById("b2_title").textContent = benefits.b2_title;
  document.getElementById("b2_body").textContent = benefits.b2_body;
  if (benefits.b2_image) document.getElementById("b2_image").src = benefits.b2_image;

  document.getElementById("b3_title").textContent = benefits.b3_title;
  document.getElementById("b3_body").textContent = benefits.b3_body;
  if (benefits.b3_image) document.getElementById("b3_image").src = benefits.b3_image;

  document.getElementById("join_title").textContent = join.title;
  document.getElementById("join_description").innerHTML = marked.parse(join.description);
  document.getElementById("join_note").textContent = join.note;
}

const script1 = document.createElement("script");
script1.src = "https://cdn.jsdelivr.net/npm/js-yaml@4.1.0/dist/js-yaml.min.js";
script1.onload = () => {
  const script2 = document.createElement("script");
  script2.src = "https://cdn.jsdelivr.net/npm/marked/marked.min.js";
  script2.onload = loadContent;
  document.body.appendChild(script2);
};
document.body.appendChild(script1);
