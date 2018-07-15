


exports.city =  function home(req, res) {
    var cityName = req.params.city; // this is where you extract the params from req
    var title, heading;
    var imageCount = 4;
    if (cityName === 'berlin') {
        title = 'Berlin';
        heading = 'Berlin is an organised city';
    }
    else if (cityName === 'paris') {
        title = 'Paris';
        heading = 'Paris is the most artistic city';
    }
    else if (cityName === 'london') {
        title = 'London';
        heading = 'London is an energetic city';
    }
    else if (cityName === 'madrid') {
        title = 'Madrid';
        heading = 'Madrid is an old city';
    }
    else {
        title = 'New York';
        heading = 'New York is the most happening City';
    }
    res.render('city', {
        headline: heading,
        title: title,
        imgCount: imageCount,
        city: cityName
    });
}

exports.home =  function home(req, res) {
    res.render('home', {
    headline: 'Every City has something to say',
        title: 'ejs template'
    });
}