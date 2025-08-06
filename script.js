const songs = [
  { title: "Haseen", artists: "Talwiinder X NDS X Rippy Grewal", year: 2025, url: "https://www.youtube.com/results?search_query=Haseen+Talwiinder" },
  { title: "Panchii", artists: "Talwiinder X NDS", year: 2025, url: "https://www.youtube.com/results?search_query=Panchii+Talwiinder" },
  { title: "Nakhre", artists: "Talwiinder X NDS", year: 2025, url: "https://www.youtube.com/results?search_query=Nakhre+Talwiinder" },
  { title: "Pal Pal", artists: "Afusic X Talwiinder X AliSoomro", year: 2025, url: "https://www.youtube.com/results?search_query=Pal+Pal+Talwiinder" },
  { title: "High On Me", artists: "Yo Yo Honey Singh X Talwiinder", year: 2024, url: "https://www.youtube.com/results?search_query=High+On+Me+Talwiinder" },
  { title: "Tu", artists: "Talwiinder X Sanjoy", year: 2024, url: "https://www.youtube.com/results?search_query=Tu+Talwiinder" },
  { title: "Agg Banke", artists: "Talwiinder X NDS X Harsh Likhari X Kidjaywest", year: 2024, url: "https://www.youtube.com/results?search_query=Agg+Banke+Talwiinder" },
  { title: "Heer", artists: "Talwiinder X Tech Panda X Kenzani (feat. Mitika)", year: 2024, url: "https://www.youtube.com/results?search_query=Heer+Talwiinder" },
  { title: "Jaam", artists: "Talwiinder X TMDA", year: 2024, url: "https://www.youtube.com/results?search_query=Jaam+Talwiinder" },
  { title: "Brownskin Hurricane", artists: "Talwiinder X Taxsaal X Arsh Heer", year: 2023, url: "https://www.youtube.com/results?search_query=Brownskin+Hurricane+Talwiinder" },
  { title: "Khoya", artists: "Talwiinder X NDS", year: 2023, url: "https://www.youtube.com/results?search_query=Khoya+Talwiinder" },
  { title: "Conversation", artists: "Talwiinder X NDS X Annural Khalid", year: 2023, url: "https://www.youtube.com/results?search_query=Conversation+Talwiinder" },
  { title: "Anonymous", artists: "Talwiinder X NDS X Real Boss", year: 2023, url: "https://www.youtube.com/results?search_query=Anonymous+Talwiinder" },
  { title: "Wishes", artists: "Hasan Raheem X Talwiinder X Umair", year: 2023, url: "https://www.youtube.com/results?search_query=Wishes+Talwiinder" },
  { title: "You", artists: "THEMXXNLIGHT X Talwiinder", year: 2023, url: "https://www.youtube.com/results?search_query=You+Talwiinder" },
  { title: "Andaaz", artists: "Talwiinder X NDS X mxdnxght", year: 2023, url: "https://www.youtube.com/results?search_query=Andaaz+Talwiinder" },
  { title: "Baazi", artists: "Supreme Sidhu X Talwiinder", year: 2023, url: "https://www.youtube.com/results?search_query=Baazi+Talwiinder" },
  { title: "Khayaal", artists: "Talwiinder X NDS", year: 2023, url: "https://www.youtube.com/results?search_query=Khayaal+Talwiinder" },
  { title: "Sweet Talk", artists: "Talwiinder X NDS", year: 2023, url: "https://www.youtube.com/results?search_query=Sweet+Talk+Talwiinder" },
  { title: "Someone Like Me", artists: "Talwiinder X NDS", year: 2022, url: "https://www.youtube.com/results?search_query=Someone+Like+Me+Talwiinder" },
  { title: "Bach Ke", artists: "Talwiinder X Hasan Raheem X NDS", year: 2022, url: "https://www.youtube.com/results?search_query=Bach+Ke+Talwiinder" },
  { title: "Soch", artists: "Talwiinder X NDS X Harjas Harjaayi", year: 2022, url: "https://www.youtube.com/results?search_query=Soch+Talwiinder" },
  { title: "Her", artists: "Talwiinder X Sneh X NDS X Rippy Grewal", year: 2022, url: "https://www.youtube.com/results?search_query=Her+Talwiinder" },
  { title: "Deal 2", artists: "INDERZY X Talwiinder", year: 2022, url: "https://www.youtube.com/results?search_query=Deal+2+Talwiinder" },
  { title: "Nasha", artists: "Talwiinder", year: 2022, url: "https://www.youtube.com/results?search_query=Nasha+Talwiinder" },
  { title: "Dhundhala", artists: "Talwiinder X Yashraj X NDS", year: 2022, url: "https://www.youtube.com/results?search_query=Dhundhala+Talwiinder" },
  { title: "Your Eyes", artists: "Talwiinder X 30KEY!", year: 2022, url: "https://www.youtube.com/results?search_query=Your+Eyes+Talwiinder" },
  { title: "Midnight Drive", artists: "Talwiinder X Nowhere but Here", year: 2021, url: "https://www.youtube.com/results?search_query=Midnight+Drive+Talwiinder" },
  { title: "Tera Saath", artists: "Talwiinder X Vylom", year: 2021, url: "https://www.youtube.com/results?search_query=Tera+Saath+Talwiinder" },
  { title: "Jaqeen", artists: "Talwiinder X Rish", year: 2021, url: "https://www.youtube.com/results?search_query=Jaqeen+Talwiinder" },
  { title: "Together", artists: "Talwiinder X Retro Blxxd", year: 2020, url: "https://www.youtube.com/results?search_query=Together+Talwiinder" },
  { title: "Funk Song", artists: "Talwiinder X Kidjaywest X Ikath", year: 2020, url: "https://www.youtube.com/results?search_query=Funk+Song+Talwiinder" },
  { title: "Focus", artists: "Talwiinder X mxdnxght X Hasu", year: 2020, url: "https://www.youtube.com/results?search_query=Focus+Talwiinder" },
  { title: "Paj Na", artists: "Talwiinder X Kidjaywest X Sneh", year: 2020, url: "https://www.youtube.com/results?search_query=Paj+Na+Talwiinder" },
  { title: "No Hezi", artists: "Muzzle X Malo on the Beat X Talwiinder", year: 2020, url: "https://www.youtube.com/results?search_query=No+Hezi+Talwiinder" },
  { title: "Baarish Da Mausam", artists: "Talwiinder", year: 2020, url: "https://www.youtube.com/results?search_query=Baarish+Da+Mausam+Talwiinder" },
  { title: "Tell Me", artists: "Talwiinder X 30KEY!", year: 2020, url: "https://www.youtube.com/results?search_query=Tell+Me+Talwiinder" },
  { title: "Safar", artists: "Kidjaywest X Talwiinder", year: 2020, url: "https://www.youtube.com/results?search_query=Safar+Talwiinder" },
  { title: "Samajh Na Aave", artists: "Talwiinder X Sneh", year: 2020, url: "https://www.youtube.com/results?search_query=Samajh+Na+Aave+Talwiinder" },
  { title: "Kitaab", artists: "Talwiinder X Vision", year: 2020, url: "https://www.youtube.com/results?search_query=Kitaab+Talwiinder" },
  { title: "Kammo Ji", artists: "Talwiinder", year: 2020, url: "https://www.youtube.com/results?search_query=Kammo+Ji+Talwiinder" },
  { title: "Gallan 4", artists: "Talwiinder", year: 2020, url: "https://www.youtube.com/results?search_query=Gallan+4+Talwiinder" },
  { title: "Save Me", artists: "Talwiinder", year: 2020, url: "https://www.youtube.com/results?search_query=Save+Me+Talwiinder" },
  { title: "Gaah", artists: "Talwiinder", year: 2020, url: "https://www.youtube.com/results?search_query=Gaah+Talwiinder" },
  { title: "Dil Te Dimaag", artists: "Talwiinder", year: 2020, url: "https://www.youtube.com/results?search_query=Dil+Te+Dimaag+Talwiinder" },
  { title: "Dil Mera", artists: "Talwiinder", year: 2019, url: "https://www.youtube.com/results?search_query=Dil+Mera+Talwiinder" },
  { title: "Tera Naam", artists: "Talwiinder", year: 2019, url: "https://www.youtube.com/results?search_query=Tera+Naam+Talwiinder" },
  { title: "Injh Na Kar", artists: "Talwiinder", year: 2019, url: "https://www.youtube.com/results?search_query=Injh+Na+Kar+Talwiinder" },
  { title: "Speechless", artists: "Twinbearz X Talwiinder X Push Kahlon", year: 2019, url: "https://www.youtube.com/results?search_query=Speechless+Talwiinder" },
  { title: "Dila", artists: "Talwiinder", year: 2019, url: "https://www.youtube.com/results?search_query=Dila+Talwiinder" },
  { title: "Tere Jeha", artists: "Talwiinder X Push Kahlon", year: 2018, url: "https://www.youtube.com/results?search_query=Tere+Jeha+Talwiinder" },
  { title: "Dilan De Wich", artists: "Talwiinder X Push Kahlon", year: 2018, url: "https://www.youtube.com/results?search_query=Dilan+De+Wich+Talwiinder" },
  { title: "Unforgettable", artists: "Talwiinder", year: 2018, url: "https://www.youtube.com/results?search_query=Unforgettable+Talwiinder" }
];

