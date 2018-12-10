document
    .querySelector(".btn-request-dog")
    .addEventListener("click", function() {
        fetch("/imgsofdogs")
            .then(function(res) {
                return res.json()
            })
            /* tried to randomize images with this function - only showed one image or none
            .then(function(data) {

                data.json().then(function(something) {

                    document.querySelector(".cell-1").innerHTML = "<img src='" + something.imgsofdogs + "'>";
                })
                console.log(data)

            })*/
            .then(function(getRandomDogs) {
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
                if (randomIndex == 1) {
                    randomIndex == 9;
                }



                document.querySelector(".cell-1").innerHTML = "<img src='" + myImages[randomIndex] + "'>";

                // Commenting out cells to have random images for every cell

                //document.querySelector(".cell-2").innerHTML = "<img src='" + myImages[randomIndex] + "'>";
                document.querySelector(".cell-3").innerHTML = "<img src='" + myImages[randomIndex] + "'>";
                //document.querySelector(".cell-4").innerHTML = "<img src='" + myImages[randomIndex] + "'>";
                document.querySelector(".cell-5").innerHTML = "<img src='" + myImages[randomIndex] + "'>";
                //document.querySelector(".cell-6").innerHTML = "<img src='" + myImages[randomIndex] + "'>";
                document.querySelector(".cell-7").innerHTML = "<img src='" + myImages[randomIndex] + "'>";
                //document.querySelector(".cell-8").innerHTML = "<img src='" + myImages[randomIndex] + "'>";
                document.querySelector(".cell-9").innerHTML = "<img src='" + myImages[randomIndex] + "'>";
                console.log(getRandomDogs);

            })
            .then(function(getRandomDogs) {

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
                if (randomIndex == 2) {
                    randomIndex == 9;
                }

                //Commenting out cells to randomize images for every other cell

                //document.querySelector(".cell-1").innerHTML = "<img src='" + myImages[randomIndex] + "'>";
                document.querySelector(".cell-2").innerHTML = "<img src='" + myImages[randomIndex] + "'>";
                //document.querySelector(".cell-3").innerHTML = "<img src='" + myImages[randomIndex] + "'>";
                document.querySelector(".cell-4").innerHTML = "<img src='" + myImages[randomIndex] + "'>";
                //document.querySelector(".cell-5").innerHTML = "<img src='" + myImages[randomIndex] + "'>";
                document.querySelector(".cell-6").innerHTML = "<img src='" + myImages[randomIndex] + "'>";
                //document.querySelector(".cell-7").innerHTML = "<img src='" + myImages[randomIndex] + "'>";
                document.querySelector(".cell-8").innerHTML = "<img src='" + myImages[randomIndex] + "'>";
                //document.querySelector(".cell-9").innerHTML = "<img src='" + myImages[randomIndex] + "'>";
                console.log(getRandomDogs);

            })
            .catch(function(err) {
                console.error(err);
            });
    });