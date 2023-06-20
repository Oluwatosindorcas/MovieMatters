/*(async ($d3, $genres, $months, $headers) => {
  const rangeOfYears = (start, end) =>
    Array(end - start + 1)
      .fill(start)
      .map((year, index) => year + index);

  const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  };

  const createLoadingAnimation = () => {
    const loadingAnimation = $d3.create('div').attr('class', 'lds-facebook');
    loadingAnimation.append('div');
    loadingAnimation.append('div');
    loadingAnimation.append('div');
    return loadingAnimation;
  };

  const minYear = 1950;
  const maxYear = new Date().getFullYear();

  const mainContainer = $d3
    .select('body')
    .append('div')
    .attr('id', 'mainContainer')
    .attr('class', 'container');

  mainContainer.append('h1').attr('id', 'top').text('New Movie Releases');
   
  const optionsDiv = mainContainer.append('div').attr('id', 'options');
  const yearDiv = optionsDiv.append('div').attr('id', 'year');
  const genreDiv = optionsDiv.append('div').attr('id', 'genre');

  const monthsDiv = mainContainer.append('div').attr('id', 'months');
  const movieDataDiv = mainContainer.append('div').attr('id', 'movieData');

  // create year select list
  yearDiv.append('label').attr('class', 'select-label').text('Select Year:');

  const yearSelect = yearDiv
    .append('select')
    .attr('id', 'yearSelect')
    .on('change', function (event) {
      const currentGenre = document.getElementById('genreSelect').value;
      const currentYear = document.getElementById('yearSelect').value;
      getMovieDataForYear(currentYear, currentGenre);
    });

  yearSelect
    .selectAll('option')
    .data(rangeOfYears(minYear, maxYear).reverse())
    .enter()
    .append('option')
    .text(function (d) {
      return d;
    });

  // create genre select list
  genreDiv.append('label').attr('class', 'select-label').text('Select Genre:');

  const genreSelect = genreDiv
    .append('select')
    .attr('id', 'genreSelect')
    .on('change', function (event) {
      const currentGenre = document.getElementById('genreSelect').value;
      const currentYear = document.getElementById('yearSelect').value;
      getMovieDataForYear(currentYear, currentGenre);
    });

  genreSelect
    .selectAll('option')
    .data($genres)
    .enter()
    .append('option')
    .text(function (d) {
      return d.name;
    })
    .attr('value', function (d) {
      return d.id;
    });

    const getMovieDataForYear = async (year, genre) => {
    // clear
    monthsDiv.html('');
    movieDataDiv.html('');

    // create month links
    monthsDiv
      .selectAll('div')
      .data($months)
      .enter()
      .append('a')
      .attr('class', 'month-name')
      .attr('href', function (d) {
        return `#${d}-${year}`;
      })
      .text(function (d) {
        return d;
      });

    // get data for each month
    await asyncForEach($months, async (month, index) => {
      const movieDataElement = movieDataDiv.append('div');
      try {
        movieDataElement.append(() => createLoadingAnimation().node());
        const API_KEY="d9bc1f9b1b3eb1230504935dbb5d31c6"
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}${
          genre ? `&with_genres=${genre}` : ''
        }&region=US&with_release_type=3|2&primary_release_date.gte=${year}-${(
          '0' +
          (index + 1)
        ).slice(-2)}-01&primary_release_date.lte=${year}-${(
          '0' +
          (index + 1)
        ).slice(-2)}-31`; 
        


        const movieData = await $d3.json(url);

        movieDataElement.selectAll('.lds-facebook').remove();

        const monthDiv = movieDataDiv
          .append('div')
          .attr('id', `${month}-${year}`)
          .attr('class', 'month-container');

        const monthDivHeader = monthDiv
          .append('div')
          .attr('class', 'month-header');

        monthDivHeader
          .append('div')
          .attr('class', 'header-container')
          .append('h4')
          .text(`${month} ${year}`);

        monthDivHeader.append('a').attr('href', '#top').text('top');

        // create data table
        const table = monthDiv
          .append('table')
          .attr('class', 'table')
          .attr('class', 'movie-table');

        const filteredMovieData = movieData.results.map((d) => {
          return $headers.reduce((acc, curr) => {
            acc[curr] = d[curr];
            return acc;
          }, {});
        });

        console.log('filteredMovieData', filteredMovieData);

        // add table headers
        table
          .append('thead')
          .append('tr')
          .selectAll('th')
          .data($headers)
          .enter()
          .append('th')
          .text(function (d) {
            return d === 'genre_ids' ? 'genres' : d.replace('_', ' ');
          })
          .attr('class', 'movie-table-head');

        // add table data
        table
          .append('tbody')
          .selectAll('tr')
          .data(filteredMovieData)
          .enter()
          .append('tr')
          .selectAll('td')
          .data(function (d) {
            return Object.keys(d).map((key) => d[key]);
          })
          .enter()
          .append('td')
          .attr('class', 'movie-table-body')
          .text(function (d, index) {
            return index === $headers.length - 1
              ? d.map((i) => $genres.find((g) => g.id === i).name).join(', ')
              : d;
          });
      } catch (error) {
        console.log('error', error);
        // display error
        movieDataElement.selectAll('.lds-facebook').remove();
        movieDataDiv
          .append('h2')
          .text(`${month}-${year} - Error Retrieving Data`);
      }
    });
  };
  
  
  await getMovieDataForYear(2020, $genres[0].id);
})(d3, genres, months, desiredHeaders);

*/



