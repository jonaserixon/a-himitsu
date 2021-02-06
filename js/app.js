
$(document).ready(function() {
    // Always check if we are on the tracks.html and have any title param
    checkCurrentPage(); 

    $('.track-card picture').click(function() {
        let trackTitle = $(this).parent().attr('data-track-title');
        window.location = 'track.html?title=' + trackTitle;
    });

    $('.store-button').click(function() {
        let storeUrl = $(this).attr('data-store-url');
        window.location = storeUrl;
    });
});

// https://stackoverflow.com/questions/18673860/defining-a-html-template-to-append-using-jquery/39065147
function checkCurrentPage() {
    if (window.location.pathname.includes('index.html')) {
        renderTracklisting();
    } else if (window.location.pathname.includes('track.html')) {
        let searchParams = new URLSearchParams(window.location.search)
        let trackTitle = searchParams.get('title');
        
        renderSpecificTrack(trackTitle);
    }
}

function renderTracklisting() {
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

function renderSpecificTrack(trackTitle) {
    let notFound = true;

    for (key in discography) {
        if (discography[key].url_title === trackTitle) {
            const trackData = discography[key];

            document.title = 'A Himitsu - ' + trackData.title + ' (' + trackData.year + ')';

            renderSpecificTrackHeader(trackData);
            renderSpecificTrackImage(trackData.image);
            renderSpecificTrackInfo(trackData);
            renderSocials();
            renderOtherSongs(trackTitle);

            const stores = trackData.stores;

            for (key in stores) {
                const store = stores[key];

                if (store.url.length > 0) {
                    const template = `
                        <div class="store-button border rounded col-md-12" data-store-url="${store.url}">
                            ${store.name}
                            <i class="fas fa-play" style="float: right;"></i>
                        </div>`;

                    $(template).appendTo('#storeButtons');
                }
            }

            notFound = false;
            break;
        }
    }

    if (notFound) {
        alert('404');
    }
}

function renderSpecificTrackHeader(trackData) {
    let html = `
            <div class="col-lg-12 text-center track-details">
                <h1 class="mt-5">${trackData.title}</h1>
                <p class="lead">A Himitsu</p>
            </div>`;

    $(html).appendTo('#trackHeader');
}

function renderSpecificTrackImage(imageUrl) {
    let html = `
        <div class="specificTrackImage col-md-6 text-center">
            <picture class="">
                <img 
                    height="300px"
                    class="rounded" 
                    src="${imageUrl}"
                />
            </picture>
        </div>`;

    $(html).prependTo('#currentTrack');
}

function renderSpecificTrackInfo(trackData) {
    let html = `
        <div>
            <p class="lead">${trackData.title} - ${trackData.release_type.toUpperCase()} (${trackData.year})</p>
        </div>
        <div>
            <p><small>Written, produced and mastered by A Himitsu</small></p>
        </div>`;

    $(html).appendTo('#trackInfo');
}

function renderOtherSongs(trackTitle) {
    const numTracks = 3;
    const otherSongs = [];

    $(`<h3>More music from A Himitsu</h3><br/>`).prependTo('.other-songs');

    while (otherSongs.length < numTracks) {
        const trackIndex = Math.floor(Math.random() * (discography.length - 0)) + 0;

        if (!otherSongs.includes(trackIndex) && discography[trackIndex].url_title !== trackTitle) {
            otherSongs.push(trackIndex);

            const trackData = discography[trackIndex];

            const html = `
                <div class="track-card col-lg-4" data-track-title="${trackData.url_title}">
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
    
            $(html).appendTo('.tracks');
        }
    }
}

function renderSocials() {
    let html = `
        <div class="col-xs-2" style="margin: 10px;"></div>
        <div class="col-xs-2" style="margin: 10px;"></div>

        <a href="https://www.facebook.com/ahimitsu" target="_blank" class="col-xs-2" style="margin: 10px;">
            <img 
                height="30px"
                src="./icons/facebook.png"
            />
        </div>
        <a href="https://twitter.com/ahimitsu1" target="_blank" class="col-xs-2" style="margin: 10px;">
            <img 
                height="30px"
                src="./icons/twitter.png"
            />
        </a>
        <a href="https://www.instagram.com/a_himitsu/" target="_blank" class="col-xs-2" style="margin: 10px;">
            <img 
                height="30px"
                src="./icons/instagram.png"
            />
        </a>
        <a href="https://www.youtube.com/channel/UCgFwu-j5-xNJml2FtTrrB3A" target="_blank" class="col-xs-2" style="margin: 10px;">
            <img 
                height="30px"
                src="./icons/youtube.png"
            />
        </a>`;

    $(html).appendTo('#socialMedia');
}

// To avoid CORS issues, just set the JSON object here
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
                "url": "https://open.spotify.com/track/6TmNyNa1365ROnIiihzDg2?si=2H7fx5PmS4KyjqvUrc4K-Q"
            },
            {
                "name": "Apple Music",
                "url": "https://music.apple.com/us/album/this-is-all-in-my-head-single/1552033003"
            },
            {
                "name": "iTunes",
                "url": "https://itunes.apple.com/us/artist/a-himitsu/971791636"
            },
            {
                "name": "Bandcamp",
                "url": "https://ahimitsu.bandcamp.com/album/this-is-all-in-my-head"
            },
            {
                "name": "SoundCloud",
                "url": "https://soundcloud.com/a-himitsu/i-should-let-you-go-feat-nori"
            },
            {
                "name": "YouTube",
                "url": "https://www.youtube.com/watch?v=Xzq3z9tFkbk"
            },
            {
                "name": "Amazon",
                "url": "https://www.amazon.com/Should-Let-You-feat-Nori/dp/B08VWTY45S"
            },
            {
                "name": "Deezer",
                "url": "https://www.deezer.com/en/album/205211162"
            },
            {
                "name": "Tidal",
                "url": "https://tidal.com/browse/track/172405612"
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
                "url": "https://open.spotify.com/track/2NNLBTH7zU4TrRXtjUPpZg?si=adwooROESzGOKZGBcfy1aw"
            },
            {
                "name": "Apple Music",
                "url": "https://music.apple.com/us/album/this-is-all-in-my-head-single/1552033003"
            },
            {
                "name": "iTunes",
                "url": "https://itunes.apple.com/us/artist/a-himitsu/971791636"
            },
            {
                "name": "Bandcamp",
                "url": "https://ahimitsu.bandcamp.com/album/this-is-all-in-my-head"
            },
            {
                "name": "SoundCloud",
                "url": "https://soundcloud.com/a-himitsu/dont-cry-feat-nori"
            },
            {
                "name": "YouTube",
                "url": "https://www.youtube.com/watch?v=KCwA65MuVko"
            },
            {
                "name": "Amazon",
                "url": "https://www.amazon.com/dp/B08VWGLHSZ"
            },
            {
                "name": "Deezer",
                "url": "https://www.deezer.com/en/album/205211162"
            },
            {
                "name": "Tidal",
                "url": "https://tidal.com/browse/track/172405613"
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
                "url": "https://open.spotify.com/track/7h1vBmAZW8N5oZB1DwkJ2n?si=Vp1jQpllQAGEnS4HvQkRPA"
            },
            {
                "name": "Apple Music",
                "url": "https://music.apple.com/us/album/this-is-all-in-my-head-single/1552033003"
            },
            {
                "name": "iTunes",
                "url": "https://itunes.apple.com/us/artist/a-himitsu/971791636"
            },
            {
                "name": "Bandcamp",
                "url": "https://ahimitsu.bandcamp.com/album/this-is-all-in-my-head"
            },
            {
                "name": "SoundCloud",
                "url": "https://soundcloud.com/a-himitsu/fragile"
            },
            {
                "name": "YouTube",
                "url": "https://www.youtube.com/watch?v=CHJJRdrFw5s"
            },
            {
                "name": "Amazon",
                "url": "https://www.amazon.com/dp/B08VWNDKCM"
            },
            {
                "name": "Deezer",
                "url": "https://www.deezer.com/en/album/205211162"
            },
            {
                "name": "Tidal",
                "url": "https://tidal.com/browse/track/172405614"
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
                "url": "https://open.spotify.com/track/1d7I0glyl5A5l3mQjvEgEq?si=ragHLauHQz2LJjN-9IiY7Q"
            },
            {
                "name": "Apple Music",
                "url": "https://music.apple.com/us/album/two-places-single/1552033085"
            },
            {
                "name": "iTunes",
                "url": "https://itunes.apple.com/us/artist/a-himitsu/971791636"
            },
            {
                "name": "Bandcamp",
                "url": "https://ahimitsu.bandcamp.com/track/two-places"
            },
            {
                "name": "SoundCloud",
                "url": "https://soundcloud.com/a-himitsu/two-places"
            },
            {
                "name": "YouTube",
                "url": "https://www.youtube.com/watch?v=lK6QXbYKzhA"
            },
            {
                "name": "Amazon",
                "url": "https://www.amazon.com/Two-Places/dp/B08VW92B78"
            },
            {
                "name": "Deezer",
                "url": "https://www.deezer.com/en/album/205211052"
            },
            {
                "name": "Tidal",
                "url": "https://tidal.com/browse/track/172405624"
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
                "url": "https://open.spotify.com/track/3Wl4RPEJZgGR46NGW77cLQ?si=YkkY8PQsRYKucIv07XmhPw"
            },
            {
                "name": "Apple Music",
                "url": "https://music.apple.com/us/album/cosmic-storm-single/1552031555"
            },
            {
                "name": "iTunes",
                "url": "https://itunes.apple.com/us/artist/a-himitsu/971791636"
            },
            {
                "name": "Bandcamp",
                "url": "https://ahimitsu.bandcamp.com/track/cosmic-storm"
            },
            {
                "name": "SoundCloud",
                "url": "https://soundcloud.com/a-himitsu/cosmic-storm"
            },
            {
                "name": "YouTube",
                "url": "https://www.youtube.com/watch?v=C8fkSFIf3hY"
            },
            {
                "name": "Amazon",
                "url": "https://www.amazon.com/Cosmic-Storm/dp/B08VRXRP5H"
            },
            {
                "name": "Deezer",
                "url": "https://www.deezer.com/en/album/204872352"
            },
            {
                "name": "Tidal",
                "url": "https://tidal.com/browse/album/172239691"
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
                "url": "https://open.spotify.com/track/5JBGN8R0mRAzmvDKFNkVmY?si=9J7ArssTSmS5fTnxohNciQ"
            },
            {
                "name": "Apple Music",
                "url": "https://music.apple.com/us/album/realms-single/1207587842"
            },
            {
                "name": "iTunes",
                "url": "https://itunes.apple.com/us/artist/a-himitsu/971791636"
            },
            {
                "name": "Bandcamp",
                "url": "https://ahimitsu.bandcamp.com/track/realms"
            },
            {
                "name": "SoundCloud",
                "url": "https://soundcloud.com/a-himitsu/hinkik-a-himitsu-realms"
            },
            {
                "name": "YouTube",
                "url": "https://www.youtube.com/watch?v=Nv5YxKqQ65A"
            },
            {
                "name": "Amazon",
                "url": "https://www.amazon.com/Realms-Hinkik-Himitsu/dp/B06X1DL42T"
            },
            {
                "name": "Deezer",
                "url": "https://www.deezer.com/en/album/15409439"
            },
            {
                "name": "Tidal",
                "url": "https://tidal.com/browse/album/70644267"
            }
        ],
        "lyrics": "",
        "lyricist": ""
    },
    {
        "title": "In Love (feat. Nori)",
        "url_title": "in-love",
        "image": "https://i1.sndcdn.com/artworks-000190303387-zya2ng-t500x500.jpg",
        "release_type": "single",
        "extra_info": "Featuring Nori on vocals",
        "year": "2016",
        "date": "October 16",
        "soundcloud_year": "",
        "soundcloud_date": "",
        "download_link": "",
        "stores": [
            {
                "name": "Spotify",
                "url": ""
            },
            {
                "name": "Apple Music",
                "url": ""
            },
            {
                "name": "iTunes",
                "url": "https://itunes.apple.com/us/artist/a-himitsu/971791636"
            },
            {
                "name": "Bandcamp",
                "url": ""
            },
            {
                "name": "SoundCloud",
                "url": "https://soundcloud.com/a-himitsu/two-places"
            },
            {
                "name": "YouTube",
                "url": ""
            },
            {
                "name": "Amazon",
                "url": ""
            },
            {
                "name": "Deezer",
                "url": ""
            },
            {
                "name": "Tidal",
                "url": ""
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
                "url": ""
            },
            {
                "name": "Apple Music",
                "url": ""
            },
            {
                "name": "iTunes",
                "url": "https://itunes.apple.com/us/artist/a-himitsu/971791636"
            },
            {
                "name": "Bandcamp",
                "url": ""
            },
            {
                "name": "SoundCloud",
                "url": "https://soundcloud.com/a-himitsu/two-places"
            },
            {
                "name": "YouTube",
                "url": ""
            },
            {
                "name": "Amazon",
                "url": ""
            },
            {
                "name": "Deezer",
                "url": ""
            },
            {
                "name": "Tidal",
                "url": ""
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
                "url": ""
            },
            {
                "name": "Apple Music",
                "url": ""
            },
            {
                "name": "iTunes",
                "url": "https://itunes.apple.com/us/artist/a-himitsu/971791636"
            },
            {
                "name": "Bandcamp",
                "url": ""
            },
            {
                "name": "SoundCloud",
                "url": "https://soundcloud.com/a-himitsu/two-places"
            },
            {
                "name": "YouTube",
                "url": ""
            },
            {
                "name": "Amazon",
                "url": ""
            },
            {
                "name": "Deezer",
                "url": ""
            },
            {
                "name": "Tidal",
                "url": ""
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
                "url": ""
            },
            {
                "name": "Apple Music",
                "url": ""
            },
            {
                "name": "iTunes",
                "url": "https://itunes.apple.com/us/artist/a-himitsu/971791636"
            },
            {
                "name": "Bandcamp",
                "url": ""
            },
            {
                "name": "SoundCloud",
                "url": "https://soundcloud.com/a-himitsu/two-places"
            },
            {
                "name": "YouTube",
                "url": ""
            },
            {
                "name": "Amazon",
                "url": ""
            },
            {
                "name": "Deezer",
                "url": ""
            },
            {
                "name": "Tidal",
                "url": ""
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
                "url": ""
            },
            {
                "name": "Apple Music",
                "url": ""
            },
            {
                "name": "iTunes",
                "url": "https://itunes.apple.com/us/artist/a-himitsu/971791636"
            },
            {
                "name": "Bandcamp",
                "url": ""
            },
            {
                "name": "SoundCloud",
                "url": "https://soundcloud.com/a-himitsu/two-places"
            },
            {
                "name": "YouTube",
                "url": ""
            },
            {
                "name": "Amazon",
                "url": ""
            },
            {
                "name": "Deezer",
                "url": ""
            },
            {
                "name": "Tidal",
                "url": ""
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
                "url": ""
            },
            {
                "name": "Apple Music",
                "url": ""
            },
            {
                "name": "iTunes",
                "url": "https://itunes.apple.com/us/artist/a-himitsu/971791636"
            },
            {
                "name": "Bandcamp",
                "url": ""
            },
            {
                "name": "SoundCloud",
                "url": "https://soundcloud.com/a-himitsu/two-places"
            },
            {
                "name": "YouTube",
                "url": ""
            },
            {
                "name": "Amazon",
                "url": ""
            },
            {
                "name": "Deezer",
                "url": ""
            },
            {
                "name": "Tidal",
                "url": ""
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
                "url": ""
            },
            {
                "name": "Apple Music",
                "url": ""
            },
            {
                "name": "iTunes",
                "url": "https://itunes.apple.com/us/artist/a-himitsu/971791636"
            },
            {
                "name": "Bandcamp",
                "url": ""
            },
            {
                "name": "SoundCloud",
                "url": "https://soundcloud.com/a-himitsu/two-places"
            },
            {
                "name": "YouTube",
                "url": ""
            },
            {
                "name": "Amazon",
                "url": ""
            },
            {
                "name": "Deezer",
                "url": ""
            },
            {
                "name": "Tidal",
                "url": ""
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
                "url": ""
            },
            {
                "name": "Apple Music",
                "url": ""
            },
            {
                "name": "iTunes",
                "url": "https://itunes.apple.com/us/artist/a-himitsu/971791636"
            },
            {
                "name": "Bandcamp",
                "url": ""
            },
            {
                "name": "SoundCloud",
                "url": "https://soundcloud.com/a-himitsu/two-places"
            },
            {
                "name": "YouTube",
                "url": ""
            },
            {
                "name": "Amazon",
                "url": ""
            },
            {
                "name": "Deezer",
                "url": ""
            },
            {
                "name": "Tidal",
                "url": ""
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
                "url": ""
            },
            {
                "name": "Apple Music",
                "url": ""
            },
            {
                "name": "iTunes",
                "url": "https://itunes.apple.com/us/artist/a-himitsu/971791636"
            },
            {
                "name": "Bandcamp",
                "url": ""
            },
            {
                "name": "SoundCloud",
                "url": "https://soundcloud.com/a-himitsu/two-places"
            },
            {
                "name": "YouTube",
                "url": ""
            },
            {
                "name": "Amazon",
                "url": ""
            },
            {
                "name": "Deezer",
                "url": ""
            },
            {
                "name": "Tidal",
                "url": ""
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
                "url": ""
            },
            {
                "name": "Apple Music",
                "url": ""
            },
            {
                "name": "iTunes",
                "url": "https://itunes.apple.com/us/artist/a-himitsu/971791636"
            },
            {
                "name": "Bandcamp",
                "url": ""
            },
            {
                "name": "SoundCloud",
                "url": "https://soundcloud.com/a-himitsu/two-places"
            },
            {
                "name": "YouTube",
                "url": ""
            },
            {
                "name": "Amazon",
                "url": ""
            },
            {
                "name": "Deezer",
                "url": ""
            },
            {
                "name": "Tidal",
                "url": ""
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
                "url": ""
            },
            {
                "name": "Apple Music",
                "url": ""
            },
            {
                "name": "iTunes",
                "url": "https://itunes.apple.com/us/artist/a-himitsu/971791636"
            },
            {
                "name": "Bandcamp",
                "url": ""
            },
            {
                "name": "SoundCloud",
                "url": "https://soundcloud.com/a-himitsu/two-places"
            },
            {
                "name": "YouTube",
                "url": ""
            },
            {
                "name": "Amazon",
                "url": ""
            },
            {
                "name": "Deezer",
                "url": ""
            },
            {
                "name": "Tidal",
                "url": ""
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
                "url": ""
            },
            {
                "name": "Apple Music",
                "url": ""
            },
            {
                "name": "iTunes",
                "url": "https://itunes.apple.com/us/artist/a-himitsu/971791636"
            },
            {
                "name": "Bandcamp",
                "url": ""
            },
            {
                "name": "SoundCloud",
                "url": "https://soundcloud.com/a-himitsu/two-places"
            },
            {
                "name": "YouTube",
                "url": ""
            },
            {
                "name": "Amazon",
                "url": ""
            },
            {
                "name": "Deezer",
                "url": ""
            },
            {
                "name": "Tidal",
                "url": ""
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
                "url": ""
            },
            {
                "name": "Apple Music",
                "url": ""
            },
            {
                "name": "iTunes",
                "url": "https://itunes.apple.com/us/artist/a-himitsu/971791636"
            },
            {
                "name": "Bandcamp",
                "url": ""
            },
            {
                "name": "SoundCloud",
                "url": "https://soundcloud.com/a-himitsu/two-places"
            },
            {
                "name": "YouTube",
                "url": ""
            },
            {
                "name": "Amazon",
                "url": ""
            },
            {
                "name": "Deezer",
                "url": ""
            },
            {
                "name": "Tidal",
                "url": ""
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
                "url": ""
            },
            {
                "name": "Apple Music",
                "url": ""
            },
            {
                "name": "iTunes",
                "url": "https://itunes.apple.com/us/artist/a-himitsu/971791636"
            },
            {
                "name": "Bandcamp",
                "url": ""
            },
            {
                "name": "SoundCloud",
                "url": "https://soundcloud.com/a-himitsu/two-places"
            },
            {
                "name": "YouTube",
                "url": ""
            },
            {
                "name": "Amazon",
                "url": ""
            },
            {
                "name": "Deezer",
                "url": ""
            },
            {
                "name": "Tidal",
                "url": ""
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
                "url": ""
            },
            {
                "name": "Apple Music",
                "url": ""
            },
            {
                "name": "iTunes",
                "url": "https://itunes.apple.com/us/artist/a-himitsu/971791636"
            },
            {
                "name": "Bandcamp",
                "url": ""
            },
            {
                "name": "SoundCloud",
                "url": "https://soundcloud.com/a-himitsu/two-places"
            },
            {
                "name": "YouTube",
                "url": ""
            },
            {
                "name": "Amazon",
                "url": ""
            },
            {
                "name": "Deezer",
                "url": ""
            },
            {
                "name": "Tidal",
                "url": ""
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
                "url": ""
            },
            {
                "name": "Apple Music",
                "url": ""
            },
            {
                "name": "iTunes",
                "url": "https://itunes.apple.com/us/artist/a-himitsu/971791636"
            },
            {
                "name": "Bandcamp",
                "url": ""
            },
            {
                "name": "SoundCloud",
                "url": "https://soundcloud.com/a-himitsu/two-places"
            },
            {
                "name": "YouTube",
                "url": ""
            },
            {
                "name": "Amazon",
                "url": ""
            },
            {
                "name": "Deezer",
                "url": ""
            },
            {
                "name": "Tidal",
                "url": ""
            }
        ],
        "lyrics": "",
        "lyricist": ""
    },
];
