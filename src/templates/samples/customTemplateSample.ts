import { v2 } from "@govtechsg/open-attestation";

export interface CustomTemplateCertificate extends v2.OpenAttestationDocument {
  name: string;
  foo?: {
    title: string;
  };
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
  $template: v2.TemplateObject;
}

export const customTemplateCertificate: CustomTemplateCertificate = {
  name: "MEMO ON COVID-19 REAL TIME RT-PCR SWAB TEST RESULT",
  issuers: [
    {
      name: "institute of blockchain"
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
  foo: {
    title: "Bar is awesome"
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