function showCategory(category) {
  const container = document.getElementById("song-container");
  container.innerHTML = "";

  const filtered = songs.filter(song => {
    if (category === "top") {
      return ["Haseen", "Panchii", "Nakhre", "High On Me", "Tu", "Khoya", "Conversation", "Bach Ke", "Nasha", "Heer"].includes(song.title);
    } else if (category === "collab") {
      return song.artists.toLowerCase().includes(" x ");
    } else if (category === "solo") {
      return !song.artists.toLowerCase().includes(" x ");
    } else if (category === "soloka") {
      // SoloKa = songs that include 'Talwiinder' solo (no 'x') AND contain "Solo" keyword in title or artists (example logic)
      // Since no 'Solo' tag available in data, here we treat all solo songs as SoloKa for demo.
      return !song.artists.toLowerCase().includes(" x ");
    }
    return true; // all
  });

  filtered.forEach(song => {
    const card = document.createElement("div");
    card.className = "song-card";
    card.innerHTML = `
      <div class="song-details">
        <h3><a href="${song.url}" target="_blank" rel="noopener noreferrer">${song.title}</a></h3>
        <p>${song.artists}</p>
        <span>${song.year}</span>
      </div>
    `;
    container.appendChild(card);
  });
}

// Filter button click handler
document.querySelectorAll('.filter-buttons button').forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    document.querySelectorAll('.filter-buttons button').forEach(btn => btn.classList.remove('active'));
    // Add active to clicked button
    button.classList.add('active');
    // Show songs by category
    showCategory(button.getAttribute('data-category'));
  });
});

// Initial load: show top songs
showCategory("all");
