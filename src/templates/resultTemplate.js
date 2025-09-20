export function buildResultHTML({ discResult, giftsResult }) {
  return `
      <body style="font-family: sans-serif; max-width: 700px; margin: auto;">
      <script>
        function shareResults() {
            console.log("Button clicked!");
            var name = $("#nameInput").val();
            var email = $("#emailInput").val();
            var html = \`
            <p>Hi 101 Church,</p>
            <p>Here are my Simple DISCovery results:</p>
             <h2>My personality type is <strong>'${discResult.code}' (${
    discResult.breakdown[0].type
  }/${discResult.breakdown[1].type})</strong></h2>
        <hr>
        <p><strong>${discResult.description.replace(
          /\b(we|are|you)\b/gi,
          (match) => {
            if (match.toLowerCase() === "we" || match.toLowerCase() === "you")
              return "I";
            if (match.toLowerCase() === "are") return "am";
          }
        )}</strong></p>
        <br/>
        <p><strong>Summary:</strong> ${discResult.summary.replace(
          "We",
          `'${discResult.code}'`
        )}</p> ${
    discResult.biblicalExamples && discResult.biblicalExamples.length > 0
      ? `<p><strong>Biblical Examples:</strong> ${discResult.biblicalExamples}</p>`
      : ""
  }
        <h2>My spiritual gifts:</h2>
        ${giftsResult
          .map(
            (g) =>
              `<h3>${g.gift}</h3><h4>Score: ${g.score}</h4><p>${g.description}</p>`
          )
          .join("<hr>")}
          <br/>
          <p><strong>Please see attached to this email the ministry groups and task(s) at 101 Church that align with my spiritual gifts.</strong></p>
          <br/>
          <p>Thank you,</p>
          <p>\${name}</p>
          <p>Email: \${email}</p>
            \`
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
                email: "laceynhunter4@gmail.com",
                html: html,
              }),
              cache: false,
            }).done(function () {
              alert("Your results have been shared with 101 Church!")
            });
          }

          $("#shareBtn").on("click", function () {
            shareResults();
            shareResultsCopy();
          });
          function shareResultsCopy() {
            console.log("Copy Button clicked!");
            var name = $("#nameInput").val();
            var email = $("#emailInput").val();
            var html = \`
            <p>Hi, \${name}</p>
            <p>Here are your Simple DISCovery results:</p>
             <h2>My personality type is <strong>'${discResult.code}' (${
    discResult.breakdown[0].type
  }/${discResult.breakdown[1].type})</strong></h2>
        <hr>
        <p><strong>${discResult.description.replace(
          /\b(we|are|you)\b/gi,
          (match) => {
            if (match.toLowerCase() === "we" || match.toLowerCase() === "you")
              return "I";
            if (match.toLowerCase() === "are") return "am";
          }
        )}</strong></p>
        <br/>
        <p><strong>Summary:</strong> ${discResult.summary.replace(
          "We",
          `'${discResult.code}'`
        )}</p> ${
    discResult.biblicalExamples && discResult.biblicalExamples.length > 0
      ? `<p><strong>Biblical Examples:</strong> ${discResult.biblicalExamples}</p>`
      : ""
  }
        <h2>My spiritual gifts:</h2>
        ${giftsResult
          .map(
            (g) =>
              `<h3>${g.gift}</h3><h4>Score: ${g.score}</h4><p>${g.description}</p>`
          )
          .join("<hr>")}
          <br/>
          <p><strong>Please see attached to this email the ministry groups and task(s) at 101 Church that align with your spiritual gifts.</strong></p>
          <br/>
          <p>Thank you,</p>
          <p>101 Church</p>
            \`
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
                email: email,
                html: html,
              }),
              cache: false,
            }).done(function () {
              alert("A copy of your results was sent to your email!")
            });
          }

          $("#shareCopyBtn").on("click", function () {
            shareResultsCopy();
          });
        </script>
        <div class="row">
            <div class="col-md-3 well" style="width: 350px;">
                    <h4 class="text-muted">Share your results with<br>101 Church</h4>
                    <label style="color:rgb(105, 104, 104);" for="name" required>Name</label>
                    <input class="form-control" id="nameInput" type="name" placeholder="Type your name">
                    <label style="color:rgb(105, 104, 104);" for="email" required>Email</label>
                    <input class="form-control" id="emailInput" type="email" placeholder="Type your email">
                    <div style="margin-top: 10px;">
                      <button class="btn btn-success btn-sm" id="shareBtn" type="button">
                      <i class="fa fa-share" aria-hidden="true"></i>Share With 101 Church</button>
                    </div>
                    <div style="margin-top: 10px;">
                      <button class="btn btn-success btn-sm" id="shareCopyBtn" type="button">
                      <i class="fa fa-share" aria-hidden="true"></i>Send Myself A Copy</button>
                    </div>
            </div>
        </div>

        <h2>Your personality type is <strong>'${discResult.code}'</strong></h2>
        <hr>
        <p><b>${discResult.description}</b><br><br></p>
        <p><strong>Summary:</strong> ${discResult.summary}</p> ${
    discResult.biblicalExamples && discResult.biblicalExamples.length > 0
      ? `<p><strong>Biblical Examples:</strong> ${discResult.biblicalExamples}</p>`
      : ""
  }
        <h4>Ways You Can Better Yourself</h4>
        <p>${discResult.betterYourself}</p>
        <h2>Your spiritual gifts:</h2>
        ${giftsResult
          .map(
            (g) =>
              `<h3>${g.gift}</h3><h4>Score: ${g.score}</h4><p>${g.description}</p>`
          )
          .join("<hr>")}
    </body>
`;
}
