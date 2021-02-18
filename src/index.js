function capitalizeFirstLetter(words) {
  let separateWord = words.toLowerCase().split(" ");
  for (let i = 0; i < separateWord.length; i++) {
    separateWord[i] =
      separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1);
  }
  return separateWord.join(" ");
}

function handleSubmit(firstName, jobTitle, emailAddress) {
  let lastName = capitalizeFirstLetter(
    document.querySelector("#lastName-input").value
  );
  let customField = document.querySelector("#customField-input").value;
  let department = document.querySelector("#department-input").value;
  let officePhone = document.querySelector("#officePhone-input").value;
  let mobilePhone = document.querySelector("#mobilePhone-input").value;
  let companyName = document.querySelector("#companyName").value;
  let logoUrl = document.querySelector("#logoUrl").value;
  let color = document.querySelector("#colorInput").value;
  let facebook = document.querySelector("#facebookInput").value;
  let linkedin = document.querySelector("#linkedinInput").value;
  let instagram = document.querySelector("#instagramInput").value;
  let youtube = document.querySelector("#youtubeInput").value;
  let website = document.querySelector("#websiteInput").value;

  let imageLogo = `<img
            style="
              max-width: 130px;
              display: block;
              margin: 0 auto;
            "
            src="${logoUrl}"
            alt=""
            max-width="130"
          />`;
  function showLogo() {
    if (imageLogo !== "") {
      imageLogo = `${imageLogo}`;
    } else {
      imageLogo = ``;
    }
  }
  showLogo();

  function checkDepartment() {
    if (department !== "") {
      department = `${department} | `;
    }
  }
  checkDepartment();

  let phoneIcon = `<span
      style="
        display: block;
        background-color: ${color};
      "
      ><img
        style="
          display: block;
          background-color: ${color};
        "
        src="https://nwl-signature.netlify.app/images/phone-icon-2x.png"
        alt=""
        width="13"
    /></span>`;

  function showPhoneIcon() {
    if (officePhone !== "" || mobilePhone !== "") {
      return phoneIcon;
    } else {
      phoneIcon = ``;
    }
  }
  showPhoneIcon();

  let phoneNumber = "";
  let officePh = ` <a
                    style="
                    font-size: medium;font-family: Arial;
                      text-decoration: none;
                      color: #000000;
                      font-size: 12px;
                    "
                    href="tel:${officePhone}"
                    >${officePhone}</a>`;

  let mobilePh = `<a
                    style="
                      text-decoration: none;
                      color: #000000;
                      font-size: 12px;
                    "
                    href="tel:${mobilePhone}"
                    >${mobilePhone}</a>`;

  function checkPhoneNumber() {
    if (officePhone !== "" && mobilePhone !== "") {
      phoneNumber = ` ${officePh} | ${mobilePh}`;
    } else if (officePhone === "" && mobilePhone !== "") {
      phoneNumber = `${mobilePh}`;
    } else if ((officePhone !== "") & (mobilePhone === "")) {
      phoneNumber = `${officePh}`;
    } else {
      return phoneNumber;
    }
  }
  checkPhoneNumber();

  let websiteIcon = `<span
                    style="
                      display: block;
                      background-color: ${color};
                    "
                    ><img
                      style="
                        display: block;
                        background-color: ${color};
                      "
                      src="https://nwl-signature.netlify.app/images/link-icon-2x.png"
                      alt=""
                      width="13"
                  /></span>`;

  function showWebsiteIcon() {
    if (website !== "") {
      return websiteIcon;
    } else {
      websiteIcon = ``;
    }
  }
  showWebsiteIcon();

  let facebookIcon = `<img
              style="
                background-color: ${color};
                max-width: 135px;
                display: block;
              "
              src="https://nwl-signature.netlify.app/images/facebook-icon-2x.png"
              alt="facebook"
              height="24" />`;

  function showFacebookIcon() {
    if (facebook !== "") {
      return facebookIcon;
    } else {
      facebookIcon = ``;
    }
  }
  showFacebookIcon();

  let linkedinIcon = `<img
              style="
                background-color: ${color};
                max-width: 135px;
                display: block;
              "
              src="https://nwl-signature.netlify.app/images/linkedin-icon-2x.png"
              alt="linkedin"
              height="24" />`;

  function showLinkedinIcon() {
    if (linkedin !== "") {
      return linkedinIcon;
    } else {
      linkedinIcon = ``;
    }
  }
  showLinkedinIcon();

  let instagramIcon = `<img
              style="
                background-color: ${color};
                max-width: 135px;
                display: block;
              "
              src="https://nwl-signature.netlify.app/images/instagram-icon-2x.png"
              alt="instagram"
              height="24" />`;

  function showInstagramIcon() {
    if (instagram !== "") {
      return instagramIcon;
    } else {
      instagramIcon = ``;
    }
  }
  showInstagramIcon();

  let youtubeIcon = `<img
              style="
                background-color: ${color};
                max-width: 135px;
                display: block;
              "
              src="https://nwl-signature.netlify.app/images/biggeryoutube.png"
              alt="youtube"
              height="24"
          />`;

  function showYoutubeIcon() {
    if (youtube !== "") {
      return youtubeIcon;
    } else {
      youtubeIcon = ``;
    }
  }
  showYoutubeIcon();

  // update visibility
  document.querySelector("#card").setAttribute("class", "visible");
  document.querySelector("#copySignature").setAttribute("class", "visible");
  document.querySelector("#copySignature2").setAttribute("class", "visible");

  let signature = document.querySelector("#signatureGenerated");

  // generate the resulted signature
  signature.innerHTML = `<table style="min-width:250px; vertical-align:-webkit-baseline-middle; font-size: medium;font-family: Arial;" cellspacing="0" cellpadding="0">
    <tbody>
      <tr >
        <td ><a href="${website}" target="_blank">
          ${imageLogo}</a>
        </td>
        <td  width: 25px">&nbsp;</td>
        <td
          style="
           
            width: 100%;
            border-bottom: 1px solid ${color};
            border-left: none;
            display: block;
          "
        >
          <h3
            style="
            min-width:150px;
              margin: 0px;
              font-size: 18px;
              color: #000000; text-transform: capitalize;
            "
          >
            ${firstName} ${lastName}
          </h3>
          <p
            style="
              margin: 0px;
              color: #000000;
              font-size: 14px;
              line-height: 22px; text-transform: capitalize;
            "
          >
            ${jobTitle}
          </p>
          <p
            style="
              color: #000000;
              margin: 0px;
              font-size: 14px;
              line-height: 22px; text-transform: capitalize;
            "
          >
            ${customField}
          </p>
          <p
            style="
              margin: 0px;
              font-weight: 500;
              color: #000000;
              font-size: 14px;
              line-height: 22px; text-transform: capitalize;
            "
          >
            <strong
              >${department}${companyName}</strong
            >
          </p>
        </td>
      </tr>
      <tr style="height: 22px">
        <td style="height: 22px; text-align: center">
          <a
            style="
              display: inline-block;
              padding: 0px;
              background-color: ${color};
            "
            href="https://facebook.com/${facebook}" target="_blank"
            >${facebookIcon}</a
          >&nbsp;<a
            style="
              display: inline-block;
              padding: 0px;
              background-color: ${color};
            "
            href="https://linkedin.com/${linkedin}" target="_blank"
            >${linkedinIcon}</a
          >&nbsp;<a
            style="
              display: inline-block;
              padding: 0px;
              background-color: ${color};
            "
            href="https://instagram.com/${instagram}" target="_blank"
            >${instagramIcon}</a
          >&nbsp;<a
            style="
              display: inline-block;
              padding: 0px;
              background-color: ${color};
            "
            href="https://youtube.com/${youtube}" target="_blank"
            >${youtubeIcon}</a>
        </td>
        <td style="height: 22px">&nbsp;</td>
        <td style="height: 22px">
          <table style="vertical-align: -webkit-baseline-middle; font-size: medium;font-family: Arial;" cellspacing="0" cellpadding="0">
            <tbody>
              <tr>
                <td>
                  ${phoneIcon}
                </td>
                <td>&nbsp;</td>
                <td>
                 ${phoneNumber}
                </td>
              </tr>
              <tr>
                <td>
                  <span
                    style="
                      display: block;
                      background-color: ${color};
                    "
                    ><img
                      style="
                        display: block;
                        background-color: ${color};
                      "
                      src="https://nwl-signature.netlify.app/images/email-icon-2x.png"
                      alt=""
                      width="13"
                  /></span>
                </td>
                <td>&nbsp;</td>
                <td>
                  <a
                    style="
                      text-decoration: none;
                      color: #000000;
                      font-size: 12px;
                    "
                    href="mailto:${emailAddress}"
                    >${emailAddress}</a
                  >
                </td>
              </tr>
              <tr>
                <td>
                  ${websiteIcon}
                </td>
                <td>&nbsp;</td>
                <td>
                  <a
                    style="
                      text-decoration: none;
                      color: #000000;
                      font-size: 12px;
                    "
                    href="${website}" target="_blank"
                    >${website}</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
  `;

  // write the generated signature into the signatureOutput box
  let signatureOutput = document.querySelector("#signatureHtml");
  signatureOutput.innerHTML = signature.innerHTML;
}

