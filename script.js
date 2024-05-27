// Şampiyonlar verisini JSON formatında tutuyoruz
const championsData = [
    { year: 1959, champion: "Fenerbahçe" },
    { year: 1960, champion: "Beşiktaş" },
    { year: 1961, champion: "Fenerbahçe" },
    { year: 1962, champion: "Galatasaray" },
    { year: 1963, champion: "Galatasaray" },
    { year: 1964, champion: "Fenerbahçe" },
    { year: 1965, champion: "Fenerbahçe" },
    { year: 1966, champion: "Beşiktaş" },
    { year: 1967, champion: "Beşiktaş" },
    { year: 1968, champion: "Fenerbahçe" },
    { year: 1969, champion: "Galatasaray" },
    { year: 1970, champion: "Fenerbahçe" },
    { year: 1971, champion: "Galatasaray" },
    { year: 1972, champion: "Galatasaray" },
    { year: 1973, champion: "Galatasaray" },
    { year: 1974, champion: "Fenerbahçe" },
    { year: 1975, champion: "Fenerbahçe" },
    { year: 1976, champion: "Trabzonspor" },
    { year: 1977, champion: "Trabzonspor" },
    { year: 1978, champion: "Fenerbahçe" },
    { year: 1979, champion: "Trabzonspor" },
    { year: 1980, champion: "Trabzonspor" },
    { year: 1981, champion: "Trabzonspor" },
    { year: 1982, champion: "Beşiktaş" },
    { year: 1983, champion: "Fenerbahçe" },
    { year: 1984, champion: "Trabzonspor" },
    { year: 1985, champion: "Fenerbahçe" },
    { year: 1986, champion: "Beşiktaş" },
    { year: 1987, champion: "Galatasaray" },
    { year: 1988, champion: "Galatasaray" },
    { year: 1989, champion: "Fenerbahçe" },
    { year: 1990, champion: "Beşiktaş" },
    { year: 1991, champion: "Beşiktaş" },
    { year: 1992, champion: "Beşiktaş" },
    { year: 1993, champion: "Galatasaray" },
    { year: 1994, champion: "Galatasaray" },
    { year: 1995, champion: "Beşiktaş" },
    { year: 1996, champion: "Fenerbahçe" },
    { year: 1997, champion: "Galatasaray" },
    { year: 1998, champion: "Galatasaray" },
    { year: 1999, champion: "Galatasaray" },
    { year: 2000, champion: "Galatasaray" },
    { year: 2001, champion: "Fenerbahçe" },
    { year: 2002, champion: "Galatasaray" },
    { year: 2003, champion: "Beşiktaş" },
    { year: 2004, champion: "Fenerbahçe" },
    { year: 2005, champion: "Fenerbahçe" },
    { year: 2006, champion: "Galatasaray" },
    { year: 2007, champion: "Fenerbahçe" },
    { year: 2008, champion: "Galatasaray" },
    { year: 2009, champion: "Beşiktaş" },
    { year: 2010, champion: "Bursaspor" },
    { year: 2011, champion: "Fenerbahçe" },
    { year: 2012, champion: "Galatasaray" },
    { year: 2013, champion: "Galatasaray" },
    { year: 2014, champion: "Fenerbahçe" },
    { year: 2015, champion: "Galatasaray" },
    { year: 2016, champion: "Beşiktaş" },
    { year: 2017, champion: "Beşiktaş" },
    { year: 2018, champion: "Galatasaray" },
    { year: 2019, champion: "Galatasaray" },
    { year: 2020, champion: "Başakşehir" },
    { year: 2021, champion: "Beşiktaş" },
    { year: 2022, champion: "Trabzonspor" },
    { year: 2023, champion: "Galatasaray" },
    { year: 2024, champion: "Galatasaray" }
];

document.getElementById('champion-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const birthYear = parseInt(document.getElementById('birth-year').value);
    const selectedTeam = document.getElementById('team').value;
    const currentYear = new Date().getFullYear();

    const filteredData = championsData.filter(data => data.year >= birthYear);
    const totalYears = currentYear - birthYear + 1;
    const teamChampionships = filteredData.filter(data => data.champion === selectedTeam).length;
    const ratio = (teamChampionships / totalYears).toFixed(2);

    const resultText = `Doğum yılınızdan itibaren ${selectedTeam} takımı ${teamChampionships} kez şampiyon olmuştur. 
    Bu da ${totalYears} yıllık süreçte ${(ratio * 100).toFixed(2)}% oranına denk gelmektedir.`;
    document.getElementById('result').innerText = resultText;
});
