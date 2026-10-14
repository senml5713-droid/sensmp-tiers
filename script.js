// Sample Data ng SEN'SMP Players (Pwede mong dagdagan kahit ilan)
const playersData = [
    {
        ign: "Sen",
        crystal: "HT1",
        sword: "HT2",
        pot: "HT1"
    },
    {
        ign: "Erenn",
        crystal: "HT2",
        sword: "LT1",
        pot: "HT2"
    },
    {
        ign: "Noel",
        crystal: "HT1",
        sword: "HT1",
        pot: "HT1"
    }
];

// Display Players Function
function renderPlayers(data) {
    const grid = document.getElementById('playersGrid');
    grid.innerHTML = '';

    document.getElementById('totalPlayers').innerText = data.length;

    data.forEach(player => {
        const card = document.createElement('div');
        card.className = 'player-card';

        // Minecraft Visage Avatar API
        const avatarUrl = `https://visage.surgeplay.com/bust/128/${player.ign}`;

        card.innerHTML = `
            <img class="skin-avatar" src="${avatarUrl}" alt="${player.ign}" onerror="this.src='https://visage.surgeplay.com/bust/128/MNSkin'">
            <div class="player-ign">${player.ign}</div>
            <div class="tier-badges">
                <div class="badge tier-${player.crystal.toLowerCase()}">
                    <span>💎 Crystal</span>
                    <span>${player.crystal}</span>
                </div>
                <div class="badge tier-${player.sword.toLowerCase()}">
                    <span>⚔️ Sword</span>
                    <span>${player.sword}</span>
                </div>
                <div class="badge tier-${player.pot.toLowerCase()}">
                    <span>🧪 Neth Pot</span>
                    <span>${player.pot}</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Search Filter Function
function filterPlayers() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = playersData.filter(p => p.ign.toLowerCase().includes(query));
    renderPlayers(filtered);
}

// Category Filter Function
function switchCategory(category) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (category === 'all') {
        renderPlayers(playersData);
    } else {
        const filtered = playersData.filter(p => p[category] && p[category] !== 'UNRANKED');
        renderPlayers(filtered);
    }
}

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    renderPlayers(playersData);
});
