
$(document).ready(function() {
    console.log('jquery is ready');

    $('.track-card').on('click', function() {
        let trackTitle = $(this).attr('data-track-title');

        // Send user to specific track landing page here
        console.log('View track: ' + trackTitle);

        window.location = 'tracks.html?title=' + trackTitle;
    });

    // Always check if we are on the tracks.html and have any title param

    checkCurrentPage();
});

// https://stackoverflow.com/questions/18673860/defining-a-html-template-to-append-using-jquery/39065147
function checkCurrentPage() {
    if (window.location.pathname.includes('index.html')) {
        console.log(discography);

        for (key in discography) {
            let trackData = discography[key];
            let template = `
                <div class="track-card col-lg-3" data-track-title="${trackData.url_title}">
                    <picture>
                        <img height="300px"class="rounded img-fluid" src="${trackData.image}"/>
                    </picture>

                    <div class="track-info">
                        <div class="track-title">
                            <span class="font-weight-normal">${trackData.title}</span>
                        </div>
                        <div class="track-year">
                            <p class="font-weight-light">${trackData.year}</p>
                        </div>
                    </div>
                </div>`;

            $(template).appendTo('.tracks');
        }
    }
}

let discography = [
    {
        "title": "I Should Let You Go (feat. Nori)",
        "url_title": "i-should-let-you-go",
        "image": "https://i1.sndcdn.com/artworks-000357320508-clk3zd-t500x500.jpg",
        "album": "This Is All in My Head",
        "release_type": "ep",
        "extra_info": "Track 1 from the 'This is all in my head' EP",
        "year": "2018",
        "date": "June 3",
        "soundcloud_year": "",
        "soundcloud_date": "",
        "download_link": "",
        "stores": [
            {
                "name": "Spotify",
                "url": "",
                "icon": ""
            },
            {
                "name": "Apple Music / iTunes",
                "url": "",
                "icon": ""
            },
            {
                "name": "Bandcamp",
                "url": "",
                "icon": ""
            },
            {
                "name": "SoundCloud",
                "url": "",
                "icon": ""
            },
            {
                "name": "YouTube",
                "url": "",
                "icon": ""
            }
        ],
        "lyrics": "\\u{49}\\u{20}\\u{6b}\\u{6e}\\u{65}\\u{77}\\u{20}\\u{49}\\u{2019}\\u{64}\\u{20}\\u{66}\\u{69}\\u{6e}\\u{64}\\u{20}\\u{79}\\u{6f}\\u{75}\\u{20}\\u{68}\\u{65}\\u{72}\\u{65}\\u{a}\\u{59}\\u{6f}\\u{75}\\u{20}\\u{61}\\u{6c}\\u{77}\\u{61}\\u{79}\\u{73}\\u{20}\\u{6c}\\u{65}\\u{61}\\u{76}\\u{65}\\u{20}\\u{77}\\u{68}\\u{65}\\u{6e}\\u{20}\\u{79}\\u{6f}\\u{75}\\u{20}\\u{63}\\u{61}\\u{6e}\\u{2019}\\u{74}\\u{20}\\u{66}\\u{65}\\u{65}\\u{6c}\\u{a}\\u{59}\\u{6f}\\u{75}\\u{20}\\u{74}\\u{65}\\u{6c}\\u{6c}\\u{20}\\u{6d}\\u{65}\\u{20}\\u{6c}\\u{65}\\u{61}\\u{76}\\u{65}\\u{20}\\u{79}\\u{6f}\\u{75}\\u{20}\\u{61}\\u{6c}\\u{6f}\\u{6e}\\u{65}\\u{a}\\u{42}\\u{75}\\u{74}\\u{20}\\u{49}\\u{20}\\u{63}\\u{61}\\u{6e}\\u{2019}\\u{74}\\u{20}\\u{73}\\u{74}\\u{61}\\u{79}\\u{20}\\u{61}\\u{77}\\u{61}\\u{79}\\u{a} \\n \\u{49}\\u{20}\\u{6b}\\u{6e}\\u{6f}\\u{77}\\u{20}\\u{49}\\u{20}\\u{73}\\u{68}\\u{6f}\\u{75}\\u{6c}\\u{64}\\u{20}\\u{6c}\\u{65}\\u{74}\\u{20}\\u{79}\\u{6f}\\u{75}\\u{20}\\u{67}\\u{6f}\\u{a}\\u{42}\\u{75}\\u{74}\\u{20}\\u{74}\\u{68}\\u{65}\\u{72}\\u{65}\\u{2019}\\u{73}\\u{20}\\u{73}\\u{6f}\\u{6d}\\u{65}\\u{74}\\u{68}\\u{69}\\u{6e}\\u{67}\\u{20}\\u{74}\\u{65}\\u{6c}\\u{6c}\\u{69}\\u{6e}\\u{67}\\u{20}\\u{6d}\\u{65}\\u{20}\\u{6e}\\u{6f}\\u{a}\\u{49}\\u{20}\\u{6b}\\u{6e}\\u{6f}\\u{77}\\u{20}\\u{49}\\u{20}\\u{73}\\u{68}\\u{6f}\\u{75}\\u{6c}\\u{64}\\u{20}\\u{6c}\\u{65}\\u{74}\\u{20}\\u{79}\\u{6f}\\u{75}\\u{20}\\u{62}\\u{65}\\u{a}\\u{42}\\u{75}\\u{74}\\u{20}\\u{49}\\u{20}\\u{6b}\\u{65}\\u{65}\\u{70}\\u{20}\\u{6f}\\u{6e}\\u{20}\\u{74}\\u{68}\\u{69}\\u{6e}\\u{6b}\\u{69}\\u{6e}\\u{67}\\u{20}\\u{6f}\\u{66}\\u{20}\\u{79}\\u{6f}\\u{75}\\u{20}\\u{61}\\u{6e}\\u{64}\\u{20}\\u{6d}\\u{65}\\u{a}\\u{54}\\u{68}\\u{69}\\u{6e}\\u{6b}\\u{69}\\u{6e}\\u{67}\\u{20}\\u{6f}\\u{66}\\u{20}\\u{79}\\u{6f}\\u{75}\\u{20}\\u{61}\\u{6e}\\u{64}\\u{20}\\u{6d}\\u{65}\\u{a}\\u{42}\\u{75}\\u{74}\\u{20}\\u{49}\\u{20}\\u{6b}\\u{65}\\u{65}\\u{70}\\u{20}\\u{6f}\\u{6e}\\u{20}\\u{74}\\u{68}\\u{69}\\u{6e}\\u{6b}\\u{69}\\u{6e}\\u{67}\\u{20}\\u{6f}\\u{66}\\u{20}\\u{79}\\u{6f}\\u{75}\\u{20}\\u{61}\\u{6e}\\u{64}\\u{20}\\u{6d}\\u{65}\\u{a}\\u{54}\\u{68}\\u{69}\\u{6e}\\u{6b}\\u{69}\\u{6e}\\u{67}\\u{20}\\u{6f}\\u{66}\\u{20}\\u{79}\\u{6f}\\u{75}\\u{20}\\u{61}\\u{6e}\\u{64}\\u{20}\\u{6d}\\u{65}\\u{a}\\u{42}\\u{75}\\u{74}\\u{20}\\u{74}\\u{68}\\u{65}\\u{72}\\u{65}\\u{20}\\u{69}\\u{73}\\u{20}\\u{73}\\u{6f}\\u{6d}\\u{65}\\u{74}\\u{68}\\u{69}\\u{6e}\\u{67}\\u{20}\\u{74}\\u{65}\\u{6c}\\u{6c}\\u{69}\\u{6e}\\u{67}\\u{20}\\u{6d}\\u{65}\\u{20}\\u{6e}\\u{6f}\\u{a} \\n \\u{49}\\u{20}\\u{6b}\\u{6e}\\u{65}\\u{77}\\u{20}\\u{49}\\u{2019}\\u{64}\\u{20}\\u{66}\\u{69}\\u{6e}\\u{64}\\u{20}\\u{79}\\u{6f}\\u{75}\\u{20}\\u{68}\\u{65}\\u{72}\\u{65}\\u{a}\\u{59}\\u{6f}\\u{75}\\u{20}\\u{61}\\u{6c}\\u{77}\\u{61}\\u{79}\\u{73}\\u{20}\\u{6c}\\u{65}\\u{61}\\u{76}\\u{65}\\u{20}\\u{77}\\u{68}\\u{65}\\u{6e}\\u{20}\\u{79}\\u{6f}\\u{75}\\u{20}\\u{63}\\u{61}\\u{6e}\\u{2019}\\u{74}\\u{20}\\u{66}\\u{65}\\u{65}\\u{6c}\\u{a}\\u{59}\\u{6f}\\u{75}\\u{20}\\u{74}\\u{65}\\u{6c}\\u{6c}\\u{20}\\u{6d}\\u{65}\\u{20}\\u{6c}\\u{65}\\u{61}\\u{76}\\u{65}\\u{20}\\u{79}\\u{6f}\\u{75}\\u{20}\\u{61}\\u{6c}\\u{6f}\\u{6e}\\u{65}\\u{a}\\u{42}\\u{75}\\u{74}\\u{20}\\u{49}\\u{20}\\u{63}\\u{61}\\u{6e}\\u{2019}\\u{74}\\u{20}\\u{73}\\u{74}\\u{61}\\u{79}\\u{20}\\u{61}\\u{77}\\u{61}\\u{79}\\u{a} \\n \\u{49}\\u{20}\\u{6b}\\u{6e}\\u{6f}\\u{77}\\u{20}\\u{49}\\u{20}\\u{73}\\u{68}\\u{6f}\\u{75}\\u{6c}\\u{64}\\u{20}\\u{6c}\\u{65}\\u{74}\\u{20}\\u{79}\\u{6f}\\u{75}\\u{20}\\u{67}\\u{6f}\\u{a}\\u{42}\\u{75}\\u{74}\\u{20}\\u{74}\\u{68}\\u{65}\\u{72}\\u{65}\\u{2019}\\u{73}\\u{20}\\u{73}\\u{6f}\\u{6d}\\u{65}\\u{74}\\u{68}\\u{69}\\u{6e}\\u{67}\\u{20}\\u{74}\\u{65}\\u{6c}\\u{6c}\\u{69}\\u{6e}\\u{67}\\u{20}\\u{6d}\\u{65}\\u{20}\\u{6e}\\u{6f}\\u{a}\\u{49}\\u{20}\\u{6b}\\u{6e}\\u{6f}\\u{77}\\u{20}\\u{49}\\u{20}\\u{73}\\u{68}\\u{6f}\\u{75}\\u{6c}\\u{64}\\u{20}\\u{6c}\\u{65}\\u{74}\\u{20}\\u{79}\\u{6f}\\u{75}\\u{20}\\u{62}\\u{65}\\u{a}\\u{42}\\u{75}\\u{74}\\u{20}\\u{49}\\u{20}\\u{6b}\\u{65}\\u{65}\\u{70}\\u{20}\\u{6f}\\u{6e}\\u{20}\\u{74}\\u{68}\\u{69}\\u{6e}\\u{6b}\\u{69}\\u{6e}\\u{67}\\u{20}\\u{6f}\\u{66}\\u{20}\\u{79}\\u{6f}\\u{75}\\u{20}\\u{61}\\u{6e}\\u{64}\\u{20}\\u{6d}\\u{65}\\u{a}\\u{54}\\u{68}\\u{69}\\u{6e}\\u{6b}\\u{69}\\u{6e}\\u{67}\\u{20}\\u{6f}\\u{66}\\u{20}\\u{79}\\u{6f}\\u{75}\\u{20}\\u{61}\\u{6e}\\u{64}\\u{20}\\u{6d}\\u{65}\\u{a}\\u{42}\\u{75}\\u{74}\\u{20}\\u{49}\\u{20}\\u{6b}\\u{65}\\u{65}\\u{70}\\u{20}\\u{6f}\\u{6e}\\u{20}\\u{74}\\u{68}\\u{69}\\u{6e}\\u{6b}\\u{69}\\u{6e}\\u{67}\\u{20}\\u{6f}\\u{66}\\u{20}\\u{79}\\u{6f}\\u{75}\\u{20}\\u{61}\\u{6e}\\u{64}\\u{20}\\u{6d}\\u{65}\\u{a}\\u{54}\\u{68}\\u{69}\\u{6e}\\u{6b}\\u{69}\\u{6e}\\u{67}\\u{20}\\u{6f}\\u{66}\\u{20}\\u{79}\\u{6f}\\u{75}\\u{20}\\u{61}\\u{6e}\\u{64}\\u{20}\\u{6d}\\u{65}\\u{a}\\u{42}\\u{75}\\u{74}\\u{20}\\u{74}\\u{68}\\u{65}\\u{72}\\u{65}\\u{20}\\u{69}\\u{73}\\u{20}\\u{73}\\u{6f}\\u{6d}\\u{65}\\u{74}\\u{68}\\u{69}\\u{6e}\\u{67}\\u{20}\\u{74}\\u{65}\\u{6c}\\u{6c}\\u{69}\\u{6e}\\u{67}\\u{20}\\u{6d}\\u{65}\\u{20}\\u{6e}\\u{6f}\\u{a}",
        "lyricist": "Nori"
    },
    {
        "title": "Don't Cry (feat. Nori)",
        "url_title": "dont-cry",
        "image": "https://i1.sndcdn.com/artworks-000357320508-clk3zd-t500x500.jpg",
        "album": "This Is All in My Head",
        "release_type": "ep",
        "extra_info": "Track 2 from the 'This is all in my head' EP",
        "year": "2018",
        "date": "June 3",
        "soundcloud_year": "",
        "soundcloud_date": "",
        "download_link": "",
        "stores": [
            {
                "name": "Spotify",
                "url": "",
                "icon": ""
            },
            {
                "name": "Apple Music / iTunes",
                "url": "",
                "icon": ""
            },
            {
                "name": "Bandcamp",
                "url": "",
                "icon": ""
            },
            {
                "name": "SoundCloud",
                "url": "",
                "icon": ""
            },
            {
                "name": "YouTube",
                "url": "",
                "icon": ""
            }
        ],
        "lyrics": "\\u{54}\\u{68}\\u{69}\\u{73}\\u{20}\\u{69}\\u{73}\\u{20}\\u{74}\\u{68}\\u{65}\\u{20}\\u{66}\\u{69}\\u{72}\\u{73}\\u{74}\\u{20}\\u{74}\\u{69}\\u{6d}\\u{65}\\u{20}\\u{49}\\u{2019}\\u{6d}\\u{20}\\u{77}\\u{61}\\u{6c}\\u{6b}\\u{69}\\u{6e}\\u{67}\\u{20}\\u{61}\\u{77}\\u{61}\\u{79}\\u{a}\\u{46}\\u{72}\\u{6f}\\u{6d}\\u{20}\\u{79}\\u{6f}\\u{75}\\u{a}\\u{42}\\u{75}\\u{74}\\u{20}\\u{74}\\u{68}\\u{69}\\u{73}\\u{20}\\u{69}\\u{73}\\u{20}\\u{74}\\u{68}\\u{65}\\u{20}\\u{74}\\u{68}\\u{69}\\u{72}\\u{64}\\u{20}\\u{74}\\u{69}\\u{6d}\\u{65}\\u{20}\\u{79}\\u{6f}\\u{75}\\u{20}\\u{62}\\u{72}\\u{6f}\\u{6b}\\u{65}\\u{20}\\u{73}\\u{6f}\\u{6d}\\u{65}\\u{74}\\u{68}\\u{69}\\u{6e}\\u{67}\\u{20}\\u{6e}\\u{65}\\u{77}\\u{a}\\u{46}\\u{72}\\u{6f}\\u{6d}\\u{20}\\u{79}\\u{6f}\\u{75}\\u{a} \\n \\u{44}\\u{6f}\\u{6e}\\u{2019}\\u{74}\\u{20}\\u{63}\\u{72}\\u{79}\\u{a}\\u{49}\\u{20}\\u{6b}\\u{65}\\u{65}\\u{70}\\u{20}\\u{74}\\u{65}\\u{6c}\\u{6c}\\u{69}\\u{6e}\\u{67}\\u{20}\\u{6d}\\u{79}\\u{73}\\u{65}\\u{6c}\\u{66}\\u{20}\\u{74}\\u{68}\\u{69}\\u{73}\\u{20}\\u{69}\\u{73}\\u{20}\\u{61}\\u{6c}\\u{6c}\\u{20}\\u{69}\\u{6e}\\u{20}\\u{6d}\\u{79}\\u{20}\\u{68}\\u{65}\\u{61}\\u{64}\\u{a}\\u{44}\\u{6f}\\u{6e}\\u{2019}\\u{74}\\u{20}\\u{63}\\u{72}\\u{79}\\u{a}\\u{49}\\u{20}\\u{6b}\\u{65}\\u{65}\\u{70}\\u{20}\\u{74}\\u{65}\\u{6c}\\u{6c}\\u{69}\\u{6e}\\u{67}\\u{20}\\u{6d}\\u{79}\\u{73}\\u{65}\\u{6c}\\u{66}\\u{20}\\u{79}\\u{6f}\\u{75}\\u{20}\\u{77}\\u{69}\\u{6c}\\u{6c}\\u{20}\\u{77}\\u{61}\\u{6b}\\u{65}\\u{20}\\u{75}\\u{70}\\u{20}\\u{69}\\u{6e}\\u{73}\\u{74}\\u{65}\\u{61}\\u{64}\\u{a}\\u{59}\\u{6f}\\u{75}\\u{20}\\u{77}\\u{69}\\u{6c}\\u{6c}\\u{20}\\u{77}\\u{61}\\u{6b}\\u{65}\\u{20}\\u{75}\\u{70}\\u{20}\\u{69}\\u{6e}\\u{73}\\u{74}\\u{65}\\u{61}\\u{64}\\u{a}\\u{49}\\u{6e}\\u{73}\\u{74}\\u{65}\\u{61}\\u{64}\\u{20}\\u{28}\\u{78}\\u{33}\\u{29}\\u{a} \\n \\u{44}\\u{6f}\\u{6e}\\u{2019}\\u{74}\\u{20}\\u{63}\\u{72}\\u{79}\\u{a}\\u{49}\\u{20}\\u{6b}\\u{65}\\u{65}\\u{70}\\u{20}\\u{74}\\u{65}\\u{6c}\\u{6c}\\u{69}\\u{6e}\\u{67}\\u{20}\\u{6d}\\u{79}\\u{73}\\u{65}\\u{6c}\\u{66}\\u{20}\\u{79}\\u{6f}\\u{75}\\u{20}\\u{77}\\u{69}\\u{6c}\\u{6c}\\u{20}\\u{77}\\u{61}\\u{6b}\\u{65}\\u{20}\\u{75}\\u{70}\\u{20}\\u{69}\\u{6e}\\u{73}\\u{74}\\u{65}\\u{61}\\u{64}\\u{a}\\u{41}\\u{6e}\\u{64}\\u{20}\\u{64}\\u{6f}\\u{6e}\\u{2019}\\u{74}\\u{20}\\u{63}\\u{72}\\u{79}\\u{a}\\u{49}\\u{20}\\u{6b}\\u{65}\\u{65}\\u{70}\\u{20}\\u{74}\\u{65}\\u{6c}\\u{6c}\\u{69}\\u{6e}\\u{67}\\u{20}\\u{6d}\\u{79}\\u{73}\\u{65}\\u{6c}\\u{66}\\u{20}\\u{74}\\u{68}\\u{69}\\u{73}\\u{20}\\u{69}\\u{73}\\u{20}\\u{61}\\u{6c}\\u{6c}\\u{20}\\u{69}\\u{6e}\\u{20}\\u{6d}\\u{79}\\u{20}\\u{68}\\u{65}\\u{61}\\u{64}\\u{a}\\u{44}\\u{6f}\\u{6e}\\u{2019}\\u{74}\\u{20}\\u{63}\\u{72}\\u{79}\\u{a}\\u{49}\\u{20}\\u{6b}\\u{65}\\u{65}\\u{70}\\u{20}\\u{74}\\u{65}\\u{6c}\\u{6c}\\u{69}\\u{6e}\\u{67}\\u{20}\\u{6d}\\u{79}\\u{73}\\u{65}\\u{6c}\\u{66}\\u{20}\\u{79}\\u{6f}\\u{75}\\u{20}\\u{77}\\u{69}\\u{6c}\\u{6c}\\u{20}\\u{77}\\u{61}\\u{6b}\\u{65}\\u{20}\\u{75}\\u{70}\\u{20}\\u{69}\\u{6e}\\u{73}\\u{74}\\u{65}\\u{61}\\u{64}\\u{a}",
        "lyricist": "Nori"
    },
    {
        "title": "Fragile",
        "url_title": "fragile",
        "image": "https://i1.sndcdn.com/artworks-000357320508-clk3zd-t500x500.jpg",
        "album": "This Is All in My Head",
        "release_type": "ep",
        "extra_info": "Track 3 from the 'This is all in my head' EP",
        "year": "2018",
        "date": "June 3",
        "soundcloud_year": "",
        "soundcloud_date": "",
        "download_link": "",
        "stores": [
            {
                "name": "Spotify",
                "url": "",
                "icon": ""
            },
            {
                "name": "Apple Music / iTunes",
                "url": "",
                "icon": ""
            },
            {
                "name": "Bandcamp",
                "url": "",
                "icon": ""
            },
            {
                "name": "SoundCloud",
                "url": "",
                "icon": ""
            },
            {
                "name": "YouTube",
                "url": "",
                "icon": ""
            }
        ],
        "lyrics": "",
        "lyricist": ""
    },
    {
        "title": "Two Places",
        "url_title": "two-places",
        "image": "https://i1.sndcdn.com/artworks-000242466576-6kqr68-t500x500.jpg",
        "album": "",
        "release_type": "single",
        "extra_info": "",
        "year": "2017",
        "date": "September 11",
        "soundcloud_year": "",
        "soundcloud_date": "",
        "download_link": "",
        "stores": [
            {
                "name": "Spotify",
                "url": "",
                "icon": ""
            },
            {
                "name": "Apple Music / iTunes",
                "url": "",
                "icon": ""
            },
            {
                "name": "Bandcamp",
                "url": "",
                "icon": ""
            },
            {
                "name": "SoundCloud",
                "url": "",
                "icon": ""
            },
            {
                "name": "YouTube",
                "url": "",
                "icon": ""
            }
        ],
        "lyrics": "",
        "lyricist": ""
    },
    {
        "title": "Cosmic Storm",
        "url_title": "cosmic-storm",
        "image": "https://i1.sndcdn.com/artworks-000225872918-zioeu2-t500x500.jpg",
        "album": "",
        "release_type": "single",
        "extra_info": "",
        "year": "2017",
        "date": "June 1",
        "soundcloud_year": "",
        "soundcloud_date": "",
        "download_link": "",
        "stores": [
            {
                "name": "Spotify",
                "url": "",
                "icon": ""
            },
            {
                "name": "Apple Music / iTunes",
                "url": "",
                "icon": ""
            },
            {
                "name": "Bandcamp",
                "url": "",
                "icon": ""
            },
            {
                "name": "SoundCloud",
                "url": "",
                "icon": ""
            },
            {
                "name": "YouTube",
                "url": "",
                "icon": ""
            }
        ],
        "lyrics": "",
        "lyricist": ""
    },
    {
        "title": "Realms",
        "url_title": "realms",
        "image": "https://i1.sndcdn.com/artworks-000208524001-tftdgi-t500x500.jpg",
        "album": "",
        "release_type": "single",
        "extra_info": "Collaboration with Hinkik.",
        "year": "2017",
        "date": "February 19",
        "soundcloud_year": "",
        "soundcloud_date": "",
        "download_link": "",
        "stores": [
            {
                "name": "Spotify",
                "url": "",
                "icon": ""
            },
            {
                "name": "Apple Music / iTunes",
                "url": "",
                "icon": ""
            },
            {
                "name": "Bandcamp",
                "url": "",
                "icon": ""
            },
            {
                "name": "SoundCloud",
                "url": "",
                "icon": ""
            },
            {
                "name": "YouTube",
                "url": "",
                "icon": ""
            }
        ],
        "lyrics": "",
        "lyricist": ""
    },
    {
        "title": "In Love (feat. Nori)",
        "url_title": "in-love",
        "image": "https://i1.sndcdn.com/artworks-000190303387-zya2ng-t500x500.jpg",
        "extra_info": "Featuring Nori on vocals",
        "year": "2016",
        "date": "October 16",
        "soundcloud_year": "",
        "soundcloud_date": "",
        "download_link": "",
        "stores": [
            {
                "name": "Spotify",
                "url": "",
                "icon": ""
            },
            {
                "name": "Apple Music / iTunes",
                "url": "",
                "icon": ""
            },
            {
                "name": "Bandcamp",
                "url": "",
                "icon": ""
            },
            {
                "name": "SoundCloud",
                "url": "",
                "icon": ""
            },
            {
                "name": "YouTube",
                "url": "",
                "icon": ""
            }
        ],
        "lyrics": "\\u{49}\\u{20}\\u{63}\\u{6f}\\u{75}\\u{6c}\\u{64}\\u{20}\\u{73}\\u{74}\\u{61}\\u{79}\\u{20}\\u{6c}\\u{69}\\u{6b}\\u{65}\\u{20}\\u{74}\\u{68}\\u{69}\\u{73}\\u{2c}\\u{a}\\u{46}\\u{6f}\\u{72}\\u{65}\\u{76}\\u{65}\\u{72}\\u{20}\\u{66}\\u{6f}\\u{6c}\\u{6c}\\u{6f}\\u{77}\\u{69}\\u{6e}\\u{67}\\u{20}\\u{79}\\u{6f}\\u{75}\\u{a}\\u{4a}\\u{75}\\u{73}\\u{74}\\u{20}\\u{64}\\u{6f}\\u{6e}\\u{2019}\\u{74}\\u{20}\\u{67}\\u{65}\\u{74}\\u{20}\\u{74}\\u{6f}\\u{6f}\\u{20}\\u{66}\\u{61}\\u{72}\\u{a}\\u{61}\\u{6e}\\u{64}\\u{20}\\u{49}\\u{27}\\u{6c}\\u{6c}\\u{20}\\u{62}\\u{65}\\u{20}\\u{72}\\u{69}\\u{67}\\u{68}\\u{74}\\u{20}\\u{77}\\u{68}\\u{65}\\u{72}\\u{65}\\u{20}\\u{79}\\u{6f}\\u{75}\\u{20}\\u{61}\\u{72}\\u{65}\\u{a} \\n \\u{59}\\u{6f}\\u{75}\\u{27}\\u{72}\\u{65}\\u{20}\\u{61}\\u{20}\\u{64}\\u{72}\\u{65}\\u{61}\\u{6d}\\u{20}\\u{74}\\u{68}\\u{61}\\u{74}\\u{20}\\u{49}\\u{20}\\u{63}\\u{6f}\\u{75}\\u{6c}\\u{64}\\u{20}\\u{66}\\u{69}\\u{6e}\\u{61}\\u{6c}\\u{6c}\\u{79}\\u{20}\\u{73}\\u{65}\\u{65}\\u{a}\\u{49}\\u{20}\\u{6a}\\u{75}\\u{73}\\u{74}\\u{20}\\u{77}\\u{61}\\u{6e}\\u{74}\\u{20}\\u{75}\\u{73}\\u{20}\\u{74}\\u{6f}\\u{20}\\u{61}\\u{6c}\\u{77}\\u{61}\\u{79}\\u{73}\\u{20}\\u{62}\\u{65}\\u{2c}\\u{20}\\u{74}\\u{6f}\\u{20}\\u{61}\\u{6c}\\u{77}\\u{61}\\u{79}\\u{73}\\u{20}\\u{62}\\u{65}\\u{a}\\u{49}\\u{6e}\\u{20}\\u{6c}\\u{6f}\\u{76}\\u{65}\\u{2c}\\u{20}\\u{69}\\u{6e}\\u{20}\\u{6c}\\u{6f}\\u{76}\\u{65}\\u{20}\\u{69}\\u{6e}\\u{20}\\u{74}\\u{68}\\u{69}\\u{73}\\u{20}\\u{64}\\u{72}\\u{65}\\u{61}\\u{6d}\\u{a}\\u{49}\\u{6e}\\u{20}\\u{6c}\\u{6f}\\u{76}\\u{65}\\u{2c}\\u{20}\\u{69}\\u{6e}\\u{20}\\u{6c}\\u{6f}\\u{76}\\u{65}\\u{2c}\\u{20}\\u{69}\\u{6e}\\u{20}\\u{6c}\\u{6f}\\u{76}\\u{65}\\u{20}\\u{69}\\u{6e}\\u{20}\\u{74}\\u{68}\\u{69}\\u{73}\\u{20}\\u{64}\\u{72}\\u{65}\\u{61}\\u{6d}\\u{a} \\n \\u{4c}\\u{65}\\u{74}\\u{27}\\u{73}\\u{20}\\u{73}\\u{74}\\u{61}\\u{79}\\u{20}\\u{68}\\u{65}\\u{72}\\u{65}\\u{2c}\\u{20}\\u{6c}\\u{65}\\u{74}\\u{27}\\u{73}\\u{20}\\u{73}\\u{74}\\u{61}\\u{79}\\u{20}\\u{68}\\u{65}\\u{72}\\u{65}\\u{2c}\\u{20}\\u{69}\\u{6e}\\u{20}\\u{6c}\\u{6f}\\u{76}\\u{65}\\u{a}\\u{4c}\\u{65}\\u{74}\\u{27}\\u{73}\\u{20}\\u{73}\\u{74}\\u{61}\\u{79}\\u{20}\\u{68}\\u{65}\\u{72}\\u{65}\\u{2c}\\u{20}\\u{6c}\\u{65}\\u{74}\\u{27}\\u{73}\\u{20}\\u{73}\\u{74}\\u{61}\\u{79}\\u{20}\\u{68}\\u{65}\\u{72}\\u{65}\\u{2c}\\u{20}\\u{69}\\u{6e}\\u{20}\\u{6c}\\u{6f}\\u{76}\\u{65}\\u{a}\\u{49}\\u{6e}\\u{20}\\u{6c}\\u{6f}\\u{76}\\u{65}\\u{2c}\\u{20}\\u{69}\\u{6e}\\u{20}\\u{6c}\\u{6f}\\u{76}\\u{65}\\u{20}\\u{69}\\u{6e}\\u{20}\\u{74}\\u{68}\\u{69}\\u{73}\\u{20}\\u{64}\\u{72}\\u{65}\\u{61}\\u{6d}\\u{a}\\u{49}\\u{6e}\\u{20}\\u{6c}\\u{6f}\\u{76}\\u{65}\\u{2c}\\u{20}\\u{69}\\u{6e}\\u{20}\\u{6c}\\u{6f}\\u{76}\\u{65}\\u{2c}\\u{20}\\u{69}\\u{6e}\\u{20}\\u{6c}\\u{6f}\\u{76}\\u{65}\\u{20}\\u{69}\\u{6e}\\u{20}\\u{74}\\u{68}\\u{69}\\u{73}\\u{20}\\u{64}\\u{72}\\u{65}\\u{61}\\u{6d}\\u{a} \\n \\u{4c}\\u{65}\\u{74}\\u{27}\\u{73}\\u{20}\\u{73}\\u{74}\\u{61}\\u{79}\\u{20}\\u{68}\\u{65}\\u{72}\\u{65}\\u{2c}\\u{20}\\u{6c}\\u{65}\\u{74}\\u{27}\\u{73}\\u{20}\\u{73}\\u{74}\\u{61}\\u{79}\\u{20}\\u{68}\\u{65}\\u{72}\\u{65}\\u{2c}\\u{20}\\u{69}\\u{6e}\\u{20}\\u{6c}\\u{6f}\\u{76}\\u{65}\\u{2e}\\u{2e}\\u{2e}",
        "lyricist": "Nori"
    },
    {
        "title": "Astray (feat. Madi Larson)",
        "url_title": "astray",
        "image": "https://f4.bcbits.com/img/a1132872978_16.jpg",
        "album": "",
        "release_type": "single",
        "extra_info": "Featuring Madi Larson on vocals",
        "year": "2016",
        "date": "August 27",
        "soundcloud_year": "",
        "soundcloud_date": "",
        "download_link": "",
        "stores": [
            {
                "name": "Spotify",
                "url": "",
                "icon": ""
            },
            {
                "name": "Apple Music / iTunes",
                "url": "",
                "icon": ""
            },
            {
                "name": "Bandcamp",
                "url": "",
                "icon": ""
            },
            {
                "name": "SoundCloud",
                "url": "",
                "icon": ""
            },
            {
                "name": "YouTube",
                "url": "",
                "icon": ""
            }
        ],
        "lyrics": "\\u{4c}\\u{6f}\\u{73}\\u{74}\\u{20}\\u{73}\\u{6f}\\u{75}\\u{6c}\\u{73}\\u{20}\\u{68}\\u{61}\\u{76}\\u{65}\\u{20}\\u{66}\\u{6f}\\u{75}\\u{6e}\\u{64}\\u{20}\\u{74}\\u{68}\\u{65}\\u{69}\\u{72}\\u{20}\\u{77}\\u{61}\\u{79}\\u{a}\\u{54}\\u{6f}\\u{20}\\u{70}\\u{6c}\\u{61}\\u{63}\\u{65}\\u{73}\\u{20}\\u{74}\\u{68}\\u{65}\\u{79}\\u{20}\\u{77}\\u{65}\\u{72}\\u{65}\\u{20}\\u{6d}\\u{65}\\u{61}\\u{6e}\\u{74}\\u{20}\\u{74}\\u{6f}\\u{20}\\u{73}\\u{74}\\u{61}\\u{79}\\u{a}\\u{44}\\u{61}\\u{72}\\u{6b}\\u{20}\\u{74}\\u{68}\\u{6f}\\u{75}\\u{67}\\u{68}\\u{74}\\u{73}\\u{20}\\u{63}\\u{61}\\u{6e}\\u{20}\\u{66}\\u{61}\\u{64}\\u{65}\\u{20}\\u{61}\\u{77}\\u{61}\\u{79}\\u{a}\\u{59}\\u{6f}\\u{75}\\u{27}\\u{72}\\u{65}\\u{20}\\u{6c}\\u{6f}\\u{73}\\u{74}\\u{20}\\u{72}\\u{69}\\u{67}\\u{68}\\u{74}\\u{20}\\u{6e}\\u{6f}\\u{77}\\u{2c}\\u{20}\\u{62}\\u{75}\\u{74}\\u{20}\\u{69}\\u{74}\\u{20}\\u{77}\\u{6f}\\u{6e}\\u{27}\\u{74}\\u{20}\\u{62}\\u{65}\\u{20}\\u{74}\\u{68}\\u{65}\\u{20}\\u{73}\\u{61}\\u{6d}\\u{65}\\u{a} \\n \\u{49}\\u{74}\\u{2019}\\u{73}\\u{20}\\u{6f}\\u{6e}\\u{6c}\\u{79}\\u{20}\\u{6a}\\u{75}\\u{73}\\u{74}\\u{20}\\u{66}\\u{6f}\\u{72}\\u{20}\\u{6e}\\u{6f}\\u{77}\\u{a}\\u{57}\\u{65}\\u{27}\\u{6c}\\u{6c}\\u{20}\\u{6d}\\u{61}\\u{6b}\\u{65}\\u{20}\\u{69}\\u{74}\\u{20}\\u{74}\\u{68}\\u{72}\\u{6f}\\u{75}\\u{67}\\u{68}\\u{20}\\u{73}\\u{6f}\\u{6d}\\u{65}\\u{68}\\u{6f}\\u{77}\\u{a}\\u{49}\\u{74}\\u{2019}\\u{73}\\u{20}\\u{6e}\\u{6f}\\u{74}\\u{20}\\u{79}\\u{6f}\\u{75}\\u{72}\\u{20}\\u{66}\\u{61}\\u{75}\\u{6c}\\u{74}\\u{a}\\u{59}\\u{6f}\\u{75}\\u{20}\\u{77}\\u{6f}\\u{6e}\\u{27}\\u{74}\\u{20}\\u{62}\\u{65}\\u{20}\\u{6c}\\u{6f}\\u{73}\\u{74}\\u{20}\\u{66}\\u{6f}\\u{72}\\u{65}\\u{76}\\u{65}\\u{72}\\u{a}\\u{59}\\u{6f}\\u{75}\\u{27}\\u{72}\\u{65}\\u{20}\\u{69}\\u{6e}\\u{20}\\u{74}\\u{68}\\u{65}\\u{20}\\u{64}\\u{61}\\u{72}\\u{6b}\\u{a}\\u{57}\\u{65}\\u{27}\\u{6c}\\u{6c}\\u{20}\\u{6d}\\u{61}\\u{6b}\\u{65}\\u{20}\\u{69}\\u{74}\\u{20}\\u{74}\\u{68}\\u{72}\\u{6f}\\u{75}\\u{67}\\u{68}\\u{20}\\u{74}\\u{6f}\\u{67}\\u{65}\\u{74}\\u{68}\\u{65}\\u{72}\\u{a} \\n \\u{59}\\u{6f}\\u{75}\\u{72}\\u{20}\\u{73}\\u{6f}\\u{75}\\u{6c}\\u{20}\\u{77}\\u{69}\\u{6c}\\u{6c}\\u{20}\\u{66}\\u{69}\\u{6e}\\u{64}\\u{20}\\u{69}\\u{74}\\u{73}\\u{20}\\u{77}\\u{61}\\u{79}\\u{a}\\u{59}\\u{6f}\\u{75}\\u{27}\\u{72}\\u{65}\\u{20}\\u{6e}\\u{6f}\\u{74}\\u{20}\\u{61}\\u{6c}\\u{6f}\\u{6e}\\u{65}\\u{2c}\\u{20}\\u{49}\\u{27}\\u{6d}\\u{20}\\u{68}\\u{65}\\u{72}\\u{65}\\u{20}\\u{74}\\u{6f}\\u{20}\\u{73}\\u{74}\\u{61}\\u{79}\\u{a}\\u{4f}\\u{68}\\u{2c}\\u{20}\\u{49}\\u{20}\\u{77}\\u{69}\\u{73}\\u{68}\\u{20}\\u{49}\\u{20}\\u{68}\\u{61}\\u{64}\\u{20}\\u{74}\\u{68}\\u{65}\\u{20}\\u{63}\\u{68}\\u{61}\\u{6e}\\u{63}\\u{65}\\u{2c}\\u{a}\\u{54}\\u{6f}\\u{20}\\u{6d}\\u{61}\\u{6b}\\u{65}\\u{20}\\u{69}\\u{74}\\u{20}\\u{72}\\u{69}\\u{67}\\u{68}\\u{74}\\u{20}\\u{61}\\u{6e}\\u{64}\\u{20}\\u{73}\\u{61}\\u{76}\\u{65}\\u{20}\\u{79}\\u{6f}\\u{75}\\u{20}\\u{66}\\u{72}\\u{6f}\\u{6d}\\u{20}\\u{69}\\u{74}\\u{20}\\u{61}\\u{6c}\\u{6c}\\u{a}",
        "lyricist": "Madi Larson"
    },
    {
        "title": "Reminisce",
        "url_title": "reminisce",
        "image": "https://i1.sndcdn.com/artworks-000169723344-w42bf6-t500x500.jpg",
        "album": "reminisce",
        "release_type": "ep",
        "extra_info": "Track 1 from the 'Reminisce' EP",
        "year": "2016",
        "date": "June 28",
        "soundcloud_year": "",
        "soundcloud_date": "",
        "download_link": "",
        "stores": [
            {
                "name": "Spotify",
                "url": "",
                "icon": ""
            },
            {
                "name": "Apple Music / iTunes",
                "url": "",
                "icon": ""
            },
            {
                "name": "Bandcamp",
                "url": "",
                "icon": ""
            },
            {
                "name": "SoundCloud",
                "url": "",
                "icon": ""
            },
            {
                "name": "YouTube",
                "url": "",
                "icon": ""
            }
        ],
        "lyrics": "",
        "lyricist": ""
    },
    {
        "title": "Jorg",
        "url_title": "jorg",
        "image": "https://i1.sndcdn.com/artworks-000169723344-w42bf6-t500x500.jpg",
        "album": "reminisce",
        "release_type": "ep",
        "extra_info": "Track 2 from the 'Reminisce' EP",
        "year": "2016",
        "date": "June 28",
        "soundcloud_year": "",
        "soundcloud_date": "",
        "download_link": "",
        "stores": [
            {
                "name": "Spotify",
                "url": "",
                "icon": ""
            },
            {
                "name": "Apple Music / iTunes",
                "url": "",
                "icon": ""
            },
            {
                "name": "Bandcamp",
                "url": "",
                "icon": ""
            },
            {
                "name": "SoundCloud",
                "url": "",
                "icon": ""
            },
            {
                "name": "YouTube",
                "url": "",
                "icon": ""
            }
        ],
        "lyrics": "",
        "lyricist": ""
    },
    {
        "title": "She closed her eyes in despair",
        "url_title": "she-closed-her-eyes-in-despair",
        "image": "https://i1.sndcdn.com/artworks-000169723344-w42bf6-t500x500.jpg",
        "album": "reminisce",
        "release_type": "ep",
        "extra_info": "Track 3 from the 'Reminisce' EP",
        "year": "2016",
        "date": "June 28",
        "soundcloud_year": "",
        "soundcloud_date": "",
        "download_link": "",
        "stores": [
            {
                "name": "Spotify",
                "url": "",
                "icon": ""
            },
            {
                "name": "Apple Music / iTunes",
                "url": "",
                "icon": ""
            },
            {
                "name": "Bandcamp",
                "url": "",
                "icon": ""
            },
            {
                "name": "SoundCloud",
                "url": "",
                "icon": ""
            },
            {
                "name": "YouTube",
                "url": "",
                "icon": ""
            }
        ],
        "lyrics": "",
        "lyricist": ""
    },
    {
        "title": "Waiting Just on You (feat. Nori)",
        "url_title": "waiting-just-on-you",
        "image": "https://i1.sndcdn.com/artworks-000156791208-kyjnvu-t500x500.jpg",
        "album": "",
        "release_type": "single",
        "extra_info": "Featuring Nori on vocals",
        "year": "2016",
        "date": "March 27",
        "soundcloud_year": "",
        "soundcloud_date": "",
        "download_link": "",
        "stores": [
            {
                "name": "Spotify",
                "url": "",
                "icon": ""
            },
            {
                "name": "Apple Music / iTunes",
                "url": "",
                "icon": ""
            },
            {
                "name": "Bandcamp",
                "url": "",
                "icon": ""
            },
            {
                "name": "SoundCloud",
                "url": "",
                "icon": ""
            },
            {
                "name": "YouTube",
                "url": "",
                "icon": ""
            }
        ],
        "lyrics": "\u{49}\u{20}\u{66}\u{65}\u{65}\u{6c}\u{20}\u{74}\u{68}\u{65}\u{20}\u{61}\u{69}\u{72}\u{20}\u{67}\u{65}\u{74}\u{74}\u{69}\u{6e}\u{67}\u{20}\u{63}\u{6f}\u{6c}\u{64}\u{65}\u{72}\u{a}\u{49}\u{20}\u{6b}\u{6e}\u{6f}\u{77}\u{20}\u{73}\u{6f}\u{6d}\u{65}\u{74}\u{68}\u{69}\u{6e}\u{67}\u{27}\u{73}\u{20}\u{6d}\u{69}\u{73}\u{73}\u{69}\u{6e}\u{67}\u{20}\u{68}\u{65}\u{72}\u{65}\u{a}\u{49}\u{20}\u{6e}\u{65}\u{65}\u{64}\u{20}\u{79}\u{6f}\u{75}\u{72}\u{20}\u{77}\u{61}\u{72}\u{6d}\u{74}\u{68}\u{20}\u{72}\u{69}\u{67}\u{68}\u{74}\u{20}\u{68}\u{65}\u{72}\u{65}\u{a}\u{49}\u{20}\u{6e}\u{65}\u{65}\u{64}\u{20}\u{79}\u{6f}\u{75}\u{20}\u{74}\u{6f}\u{20}\u{6c}\u{69}\u{67}\u{68}\u{74}\u{20}\u{74}\u{68}\u{65}\u{20}\u{66}\u{69}\u{72}\u{65}\u{a} \n \u{43}\u{61}\u{6e}\u{20}\u{79}\u{6f}\u{75}\u{20}\u{72}\u{65}\u{61}\u{63}\u{68}\u{20}\u{6d}\u{65}\u{20}\u{69}\u{6e}\u{20}\u{74}\u{69}\u{6d}\u{65}\u{3f}\u{a}\u{43}\u{61}\u{6e}\u{20}\u{79}\u{6f}\u{75}\u{20}\u{66}\u{69}\u{6e}\u{64}\u{20}\u{6d}\u{65}\u{20}\u{69}\u{6e}\u{20}\u{74}\u{69}\u{6d}\u{65}\u{3f}\u{a}\u{49}\u{27}\u{6d}\u{20}\u{77}\u{61}\u{69}\u{74}\u{69}\u{6e}\u{67}\u{a}\u{49}\u{27}\u{6d}\u{20}\u{77}\u{61}\u{69}\u{74}\u{69}\u{6e}\u{67}\u{20}\u{6a}\u{75}\u{73}\u{74}\u{20}\u{6f}\u{6e}\u{20}\u{79}\u{6f}\u{75}\u{20}\u{6e}\u{6f}\u{77}\u{a}\u{49}\u{27}\u{6d}\u{20}\u{77}\u{61}\u{69}\u{74}\u{69}\u{6e}\u{67}\u{20}\u{6a}\u{75}\u{73}\u{74}\u{20}\u{6f}\u{6e}\u{20}\u{79}\u{6f}\u{75}\u{20}\u{6e}\u{6f}\u{77}\u{a} \n \u{41}\u{72}\u{65}\u{20}\u{79}\u{6f}\u{75}\u{20}\u{67}\u{6f}\u{6e}\u{6e}\u{61}\u{20}\u{66}\u{69}\u{6e}\u{64}\u{20}\u{6d}\u{65}\u{3f}\u{a}\u{41}\u{72}\u{65}\u{20}\u{79}\u{6f}\u{75}\u{20}\u{67}\u{6f}\u{6e}\u{6e}\u{61}\u{20}\u{66}\u{69}\u{6e}\u{64}\u{20}\u{6d}\u{65}\u{3f}\u{a}\u{49}\u{20}\u{6e}\u{65}\u{65}\u{64}\u{20}\u{74}\u{6f}\u{20}\u{6b}\u{6e}\u{6f}\u{77}\u{20}\u{79}\u{6f}\u{75}\u{27}\u{64}\u{20}\u{62}\u{65}\u{20}\u{68}\u{65}\u{72}\u{65}\u{20}\u{69}\u{6e}\u{20}\u{74}\u{69}\u{6d}\u{65}\u{a}\u{49}\u{20}\u{6e}\u{65}\u{65}\u{64}\u{20}\u{74}\u{6f}\u{20}\u{6b}\u{6e}\u{6f}\u{77}\u{20}\u{79}\u{6f}\u{75}\u{27}\u{64}\u{20}\u{62}\u{65}\u{20}\u{68}\u{65}\u{72}\u{65}\u{20}\u{69}\u{6e}\u{20}\u{74}\u{69}\u{6d}\u{65}\u{2e}\u{2e}\u{2e}\u{a}",
        "lyricist": "Nori"
    },
    {
        "title": "Stories",
        "url_title": "stories",
        "image": "https://i1.sndcdn.com/artworks-000138976572-egdnxq-t500x500.jpg",
        "album": "",
        "release_type": "single",
        "extra_info": "",
        "year": "2015",
        "date": "December 6",
        "soundcloud_year": "",
        "soundcloud_date": "",
        "download_link": "",
        "stores": [
            {
                "name": "Spotify",
                "url": "",
                "icon": ""
            },
            {
                "name": "Apple Music / iTunes",
                "url": "",
                "icon": ""
            },
            {
                "name": "Bandcamp",
                "url": "",
                "icon": ""
            },
            {
                "name": "SoundCloud",
                "url": "",
                "icon": ""
            },
            {
                "name": "YouTube",
                "url": "",
                "icon": ""
            }
        ],
        "lyrics": "",
        "lyricist": ""
    },
    {
        "title": "Flourish, Wither, Bye",
        "url_title": "flourish-wither-bye",
        "image": "https://i1.sndcdn.com/artworks-000132366065-vd8yjf-t500x500.jpg",
        "album": "",
        "release_type": "single",
        "extra_info": "",
        "year": "2015",
        "date": "October 20",
        "soundcloud_year": "",
        "soundcloud_date": "",
        "download_link": "",
        "stores": [
            {
                "name": "Spotify",
                "url": "",
                "icon": ""
            },
            {
                "name": "Apple Music / iTunes",
                "url": "",
                "icon": ""
            },
            {
                "name": "Bandcamp",
                "url": "",
                "icon": ""
            },
            {
                "name": "SoundCloud",
                "url": "",
                "icon": ""
            },
            {
                "name": "YouTube",
                "url": "",
                "icon": ""
            }
        ],
        "lyrics": "",
        "lyricist": ""
    },
    {
        "title": "Easier to Fade (feat. Madi Larson)",
        "url_title": "easier-to-fade",
        "image": "https://i1.sndcdn.com/artworks-000128987657-cl095d-t500x500.jpg",
        "album": "",
        "release_type": "single",
        "extra_info": "Featuring Madi Larson on vocals",
        "year": "2015",
        "date": "September 4",
        "soundcloud_year": "",
        "soundcloud_date": "",
        "download_link": "",
        "stores": [
            {
                "name": "Spotify",
                "url": "",
                "icon": ""
            },
            {
                "name": "Apple Music / iTunes",
                "url": "",
                "icon": ""
            },
            {
                "name": "Bandcamp",
                "url": "",
                "icon": ""
            },
            {
                "name": "SoundCloud",
                "url": "",
                "icon": ""
            },
            {
                "name": "YouTube",
                "url": "",
                "icon": ""
            }
        ],
        "lyrics": "\\u{57}\\u{68}\\u{65}\\u{6e}\\u{20}\\u{77}\\u{69}\\u{6c}\\u{6c}\\u{20}\\u{69}\\u{20}\\u{6b}\\u{6e}\\u{6f}\\u{77}\\u{a}\\u{57}\\u{68}\\u{65}\\u{6e}\\u{20}\\u{69}\\u{74}\\u{20}\\u{69}\\u{73}\\u{20}\\u{72}\\u{69}\\u{67}\\u{68}\\u{74}\\u{a} \\n \\u{59}\\u{6f}\\u{75}\\u{27}\\u{72}\\u{65}\\u{20}\\u{61}\\u{6c}\\u{77}\\u{61}\\u{79}\\u{73}\\u{20}\\u{74}\\u{72}\\u{79}\\u{69}\\u{6e}\\u{67}\\u{20}\\u{74}\\u{6f}\\u{20}\\u{66}\\u{6f}\\u{72}\\u{67}\\u{65}\\u{74}\\u{a}\\u{59}\\u{6f}\\u{75}\\u{27}\\u{72}\\u{65}\\u{20}\\u{61}\\u{6c}\\u{77}\\u{61}\\u{79}\\u{73}\\u{20}\\u{77}\\u{61}\\u{6e}\\u{74}\\u{69}\\u{6e}\\u{67}\\u{20}\\u{74}\\u{6f}\\u{20}\\u{70}\\u{72}\\u{65}\\u{74}\\u{65}\\u{6e}\\u{64}\\u{a}\\u{49}\\u{20}\\u{73}\\u{65}\\u{65}\\u{20}\\u{72}\\u{69}\\u{67}\\u{68}\\u{74}\\u{20}\\u{74}\\u{68}\\u{72}\\u{6f}\\u{75}\\u{67}\\u{68}\\u{20}\\u{79}\\u{6f}\\u{75}\\u{72}\\u{20}\\u{73}\\u{65}\\u{6c}\\u{66}\\u{69}\\u{73}\\u{68}\\u{20}\\u{77}\\u{61}\\u{79}\\u{73}\\u{a}\\u{61}\\u{20}\\u{74}\\u{72}\\u{75}\\u{74}\\u{68}\\u{20}\\u{74}\\u{68}\\u{61}\\u{74}\\u{20}\\u{69}\\u{20}\\u{64}\\u{6f}\\u{6e}\\u{27}\\u{74}\\u{20}\\u{77}\\u{61}\\u{6e}\\u{74}\\u{20}\\u{74}\\u{6f}\\u{20}\\u{66}\\u{61}\\u{63}\\u{65}\\u{a} \\n \\u{54}\\u{68}\\u{69}\\u{73}\\u{20}\\u{77}\\u{61}\\u{73}\\u{20}\\u{6e}\\u{65}\\u{76}\\u{65}\\u{72}\\u{20}\\u{77}\\u{68}\\u{61}\\u{74}\\u{20}\\u{69}\\u{20}\\u{68}\\u{61}\\u{64}\\u{20}\\u{69}\\u{6e}\\u{20}\\u{6d}\\u{69}\\u{6e}\\u{64}\\u{a}\\u{49}\\u{20}\\u{6b}\\u{6e}\\u{6f}\\u{77}\\u{20}\\u{6e}\\u{6f}\\u{77}\\u{20}\\u{74}\\u{68}\\u{61}\\u{74}\\u{20}\\u{74}\\u{68}\\u{69}\\u{73}\\u{20}\\u{6a}\\u{75}\\u{73}\\u{74}\\u{20}\\u{69}\\u{73}\\u{6e}\\u{27}\\u{74}\\u{20}\\u{72}\\u{69}\\u{67}\\u{68}\\u{74}\\u{a} \\n \\u{57}\\u{68}\\u{79}\\u{20}\\u{66}\\u{61}\\u{6b}\\u{65}\\u{20}\\u{74}\\u{68}\\u{61}\\u{74}\\u{20}\\u{69}\\u{74}\\u{27}\\u{73}\\u{20}\\u{73}\\u{6f}\\u{20}\\u{72}\\u{69}\\u{67}\\u{68}\\u{74}\\u{20}\\u{62}\\u{75}\\u{74}\\u{20}\\u{69}\\u{74}\\u{27}\\u{73}\\u{20}\\u{65}\\u{61}\\u{73}\\u{69}\\u{65}\\u{72}\\u{20}\\u{74}\\u{6f}\\u{20}\\u{66}\\u{61}\\u{64}\\u{65}\\u{20}\\u{61}\\u{77}\\u{61}\\u{79}\\u{a}\\u{57}\\u{68}\\u{79}\\u{20}\\u{63}\\u{61}\\u{6e}\\u{27}\\u{74}\\u{20}\\u{69}\\u{20}\\u{64}\\u{6f}\\u{20}\\u{74}\\u{68}\\u{69}\\u{73}\\u{20}\\u{72}\\u{69}\\u{67}\\u{68}\\u{74}\\u{2c}\\u{20}\\u{69}\\u{74}\\u{27}\\u{73}\\u{20}\\u{65}\\u{61}\\u{73}\\u{69}\\u{65}\\u{72}\\u{20}\\u{74}\\u{6f}\\u{20}\\u{66}\\u{61}\\u{6b}\\u{65}\\u{20}\\u{62}\\u{75}\\u{74}\\u{20}\\u{68}\\u{61}\\u{72}\\u{64}\\u{65}\\u{72}\\u{20}\\u{74}\\u{6f}\\u{20}\\u{66}\\u{6f}\\u{72}\\u{67}\\u{65}\\u{74}\\u{a}",
        "lyricist": "Madi Larson"
    },
    {
        "title": "Adventures",
        "url_title": "adventures",
        "image": "https://i1.sndcdn.com/artworks-000119586567-hzo7g3-t500x500.jpg",
        "album": "",
        "release_type": "single",
        "extra_info": "Argofox",
        "year": "2015",
        "date": "June 8",
        "soundcloud_year": "",
        "soundcloud_date": "",
        "download_link": "",
        "stores": [
            {
                "name": "Spotify",
                "url": "",
                "icon": ""
            },
            {
                "name": "Apple Music / iTunes",
                "url": "",
                "icon": ""
            },
            {
                "name": "Bandcamp",
                "url": "",
                "icon": ""
            },
            {
                "name": "SoundCloud",
                "url": "",
                "icon": ""
            },
            {
                "name": "YouTube",
                "url": "",
                "icon": ""
            }
        ],
        "lyrics": "",
        "lyricist": ""
    },
    {
        "title": "Lucid Dreams",
        "url_title": "lucid-dreams",
        "image": "https://i1.sndcdn.com/artworks-000136889530-g2j7my-t500x500.jpg",
        "album": "",
        "release_type": "single",
        "extra_info": "",
        "year": "2015",
        "date": "May 10",
        "soundcloud_year": "",
        "soundcloud_date": "",
        "download_link": "",
        "stores": [
            {
                "name": "Spotify",
                "url": "",
                "icon": ""
            },
            {
                "name": "Apple Music / iTunes",
                "url": "",
                "icon": ""
            },
            {
                "name": "Bandcamp",
                "url": "",
                "icon": ""
            },
            {
                "name": "SoundCloud",
                "url": "",
                "icon": ""
            },
            {
                "name": "YouTube",
                "url": "",
                "icon": ""
            }
        ],
        "lyrics": "",
        "lyricist": ""
    },
    {
        "title": "Cease",
        "url_title": "cease",
        "image": "https://i1.sndcdn.com/artworks-000118475173-215a0t-t500x500.jpg",
        "album": "",
        "release_type": "single",
        "extra_info": "",
        "year": "2015",
        "date": "April 19",
        "soundcloud_year": "",
        "soundcloud_date": "",
        "download_link": "",
        "stores": [
            {
                "name": "Spotify",
                "url": "",
                "icon": ""
            },
            {
                "name": "Apple Music / iTunes",
                "url": "",
                "icon": ""
            },
            {
                "name": "Bandcamp",
                "url": "",
                "icon": ""
            },
            {
                "name": "SoundCloud",
                "url": "",
                "icon": ""
            },
            {
                "name": "YouTube",
                "url": "",
                "icon": ""
            }
        ],
        "lyrics": "",
        "lyricist": ""
    },
    {
        "title": "Lost Within",
        "url_title": "lost-within",
        "image": "https://i1.sndcdn.com/artworks-000118475173-215a0t-t500x500.jpg",
        "album": "",
        "release_type": "single",
        "extra_info": "",
        "year": "2014",
        "date": "December 30",
        "soundcloud_year": "",
        "soundcloud_date": "",
        "download_link": "",
        "stores": [
            {
                "name": "Spotify",
                "url": "",
                "icon": ""
            },
            {
                "name": "Apple Music / iTunes",
                "url": "",
                "icon": ""
            },
            {
                "name": "Bandcamp",
                "url": "",
                "icon": ""
            },
            {
                "name": "SoundCloud",
                "url": "",
                "icon": ""
            },
            {
                "name": "YouTube",
                "url": "",
                "icon": ""
            }
        ],
        "lyrics": "",
        "lyricist": ""
    },
    {
        "title": "Icy Vindur",
        "url_title": "icy-vindur",
        "image": "https://i1.sndcdn.com/artworks-000118475173-215a0t-t500x500.jpg",
        "album": "",
        "release_type": "single",
        "extra_info": "",
        "year": "2014",
        "date": "November 2",
        "soundcloud_year": "",
        "soundcloud_date": "",
        "download_link": "",
        "stores": [
            {
                "name": "Spotify",
                "url": "",
                "icon": ""
            },
            {
                "name": "Apple Music / iTunes",
                "url": "",
                "icon": ""
            },
            {
                "name": "Bandcamp",
                "url": "",
                "icon": ""
            },
            {
                "name": "SoundCloud",
                "url": "",
                "icon": ""
            },
            {
                "name": "YouTube",
                "url": "",
                "icon": ""
            }
        ],
        "lyrics": "",
        "lyricist": ""
    },
    {
        "title": "Isolated Mind",
        "url_title": "isolated-mind",
        "image": "https://i1.sndcdn.com/artworks-000118475173-215a0t-t500x500.jpg",
        "album": "",
        "release_type": "single",
        "extra_info": "",
        "year": "2014",
        "date": "October 10",
        "soundcloud_year": "",
        "soundcloud_date": "",
        "download_link": "",
        "stores": [
            {
                "name": "Spotify",
                "url": "",
                "icon": ""
            },
            {
                "name": "Apple Music / iTunes",
                "url": "",
                "icon": ""
            },
            {
                "name": "Bandcamp",
                "url": "",
                "icon": ""
            },
            {
                "name": "SoundCloud",
                "url": "",
                "icon": ""
            },
            {
                "name": "YouTube",
                "url": "",
                "icon": ""
            }
        ],
        "lyrics": "",
        "lyricist": ""
    },
    {
        "title": "Where Silence is Nonexistent",
        "url_title": "where-silence-is-nonexistent",
        "image": "https://f4.bcbits.com/img/a1088171172_16.jpg",
        "album": "",
        "release_type": "single",
        "extra_info": "",
        "year": "2014",
        "date": "September 15",
        "soundcloud_year": "",
        "soundcloud_date": "",
        "download_link": "",
        "stores": [
            {
                "name": "Spotify",
                "url": "",
                "icon": ""
            },
            {
                "name": "Apple Music / iTunes",
                "url": "",
                "icon": ""
            },
            {
                "name": "Bandcamp",
                "url": "",
                "icon": ""
            },
            {
                "name": "SoundCloud",
                "url": "",
                "icon": ""
            },
            {
                "name": "YouTube",
                "url": "",
                "icon": ""
            }
        ],
        "lyrics": "",
        "lyricist": ""
    },
];
