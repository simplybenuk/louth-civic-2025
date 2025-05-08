
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Section from '../components/Section';

const Privacy = () => {
  return (
    <Layout>
      <Hero 
        title="Privacy Policy"
        subtitle="How we handle your data and information"
      />
      
      <Section title="PRIVACY POLICY" className="bg-white">
        <div className="prose max-w-none">
          <p>
            Your privacy is important to us. It is Louth Civic Trust's policy to respect your privacy regarding any information we may collect while operating our website. We respect your privacy and are committed to protecting personally identifiable information you may provide us through the Website. We have adopted this privacy policy to explain what information may be collected on our Website, how we use this information, and under what circumstances we may disclose the information to third parties.
          </p>
          
          <p>
            This Privacy Policy applies only to information we collect through the Website and does not apply to our collection of information from other sources.
          </p>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Website Visitors</h3>
          <p>
            Like most website operators, Louth Civic Trust collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. Louth Civic Trust's purpose in collecting non-personally identifying information is to better understand how Louth Civic Trust's visitors use its website.
          </p>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Cookies</h3>
          <p>
            Our website may use "cookies" to enhance user experience. A cookie is a small piece of data that is stored on your computer by your web browser while you are viewing a website. Cookies can help a website remember your preferences and improve your user experience. You can choose to set your browser to reject cookies, or to alert you when cookies are being sent. If you do so, note that some parts of our website may not function properly.
          </p>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Contact Information</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact us via email at <a href="mailto:info@louthcivictrust.org" className="text-lct-blue hover:underline">info@louthcivictrust.org</a>.
          </p>
        </div>
      </Section>
    </Layout>
  );
};

export default Privacy;
