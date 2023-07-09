import PageContainer from "~/components/layout/PageContainer";
import PageHeading from "~/components/layout/PageHeading";
import SectionContainer from "~/components/layout/Section/SectionContainer";
import {
  PageList,
  PageListItem,
  PageListItemTitle,
} from "~/components/markup/list";
import PageParagraph from "~/components/markup/PageParagraph";
import PageSubTitle from "~/components/markup/PageSubTitle";
import { EMAIL_INFO } from "~/constants/paths";

const email = (
  <a
    target="_blank"
    className="text-dark underline active:no-underline hover:text-green transition-colors duration-300"
    href={`mailto:${EMAIL_INFO}`}
    rel="noreferrer"
  >
    {EMAIL_INFO}
  </a>
);

export default function PrivacyPolicy() {
  return (
    <PageContainer>
      <SectionContainer containerSmallWidth>
        <PageHeading
          className="mb-2.5 dp:mb-8 dpb:mb-5"
          title="Privacy Policy"
        />

        <PageParagraph>
          Nyoka is striving to protect your personal information because we know
          how important it is for you. Our Privacy Policy outlines how we
          protect and respect the privacy of our clients and users that visit
          our website. This policy covers how we collect and use the information
          you provide us for our advertising promotions, mailings and other
          services we provide.
          <br />
          <br />
          By accessing or browsing our websites, you confirm that you have read,
          understood and fully agree to this privacy policy. If you do not agree
          with this, you should not use this website.
        </PageParagraph>

        <PageSubTitle title="What information do we collect?" />
        <PageList>
          <PageListItem>
            <PageListItemTitle>
              1. To fulfill your information requests
            </PageListItemTitle>
            <PageParagraph>
              We may transfer your information to third-parties when necessary
              to provide a service that you request from us. For example, as
              explained above, we may transfer your personal information to
              developers, account managers, or project managers that may be a
              good fit for your development needs, so that they may communicate
              with you.
            </PageParagraph>
          </PageListItem>
          <PageListItem>
            <PageListItemTitle>
              2. Information provided by you
            </PageListItemTitle>
            <PageParagraph>
              We collect information from you when you submit your personal
              information to us over the website. If you sign the contract with
              us, we may also ask for payment details, such as your credit or
              debit card and billing address so that your order can be
              processed.
            </PageParagraph>
          </PageListItem>
          <PageListItem>
            <PageListItemTitle>
              3. Device/Internet connection information
            </PageListItemTitle>
            <PageParagraph>
              When you use the website, we automatically gather information made
              available by your web browser (such as Microsoft Edge, Firefox, or
              Google Chrome, or other web browsers), Internet service provider
              (such as Comcast, or Time Warner, or other provides), and device
              (such as your computer, phone, or tablet, or other devices),
              depending on your settings for each. For example, we may collect
              your IP address, information about the operating system or type of
              device you use, the date and time you access the website, and the
              location of your device. Generally, this information is anonymous
              and does not directly identify you; however, it could possibly
              identify you when associated with other information, such as that
              referenced in the paragraph above.
            </PageParagraph>
          </PageListItem>
        </PageList>

        <PageSubTitle title="Our use of your personal information" />
        <PageParagraph>
          We use the information you provide us in the following general ways:
          service provision, service improvement, contact, research and
          promotion. We use your personal data:
        </PageParagraph>
        <PageList>
          <PageListItem>
            <PageListItemTitle>1. To communicate with you </PageListItemTitle>
            <PageParagraph>
              We use information gathered on our website to personalize
              communication with you, and to respond to your requests for
              products, services, and information.
            </PageParagraph>
          </PageListItem>
          <PageListItem>
            <PageListItemTitle>
              2. To enable Account managers, Project managers, or Developers to
              contact you
            </PageListItemTitle>
            <PageParagraph>
              Because the services are a software-as-a-service platform for
              managing software development project, it goes without saying that
              your information may be shared with others to facilitate your
              software product development goals. Thus, when you voluntarily
              submit your personal information to us as part of a project, or as
              a developer seeking work on such a project, including by creating
              a project or a developer profile, your personal information may be
              passed on to account managers, project managers, and/or developers
              as part of enabling your use of the services.
            </PageParagraph>
          </PageListItem>
          <PageListItem>
            <PageListItemTitle>
              3. To tell you about our special offers.
            </PageListItemTitle>
            <PageParagraph>
              We will need to use your email, telephone number to send you
              information about services that you may be interested in.
            </PageParagraph>
          </PageListItem>
          <PageListItem>
            <PageListItemTitle>
              4. To analyze user traffic to measure the use of our websites and
              to improve the content of our websites and our services.
            </PageListItemTitle>
            <PageParagraph>
              We may sometimes use your personal information (e.g. your IP
              address) to measure the use of our websites and assess the
              effectiveness of our site pages.
            </PageParagraph>
          </PageListItem>
          <PageListItem>
            <PageListItemTitle>
              5. To comply with legal requirements.
            </PageListItemTitle>
            <PageParagraph>
              We may need to process your data to comply with legal requirements
              which we are subject to.
            </PageParagraph>
          </PageListItem>
        </PageList>

        <PageSubTitle title="Information we receive and collect from other sources" />
        <PageParagraph>
          Nyoka will not share or sell your email address and other personal
          information with any third-parties except our designated service
          providers, our affiliated companies and our partners. These service
          providers may have access to personal information needed to perform
          their functions but are not permitted to share or use such information
          for any other purpose. These partners adhere to the same strict
          privacy guidelines as Nyoka. We may also receive your information from
          service providers or partners and will only use it where it has a
          lawful basis to do so.
        </PageParagraph>
        <PageParagraph>
          We work closely with third-parties such as payment processors and
          contractors and may receive information about you from them. We may
          also collect information about you from publicly available sources,
          including publicly available content on social media.
        </PageParagraph>

        <PageSubTitle title="Email policy" />
        <PageParagraph>
          If you provide us with your email address, you may be contacted by
          Nyoka for marketing and campaign update purposes. Please be aware that
          if you are our customer, a member of our client success team may
          continue to manually contact you via email for administrative or
          informational purposes, including follow-up messages regarding
          business transactions between Nyoka and yourself. By law, such
          messages are not considered to be commercial e-mail.
        </PageParagraph>

        <PageSubTitle title="Where we store your personal data" />
        <PageParagraph>
          The data we collect from you may be transferred to and stored at a
          destination outside the EEA. It may also be processed by staff
          operating outside the EEA who work for us or for one of our
          contractors. We will take all steps that are mandatory or reasonably
          necessary to ensure that your data is treated securely in accordance
          with this privacy policy and applicable data protection laws,
          including, where relevant, entering into EU standard contractual
          clauses (or equivalent measures) with the party outside the EEA
          receiving the data.
        </PageParagraph>

        <PageSubTitle title="Security of personal information" />
        <PageParagraph>
          We use administrative and technical measures to safeguard personal
          information against loss, theft and unauthorized uses, access or
          modifications.
        </PageParagraph>

        <PageSubTitle title="Transfers of personal information" />
        <PageParagraph>We share your personal data:</PageParagraph>
        <PageList>
          <PageListItem>
            <PageListItemTitle>
              1. To fulfill your information requests
            </PageListItemTitle>
            <PageParagraph>
              We may transfer your information to third-parties when necessary
              to provide a service that you request from us. For example, as
              explained above, we may transfer your personal information to
              developers, account managers, or project managers that may be a
              good fit for your development needs, so that they may communicate
              with you.
            </PageParagraph>
          </PageListItem>
          <PageListItem>
            <PageListItemTitle>2. To advertise to others</PageListItemTitle>
            <PageParagraph>
              <>
                We may share your reviews and comments about Nyoka to advertise
                and market our products and services. If you want us to stop
                using the personal data you have provided in these ways, please
                contact us at {email}.
              </>
            </PageParagraph>
          </PageListItem>
          <PageListItem>
            <PageListItemTitle>
              3. To our affiliated companies
            </PageListItemTitle>
            <PageParagraph>
              We may disclose, transfer, and sell your information to our
              affiliated entities - that is, businesses that have common
              ownership with us - at our discretion, in which event, your
              information shall be treated by the affiliated entities in
              accordance with this Privacy Policy. Should Nyoka be subject to an
              acquisition, merger, sale or other change of control or business
              entity status, we reserve the right to transfer or assign your
              information as part of that acquisition, merger or sale.
            </PageParagraph>
          </PageListItem>
          <PageListItem>
            <PageListItemTitle>
              4. To our third-party partners
            </PageListItemTitle>
            <PageParagraph>
              We may disclose your personal information as needed to our
              third-party service providers and advertising partners.
            </PageParagraph>
          </PageListItem>
          <PageListItem>
            <PageListItemTitle>
              5. To Comply with Legal Process and Prevent Harm
            </PageListItemTitle>
            <PageParagraph>
              We may disclose personally identifiable information under
              exceptional circumstances, such as to comply with court subpoenas,
              warrants, and other valid legal processes. It may be necessary to
              share such information with law enforcement authorities in order
              to investigate, prevent, or take action regarding suspected or
              actual illegal activities, including without limitation, fraud,
              situations involving potential threats to the physical safety of
              any person, or as otherwise permitted or required by law.
            </PageParagraph>
          </PageListItem>
        </PageList>

        <PageSubTitle title="Your rights" />
        <PageParagraph>
          You have the following rights in accordance with a GDPR (General Data
          Protection Regulation):
        </PageParagraph>
        <PageList>
          <PageListItem>
            <PageParagraph>
              1. The right to access the information we hold about you
            </PageParagraph>
          </PageListItem>
          <PageListItem>
            <PageParagraph>
              <>
                2. The right to have your information corrected or deleted. You
                can require us by phone or e-mail. In this case, please contact
                us at {email}.
              </>
            </PageParagraph>
          </PageListItem>
          <PageListItem>
            <PageParagraph>
              3. The right to object to the processing of your personal data.
              You can ask us to stop processing your personal information.
            </PageParagraph>
          </PageListItem>
          <PageListItem>
            <PageParagraph>
              4. The right to have your data transmitted to another
              organization. If we hold your personal information with your
              consent, you have a right to ask us to transmit the data to a
              third-party in a structured format if it is technically feasible.
            </PageParagraph>
          </PageListItem>
          <PageListItem>
            <PageParagraph>
              5. The right to file a complaint. You have the right to make a
              complaint with the data protection authorities if you believe that
              we have not complied with applicable data protection laws.
            </PageParagraph>
          </PageListItem>
        </PageList>

        <PageSubTitle title="Changes to our privacy policy" />
        <PageParagraph>
          We would like to inform you that we reserve the right to change this
          privacy policy without prior notice to you. We will immediately notify
          you when such changes take effect. You will have a choice to stay with
          us and consent to those changes or unsubscribe.
        </PageParagraph>

        <PageSubTitle title="Cookies" />
        <PageParagraph>
          Nyoka uses cookies, tags, and other similar technologies. We only
          employ essential cookies that help us provide you with the service.
          The data we collect includes internet protocol (IP) addresses, browser
          type, web pages, operating system, date/time stamp. To collect this
          information, a cookie is set on your computer or device when you visit
          Nyoka website. Cookies contain a small amount of information that
          allows our web servers to recognize you. We store the information that
          we collect through cookies.
          <br />
          <br />
          We use this information to enhance your experience of using Nyoka
          website and online services, and may use it to provide you promotional
          information regarding our services.
        </PageParagraph>

        <PageSubTitle title="What type of cookies do we use?" />
        <PageParagraph>At Nyoka we use 3 kinds of cookies.</PageParagraph>
        <PageList>
          <PageListItem>
            <PageParagraph>
              1. The first type is saved on your device and updates the
              information each time you enter the website. The data that remains
              unchanged is sourced from your computer using the information from
              your previous visit. This way you get a quicker access to the
              information on the page.{" "}
            </PageParagraph>
          </PageListItem>
          <PageListItem>
            <PageParagraph>
              2. The second one is called a session cookie. It transfers the
              information between your device and the server during the session.
              Due to the session cookie, the data type like the language that
              you chose is collected to maintain these settings while you surf
              our website. The server disposes of session cookies once you close
              the browser.
            </PageParagraph>
          </PageListItem>
          <PageListItem>
            <PageParagraph>
              3. The last kind of cookies keeps statistics on the number of
              people visiting the site. Sometimes these cookies come from
              different ad networks where nyoka.io is advertised - this way,
              cookie informs us how many people clicked on our ads and followed
              the link to go to our site.
            </PageParagraph>
          </PageListItem>
        </PageList>
        <PageParagraph>
          You may elect to refuse cookies. Please refer to your browser Help
          instructions to learn more about cookies and how you can opt out and
          delete these cookies.
        </PageParagraph>

        <PageSubTitle title="Changes to this cookies policy" />
        <PageParagraph>
          We reserve the right to make changes to our Cookies Policy at any
          time. Where changes are made, we will post the revised Policy here
          with an updated effective date. Your continued use of our websites,
          apps, or other products or services will signify your acceptance of
          these changes.
        </PageParagraph>

        <PageSubTitle title="Contact Us" />
        <PageParagraph>
          <>
            If you have any question about our Privacy Policy, please contact us
            at {email}. Last Updated February 06, 2023
          </>
        </PageParagraph>
      </SectionContainer>
    </PageContainer>
  );
}
