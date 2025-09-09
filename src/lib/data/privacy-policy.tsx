import React from "react";

import Inter from "@/components/inter";

export const privacyPolicy: {
  heading?: string;
  content: (
    | string
    | React.ReactNode
    | {
        type: "ul";
        label?: string | React.ReactNode;
        items: (string | React.ReactNode)[];
      }
    | {
        type: "ol";
        label?: string | React.ReactNode;
        items: (string | React.ReactNode)[];
      }
  )[];
}[] = [
  {
    content: [
      <>
        Misfit Marketing values its users<Inter>&apos;</Inter> privacy. This
        Privacy Policy <Inter>&apos;</Inter>Policy<Inter>&apos;</Inter> will
        help you understand how we collect and use personal information when you
        visit our website, and what choices you have associated with that
        information.
      </>,
      <>
        We reserve the right to make changes to this Policy at any given time.
        If you want to make sure that you are up to date with the latest
        changes, we advise you to frequently visit this page. If we make any
        material changes to this Policy, we will notify you here, by email, or
        by means of a notice on our home page.
      </>,
      <>
        This Policy applies to Misfit Marketing, and it governs any and all data
        collection and usage by us. Through the use of{" "}
        <a href="https://meetmisfitmarketing.com" className="underline">
          https:<Inter>{"//"}</Inter>meetmisfitmarketing.com
        </a>
        , you are therefore consenting to the data collection procedures
        expressed in this Policy.
      </>,
      <>
        Please note that this Policy does not govern the collection and use of
        information by companies that Misfit Marketing does not control, nor by
        individuals not employed or managed by Misfit Marketing.
      </>,
    ],
  },
  {
    content: [
      {
        type: "ol",
        label: "Specifically, this Policy will inform you of the following",
        items: [
          <>
            What personally identifiable information is collected from you
            through our website;
          </>,
          <>
            Why we collect personally identifiable information and the legal
            basis for such collection;
          </>,
          <>
            How we use the collected information and with whom it may be shared;
          </>,
          <>
            What choices are available to you regarding the use of your data;
            and
          </>,
          <>
            The security procedures in place to protect the misuse of your
            information.
          </>,
        ],
      },
    ],
  },
  {
    heading: "Information We Collect",
    content: [
      <>
        It is always up to you whether to disclose personally identifiable
        information to us, although if you elect not to do so, we reserve the
        right not to register you as a user or provide you with any products or
        services.
      </>,
      <>This website collects various types of information, such as:</>,
      {
        type: "ul",
        items: [
          <>
            Information automatically collected when visiting our website, which
            may include cookies, third party tracking technologies and server
            logs.
          </>,
          <>
            In addition, Misfit Marketing may have the occasion to collect non
            <Inter>-</Inter>personal anonymous demographic information, such as
            age, gender, household income, political affiliation, race and
            religion, as well as the type of browser you are using, IP address,
            or type of operating system, which will assist us in providing and
            maintaining superior quality service.
          </>,
          <>
            Misfit Marketing may also deem it necessary, from time to time, to
            follow websites that our users may frequent to gleam what types of
            services and products may be the most popular to customers or the
            general public.
          </>,
          <>
            Information automatically collected when visiting our website, which
            may include cookies, third party tracking technologies and server
            logs.
          </>,
          <>
            In addition, Misfit Marketing may have the occasion to collect non
            <Inter>-</Inter>personal anonymous demographic information, such as
            age, gender, household income, political affiliation, race and
            religion, as well as the type of browser you are using, IP address,
            or type of operating system, which will assist us in providing and
            maintaining superior quality service.
          </>,
          <>
            Misfit Marketing may also deem it necessary, from time to time, to
            follow websites that our users may frequent to gleam what types of
            services and products may be the most popular to customers or the
            general public.
          </>,
        ],
      },
    ],
  },
  {
    heading: "Why We Collect Information and For How Long",
    content: [
      <>We are collecting your data for several reasons:</>,
      {
        type: "ul",
        items: [
          <>
            To better understand your needs and provide you with the services
            you have requested;
          </>,
          <>
            To fulfill our legitimate interest in improving our services and
            products;
          </>,
          <>
            To send you promotional emails containing information we think you
            may like when we have your consent to do so;
          </>,
          <>
            To contact you to fill out surveys or participate in other types of
            market research, when we have your consent to do so;
          </>,
          <>
            To customize our website according to your online behavior and
            personal preferences.
          </>,
        ],
      },
      <>
        The data we collect from you will be stored for no longer than
        necessary. The length of time we retain said information will be
        determined based upon the following criteria: the length of time your
        personal information remains relevant; the length of time it is
        reasonable to keep records to demonstrate that we have fulfilled our
        duties and obligations; any limitation periods within which claims might
        be made; any retention periods prescribed by law or recommended by
        regulators, professional bodies or associations; the type of contract we
        have with you, the existence of your consent, and our legitimate
        interest in keeping such information as stated in this Policy.
      </>,
    ],
  },
  {
    heading: "Use of Information Collected",
    content: [
      <>
        Misfit Marketing does not now, nor will it in the future, sell, rent or
        lease any of its customer lists and<Inter>/</Inter>or names to any third
        parties.
      </>,
      <>
        Misfit Marketing may collect and may make use of personal information to
        assist in the operation of our website and to ensure delivery of the
        services you need and request. At times, we may find it necessary to use
        personally identifiable information as a means to keep you informed of
        other possible products and<Inter>/</Inter>or services that may be
        available to you from{" "}
        <a href="https://meetmisfitmarketing.com" className="underline">
          https:<Inter>{"//"}</Inter>meetmisfitmarketing.com
        </a>
        .
      </>,
      <>
        Misfit Marketing may also be in contact with you with regards to
        completing surveys and<Inter>/</Inter>or research questionnaires related
        to your opinion of current or potential future services that may be
        offered.
      </>,
      <>
        Misfit Marketing uses various third<Inter>-</Inter>party social media
        features including but not limited to Instagram, LinkedIn, Dribbble,
        Instagram and other interactive programs. These may collect your IP
        address and require cookies to work properly. These services are
        governed by the privacy policies of the providers and are not within
        Misfit Marketing<Inter>&apos;</Inter>s control.
      </>,
    ],
  },
  {
    heading: "Disclosure of Information",
    content: [
      <>
        Misfit Marketing may not use or disclose the information provided by you
        except under the following circumstances:
      </>,
      {
        type: "ul",
        items: [
          <>as necessary to provide services or products you have ordered;</>,
          <>
            in other ways described in this Policy or to which you have
            otherwise consented;
          </>,
          <>
            in the aggregate with other information in such a way so that your
            identity cannot reasonably be determined;
          </>,
          <>
            as required by law, or in response to a subpoena or search warrant;
          </>,
          <>
            to outside auditors who have agreed to keep the information
            confidential;
          </>,
          <>as necessary to enforce the Terms of Service;</>,
          <>
            as necessary to maintain, safeguard and preserve all the rights and
            property of Misfit Marketing.
          </>,
        ],
      },
    ],
  },
  {
    heading: "Non Marketing Purposes",
    content: [
      <>
        Misfit Marketing greatly respects your privacy. We do maintain and
        reserve the right to contact you if needed for non<Inter>-</Inter>
        marketing purposes, such as bug alerts, security breaches, account
        issues, and<Inter>/</Inter>or changes in Misfit Marketing products and
        services. In certain circumstances, we may use our website, newspapers,
        or other public means to post a notice.
      </>,
    ],
  },
  {
    heading: "Children under the age of 13",
    content: [
      <>
        Misfit Marketing<Inter>&apos;</Inter>s website is not directed to, and
        does not knowingly collect personal identifiable information from,
        children under the age of thirteen <Inter>(</Inter>13<Inter>)</Inter>.
        If it is determined that such information has been inadvertently
        collected on anyone under the age of thirteen <Inter>(</Inter>13
        <Inter>)</Inter>, we shall immediately take the necessary steps to
        ensure that such information is deleted from our system
        <Inter>&apos;</Inter>s database, or in the alternative, that verifiable
        parental consent is obtained for the use and storage of such
        information. Anyone under the age of thirteen <Inter>(</Inter>13
        <Inter>)</Inter> must seek and obtain parent or guardian permission to
        use this website.
      </>,
    ],
  },
  {
    heading: "Unsubscribe or Opt Out",
    content: [
      <>
        All users and visitors to our website have the option to discontinue
        receiving communications from us by way of email or newsletters. To
        discontinue or unsubscribe from our website please send an email that
        you wish to unsubscribe to{" "}
        <a
          href="mailto:unsubscribe@meetmisfitmarketing.com"
          className="underline"
        >
          unsubscribe<Inter>@</Inter>meetmisfitmarketing.com
        </a>
        . If you wish to unsubscribe or opt<Inter>-</Inter>out from any third
        <Inter>-</Inter>party websites, you must go to that specific website to
        unsubscribe or opt out. Misfit Marketing will continue to adhere to this
        Policy with respect to any personal information previously collected.
      </>,
    ],
  },
  {
    heading: "Links to Other Websites",
    content: [
      <>
        Our website does contain links to affiliate and other websites. Misfit
        Marketing does not claim nor accept responsibility for any privacy
        policies, practices and<Inter>/</Inter>or procedures of other such
        websites. Therefore, we encourage all users and visitors to be aware
        when they leave our website and to read the privacy statements of every
        website that collects personally identifiable information. This Privacy
        Policy Agreement applies only and solely to the information collected by
        our website.
      </>,
    ],
  },
  {
    heading: "Notice to European Union Users",
    content: [
      <>
        Misfit Marketing<Inter>&apos;</Inter>s operations are located primarily
        in the United States. If you provide information to us, the information
        will be transferred out of the European Union <Inter>(</Inter>EU
        <Inter>)</Inter> and sent to the United States. <Inter>(</Inter>The
        adequacy decision on the EU<Inter>-</Inter>US Privacy became operational
        on August 1, 2016. This framework protects the fundamental rights of
        anyone in the EU whose personal data is transferred to the United States
        for commercial purposes. It allows the free transfer of data to
        companies that are certified in the US under the Privacy Shield
        <Inter>)</Inter>. By providing personal information to us, you are
        consenting to its storage and use as described in this Policy.
      </>,
    ],
  },
  {
    heading: "Security",
    content: [
      <>
        Misfit Marketing takes precautions to protect your information. When you
        submit sensitive information via the website, your information is
        protected both online and offline. Wherever we collect sensitive
        information <Inter>(</Inter>e.g. credit card information<Inter>)</Inter>
        , that information is encrypted and transmitted to us in a secure way.
        You can verify this by looking for a lock icon in the address bar and
        looking for <Inter>&apos;</Inter>https<Inter>&apos;</Inter> at the
        beginning of the address of the webpage.
      </>,
      <>
        While we use encryption to protect sensitive information transmitted
        online, we also protect your information offline. Only employees who
        need the information to perform a specific job, for example, billing or
        customer service are granted access to personally identifiable
        information. The computers and servers in which we store personally
        identifiable information are kept in a secure environment. This is all
        done to prevent any loss, misuse, unauthorized access, disclosure or
        modification of the user<Inter>&apos;</Inter>s personal information
        under our control.
      </>,
      <>
        The company also uses Secure Socket Layer <Inter>(</Inter>SSL
        <Inter>)</Inter> for authentication and private communications to build
        users<Inter>&apos;</Inter> trust and confidence in the internet and
        website use by providing simple and secure access and communication of
        credit card and personal information.
      </>,
    ],
  },
  {
    heading: "Acceptance of Terms",
    content: [
      <>
        By using this website, you are hereby accepting the terms and conditions
        stipulated within the Privacy Policy Agreement. If you are not in
        agreement with our terms and conditions, then you should refrain from
        further use of our sites. In addition, your continued use of our website
        following the posting of any updates or changes to our terms and
        conditions shall mean that you agree and acceptance of such changes.
      </>,
    ],
  },
  {
    heading: "How to Contact Us",
    content: [
      "If you have any questions or concerns regarding the Privacy Policy Agreement related to our website, please feel free to contact us at the following email or telephone number.",
      <div key={2} className="flex flex-col gap-4 font-inter">
        <div className="flex flex-col gap-2 text-base">
          <p className="font-semibold">Email</p>
          <a
            className="font-medium underline"
            href="mailto:info@meetmisfitmarketing.com"
          >
            info@meetmisfitmarketing.com
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Telephone Number</p>
          <a className="font-medium" href="tel:+1234567890">
            +1 (234) 567-890
          </a>
        </div>
      </div>,
    ],
  },
];
