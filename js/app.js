$(document).ready(function() {
    renderContent(); 

    $('.track-card picture').click(function() {
        let trackTitle = $(this).parent().attr('data-track-title');
        window.location = 'track.html?title=' + trackTitle;
    });
});

function renderContent() {
    if (window.location.pathname.includes('index.html') || !window.location.pathname.includes('html')) {
        generateJsonLd();
        renderTracklisting();
    } else if (window.location.pathname.includes('track.html')) {
        let searchParams = new URLSearchParams(window.location.search)
        let trackTitle = searchParams.get('title');

        generateJsonLd(trackTitle);
        renderSpecificTrack(trackTitle);
    }
}

function renderTracklisting() {
    for (key in discography) {
        let trackData = discography[key];

        let trackYearString = trackData.year;

        if (trackData.soundcloud_year.length > 0 && trackData.year !== trackData.soundcloud_year) {
            trackYearString += ` (${trackData.soundcloud_year})`;
        }

        let html = `
            <div class="track-card col-lg-3" data-track-title="${trackData.url_title}">
                <picture>
                    <img 
                        height="300px"
                        class="rounded img-fluid" 
                        src="${trackData.image}"
                    />
                </picture>

                <div class="track-info">
                    <div class="track-title">
                        <span class="font-weight-normal" itemprop="name">${trackData.title}</span>
                    </div>
                    <div class="track-year">
                        <p class="font-weight-light">${trackYearString}</p>
                    </div>
                </div>
            </div>`;

        $(html).appendTo('.tracks');
    }
}

function renderSpecificTrack(trackTitle) {
    let notFound = true;

    for (key in discography) {
        if (discography[key].url_title === trackTitle) {
            const trackData = discography[key];
            document.title = 'A Himitsu - ' + trackData.title + ' (' + trackData.year + ')';

            // meta data
            $('meta[property=og\\:image]').attr('content', trackData.image);
            $('meta[property=og\\:title]').attr('content', 'A Himitsu - ' + trackData.title);
            $('meta[property=og\\:description]').attr('content', 'Listen to A Himitsu - ' + trackData.title + ' - ' + trackData.release_type.toUpperCase() + ' ' + trackData.year);
            $('meta[name=description]').attr('content', 'Links to all streaming platforms and stores for ' + trackData.title);

            renderSpecificTrackHeader(trackData);
            renderSpecificTrackImage(trackData.image);
            renderSpecificTrackInfo(trackData);
            renderSocials();
            renderOtherSongs(trackTitle);

            const stores = trackData.stores;

            const html = `
                <a href="${trackData.download_link}" class="store-button border rounded col-md-12">
                    <span class="lead">Free Download</span>
                    <i class="fas fa-play" style="float: right;"></i>
                </a>`;

            $(html).appendTo('#storeButtons');

            for (key in stores) {
                const store = stores[key];

                if (store.url.length > 0) {
                    const html = `
                        <a href="${store.url}" class="store-button border rounded col-md-12">
                            <span class="lead">${store.name}</span>
                            <i class="fas fa-play" style="float: right;"></i>
                        </a>`;

                    $(html).appendTo('#storeButtons');
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
                <div>
                    <h1 class="mt-5">${trackData.title}</h1>
                </div>
                <p class="lead"A Himitsu</p>
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
            <p><small>${trackData.extra_info}</small></p>
        </div>`;

    if (trackData.title == 'Realms') {
        html = `
        <div>
            <p class="lead">${trackData.title} - ${trackData.release_type.toUpperCase()} (${trackData.year})</p>
        </div>
        <div>
            <p><small>Co-written by A Himitsu, produced and mastered by Hinkik</small></p>
            <p><small>${trackData.extra_info}</small></p>
        </div>`;
    }

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
                <div class="track-card col-md-4" data-track-title="${trackData.url_title}">
                    <picture>
                        <img class="rounded img-fluid" src="${trackData.image}"/>
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

function generateJsonLd(trackTitle = '') {
    let jsonLd = {
        "@context": "https://schema.org",
        "@type": "MusicGroup",
        "name": "A Himitsu"
    };

    let tracks = [];

    for (key in discography) {
        const trackData = discography[key];

        if (trackTitle.length === 0) {
            let url = "https://jonaserixon.github.io/a-himitsu/track.html?title="+trackData.url_title;
            tracks.push({
                "@type": "MusicRecording",
                "name": trackData.title,
                "url": url,
                "producer": {
                    "@type": "Person",
                    "name": "Jonas Erixon"
                },
                "releasedEvent": [
                    {
                        "@type": "PublicationEvent",
                        "startDate": trackData.year + "-" + trackData.date,
                        "location": {
                            "@type": "Country",
                            "name": "Sweden"
                        }
                    }
                ],
                "inAlbum": {
                    "@type": "MusicAlbum",
                    "albumRelease": {
                        "@type": "MusicRelease",
                        "name": trackData.album || trackData.title,
                        "musicReleaseFormat": "https://schema.org/DigitalFormat"
                    },
                },
                "recordingOf": {
                    "@type": "MusicComposition",
                    "name": trackData.title,
                    "lyricist": trackData.lyricist,
                    "lyrics": {
                        "@type": "CreativeWork",
                        "text": trackData.lyrics
                    },
                    "composer": {
                        "@type": "Person",
                        "name": "Jonas Erixon"
                    },
                },
                "image": trackData.image,
                "sameAs": trackData.stores[0].url
            });
        } else {
            if (trackData.url_title === trackTitle) {
                let url = "https://jonaserixon.github.io/a-himitsu/track.html?title="+trackData.url_title;
                tracks.push({
                    "@type": "MusicRecording",
                    "name": trackData.title,
                    "url": url,
                    "producer": {
                        "@type": "Person",
                        "name": "Jonas Erixon"
                    },
                    "releasedEvent": [
                        {
                            "@type": "PublicationEvent",
                            "startDate": trackData.year + "-" + trackData.date,
                            "location": {
                                "@type": "Country",
                                "name": "Sweden"
                            }
                        }
                    ],
                    "inAlbum": {
                        "@type": "MusicAlbum",
                        "albumRelease": {
                            "@type": "MusicRelease",
                            "name": trackData.album || trackData.title,
                            "musicReleaseFormat": "https://schema.org/DigitalFormat"
                        },
                    },
                    "recordingOf": {
                        "@type": "MusicComposition",
                        "name": trackData.title,
                        "lyricist": trackData.lyricist,
                        "lyrics": {
                            "@type": "CreativeWork",
                            "text": trackData.lyrics
                        },
                        "composer": {
                            "@type": "Person",
                            "name": "Jonas Erixon"
                        },
                    },
                    "image": trackData.image,
                    "sameAs": trackData.stores[0].url
                });
            }
        }
    }

    jsonLd.track = tracks;
    createJsonScriptElement(jsonLd);
}

function createJsonScriptElement(jsonLd) {
    var script = document.createElement('script');
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(jsonLd);
    document.getElementsByTagName('head')[0].appendChild(script);
}