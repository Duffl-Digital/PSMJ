interface ThankYouTemplateProps {
  name: string;
}

export default function ThankYouTemplate({
  name,
}: ThankYouTemplateProps) {
  return (
    <div
      style={{
        paddingLeft: "22px",
        paddingTop: "18px",
        fontFamily: "Roboto, Arial, sans-serif",
      }}
    >
      <p
        style={{
          color: "#444",
          fontSize: "15px",
          lineHeight: 1.5,
          margin: 0,
        }}
      >
        Hi{" "}
        <span
          style={{
            textTransform: "capitalize",
            fontWeight: 600,
          }}
        >
          {name}
        </span>
        ,
      </p>

      <br />

      <p
        style={{
          color: "#444",
          fontSize: "14px",
          lineHeight: 1.5,
          margin: 0,
        }}
      >
        Thank you for reaching out!
        <br />
        Our team will contact you soon.
      </p>

      <p
        style={{
          paddingTop: "10px",
          fontSize: "12px",
          color: "#464444",
          lineHeight: "17px",
          marginBottom: 0,
        }}
      >
        Warm regards,
        <br />
        <strong>PSMJ</strong>
      </p>
    </div>
  );
}