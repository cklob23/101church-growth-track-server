export function buildResultHTML({ discResult, giftsResult }) {
  return `
      <body style="font-family: sans-serif; max-width: 700px; margin: auto;">
      <script>
            function shareResults() {
            console.log("Button clicked!");
            var name = $("#nameInput").val();
            var email = $("#emailInput").val();
            if (!name) {
              alert("Please enter your name before sharing.");
              return;
            }
            if (!email) {
              alert("Please enter your email before sharing.");
              return;
            }
            $.ajax({
              type: "POST",
              url: "https://one01church-growth-track-server.onrender.com/send",
              contentType: "application/json",
              data: JSON.stringify({
                name: name,
                email: email,
                html: $("#results"),
              }),
              cache: false,
            }).done(function () {
              alert("Your results have been shared with 101 Church!")
            });
          }

          $("#shareBtn").on("click", function () {
            shareResults();
          });
        </script>
        <div class="row">
            <div class="col-md-3 well">
                    <h4 class="text-muted">Share your results with<br>101 Church</h4>
                    <label style="color:rgb(105, 104, 104);" for="name" required>Name</label>
                    <input class="form-control" id="nameInput" type="name" placeholder="Type your name">
                    <label style="color:rgb(105, 104, 104);" for="email" required>Email</label>
                    <input class="form-control" id="emailInput" type="name" placeholder="Type your email">
                    <button class="btn btn-success btn-sm" id="shareBtn" type="button">
                    <i class="fa fa-share" aria-hidden="true"></i> Share</button>
            </div>
        </div>

        <h2>Your personality type is <strong>'${discResult.code}'</strong></h2>
        <hr>
        <p><b>${discResult.description}</b><br><br></p>
        <p>Summary: ${discResult.summary}</p> ${
    discResult.biblicalExamples && discResult.biblicalExamples.length > 0
      ? `<p>Biblical Examples: ${discResult.biblicalExamples}</p>`
      : ""
  }
        <h4>Ways You Can Better Yourself</h4>
        <p>${discResult.betterYourself}</p>
        <h2>Your spiritual gifts:</h2>
        ${giftsResult
          .map(
            (g) =>
              `<h3>${g.gift}<br>Score: ${g.score}</h3><br><p>${g.description}</p>`
          )
          .join("<hr>")}
    </body>
`;
}
