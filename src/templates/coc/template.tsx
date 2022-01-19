import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { CustomTemplateCertificate } from "../samples/customTemplateSample";
// import './custom.css'
import QRCode from "qrcode.react";

export const CocTemplate: FunctionComponent<
  TemplateProps<CustomTemplateCertificate> & { className?: string }
> = ({ document, className = "" }) => {
    // ReactPDF.renderToStream(<MyDocument />, `${'../coc'}/example.pdf`)
  return (
    <>
        <div className="container" id="custom-template">
            <img className="img-300 mt-3" src={require('../../assets/header-logo.png')} />
            <h1 className="text-center mt-3">{document.name}</h1>
            <div className="flex items-center">
                <div className="w-30">
                    <p className="font-bold mb-0">Name of Person:</p>
                </div>
                <div className="w-70 b-bottom pl-3">
                    <p className="mb-0">{document.recipient.name}</p>
                </div>
            </div>
            <div className="flex items-center mt-1">
                <div className="w-30">
                    <p className="font-bold mb-0">NRIC/FIN Number:</p>
                </div>
                <div className="w-70 b-bottom pl-3">
                    <p className="mb-0">{document.data[0].nricNumber}</p>
                </div>
            </div>
            <div className="flex items-center mt-1">
                <div className="w-30">
                    <p className="font-bold mb-0">Passport Number:</p>
                </div>
                <div className="w-70 b-bottom pl-3">
                    <p className="mb-0">{document.data[0].passportNumber}</p>
                </div>
            </div>
            <div className="flex items-center mt-1">
                <div className="w-30">
                    <p className="font-bold mb-0">Nationality:</p>
                </div>
                <div className="w-70 b-bottom pl-3">
                    <p className="mb-0">{document.data[0].nationality}</p>
                </div>
            </div>
            <div className="flex items-center mt-1">
                <div className="w-30">
                    <p className="font-bold mb-0">Date of Birth:</p>
                </div>
                <div className="w-70 b-bottom pl-3">
                    <p className="mb-0">{document.data[0].dateOfBirth}</p>
                </div>
            </div>
            <p className="mt-2">To whom it may concern:</p>
            <p className="line-height-1" >
                The abovementioned has undergone RT-PCR testing for COVID-19 using a
                Nasopharyngeal Swab on 20 December 2021, 03:26PM (GMT +08:00) by
                SHENTON MEDICAL GROUP and has tested negative. This test result was
                reported by Parkway Laboratory on 20 December 2021.
            </p>
            <p>
                Travellers should note that they are subject to the country or region's requirements
                prior to travel.
            </p>
            <p>
                Thank you.
            </p>
            <div className="flex items-center mt-1">
                <div className="w-20">
                    <p className="font-bold mb-0">Name of Doctor:</p>
                </div>
                <div className="w-80 pl-5">
                    <p className="mb-0">{document.data[0].doctorName}</p>
                </div>
            </div>
            <div className="flex items-center mt-1">
                <div className="w-20">
                    <p className="font-bold mb-0">MCR No:</p>
                </div>
                <div className="w-80 pl-5">
                    <p className="mb-0">{document.data[0].mcrNumber}</p>
                </div>
            </div>
            <div className="flex items-center mt-2">
                <div className="w-50">
                    <img className="img-300 float-left" src={require('../../assets/clinic_stamp.png')} />
                </div>
                <div className="w-50">
                    <QRCode style={{float: 'right'}} value="http://facebook.github.io/react/" />
                </div>
            </div>
            <fieldset className="mt-4">
               <div className="p-1">
                <div className="flex items-center">
                        <div className="w-50">
                        <p className="font-bold mb-0">Notarised HealthCert</p>
                        </div>
                        <div className="w-50">
                            <img className="img-100 float-right" src={require('../../assets/healthcerts-logo.png')} />
                        </div>
                    </div>
                    <div className="flex items-center mt-1">
                        <div className="w-20">
                            <QRCode value="http://facebook.github.io/react/" />
                        </div>
                        <div className="w-80 pl-5">
                            <p className="line-height-1" >
                                HealthCert is a set of digital standards and schema for issuing digital
                                COVID-19 test and vaccination records in line with international
                                standard. This COVID-19 test has been issued and notarised by
                                Singapore's Ministry of Health.
                                By using this service, you agree to the Terms of Use and Privacy Policy
                            </p>
                        </div>
                    </div>
                    <p className="font-bold">IATA Travel Pass</p>
                    <div className="flex items-center mt-1">
                        <div className="w-20">
                            <img className="img-130" src={require('../../assets/IATA-logo.png')} />
                        </div>
                        <div className="w-80 pl-5">
                            <p className="line-height-1" >
                                IATA Travel Pass is a mobile app that helps travellers to store and
                                manage their verified certifications for COVID-19 tests or vaccines. Only
                                some airlines are using the IATA Travel Pass app.
                            </p>
                            <p className="line-height-1">
                                If your airline requests that you use the app then you can follow the
                                steps below to import your Notarised HealthCert
                            </p>
                            <p className="line-height-1">
                                1. Download IATA Travel Pass app from the Apple Store or Google Play Store.
                                <br />
                                2. Create your digital identity - follow the prompts to register your face and
                                passport.
                            </p>
                        </div>
                    </div>
                    <p>
                        3. Add your test result - Select "Certificates" on the home page, select "Add" in the top right-hand corner, select
                        "COVID-19 Test Result", scroll down to "Singapore" and scan the Notarised HealthCert QR code above
                    </p>
               </div>
            </fieldset>
            <fieldset className="mt-3">
                <div className="p-1">
                    <div className="flex items-center">
                        <div className="w-50">
                        <p className="font-bold">EU Digital COVID Certificate</p>
                        </div>
                        <div className="w-50">
                            <img className="img-80 float-right" src={require('../../assets/dot-circle-logo.png')} />
                        </div>
                    </div>
                    <div className="flex items-center mt-1">
                        <div className="w-20">
                            <QRCode value="http://facebook.github.io/react/" />
                        </div>
                        <div className="w-80 pl-5">
                            <p className="line-height-1">
                                This EU Digital COVID Certificate is a digital proof that you have
                                received a test result from an authorized national health authority.
                            </p>
                            <p className="line-height-1">
                                You may present this QR code digitally or in a printed format for the
                                relevant authorities to scan and verify the content.
                            </p>
                        </div>
                    </div>
                </div>
            </fieldset>
        </div>
    </>
  );
};