import React from "react";
import NavBar from "../../../components/NavBar";
import QRCode from "react-qr-code";
import { useParams } from "react-router-dom";

function ConfirmOrder() {
  const params = useParams();
  const { orderID } = params;

//   const downloadQR = () => {
//     const canvas = document.getElementById("qr");
//     const pngUrl = canvas
//       .toDataURL("image/png")
//       .replace("image/png", "image/octet-stream");
//     let downloadLink = document.createElement("a");
//     downloadLink.href = pngUrl;
//     downloadLink.download = "123456.png";
//     document.body.appendChild(downloadLink);
//     downloadLink.click();
//     document.body.removeChild(downloadLink);
//   };

  return (
    <>
      <NavBar isAdmin={true} />
      <div id="qr" className="text-center my-5">
        <QRCode value={orderID} />
        <div className="text-628 my-2">{orderID}</div>
        <button
          className="bg-color-dark text-white rounded px-4 py-2 mb-5"
          onClick={() => {
            // downloadQR();
          }}
        >
          Download Qr Code
        </button>
      </div>
    </>
  );
}

export default ConfirmOrder;
