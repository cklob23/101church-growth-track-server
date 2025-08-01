export function buildResultHTML({ discResult, giftsResult }) {
  return `
<html>
    <head><title>Your Results</title></head>
    <script type="text/javascript">
        document.getElementById('shareBtn').addEventListener('click', () => {
            const name = document.getElementById('nameInput').value;
            const email = document.getElementById('emailInput').value;
            if (!name) {
                alert("Please enter your name before sharing.")
                return;
            }
            if (!email) {
              alert("Please enter your email before sharing.")
              return;
            }
            const html = \`
                <p>Hi 101 Church,</p>
                <br/>
                <h2>Here are my results from the 101 Church DISC and Spiritual Gifts assessment:</h2>
                <br/>
                <p><strong>Personality Type:</strong> ${discResult.code} - ${
    discResult.breakdown[0].type
  }</p>
                <p>${discResult.summary}</p>
                <h3>Spiritual Gifts:</h3>
                <ul>
                  ${giftsResult
                    .map(
                      (g) =>
                        `<li>${g.gift} (${g.score}) - ${g.description}</li>`
                    )
                    .join("")}
                </ul>
                <p>Shared by: ${name}</p>
            \`;

              fetch('/send', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, html })
              })
              .then(res => res.json())
              .then(data => {
                if (data.success) {
                  alert('You've shared your results with 101 Church!');
                } else {
                  alert('Error sending email: ' + data.error);
                }
              })
              .catch(err => {
                console.error('Fetch error:', err);
                alert('An error occurred while sending the email.');
              });
            });
        });
    </script>
    <body style="font-family: sans-serif; max-width: 700px; margin: auto;">
        <div class="row">
            <div class="col-md-3 well">
                    <h4 class="text-muted">Share your results with<br>101 Church</h4>
                    <label style="color:rgb(105, 104, 104);" for="name" required>Name</label>
                    <input class="form-control" id="nameInput" type="name" placeholder="Type your name">
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
</html>
`;
}
