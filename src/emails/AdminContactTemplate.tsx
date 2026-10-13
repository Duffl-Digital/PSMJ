interface AdminContactTemplateProps {
  name: string;
  email: string;
  phone: string;
  whatsapp: string;
  subject: string;
  message: string;
}

export default function AdminContactTemplate({
  name,
  email,
  phone,
  whatsapp,
  subject,
  message,
}: AdminContactTemplateProps) {
  return (
    <div
      style={{
        maxWidth: "550px",
        margin: "0 auto",
        background: "#ffffff",
      }}
    >
      <div
        style={{
          height: "40px",
          lineHeight: "40px",
          background: "linear-gradient(270deg, #1D1D1D 0%, #393838 100%)",
          boxSizing: "border-box",
          padding: "0 10px",
          color: "#fff",
          fontFamily: "Roboto, sans-serif",
          fontSize: "17px",
        }}
      >
        PSMJ – New Enquiry
      </div>

      <div
        style={{
          fontFamily: "Roboto, sans-serif",
          fontSize: "13px",
          color: "#202020",
          lineHeight: 1.5,
          padding: "20px",
          borderBottom: "1px solid #ddd",
          background: "#FAFAFA",
        }}
      >
        <p style={{ marginTop: 0 }}>Hi,</p>

        <p>
          You have received a new enquiry from the <strong>PSMJ</strong> page.
        </p>

        <table
          cellPadding={0}
          cellSpacing={0}
          style={{
            width: "100%",
            borderCollapse: "collapse",
            border: "1px solid #ddd",
          }}
        >
          <tbody>
            <Row title="Name" value={name} />
            <Row title="Email ID" value={email} />
            <Row title="Phone Number" value={phone} />

            {whatsapp && (
              <Row title="WhatsApp Number" value={whatsapp} />
            )}

            <Row title="Service" value={subject} />
            <Row title="Message" value={message} />
          </tbody>
        </table>

        <br />

        <p style={{ marginBottom: 0 }}>
          Best Regards,
          <br />
          PSMJ
        </p>
      </div>
    </div>
  );
}

function Row({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <tr>
      <th
        style={{
          background: "#f0f0f0",
          textAlign: "left",
          padding: "8px",
          border: "1px solid #ddd",
          width: "150px",
          fontWeight: 600,
        }}
      >
        {title}
      </th>

      <td
        style={{
          padding: "8px",
          border: "1px solid #ddd",
          color: "#202020",
        }}
      >
        {value}
      </td>
    </tr>
  );
}