function copy() {
  let copyText = document.querySelector("#signatureHtml");
  let button = document.querySelector("#copyToClipboard");

  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert(
    `Code Copied! 🖱 Paste (Ctr+V) this code into the signature box in your Thunderbird`
  );
  button.innerHTML = "Code copied!";
}
let copyToClipboard = document
  .querySelector("#copyToClipboard")
  .addEventListener("click", copy);

// Function to Copy the signature into the clipboard
document.addEventListener("DOMContentLoaded", function () {
  // Query the elements
  let copyButton = document.querySelector("#copyToClipboard2");
  let codeEle = document.querySelector("#signatureGenerated");

  copyButton.addEventListener("click", function () {
    let selection = window.getSelection();

    // Save the current selection
    let currentRange =
      selection.rangeCount === 0 ? null : selection.getRangeAt(0);

    // Select the text content of code element
    let range = document.createRange();
    range.selectNodeContents(codeEle);
    selection.removeAllRanges();
    selection.addRange(range);

    // Copy to the clipboard
    try {
      document.execCommand("copy");
      copyButton.innerHTML = "Signature copied!";
      alert(
        "Signature Copied! 🖱 Paste (Ctr+V) it into the signature box in your Zimbra"
      );
    } catch (err) {
      // Unable to copy
      copyButton.innerHTML = "Try again, Copy";
    } finally {
      // Restore the previous selection
      selection.removeAllRanges();
      currentRange && selection.addRange(currentRange);
    }
  });
});

// check the required field
function required(event) {
  event.preventDefault();

  let firstName = capitalizeFirstLetter(
    document.querySelector("#firstName-input").value
  );
  let jobTitle = document.querySelector("#jobTitle-input").value;
  let emailAddress = document.querySelector("#emailAddress-input").value;

  if (firstName === "" || jobTitle === "" || emailAddress === "") {
    alert("Please fill in all the required fields ☺🙏🏼");
  } else {
    handleSubmit(firstName, jobTitle, emailAddress);
  }
}
document.querySelector("#submit").addEventListener("click", required);
