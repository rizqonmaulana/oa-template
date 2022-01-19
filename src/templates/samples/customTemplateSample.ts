import { v2 } from "@govtechsg/open-attestation";

export interface CustomTemplateCertificate extends v2.OpenAttestationDocument {
  name: string;
  recipient: {
    name: string;
  };
  data: [
    {
      nricNumber: string;
      passportNumber: string;
      nationality: string;
      dateOfBirth: string;
      doctorName: string;
      mcrNumber: string;
      clinicName: string;
    }
  ]
}

export const customTemplateCertificate: CustomTemplateCertificate = {
  name: "MEMO ON COVID-19 REAL TIME RT-PCR SWAB TEST RESULT",
  issuers: [
    {
      name: "JEB-HEALTH",
      documentStore: "0x19AB6C25A8A0D66f1582D2c03Ee8d6f3cbF63dbD",
      identityProof: {
          type: v2.IdentityProofType.DNSDid,
          location: "dev-healthcerts.jebhealth.com",
        }
    }
], 
  recipient: {
    name: "John Doe"
  },
  $template: {
    name: "HEALTH_CERT",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "https://61e7976b8ae99400073e8a06--amazing-joliot-c5e5f4.netlify.app/"
  },
  data: [
    {
      nricNumber: "S1234567A",
      passportNumber: "P1234567A",
      nationality: "Singaporean",
      dateOfBirth: "2000-10-09",
      doctorName: "DR Kim Tan",
      mcrNumber: "12345678",
      clinicName: "Clinic 1",
    }
  ]
};
