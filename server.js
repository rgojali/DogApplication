/*
const express = require("express");
const path = require("path");


/* TESTING OUT FUNCTION #1
    const dogs = [
    "https://www.wdjx.com/wp-content/uploads/2018/10/Animal.Dog_.Golden.Retriever.Puppies.jpg",
    "https://cdn1.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg",
    "https://img.huffingtonpost.com/asset/5b7fdeab1900001d035028dc.jpeg?cache=sixpwrbb1s&ops=1910_1000",
    "https://assets3.thrillist.com/v1/image/2799859/size/tmg-article_default_mobile.jpg",
    "https://s.abcnews.com/images/US/160825_vod_orig_historyofdogs_16x9_992.jpg",
    "https://www.dogster.com/wp-content/uploads/2018/06/Husky-with-two-different-colored-eyes.jpg",
    "https://gfnc1kn6pi-flywheel.netdna-ssl.com/wp-content/uploads/2017/12/snow1.jpg",
    "https://thenypost.files.wordpress.com/2018/06/180604-baby-talk-to-dogs-feature.jpg?quality=90&strip=all&w=618&h=410&crop=1",
    "https://www.restedface.com/wp-content/uploads/2014/11/baby-dogs-photos.jpg"
];

function getRandomDogs() {
    const randomIndex = Math.floor(Math.random() * dogs.length);
    return dogs[randomIndex];
}
*/

/*  TESTING OUT FUNCTION #2
function getRandomDogs() {
    // create a new array and name it myImages
    var myImages = new Array();
    //add images to array
    myImages[1] = "https://www.wdjx.com/wp-content/uploads/2018/10/Animal.Dog_.Golden.Retriever.Puppies.jpg";
    myImages[2] = "https://cdn1.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg";
    myImages[3] = "https://img.huffingtonpost.com/asset/5b7fdeab1900001d035028dc.jpeg?cache=sixpwrbb1s&ops=1910_1000";
    myImages[4] = "https://assets3.thrillist.com/v1/image/2799859/size/tmg-article_default_mobile.jpg";
    myImages[5] = "https://s.abcnews.com/images/US/160825_vod_orig_historyofdogs_16x9_992.jpg";
    myImages[6] = "https://www.dogster.com/wp-content/uploads/2018/06/Husky-with-two-different-colored-eyes.jpg";
    myImages[7] = "https://gfnc1kn6pi-flywheel.netdna-ssl.com/wp-content/uploads/2017/12/snow1.jpg";
    myImages[8] = "https://thenypost.files.wordpress.com/2018/06/180604-baby-talk-to-dogs-feature.jpg?quality=90&strip=all&w=618&h=410&crop=1";
    myImages[9] = "https://www.restedface.com/wp-content/uploads/2014/11/baby-dogs-photos.jpg"

    const randomIndex = Math.floor(Math.random() * myImages.length);
    if (randomIndex == 0) {
        randomIndex = 1;
    }
    document.write("<img src='" + myImages[randomIndex] + "'>")
}

const app = express();

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"))
});

app.get("/imgsofdogs", function(req, res) {
    res
        .json({
            imgsofdogs: getRandomDogs()
        })
        .end();
});



app.use("/public", express.static("./public")) *
    */
app.listen(3000);

console.log("listening on http://localhost:3000");