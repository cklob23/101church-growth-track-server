export function buildResultHTML({ discResult, giftsResult }) {
  //     %0A%0ABetter Yourself Tips: ${
  //     discResult.betterYourself
  //   }
  return `
<html>
    <head><title>Your Results</title></head>
    <script type="text/javascript">
        document.getElementById('shareBtn').addEventListener('click', () => {
            const name = document.getElementById('nameInput').value;
            if (!name) {
                alert("Please enter your name before sharing.")
                return;
            }
            // Pre-fill the "To" field with their email (or someone else’s)
            const mailtoLink = \`mailto:101churchgs@gmail.com?subject=My DISC and Spiritual Gifts Results&body=Hi 101 Church,%0A%0AHere are my results from the 101 Church DISC and Spiritual Gifts assessment:%0A%0AMy Personality Type: ${
              discResult.code
            }%20(${discResult.breakdown[0].type}/${
    discResult.breakdown[1].type
  })%0A%0ASummary: ${
    discResult.summary
  }%0A%0AMy Spiritual Gifts:%0A${giftsResult
    .map((g) => `- ${g.gift}: ${g.description}`)
    .join("%0A%0A")}%0A%0AThank you,%0A%0A\${name}\`
            window.location.href = mailtoLink;
        });
    </script>
    <body style="font-family: sans-serif; max-width: 700px; margin: auto;">
        <div class="row">
            <div class="col-md-3 well">
                    <h4 class="text-muted">Share your results with<br>101 Church</h4>
                    <label style="color:rgb(105, 104, 104);" for="name" required>Name</label>
                    <input class="form-control" id="nameInput" type="name" placeholder="Type your name">
                    <button class="btn btn-success btn-sm" id="shareBtn" type="button">
                    <i class="fa fa-share" aria-hidden="true"></i> Share</button>
            </div>
        </div>

        <h2>Your personality type is <strong>'${discResult.code}'</strong></h2>
        <hr>
        <p><b>${discResult.description}</b><br><br></p>
        <p>${discResult.summary}.</p> ${
    discResult.biblicalExamples && discResult.biblicalExamples.length > 0
      ? `<p>Biblical Examples: ${discResult.biblicalExamples}</p>`
      : ""
  }
        <h4>Ways You Can Better Yourself</h4>
        <p>${discResult.betterYourself}</p>
        <h2>Your spiritual gifts:</h2>
        ${giftsResult
          .map((g) => `<h3>${g.gift}</h3><p>${g.description}</p>`)
          .join("<hr>")}
    </body>
</html>
`;
}
