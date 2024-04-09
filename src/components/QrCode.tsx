import ImageQrCode from "../assets/image-qr-code.png";

const QrCode = () => {
  return (
    <div className="qr-code">
      <img src={ImageQrCode} />

      <div>
        <p className="heading">
          Improve your front-end skills by building projects
        </p>

        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default QrCode;
