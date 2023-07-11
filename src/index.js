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
  /*let customField = document.querySelector("#customField-input").value;*/
  let department = document.querySelector("#department-input").value;
  let officePhone = document.querySelector("#officePhone-input").value;
  let mobilePhone = document.querySelector("#mobilePhone-input").value;
  /*let companyName = document.querySelector("#companyName").value;*/
  /*let logoUrl = document.querySelector("#logoUrl").value;*/
  /*let color = document.querySelector("#colorInput").value;*/
 /* let facebook = document.querySelector("#facebookInput").value;
  let linkedin = document.querySelector("#linkedinInput").value;
  let instagram = document.querySelector("#instagramInput").value;
  let youtube = document.querySelector("#youtubeInput").value;
  let website = document.querySelector("#websiteInput").value;*/

  let imageLogo = `<img
            style="
              max-height: 130px;
              display: block;
              margin: 0 auto;
            "
            src="images/signature.png"
            alt=""
            max-height="130"
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
        background-color: #186737;
      "
      ><img
        style="
          display: block;
          background-color: #186737;
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
                    >&nbsp;${officePhone}</a>`;

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
                      background-color: #186737;
                    "
                    ><img
                      style="
                        display: block;
                        background-color: #186737;
                      "
                      src="images/link-icon-2x.png"
                      alt=""
                      width="13"
                  /></span>`;

  function showWebsiteIcon() {
    
      return websiteIcon;
   
  }
  showWebsiteIcon();

  // update visibility
  document.querySelector("#card").setAttribute("class", "visible");
  document.querySelector("#copySignature").setAttribute("class", "visible");
  document.querySelector("#copySignature2").setAttribute("class", "visible");

  let signature = document.querySelector("#signatureGenerated");

  // generate the resulted signature
  signature.innerHTML = `<table style="table">
    <tbody>
      <tr style="tr">
        <td style="td"><a href="https://www.bopaper.com.br/" target="_blank">
          ${imageLogo}</a>
        </td>
        
        <td  style="td">
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
            
          </p>
          <p
            style="
              margin: 0px;
              font-weight: 500;
              color: #000000;
              font-size: 14px;
              line-height: 22px; text-transform: capitalize;
              border-bottom: 1px solid #186737;
            "
          >
            <strong
              >${department} BO Paper </strong
            >
          </p>

          <table style="table">
          <tbody stlye="tbody">
            <tr>
            <td>
              ${phoneIcon}
            </td>
            
            <td style="td">
            
             ${phoneNumber}
            </td>
          </tr>
          <tr>
            <td>
              <span
                style="
                  display: block;
                  background-color: #186737;
                "
                ><img
                  style="
                    display: block;
                    background-color: #186737;
                  "
                  src="images/email-icon-2x.png"
                  alt=""
                  width="13"
              /></span>
            </td>
            <td>
              <a
              style="
              text-decoration: none;
              color: #000000;
              font-size: 12px;
            "
                href="mailto:${emailAddress}"
                >&nbsp;${emailAddress}</a
              >
            </td>
          </tr>
          <tr>
            <td>
              ${websiteIcon}
            </td>
            
            <td>
              <a
                style="
                text-decoration: none;
                color: #000000;
                font-size: 12px;
              "
                href="https://www.bopaper.com.br/" target="_blank"
                >BO Paper</a
              >
            </td>
          </tr>
        </tbody>
      </table>
        </td>
        
      
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
    `Código copiado`
  );
  button.innerHTML = "Codigo copiado";
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
      copyButton.innerHTML = "Assinatura Copiada!";
      alert(
        "Assinatura copiada, dê um CTRL+V onde quiser inserir"
      );
    } catch (err) {
      // Unable to copy
      copyButton.innerHTML = "Tente novamente";
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
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;

  if (firstName === "" || jobTitle === "" || emailAddress === "") {
    alert("Por favor, preencha todos os campos obrigatórios, marcados com *");
  } else if (firstName !== "" && jobTitle !== "" && emailAddress.match(regex)) {
    handleSubmit(firstName, jobTitle, emailAddress);
  } else {
    alert("Por favor, preencha o email corretamente, ex.: contoso@bopaper.com.br");
  }
}

document.querySelector("#submit").addEventListener("click", required);
