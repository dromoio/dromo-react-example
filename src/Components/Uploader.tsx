import DromoUploader from "dromo-uploader-react";
export const Uploader = (props: { setResults: (data: any[]) => void }) => {
  return (
    <DromoUploader
      licenseKey="414617ed-5db9-4b84-b9a4-36c8c643914f"
      fields={[
        {
          label: "First Name",
          key: "first_name",
        },
        {
          label: "Email",
          key: "email_address",
          validators: [
            { validate: "required" },
            {
              validate: "regex_match",
              regex: "^\\S+@\\S+$",
              errorMessage: "Email must have an '@' symbol.",
            },
          ],
        },
      ]}
      settings={{
        importIdentifier: "Contacts",
        developmentMode: true,
      }}
      user={{
        id: "1",
        name: "Jane Doe",
        email: "jane@dromo.io",
        companyId: "Dromo",
        companyName: "12345",
      }}
      onResults={(response, metadata) =>
        // Do something with the data here
        props.setResults(response)
      }
    >
      Launch Dromo
    </DromoUploader>
  );
};
