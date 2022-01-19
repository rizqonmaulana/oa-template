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
      id: "did:ethr:0x19AB6C25A8A0D66f1582D2c03Ee8d6f3cbF63dbD",
      revocation: {
          type: v2.RevocationType.None
        },
      name: "JEB-HEALTH",
      identityProof: {
          type: v2.IdentityProofType.DNSDid,
          location: "dev-healthcerts.jebhealth.com",
          key: "did:ethr:0x19AB6C25A8A0D66f1582D2c03Ee8d6f3cbF63dbD#controller"
        }
    }
], 
  recipient: {
    name: "John Doe"
  },
  $template: {
    name: "HEALTH_CERT",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:3000"
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