(async ($d3, $genres, $months, $headers) => {
  const rangeOfYears = (start, end) =>
    Array(end - start + 1)
      .fill(start)
      .map((year, index) => year + index);

  const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  };

  const createLoadingAnimation = () => {
    const loadingAnimation = $d3.create('div').attr('class', 'lds-facebook');
    loadingAnimation.append('div');
    loadingAnimation.append('div');
    loadingAnimation.append('div');
    return loadingAnimation;
  };

  const minYear = 1950;
  const maxYear = new Date().getFullYear();

  const mainContainer = $d3
    .select('body')
    .append('div')
    .attr('id', 'mainContainer')
    .attr('class', 'container');

  mainContainer.append('h1').attr('id', 'top').text('New Movie Releases');

  const optionsDiv = mainContainer.append('div').attr('id', 'options');
  const yearDiv = optionsDiv.append('div').attr('id', 'year');
  const genreDiv = optionsDiv.append('div').attr('id', 'genre');
  const regionDiv = optionsDiv.append('div').attr('id', 'region');

  const monthsDiv = mainContainer.append('div').attr('id', 'months');
  const movieDataDiv = mainContainer.append('div').attr('id', 'movieData');

  // create year select list
  yearDiv.append('label').attr('class', 'select-label').text('Select Year:');

  const yearSelect = yearDiv
    .append('select')
    .attr('id', 'yearSelect')
    .on('change', function (event) {
      const currentGenre = document.getElementById('genreSelect').value;
      const currentYear = document.getElementById('yearSelect').value;
      const currentRegion = document.getElementById('regionSelect').value;
      getMovieDataForYear(currentYear, currentGenre, currentRegion);
    });

  yearSelect
    .selectAll('option')
    .data(rangeOfYears(minYear, maxYear).reverse())
    .enter()
    .append('option')
    .text(function (d) {
      return d;
    });

  // create genre select list
  genreDiv.append('label').attr('class', 'select-label').text('Select Genre:');

  const genreSelect = genreDiv
    .append('select')
    .attr('id', 'genreSelect')
    .on('change', function (event) {
      const currentGenre = document.getElementById('genreSelect').value;
      const currentYear = document.getElementById('yearSelect').value;
      const currentRegion = document.getElementById('regionSelect').value;
      getMovieDataForYear(currentYear, currentGenre, currentRegion);
    });

  genreSelect
    .selectAll('option')
    .data($genres)
    .enter()
    .append('option')
    .text(function (d) {
      return d.name;
    })
    .attr('value', function (d) {
      return d.id;
    });

  // create region select list
  regionDiv.append('label').attr('class', 'select-label').text('Select Region:');

 
  const regionSelect = regionDiv
    .append('select')
    .attr('id', 'regionSelect')
    .on('change', function (event) {
      const currentGenre = document.getElementById('genreSelect').value;
      const currentYear = document.getElementById('yearSelect').value;
      const currentRegion = document.getElementById('regionSelect').value;
      getMovieDataForYear(currentYear, currentGenre, currentRegion);
    });
 const regionData = {
    US: 'United States',
    GB: 'United Kingdom',
    CA: 'Canada',
    AD: "Andorra",
 AE: "United Arab Emirates", 
AG: "Antigua and Barbuda", 
AL: "Albania", 
AO: "Angola", 
AR: "Argentina",
AT: "Austria",
AU: "Australia", 
AZ: "Azerbaijan", 
BA: "Bosnia and Herzegovina",
BB: "Barbados", 
BE: "Belgium", 
BF: "Burkina Faso", 
BG: "Bulgaria", 
BH: "Bahrain",
BM: "Bermuda",
BO: "Bolivia",
BR: "Brazil",
BS: "Bahamas",
BY: "Belarus",
BZ: "Belize",
CA: "Canada",
CD: "Congo",
CH: "Switzerland",
CI: "Cote D'Ivoire",
CL: "Chile",
CM: "Cameroon",
CO: "Colombia",
CR: "Costa Rica",
CU: "Cuba",
CV: "Cape Verde",
CY: "Cyprus",
CZ: "Czech Republic",
DE: "Germany",
DK: "Denmark",
DO: "Dominican Republic",
DZ: "Algeria",
EC: "Ecuador",
EE: "Estonia",
EG: "Egypt",
ES: "Spain",
FI: "Finland",
FJ: "Fiji",
FR: "France",
GB: "United Kingdom",
GF: "French Guiana",
GH: "Ghana",
GI: "Gibraltar",
GP: "Guadeloupe",
GQ: "Equatorial Guinea",   
GR: "Greece",
     
GT: "Guatemala",
GY: "Guyana",
HK: "Hong Kong",
HN: "Honduras",
HR: "Croatia",
HU: "Hungary",
ID: "Indonesia",
IE: "Ireland",
IL: "Israel",
IN: "India",
IQ: "Iraq",
IS: "Iceland",   
IT: "Italy",
JM: "Jamaica",
JO: "Jordan",
JP: "Japan",
KE: "Kenya",
KR: "South Korea",
KW: "Kuwait",
LB: "Lebanon",
LC: "St. Lucia",
LI: "Liechtenstein",
LT: "Lithuania",
LU: "Luxembourg", 
LV: "Latvia",
LY: "Libyan Arab Jamahiriya",
MA: "Morocco",
MC: "Monaco",
MD: "Moldova",
ME: "Montenegro",
MG: "Madagascar",
MK: "Macedonia",
ML: "Mali",
MT: "Malta",
MU: "Mauritius",
MW: "Malawi",
MX: "Mexico",
MY: "Malaysia",
MZ: "Mozambique",
NE: "Niger",
NG: "Nigeria",
NI: "Nicaragua",
NL: "Netherlands",
NO: "Norway",
NZ: "New Zealand",
OM: "Oman",
PA: "Panama",
PE: "Peru",
PF: "French Polynesia",
PG: "Papua New Guinea",
PH: "Philippines",
PK: "Pakistan",
PL: "Poland",
PS: "Palestinian Territory",
PT: "Portugal",
PY: "Paraguay",
QA: "Qatar",
RO: "Romania",
RS: "Serbia",
RU: "Russia",
SA: "Saudi Arabia",
SC: "Seychelles",
SE: "Sweden",
SG: "Singapore",
SI: "Slovenia",
SK: "Slovakia",
SM: "San Marino",
SN: "Senegal",
SV: "El Salvador",
TC: "Turks and Caicos Islands",
TD: "Chad",
TH: "Thailand",
TN: "Tunisia",
TR: "Turkey",
TT: "Trinidad and Tobago",
TW: "Taiwan",
TZ: "Tanzania",
UA: "Ukraine",
UG: "Uganda",
US: "United States of America",
UY: "Uruguay",
VA: "Vatican City ",
VE: "Venezuela",
XK: "Kosovo",
YE: "Yemen",
ZA: "South Africa",
ZM: "Zambia",
ZW: "Zimbabwe",
    

  };

  regionSelect
    .selectAll('option')
    .data(Object.entries(regionData))
    .enter()
    .append('option')
    .text(function (d) {
      return d[1];
    })
    .attr('value', function (d) {
      return d[0];
    });

  const getMovieDataForYear = async (year, genre, region) => {
    // clear
    monthsDiv.html('');
    movieDataDiv.html('');

    // create month links
    monthsDiv
      .selectAll('div')
      .data($months)
      .enter()
      .append('a')
      .attr('class', 'month-name')
      .attr('href', function (d) {
        return `#${d}-${year}`;
      })
      .text(function (d) {
        return d;
      });

    // get data for each month
    await asyncForEach($months, async (month, index) => {
      const movieDataElement = movieDataDiv.append('div');
      try {
        movieDataElement.append(() => createLoadingAnimation().node());
        const API_KEY = "d9bc1f9b1b3eb1230504935dbb5d31c6";
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}${
          genre ? `&with_genres=${genre}` : ''
        }&region=${region}&with_release_type=3|2&primary_release_date.gte=${year}-${(
          '0' +
          (index + 1)
        ).slice(-2)}-01&primary_release_date.lte=${year}-${(
          '0' +
          (index + 1)
        ).slice(-2)}-31`;

        const movieData = await $d3.json(url);

        movieDataElement.selectAll('.lds-facebook').remove();

        const monthDiv = movieDataDiv
          .append('div')
          .attr('id', `${month}-${year}`)
          .attr('class', 'month-container');

        const monthDivHeader = monthDiv
          .append('div')
          .attr('class', 'month-header');

        monthDivHeader
          .append('div')
          .attr('class', 'header-container')
          .append('h4')
          .text(`${month} ${year}`);

        monthDivHeader.append('a').attr('href', '#top').text('top');

        // create data table
        const table = monthDiv
          .append('table')
          .attr('class', 'table')
          .attr('class', 'movie-table');

        const filteredMovieData = movieData.results.map((d) => {
          return $headers.reduce((acc, curr) => {
            acc[curr] = d[curr];
            return acc;
          }, {});
        });

        console.log('filteredMovieData', filteredMovieData);

        // add table headers
        table
          .append('thead')
          .append('tr')
          .selectAll('th')
          .data($headers)
          .enter()
          .append('th')
          .text(function (d) {
            return d === 'genre_ids' ? 'genres' : d.replace('_', ' ');
          })
          .attr('class', 'movie-table-head');

        // add table data
        table
          .append('tbody')
          .selectAll('tr')
          .data(filteredMovieData)
          .enter()
          .append('tr')
          .selectAll('td')
          .data(function (d) {
            return Object.keys(d).map((key) => d[key]);
          })
          .enter()
          .append('td')
          .attr('class', 'movie-table-body')
          .text(function (d, index) {
            return index === $headers.length - 1
              ? d.map((i) => $genres.find((g) => g.id === i).name).join(', ')
              : d;
          });
      } catch (error) {
        console.log('error', error);
        // display error
        movieDataElement.selectAll('.lds-facebook').remove();
        movieDataDiv
          .append('h2')
          .text(`${month}-${year} - Error Retrieving Data`);
      }
    });
  };

  await getMovieDataForYear(2020, $genres[0].id, 'US');
})(d3, genres, months, desiredHeaders);
